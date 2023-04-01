const express = require('express');
const moment = require('moment');
const app = express();

app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Create an array of time slots for the day
const timeSlots = [];
const startOfDay = moment().startOf('day');
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0; i < 24; i++) {
  timeSlots.push(startOfDay.add(i > 0 ? 1 : 0, 'hour').format('h:mm a'));
}

app.get('/', (req, res) => {
    res.render('partials/index', { daysOfWeek: daysOfWeek, timeSlots: timeSlots });
});

app.get('/test-calendar', (req, res) => {
    res.render('test-calendar', { daysOfWeek: daysOfWeek, timeSlots: timeSlots });
});

// app.get('/calendar', (req, res) => {
//     res.render('calendar', { daysOfWeek: daysOfWeek });
// });

// Render the calendar view
// app.get('/', (req, res) => {
//   res.render('calendar', { timeSlots });
// });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
