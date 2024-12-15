const questions = [
    {
        'text': "Что такое объектно-ориентированное программирование?",
        'type': "single",
        'answers': [
            "Методология разработки программного обеспечения, которая моделирует реальные объекты,\n представляющие сущности и их взаимодействия",
            "Подход к написанию кода, при котором все функции программы объединяются в один большой\n файл для упрощения управления",
            "Концепция программирования, которая позволяет выполнять несколько задач параллельно и\n независимо друг от друга",
            "Метод разработки, при котором программа разбивается на множество независимых модулей,\n не связанных между собой и работающих параллельно"
        ],
        'correct_answers': [0],
        'image': null
    },
    {
        'text': "Что такое branch в системе версионирования Git?",
        'type': "single",
        'answers': [
            "Отдельный файл, содержащий список всех изменений, внесенных в проект",
            "Алгоритм обхода дерева forks проекта",
            "Последовательность commit в хронологическом порядке",
            "Корневой узел дерева B-tree"
        ],
        'correct_answers': [2],
        'image': null
    },
    {
        'text': "Для чего приложения разворачивают в разных дата-центрах? Выберите два подходящих варианта.",
        'type': "multiple",
        'answers': [
            "Для соблюдения требований закона о хранении всех данных, обязательного в разных странах",
            "Для обеспечения высокой доступности и отказоустойчивости и улучшения производительности для пользователей из разных географических регионов",
            "Для ограничения доступа пользователей и создания искусственных барьеров между различными версиями программного обеспечения",
            "Для ускорения работы сервисов и соблюдения законодательных требований стран",
            "Для намеренного замедления скорости работы сервисов и проверки терпения пользователей"
        ],
        'correct_answers': [0, 1],
        'image': null
    },
    {
        'text': "Какой из следующих протоколов обеспечивает безопасное и зашифрованное соединение в интернете?",
        'type': "single",
        'answers': ["FTP", "HTTP", "HTTPS", "SMTP"],
        'correct_answers': [2],
        'image': null
    },
    {
        'text': "Корректно ли отработает текущий запрос без Foreign Key?",
        'type': "single",
        'answers': [
            "Нет, из-за отсутствия внешнего ключа",
            "Да, из-за ключевого названия столбца t1.foreign_id",
            "Да",
            "Нет, из-за того, что нужно использовать LEFT JOIN"
        ],
        'correct_answers': [2],
        'image': "https://s3.akarmain.ru/S/las12b.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const retryBtn = document.getElementById('retry-btn');
    const submitBtn = document.getElementById('submit-btn');
    renderQuestions(questions, container);

    submitBtn.addEventListener('click', () => {
        const score = checkAnswers(questions, container);
        showResult(score, questions.length, resultContainer);
    });

    retryBtn.addEventListener('click', () => {
        container.innerHTML = '';
        resultContainer.innerHTML = '';
        renderQuestions(questions, container);
    });
});

function renderQuestions(questions, container) {
    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'task-card';

        const qTitle = document.createElement('div');
        qTitle.className = 'task-title';
        qTitle.textContent = `Вопрос ${index + 1}:`;
        card.appendChild(qTitle);

        const qText = document.createElement('p');
        qText.textContent = q.text;
        card.appendChild(qText);

        if (q.image) {
            const img = document.createElement('img');
            img.src = q.image;
            img.alt = 'Картинка вопроса';
            img.style.maxWidth = '200px';
            img.style.display = 'block';
            img.style.marginBottom = '10px';
            card.appendChild(img);
        }

        const answersContainer = document.createElement('div');
        answersContainer.className = 'answers-container';

        if (q.type === 'single') {
            q.answers.forEach((ans, i) => {
                const label = document.createElement('label');
                label.style.display = 'block';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question_${index}`;
                input.value = i;
                label.appendChild(input);
                label.append(` ${ans}`);
                answersContainer.appendChild(label);
            });
        } else if (q.type === 'multiple') {
            q.answers.forEach((ans, i) => {
                const label = document.createElement('label');
                label.style.display = 'block';
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = `question_${index}`;
                input.value = i;
                label.appendChild(input);
                label.append(` ${ans}`);
                answersContainer.appendChild(label);
            });
        }

        card.appendChild(answersContainer);
        container.appendChild(card);
    });
}

function checkAnswers(questions, container) {
    let score = 0;
    questions.forEach((q, index) => {
        let userAnswers = [];
        const inputs = container.querySelectorAll(`[name='question_${index}']`);

        if (q.type === 'single') {
            inputs.forEach(inp => {
                if (inp.checked) userAnswers.push(parseInt(inp.value));
            });
            if (userAnswers.length === 1 && q.correct_answers.includes(userAnswers[0])) {
                score++;
            }
        } else if (q.type === 'multiple') {
            inputs.forEach(inp => {
                if (inp.checked) userAnswers.push(parseInt(inp.value));
            });
            userAnswers.sort((a, b) => a - b);
            const correctSorted = [...q.correct_answers].sort((a, b) => a - b);
            if (JSON.stringify(userAnswers) === JSON.stringify(correctSorted)) {
                score++;
            }
        }
    });
    return score;
}

function showResult(score, total, resultContainer) {
    resultContainer.innerHTML = `<h3>Ваш результат: ${score} из ${total}</h3>`;
}
