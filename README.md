# Smart Parking System

## Description
Create a system to monitor parking space availability in real-time and provide updates to users about available spots.

## Components
- Ultrasonic sensors
- Microcontroller
- Wi-Fi module
- Web server or mobile app

## Project Code

### Arduino Code
The Arduino code is designed to measure the distance using an ultrasonic sensor and publish the data to an MQTT broker.

**File:** `smart_parking_system.ino`

### Web Server Code
The Node.js server subscribes to the MQTT broker and displays the parking spot status on a web page.

**File:** `server.js`

## How to Use

1. **Arduino:**
   - Connect the ultrasonic sensor to the Arduino as described in the code.
   - Upload the Arduino code to the microcontroller.
   - Configure your Wi-Fi credentials and MQTT broker details in the code.

2. **Web Server:**
   - Install Node.js and dependencies.
   - Configure the MQTT broker details in `server.js`.
   - Run the server using `node server.js`.
   - Open a web browser and navigate to `http://localhost:3000` to view the parking spot status.

## Deployment
Deploy the web server on a cloud platform or local server to make it accessible from anywhere.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

## Notes
Ensure you have the necessary libraries installed for both the Arduino and Node.js components. Adjust MQTT topics and web server configurations based on your setup.
