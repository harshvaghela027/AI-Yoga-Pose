function startYoga() {
    // Access the camera
    const video = document.getElementById('video');

    // Get camera stream
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.error("Error accessing camera: ", error);
            });
    }

    // Simulate yoga pose checking
    setTimeout(checkPose, 5000); // After 5 seconds, check the pose
}

function checkPose() {
    const feedback = document.getElementById('feedback');

    // Simulate pose check (50% chance correct or incorrect)
    const correctPose = Math.random() > 0.5;

    if (correctPose) {
        feedback.textContent = "You are doing the pose correctly!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Your pose is incorrect! Adjust your posture.";
        feedback.style.color = "red";
    }
}

// Change the yoga pose demo based on selection
function changePose() {
    const pose = document.getElementById('yogaPose').value;
    const poseName = document.getElementById('pose-name');
    const poseImage = document.getElementById('pose-image');
    const poseDescription = document.getElementById('pose-description');

    if (pose === 'savasana') {
        poseName.textContent = 'Savasana';
        poseImage.src = 'savasana-demo.png';
        poseDescription.textContent = 'This is the correct way to do Savasana. Relax your body and follow the posture.';
    } else if (pose === 'vinyasa') {
        poseName.textContent = 'Vinyasa';
        poseImage.src = 'vinyasa-demo.png';
        poseDescription.textContent = 'This is the correct way to do Vinyasa. Focus on fluid movement.';
    } else if (pose === 'ashtanga') {
        poseName.textContent = 'Ashtanga';
        poseImage.src = 'ashtanga-demo.png';
        poseDescription.textContent = 'This is the correct way to do Ashtanga Yoga. Follow the breath and posture alignment.';
    } else if (pose === 'hatha') {
        poseName.textContent = 'Hatha Yoga';
        poseImage.src = 'hatha-demo.png';
        poseDescription.textContent = 'This is the correct way to do Hatha Yoga. Hold the postures steadily.';
    }
    // Add more poses as needed
}