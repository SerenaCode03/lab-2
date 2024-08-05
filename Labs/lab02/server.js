// Require the Express module
const express = require('express');

// Create an Express web application
const app = express();

// Specify how to respond to GET /
app.get('/', (req, res) => {
  const currentDate = new Date().toString();
  const fortuneMessage = 'Hello World!';
  const responseMessage = `Your Fortune is: ${fortuneMessage} ${currentDate}`;

  console.log('Response Message:', responseMessage); // Debug log
  res.send(responseMessage);
});

// Start listening for HTTP requests on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
