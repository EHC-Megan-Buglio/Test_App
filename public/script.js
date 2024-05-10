function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  const letters = document.querySelectorAll(".letter");
  const intervalId = setInterval(function(){
    for(let letter of letters){
      letter.style.color = randomRGB();
    }
  }, 1000)

  document.addEventListener('DOMContentLoaded', function(){
    const chicken = document.getElementById('chicken');

    chicken.addEventListener('click', function(){
      popup.classList.add('show');
      setTimeout(function(){
        popup.classList.remove('show');
      }, 3000)
    })
  })
  