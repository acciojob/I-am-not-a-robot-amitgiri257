//your code here
// Select all image elements and buttons
const images = document.querySelectorAll('img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');

let clickedImages = [];
let isVerifyButtonRendered = false;

// Shuffle and display the images on page load
function shuffleImages() {
    // Logic to load and shuffle your images goes here
    // You can use an API to fetch the images and randomly arrange them
}

// Function to reset the game to its initial state
function resetGame() {
    clickedImages = [];
    resetButton.style.display = 'block';
    verifyButton.style.display = 'none';
    para.textContent = '';
    isVerifyButtonRendered = false;
}

// Add click event listeners to the images
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        if (clickedImages.length < 2) {
            image.classList.add(`img${index + 1}`);
            clickedImages.push(index);
        }

        if (clickedImages.length === 2 && !isVerifyButtonRendered) {
            // Check if both clicked images are identical
            const isIdentical = clickedImages[0] === clickedImages[1];
            
            if (isIdentical) {
                para.textContent = 'You are a human. Congratulations!';
            } else {
                para.textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
            }

            verifyButton.style.display = 'block';
            isVerifyButtonRendered = true;
        }
    });
});

// Add click event listener to the Reset button
resetButton.addEventListener('click', () => {
    resetGame();
});

// Add click event listener to the Verify button
verifyButton.addEventListener('click', () => {
    resetGame();
});

// Initialize the game on page load
shuffleImages();
resetGame();
