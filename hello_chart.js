// Select the canvas element from the HTML using its ID
let canvas = document.querySelector('#soda-chart');

// Get the 2D drawing context for the canvas
let context = canvas.getContext('2d');

// Create a new Chart instance
let chart = new Chart(context, {
    // Specify the type of chart to create (bar chart in this case)
    type: 'bar',
    data: {
        // Define the labels for the x-axis 
        labels: ['Coke', 'Pepsi', 'Sprite', 'Either', 'Neither'],
        datasets: [{
            // Label for the dataset (shown in the legend)
            label: 'Number of votes',
            // Data points corresponding to each label
            data: [18, 14, 10, 7, 10],
            // Background colors for each bar in the chart
            backgroundColor: ['red', 'blue', 'yellowgreen', 'green', 'yellow']
        }]
    },
    options: {
        // Configuration options for the scales
        scales: {
            // Configure the y-axis
            yAxes: [{
                ticks: {
                    // Start the y-axis at zero
                    beginAtZero: true
                }
            }]
        }
    }
});
