import React, { useState, useEffect, useRef } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Upload, Music, Image as ImageIcon, Download, Video, Loader2, ArrowLeft, CheckCircle, FileText, Clock, Scissors } from 'lucide-react';
import styles from './SonicMorph.module.css';

const ffmpeg = createFFmpeg({ 
  log: true,
  progress: ({ ratio }) => {
    // Le ratio est entre 0 et 1
    if (ratio > 0 && ratio <= 1) {
      window.ffmpegProgress = Math.round(ratio * 100);
    }
  }
});

function SonicMorph() {
  const [mode, setMode] = useState('home');
  const [ready, setReady] = useState(false);
  const [files, setFiles] = useState([]);
  const [targetFormat, setTargetFormat] = useState('');
  const [converting, setConverting] = useState(false);
  const [results, setResults] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  
  // États pour le découpage Vidéo/GIF
  const [videoDuration, setVideoDuration] = useState(0);
  const [startPoint, setStartPoint] = useState(0);
  const [gifLength, setGifLength] = useState(5);
  const videoRef = useRef(null);

  // Définition des formats
  const audioFormats = ['mp3', 'aac', 'wav', 'flac'];
  const imageFormats = ['jpeg', 'png', 'gif', 'webp'];
  const videoFormats = ['mp4', 'gif', 'webm', 'mp3']; 
  const docFormats = ['pdf', 'txt'];

  useEffect(() => { load(); }, []);
  
  const load = async () => { 
    try { 
      if (!ffmpeg.isLoaded()) {
        setProgressMessage('Chargement de FFmpeg...');
        
        // Simuler la progression du chargement
        const loadInterval = setInterval(() => {
          setLoadingProgress(prev => {
            if (prev >= 90) return prev;
            return prev + Math.random() * 15;
          });
        }, 200);
        
        await ffmpeg.load();
        
        clearInterval(loadInterval);
        setLoadingProgress(100);
        
        setTimeout(() => {
          setReady(true);
          setLoadingProgress(0);
          setProgressMessage('');
        }, 300);
      } else {
        setReady(true);
      }
    } catch(e) { 
      console.error("Erreur d'initialisation FFmpeg:", e);
      setProgressMessage('Erreur de chargement');
      setLoadingProgress(0);
    } 
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s].map(v => v < 10 ? "0" + v : v).join(":");
  };

  const handleMetadata = (e) => {
    setVideoDuration(Math.floor(e.target.duration));
  };

  const handleStartPointChange = (e) => {
    const val = parseInt(e.target.value);
    setStartPoint(val);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
    }
  };

  const handleFileSelection = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    setResults([]);
  };

  const runBulkConversion = async () => {
    if (!ready) return;
    setConverting(true);
    setLoadingProgress(0);
    const newResults = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const outputName = `morph_${i}.${targetFormat}`;
      const inputName = `input_${i}`;
      
      setProgressMessage(`Conversion ${i + 1}/${files.length}: ${file.name}`);
      setLoadingProgress(0);
      window.ffmpegProgress = 0;

      try {
        ffmpeg.FS('writeFile', inputName, await fetchFile(file));
        
        // Intervalle pour mettre à jour la progression en temps réel
        const progressInterval = setInterval(() => {
          if (window.ffmpegProgress) {
            setLoadingProgress(window.ffmpegProgress);
          }
        }, 100);
        
        if (targetFormat === 'gif' && mode === 'video') {
          // Commande optimisée pour GIF de haute qualité
          await ffmpeg.run(
            '-ss', formatTime(startPoint),
            '-t', gifLength.toString(),
            '-i', inputName,
            '-vf', 'fps=12,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse',
            outputName
          );
        } else {
          await ffmpeg.run('-i', inputName, outputName);
        }

        clearInterval(progressInterval);
        setLoadingProgress(100);
        
        const data = ffmpeg.FS('readFile', outputName);
        const url = URL.createObjectURL(new Blob([data.buffer]));
        newResults.push({ name: `${file.name.split('.')[0]}.${targetFormat}`, url });
        ffmpeg.FS('unlink', inputName);
      } catch (err) { 
        console.error("Erreur de transmutation:", err);
        clearInterval(progressInterval);
      }
    }
    setResults(newResults);
    setConverting(false);
    setLoadingProgress(0);
    setProgressMessage('');
  };

  const reset = () => { setFiles([]); setResults([]); setTargetFormat(''); setStartPoint(0); setGifLength(5); };

  // --- RENDU ACCUEIL ---
  if (mode === 'home') {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.backgroundGradient} />
        <div className={styles.glowEffect} />
        
        <h1 className={styles.mainTitle}>
          Sonic<span className={styles.titleGradient}>Morph</span>
        </h1>

        <div className={styles.categoryGrid}>
          {[
            { id: 'audio', icon: <Music size={32} />, label: 'Audio' },
            { id: 'image', icon: <ImageIcon size={32} />, label: 'Image' },
            { id: 'video', icon: <Video size={32} />, label: 'Video' },
            { id: 'doc', icon: <FileText size={32} />, label: 'Doc' }
          ].map((cat) => (
            <button key={cat.id} onClick={() => setMode(cat.id)} className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <div className={styles.categoryIcon}>
                  {cat.icon}
                </div>
                <h2 className={styles.categoryLabel}>{cat.label}</h2>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- RENDU CONVERTISSEUR ---
  return (
    <div className={styles.converterContainer}>
      <main className={styles.converterMain}>
        <button onClick={() => { setMode('home'); reset(); }} className={styles.backButton}>
          <ArrowLeft size={18} /> Retour
        </button>

        {results.length === 0 ? (
          <div className={styles.uploadSection}>
            <div className={styles.dropZone}>
              <input 
                type="file" 
                multiple
                className={styles.fileInput} 
                onChange={handleFileSelection} 
                accept={
                  mode === 'audio' ? 'audio/*' :
                  mode === 'image' ? 'image/*' :
                  mode === 'video' ? 'video/*' :
                  '.pdf,.txt'
                }
              />
              <Upload className={styles.uploadIcon} size={48} />
              <h3 className={styles.uploadTitle}>Importer {mode}</h3>
              {files.length > 0 && <p className={styles.fileName}>{files.length} fichier(s) sélectionné(s)</p>}
            </div>

            {mode === 'video' && files[0] && targetFormat === 'gif' && (
              <div className={styles.videoPreview}>
                <video 
                  ref={videoRef} 
                  onLoadedMetadata={handleMetadata} 
                  src={URL.createObjectURL(files[0])} 
                  className={styles.videoPlayer}
                  controls 
                />
                
                <div className={styles.videoControls}>
                  <div className={styles.controlGroup}>
                    <div className={styles.controlLabel}>
                      <span className={styles.labelIcon}><Scissors size={14} /> Début du GIF</span>
                      <span className={styles.timeDisplay}>{formatTime(startPoint)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max={videoDuration} 
                      value={startPoint} 
                      onChange={handleStartPointChange} 
                      className={styles.rangeSlider}
                    />
                  </div>

                  <div className={styles.controlGroup}>
                    <div className={styles.controlLabel}>
                      <span className={styles.labelIcon}><Clock size={14} /> Durée (1-10s)</span>
                      <span className={styles.timeDisplay}>{gifLength}s</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={gifLength} 
                      onChange={(e) => setGifLength(parseInt(e.target.value))} 
                      className={styles.rangeSlider}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={styles.formatGrid}>
              {(mode === 'audio' ? audioFormats : mode === 'image' ? imageFormats : mode === 'video' ? videoFormats : docFormats).map(f => (
                <button 
                  key={f} 
                  onClick={() => setTargetFormat(f)} 
                  className={`${styles.formatButton} ${targetFormat === f ? styles.formatButtonActive : ''}`}
                >
                  {f}
                </button>
              ))}
            </div>

            <button 
              onClick={runBulkConversion} 
              disabled={files.length === 0 || !targetFormat || converting} 
              className={styles.convertButton}
            >
              {converting ? (
                <div className={styles.convertingText}>
                  <Loader2 className={styles.spinner} size={20} /> Morphose en cours...
                </div>
              ) : (
                `Transmuter en ${targetFormat.toUpperCase()}`
              )}
            </button>
            
            {(converting || (!ready && loadingProgress > 0)) && (
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                <div className={styles.progressInfo}>
                  <span className={styles.progressPercent}>{Math.round(loadingProgress)}%</span>
                  {progressMessage && <span className={styles.progressMessage}>{progressMessage}</span>}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.resultsSection}>
            <CheckCircle className={styles.successIcon} size={64} />
            <h2 className={styles.successTitle}>Stabilisé</h2>
            <div className={styles.resultsGrid}>
              {results.map((res, i) => (
                <div key={i} className={styles.resultCard}>
                  <span className={styles.resultName}>{res.name}</span>
                  <a href={res.url} download={res.name} className={styles.downloadButton}>
                    <Download size={20} />
                  </a>
                </div>
              ))}
            </div>
            <button onClick={reset} className={styles.resetButton}>Nouvelle Morphose</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default SonicMorph;
