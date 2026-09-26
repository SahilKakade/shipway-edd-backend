# Shipway EDD Backend

A lightweight Node.js and Express API that retrieves Estimated Delivery Dates (EDD) from Shipway based on pickup and destination pincodes.

## Overview

This backend service acts as an API layer between an application and the Shipway Predicted EDD API.

It accepts pickup and destination pincodes, securely authenticates with Shipway using environment variables, requests the estimated delivery information, and returns a simplified JSON response.

## Features

- Shipway Predicted EDD API integration
- Pickup and destination pincode based EDD lookup
- REST API endpoint
- Basic authentication using environment variables
- Axios-based external API requests
- JSON response handling
- Error handling for failed API requests
- Configurable server port

## API Endpoint

### Get Estimated Delivery Date

```text
GET /get-edd

Query Parameters
| Parameter | Description         |
| --------- | ------------------- |
| `from`    | Pickup pincode      |
| `to`      | Destination pincode |


Example Request
{
  "edd_date": "2024-01-01",
  "courier": "Courier Name",
  "mode": "Surface"
}


If delivery information is unavailable, the API returns:
{
  "edd_date": "Unavailable",
  "courier": "",
  "mode": ""
}

Tech Stack
Node.js
Express.js
Axios
dotenv
Shipway API
Environment Variables

Create a .env file in the project root:
SHIPWAY_EMAIL=your_shipway_email
SHIPWAY_LICENSE_KEY=your_shipway_license_key
PORT=3000

Do not commit the .env file or expose API credentials publicly.


Getting Started
Clone the repository

git clone https://github.com/SahilKakade/shipway-edd-backend.git
cd shipway-edd-backend

Install dependencies
npm install

Configure environment variables

Create a .env file and add your Shipway credentials:

SHIPWAY_EMAIL=your_shipway_email
SHIPWAY_LICENSE_KEY=your_shipway_license_key
PORT=3000
Start the server
npm start

The API will run on:

http://localhost:3000
Available Routes
Health Check
GET /

Returns:

Shipway EDD API is live
EDD Lookup
GET /get-edd?from=400001&to=110001
Error Handling

If the Shipway API request fails, the service returns an HTTP 500 response:

{
  "error": "Failed to fetch EDD"
}

Project Structure
shipway-edd-backend/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
Author
Sahil Kakade

Full-Stack Developer

Portfolio: https://www.sahilkakade.in/
LinkedIn: https://www.linkedin.com/in/sahil-kakade-2123ba171/
