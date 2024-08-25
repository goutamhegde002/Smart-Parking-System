const express = require('express');
const app = express();
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://your_MQTT_BROKER_IP');

let parkingStatus = 'Unknown';

client.on('connect', function () {
  client.subscribe('parking/spot', function (err) {
    if (err) {
      console.error('Failed to subscribe: ', err);
    }
  });
});

client.on('message', function (topic, message) {
  parkingStatus = message.toString();
});

app.get('/', (req, res) => {
  res.send(`<h1>Parking Spot Status</h1><p>Distance: ${parkingStatus} cm</p>`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
