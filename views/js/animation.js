 let yearsPassed = 0;
    let monthsPassed = 0;
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const yearDuration = 5000;
    const monthDuration = yearDuration / 12;

    let elapsedTime = 0;
    function updateTime() {
      elapsedTime += 100;
      yearsPassed = Math.floor(elapsedTime / yearDuration);
      monthsPassed = Math.floor((elapsedTime % yearDuration) / monthDuration);
      yearsElement.textContent = yearsPassed;
      monthsElement.textContent = monthsPassed;
    }
    setInterval(updateTime, 100);
