function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  setInterval(function() {
    const rotatingText = document.getElementById('rotatingText');
    rotatingText.style.color = randomRGB();
  }, 1000);
  