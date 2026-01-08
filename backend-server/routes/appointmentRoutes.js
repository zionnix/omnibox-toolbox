const express = require('express');
const router = express.Router();
const {
  getAllAppointments,
  createAppointment,
  updateAppointmentStatus,
  deleteAppointment,
  getBookedSlots
} = require('../controllers/appointmentController');

router.get('/', getAllAppointments);
router.get('/booked', getBookedSlots);
router.post('/', createAppointment);
router.patch('/:id/status', updateAppointmentStatus);
router.delete('/:id', deleteAppointment);

module.exports = router;
