document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.querySelector('.rocket');
    const speedRange = document.getElementById('speedRange');
    const startBtn = document.getElementById('startBtn');
    const reverseBtn = document.getElementById('reverseBtn');
    const distanceEl = document.getElementById('distance');
    const timeRemainingEl = document.getElementById('timeRemaining');

    const sceneWidth = window.innerWidth;
    const sceneHeight = window.innerHeight;

    const earthX = sceneWidth / 2;
    const earthY = sceneHeight / 2;
    const marsX = sceneWidth * 0.97;
    const marsY = earthY;

    rocket.style.left = `${earthX}px`;
    rocket.style.top = `${earthY}px`;


    let currentTarget = { x: marsX, y: marsY };
    let startPoint = { x: earthX, y: earthY };

    let rocketX = earthX;
    let rocketY = earthY;
    let traveling = false;
    let direction = 1;
    function updateInfo() {
        const dx = currentTarget.x - rocketX;
        const dy = currentTarget.y - rocketY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const distanceKm = dist * 1000;
        const speed = parseFloat(speedRange.value);
        const time = distanceKm / speed;

        distanceEl.textContent = distanceKm.toFixed(0);
        timeRemainingEl.textContent = time.toFixed(1);
    }

    function moveRocket() {
        if (!traveling) return;

        const speed = parseFloat(speedRange.value);
        const pxPerFrame = speed / (1000 * 60);

        const dx = currentTarget.x - rocketX;
        const dy = currentTarget.y - rocketY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
            traveling = false;
            reverseBtn.disabled = false;
            console.log('Ракета достигла цели!');
            return;
        }

        const ux = dx / dist;
        const uy = dy / dist;

        rocketX += ux * pxPerFrame;
        rocketY += uy * pxPerFrame;

        rocket.style.left = rocketX + 'px';
        rocket.style.top = rocketY + 'px';

        updateInfo();
        requestAnimationFrame(moveRocket);
    }

    startBtn.addEventListener('click', () => {
        if (traveling) {
            traveling = false;
        } else {
            traveling = true;
            reverseBtn.disabled = true;
            requestAnimationFrame(moveRocket);
        }
    });

    reverseBtn.addEventListener('click', () => {
        direction *= -1;
        if (direction === 1) {
            startPoint = { x: rocketX, y: rocketY };
            currentTarget = { x: marsX, y: marsY };
        } else {
            startPoint = { x: rocketX, y: rocketY };
            currentTarget = { x: earthX, y: earthY };
        }
        updateInfo();
    });

    updateInfo();
});


