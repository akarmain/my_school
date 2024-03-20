def f(M, N):
    if M < 0 or N <= 0:
        return "не может быть такой шкалы"
    p = (M / N) * 100
    if p < 0 or p > 100:
        return "не может быть такой оценки в этой шкале"
    elif p < 50:
        return f"{p}%, «неудовлетворительно»"
    elif p >= 50 and p < 65:
        return f"{p}%, «удовлетворительно»"
    elif p >= 65 and p < 85:
        return f"{p}%, «хорошо»"
    else:
        return f"{p}%, «отлично»"


M1, N1 = 85, 100
print(f"Пример 1: {M1}, {N1} Ответ: {f(M1, N1)}")

M2, N2 = 7, 5
print(f"Пример 2: {M2}, {N2} Ответ: {f(M2, N2)}")

M3, N3 = 1, -1
print(f"Пример 3: {M3}, {N3} Ответ: {f(M3, N3)}")


M, N = map(int, input("Введите свои данные").split())
print(f"Пример 3: {M}, {N} Ответ: {f(M, N)}")
