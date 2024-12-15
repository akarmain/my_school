
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quadratic-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDiv.textContent = 'Пожалуйста, введите корректные числа.';
            return;
        }

        if (a === 0) {
            resultDiv.textContent = 'Коэффициент a не должен быть равен нулю.';
            return;
        }

        const discriminant = b * b - 4 * a * c;

        // Формирование строки уравнения
        let cp = c > 0 ? "+" : "-";
        let bp = b > 0 ? "+" : "-";
        const equation = `${a > 1 ? a : ""} ${a > 1 ? "*" : ""} x^2 ${bp} ${Math.abs(b)}*x ${c !== 0 ? cp : ""} ${c !== 0 ? Math.abs(c) : ""} = 0`;
        resultDiv.innerHTML = `<p>Уравнение: ${equation}</p>`;
        resultDiv.innerHTML += `<p>Дискриминант (D): ${discriminant}</p>`;

        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultDiv.innerHTML += `Корни уравнения:<br>x₁ = ${x1}<br>x₂ = ${x2}`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            resultDiv.innerHTML += `Уравнение имеет один корень:<br>x = ${x}`;
        } else {
            resultDiv.innerHTML += 'Уравнение не имеет действительных корней.';
        }
    });
});
