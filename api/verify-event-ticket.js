const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/api/verify-event-ticket', (req, res) => {
  const { userId, eventId, ticketCode } = req.body;

  const ticketsPath = path.join(__dirname, '../data/tickets.json');
  const tickets = JSON.parse(fs.readFileSync(ticketsPath));

  const ticket = tickets.find(t =>
    t.ticketCode === ticketCode &&
    t.eventId === eventId &&
    t.userId === userId
  );

  if (!ticket) {
    return res.status(404).json({
      success: false,
      message: 'Invalid ticket details.'
    });
  }

  if (ticket.used) {
    return res.status(400).json({
      success: false,
      message: 'Ticket already used.'
    });
  }

  ticket.used = true;
  fs.writeFileSync(ticketsPath, JSON.stringify(tickets, null, 2));

  res.json({
    success: true,
    message: 'Ticket verified. You may join the event.'
  });
});

module.exports = router;
