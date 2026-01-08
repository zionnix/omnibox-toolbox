const Appointment = require('../models/Appointment');

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, message, date, time } = req.body;
    
    const appointment = new Appointment({
      name,
      email,
      phone,
      message,
      date,
      time,
      status: 'pending'
    });

    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update appointment status
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByIdAndDelete(id);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    res.json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get booked dates and times
exports.getBookedSlots = async (req, res) => {
  try {
    const appointments = await Appointment.find({ 
      status: { $in: ['pending', 'validated'] },
      date: { $gte: new Date() }
    });
    
    const bookedSlots = appointments.map(apt => ({
      date: apt.date,
      time: apt.time
    }));
    
    res.json(bookedSlots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
