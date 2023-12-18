document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Extract relevant data for chart
            const labels = data.map(entry => entry.createdAt);
            const energyConsumption = data.map(entry => entry.total_kwh);

            // Create a chart
            createChart(labels, energyConsumption);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to create a chart
    function createChart(labels, data) {
        const ctx = document.getElementById('chartContainer').getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Energy Consumption',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        });
    }
});
