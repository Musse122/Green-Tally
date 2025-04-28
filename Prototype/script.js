document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const carbonForm = document.getElementById("carbon-form");

    // Listen for form submission
    carbonForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent page reload

        // Get user inputs
        const miles = parseFloat(document.getElementById("miles").value);
        const transportMode = document.getElementById("transport-mode").value;
        const electricity = parseFloat(document.getElementById("electricity").value);
        const diet = document.getElementById("diet").value;

        // Validate inputs
        if (isNaN(miles) || isNaN(electricity)) {
            alert("Please enter valid numbers for miles and electricity.");
            return;
        }

        // CO₂ emission factors (kg CO₂)
        const transportFactors = { car: 0.404, bus: 0.089, bike: 0 };
        const dietFactors = { omnivore: 2.5, vegetarian: 1.7, vegan: 1.5 };
        const electricityFactor = 0.233;

        // Calculate CO₂ emissions
        const transportEmissions = miles * transportFactors[transportMode];
        const electricityEmissions = electricity * electricityFactor;
        const dietEmissions = dietFactors[diet];
        const totalEmissions = transportEmissions + electricityEmissions + dietEmissions;

        // Update result text
        document.getElementById("result-text").innerText = `Your Total Carbon Footprint: ${totalEmissions.toFixed(2)} kg CO₂`;

        // Display bar chart
        const ctx = document.getElementById("carbonChart").getContext("2d");

        // Destroy previous chart if it exists
        if (window.currentChart) {
            window.currentChart.destroy();
        }

        window.currentChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Transport", "Electricity", "Diet"],
                datasets: [{
                    label: "CO₂ Emissions (kg)",
                    data: [transportEmissions, electricityEmissions, dietEmissions],
                    backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: "CO₂ Emissions (kg)"
                        }
                    }
                }
            }
        });
    });
});
