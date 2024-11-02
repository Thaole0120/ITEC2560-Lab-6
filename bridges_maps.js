// Dataset: Longest US Bridges
const bridges = [
    { name: "Verrazano-Narrows Bridge", span: 1298.4, location: [40.6066, -74.0447] },
    { name: "Golden Gate Bridge", span: 1280.2, location: [37.8199, -122.4783] },
    { name: "Mackinac Bridge", span: 1158.0, location: [45.8174, -84.7278] },
    { name: "George Washington Bridge", span: 1067.0, location: [40.8517, -73.9527] },
    { name: "Tacoma Narrows Bridge", span: 853.44, location: [47.2690, -122.5517] }
];


// // Initialize the map
// const map = L.map('map').setView([39.0, -95.0], 4); // Center the map over the USA

// // Add a tile layer to the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
// }).addTo(map);

// // Loop through the bridges array to create markers and popups
// bridges.forEach(bridge => {
//     const marker = L.marker(bridge.location).addTo(map);
//     marker.bindPopup(`<strong>${bridge.name}</strong><br>Span Length: ${bridge.span}`);
// });

// Find the longest bridge
const longestBridge = bridges.reduce((prev, current) => (prev.span > current.span) ? prev : current);

// Log the longest bridge for verification
console.log('Longest Bridge:', longestBridge);

// Initialize the map
const map = L.map('map').setView([39.0, -95.0], 4); // Center the map over the USA

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define a custom icon for the bridges
const bridgeIcon = L.icon({
    iconUrl: 'bridge.png', 
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
});

// Define a custom icon for the longest bridge
const longestBridgeIcon = L.icon({
    iconUrl: 'longest-bridge.png',
    iconSize: [32, 32], 
    iconAnchor: [16, 32],
});

// Loop through the bridges array to create markers and popups
bridges.forEach(bridge => {
    // Determine the icon to use
    const markerIcon = bridge.name === longestBridge.name ? longestBridgeIcon : bridgeIcon;

    // Create the marker
    const marker = L.marker(bridge.location, { icon: markerIcon }).addTo(map);
    marker.bindPopup(`<strong>${bridge.name}</strong><br>Span Length: ${bridge.span} m `);
});

// Define an array of colors for each bridge
const bridgeColors = [
    'darkred', // Color for Verrazano-Narrows Bridge
    'darkblue', // Color for Golden Gate Bridge
    'goldenrod', // Color for Mackinac Bridge
    'darkgreen', // Color for George Washington Bridge
    'violet' // Color for Tacoma Narrows Bridge
];

// Create the Chart.js bar chart
const ctx = document.getElementById('bridgeChart').getContext('2d');
const bridgeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridges.map(bridge => bridge.name),
        datasets: [{
            label: 'Span Length (meters)',
            data: bridges.map(bridge => bridge.span),
            backgroundColor: bridgeColors, // Use the array of colors
            borderColor: [
                'darkred',
                'darkblue',
                'goldenrod',
                'darkgreen',
                'violet'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Longest US Bridges by Span Length',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
