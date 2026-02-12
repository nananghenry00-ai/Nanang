// script.js

// Function to track phone location
function trackPhone() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // Here you can integrate the map API to display the location
}

// Function to detect mobile operator (simplified example)
function detectOperator() {
    const operator = ''; // Implementation depends on available APIs or libraries
    console.log(`Mobile Operator: ${operator}`);
}

// Invoke functions
trackPhone();
detectOperator();