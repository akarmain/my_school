document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('barsContainer');
  const sortBtn = document.getElementById('sortBtn');

  // Генерация случайных столбцов
  function generateRandomBars(num = 20) {
    container.innerHTML = '';
    for (let i = 0; i < num; i++) {
      const barContainer = document.createElement('div');
      barContainer.classList.add('bar');

      const barHeight = Math.floor(Math.random() * 300) + 50;
      const bar = document.createElement('div');
      bar.style.height = `${barHeight}px`;
      bar.dataset.height = barHeight; // сохранить высоту в данных элемента
      bar.style.width = '100%';

      const label = document.createElement('span');
      label.textContent = barHeight;

      barContainer.appendChild(bar);
      barContainer.appendChild(label);
      container.appendChild(barContainer);
    }
  }

  // Пузырьковая сортировка с анимацией
  async function bubbleSort() {
    let bars = Array.from(document.getElementsByClassName('bar'));
    let len = bars.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        const bar1 = bars[j].children[0];
        const bar2 = bars[j + 1].children[0];

        let height1 = parseInt(bar1.dataset.height);
        let height2 = parseInt(bar2.dataset.height);

        if (height1 > height2) {
          await swapBars(bars[j], bars[j + 1]);
          // Обновление списка столбцов
          bars = Array.from(document.getElementsByClassName('bar'));
        }
      }
    }
  }

  // Функция для перемещения столбцов
  function swapBars(barContainer1, barContainer2) {
    return new Promise(resolve => {
      const tempHeight = barContainer1.children[0].style.height;
      barContainer1.children[0].style.height = barContainer2.children[0].style.height;
      barContainer2.children[0].style.height = tempHeight;

      const tempDataHeight = barContainer1.children[0].dataset.height;
      barContainer1.children[0].dataset.height = barContainer2.children[0].dataset.height;
      barContainer2.children[0].dataset.height = tempDataHeight;

      const tempLabel = barContainer1.children[1].textContent;
      barContainer1.children[1].textContent = barContainer2.children[1].textContent;
      barContainer2.children[1].textContent = tempLabel;

      setTimeout(() => {
        resolve();
      }, 100); // Задержка для визуализации сортировки
    });
  }

  // Обработчик события для кнопки сортировки
  sortBtn.addEventListener('click', () => {
    bubbleSort();
  });

  // Генерировать случайные столбцы при загрузке страницы
  generateRandomBars();
});
