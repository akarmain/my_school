a, b, c = map(int, input().split())

if a + b > c and a + c > b and b + c > a:
    if a == b == c:
        print("Существует, Равносторонний треугольник")
    elif a == b or a == c or b == c:
        print("Существует, Равнобедренный треугольник")
    else:
        sides = [a, b, c]
        sides.sort()
        if sides[2] ** 2 == sides[0] ** 2 + sides[1] ** 2:
            print("Существует, Прямоугольный треугольник")
        elif sides[2] ** 2 > sides[0] ** 2 + sides[1] ** 2:
            print("Существует, Тупоугольный треугольник")
        else:
            print("Существует, Остроугольный треугольник")
else:
    if a + b == c or a + c == b or b + c == a:  # Проверка на вырожденный треугольник
        print("Существует, Вырожденный треугольник, Равнобедренный")
    else:
        print("Не существует")
