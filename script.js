document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const activityType = document.getElementById('activity-type').value;
    const imageFile = document.getElementById('image-upload').files[0];

    if (!activityType || !imageFile) {
        alert('Please select an activity type and upload an image.');
        return;
    }

    // Simulate the machine learning API call for analyzing the image
    analyzeImage(activityType, imageFile);
});

function analyzeImage(activityType, imageFile) {
    const resultDiv = document.getElementById('result');
    const progressDiv = document.getElementById('progress-comparison');

    // For demonstration, we simulate the analysis process
    resultDiv.innerHTML = 'Analyzing image for ' + activityType + '...';

    setTimeout(() => {
        // Simulate response from machine learning model
        const analysisResult = `Stage identified: Initial stage of ${activityType}.`;
        resultDiv.innerHTML = `<strong>Result:</strong> ${analysisResult}`;

        // Compare with previous image (for simplicity, we are just simulating here)
        compareProgress(activityType);

    }, 2000); // Simulate delay for analysis
}

function compareProgress(activityType) {
    const progressDiv = document.getElementById('progress-comparison');
    
    // Simulated progress comparison result
    const progressMessage = `Compared to the previous image, the ${activityType} is 20% completed.`;
    progressDiv.innerHTML = `<strong>Progress Comparison:</strong> ${progressMessage}`;
}

// Error handling for incorrect image or mismatched category
function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div id="error">${message}</div>`;
}
