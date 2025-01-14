document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.style.animationPlayState === 'paused') {
        card.style.animationPlayState = 'running';
      } else {
        card.style.animationPlayState = 'paused';
      }
    });
  
    card.style.animationPlayState = 'paused'; // Start with animation paused
  });
  