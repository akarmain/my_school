import math

a, b, c = map(int, input().split())
if a == 0:
    if b == 0:
        print("Это не уравнение")
    else:
        x = -c / b
        print(f"ЛУР. Один корень x={x}")
else:
    D = b**2 - 4*a*c
    if D > 0:
        x1 = (-b + math.sqrt(D)) / (2*a)
        x2 = (-b - math.sqrt(D)) / (2*a)
        print(f"КВУР. Два корня: x1={x1}, x2={x2}")
    elif D == 0:
        x = -b / (2*a)
        print(f"КВУР. Один корень: x={x}")
    else:
        print("КВУР. Нет действительных корней")
