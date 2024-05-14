const container = document.querySelector('.star-container');

function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize star position
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';

    // Randomize star size
    star.style.fontSize = Math.random() * 3 + 'px'; // adjust for larger range

    container.appendChild(star);
  }
}

// Generate initial stars
generateStars(200);

// Animation for twinkling stars
const twinkleAnimation = [
  'opacity: 0.85;',
  'opacity: 1;',
];

const animationKeyframes = `@keyframes twinkle {
  from { ${twinkleAnimation[0]} }
  to { ${twinkleAnimation[1]} }
}`;

const style = document.createElement('style');
style.textContent = animationKeyframes;
document.head.appendChild(style);

// Animate star movement (adjust speed and direction as needed)
// Animate star movement (adjust speed and direction as needed)
function moveStars() {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(star => {
      // Adjust position based on perspective effect (x for horizontal movement)
      const perspectiveFactor = 0.005; // Adjust for desired speed
      const x = parseFloat(star.style.left);
      const y = parseFloat(star.style.top);
      star.style.left = x + perspectiveFactor * x + 'px';
      star.style.top = y + 0.5 + 'px'; // Add a slight upward movement for depth
  
      // Check for reaching the edge and move back to the beginning
      if (x > window.innerWidth || y > window.innerHeight) {
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;
        star.style.left = newX + 'px';
        star.style.top = newY + 'px';
      }
    });
  
    requestAnimationFrame(moveStars);
  }
  

moveStars();
