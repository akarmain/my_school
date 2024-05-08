function M1() {
    let array = Array.from({length: 30}, () => Math.floor(Math.random() * 36) - 15);
    let max = -Infinity;
    let min = Infinity;
    let maxIndices = [];
    let minIndices = [];
    let positiveSum = 0;
    let positiveCount = 0;
    let negativeSum = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    array.forEach((value, index) => {
        if (value > max) {
            max = value;
            maxIndices = [index];
        } else if (value === max) {
            maxIndices.push(index);
        }

        if (value < min) {
            min = value;
            minIndices = [index];
        } else if (value === min) {
            minIndices.push(index);
        }

        if (value > 0) {
            positiveSum += value;
            positiveCount++;
        } else if (value < 0) {
            negativeSum += value;
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    let resultString = `Массив: [${array.join(", ")}]\n`;
    resultString += `Максимальное значение: ${max}, на позициях: ${maxIndices.join(", ")}\n`;
    resultString += `Минимальное значение: ${min}, на позициях: ${minIndices.join(", ")}\n`;
    resultString += `Положительные элементы: Количество = ${positiveCount}, Сумма = ${positiveSum}\n`;
    resultString += `Отрицательные элементы: Количество = ${negativeCount}, Сумма = ${negativeSum}\n`;
    resultString += `Нулевых элементов: ${zeroCount}`;

    document.getElementById('ans_M1').innerText = resultString;
}


function M2() {
    let arrA = document.getElementById('input_M2_a').value.split(' ').map(Number);
    let arrB = document.getElementById('input_M2_b').value.split(' ').map(Number);
    if (arrA.length !== arrB.length || arrA.length > 10 || arrB.length > 10 || arrA.length <= 1 || arrB.length <= 1) {
        document.getElementById('ans_M2').textContent = 'Ошибочный ввод: массивы должны быть одной длины, не пустой и не более 10 элементов.';
        document.getElementById('ans_M2').className = 'mt-2 alert alert-danger'
        return
    }
    let sumA = 0, sumB = 0, dotProduct = 0;
    for (let i = 0; i < arrA.length; i++) {
        sumA += arrA[i];
        sumB += arrB[i];
        dotProduct += arrA[i] * arrB[i];
    }
    document.getElementById('ans_M2').textContent = `Сумма элементов первого массива: ${sumA}, Сумма элементов второго массива: ${sumB}, Скалярное произведение массивов: ${dotProduct}`;
    document.getElementById('ans_M2').className = 'mt-2'
}


function M3() {
    let matrix = [];
    let size = 5;
    let diagonalSum = 0;
    let zeroOneCount = 0;
    let rowAverages = [];
    let columnAverages = Array(size).fill(0);
    let transposedMatrix = Array.from({length: size}, () => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        let rowSum = 0;
        for (let j = 0; j < size; j++) {
            let value = Math.floor(Math.random() * 6);
            matrix[i][j] = value;
            rowSum += value;
            columnAverages[j] += value;
            transposedMatrix[j][i] = value;
            if (i === j) {
                diagonalSum += value;
            }
            if (value === 0 || value === 1) {
                zeroOneCount++;
            }
        }
        rowAverages.push(rowSum / size);
    }
    columnAverages = columnAverages.map(sum => sum / size);
    let result = `Матрица:\n${matrix.map(row => row.join(' ')).join('\n')}\n`;
    result += `Сумма главной диагонали: ${diagonalSum}\n`;
    result += `Количество элементов равных 0 или 1: ${zeroOneCount}\n`;
    result += `Средние значения по строкам: [${rowAverages.join(', ')}]\n`;
    result += `Средние значения по столбцам: [${columnAverages.join(', ')}]\n`;
    result += `Транспонированная матрица:\n${transposedMatrix.map(row => row.join(' ')).join('\n')}`;
    document.getElementById('ans_M3').innerText = result;
}


function M4() {
    let arr = Array.from({length: 30}, () => Math.floor(Math.random() * 101));

    function bubbleSort(array, ascending = true) {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (ascending ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return array;
    }

    let arrAsc = bubbleSort([...arr], true);
    let arrDesc = bubbleSort([...arr], false);

    document.getElementById('ans_M4').innerHTML = `
        Отсортированный массив по неубыванию: ${arrAsc}<br>
        Отсортированный массив по невозрастанию: ${arrDesc}
    `;
    document.getElementById('ans_M4').className = 'mt-2'
}


function quickSort(arr, left = 0, right = arr.length - 1, pivotType = 'first') {
    if (left >= right) return;

    let pivotIndex;
    switch (pivotType) {
        case 'random':
            pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
            break;
        case 'median':
            const indices = [left, left + Math.floor((right - left) / 2), right];
            indices.sort((a, b) => arr[a] - arr[b]);
            pivotIndex = indices[1];
            break;
        case 'first':
        default:
            pivotIndex = left;
            break;
    }

    let index = partition(arr, left, right, pivotIndex);
    quickSort(arr, left, index - 1, pivotType);
    quickSort(arr, index + 1, right, pivotType);
}

function partition(arr, left, right, pivotIndex) {
    let pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }
    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
}

function M41() {
    const original = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
    const types = ['first', 'random', 'median'];
    const results = [];

    types.forEach(type => {
        const arr = [...original];
        const start = performance.now();
        quickSort(arr, 0, arr.length - 1, type);
        const end = performance.now();
        results.push({type, time: end - start});
    });
    document.getElementById('ans_M41').innerHTML = results.map(result =>
        `Время сортировки с опорным элементом "${result.type}": ${result.time.toFixed(2)} мс`).join('<br>');
}


function M5() {
    const n = parseInt(document.getElementById('input_M5_a').value);
    const m = parseInt(document.getElementById('input_M5_b').value);

    let matrixA = [];
    for (let i = 0; i < n; i++) {
        matrixA[i] = [];
        for (let j = 0; j < m; j++) {
            matrixA[i][j] = Math.floor(Math.random() * 11) - 5;
        }
    }
    let matrixB = [];
    for (let i = 0; i < m; i++) {
        matrixB[i] = [];
        for (let j = 0; j < n; j++) {
            matrixB[i][j] = Math.floor(Math.random() * 11) - 5;
        }
    }
    let resultMatrix = new Array(n);
    for (let i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    let matrixAString = 'Матрица A:\n' + matrixA.map(row => row.join(' ')).join('\n');
    let matrixBString = 'Матрица B:\n' + matrixB.map(row => row.join(' ')).join('\n');
    let resultString = 'Результат умножения A*B:\n' + resultMatrix.map(row => row.join(' ')).join('\n');
    document.getElementById('ans_M5').innerText = matrixAString + '\n\n' + matrixBString + '\n\n' + resultString;
}


function processData() {
    let names = document.getElementById("input_M6_a").value.trim().split('\n');
    let heights = document.getElementById("input_M6_b").value.trim().split('\n').map(Number);
    let weights = document.getElementById("input_M6_c").value.trim().split('\n').map(Number);

    if (names.length !== heights.length || names.length !== weights.length) {
        document.getElementById('ans_M6').textContent = 'Количество записей в ФИО, Рост, и Вес должно совпадать!';
        document.getElementById('ans_M6').className = 'mt-2 alert alert-danger'
        return;
    }

    if (heights.some(h => isNaN(h) || h <= 0) || weights.some(w => isNaN(w) || w <= 0)) {
        document.getElementById('ans_M6').textContent = "В ваших взвешанных данных рост или вес нечитаемы или некорректны. Пожалуйста, введите положительные числа.";
        document.getElementById('ans_M6').className = 'mt-2 alert alert-danger'
        return;
    }

    let maxWeight = Math.max(...weights);
    let maxHeight = Math.max(...heights);
    let result = names.filter((_, index) => heights[index] === maxHeight || weights[index] === maxWeight);
    document.getElementById('ans_M6').textContent = `Люди с максимальным ростом и/или весом: ${result.join(', ')}`;
    document.getElementById('ans_M6').className = 'mt-2'
}
