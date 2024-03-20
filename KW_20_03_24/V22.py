import math

def solve_quadratic_or_linear(a, b, c):
    if a != 0:
        return solve_quadratic(a, b, c)
    else:
        return solve_linear(b, c)

def solve_quadratic(a, b, c):
    D = b**2 - 4*a*c
    if D > 0:
        x1 = (-b + math.sqrt(D)) / (2*a)
        x2 = (-b - math.sqrt(D)) / (2*a)
        return f"КВУР. Два корня: x1={x1}, x2={x2}"
    elif D == 0:
        x = -b / (2*a)
        return f"КВУР. Один корень: x={x}"
    else:
        return "КВУР. Нет действительных корней"

def solve_linear(b, c):
    if b != 0:
        x = -c / b
        return f"ЛУР. Один корень x={x}"
    else:
        return "Это не уравнение"

def solve_cubic_equation(a, b, c, d):
    if a != 0:
        return solve_cubic(a, b, c, d)
    elif b != 0:
        return solve_quadratic(b, c, d)
    elif c != 0:
        return solve_linear(c, d)
    else:
        return "Это не уравнение"

def solve_cubic(a, b, c, d):
    p = c/a - (b**2)/(3*a**2)
    q = 2*(b**3)/(27*a**3) - (b*c)/(3*a**2) + d/a
    D = (q**2)/4 + (p**3)/27
    if D > 0:
        S = (-q/2 + math.sqrt(D))**(1/3) if -q/2 + math.sqrt(D) >= 0 else -((-q/2 + math.sqrt(D))**(1/3))
        T = (-q/2 - math.sqrt(D))**(1/3) if -q/2 - math.sqrt(D) >= 0 else -((-q/2 - math.sqrt(D))**(1/3))
        x1 = S + T - b/(3*a)
        return f"КУР. Один корень: x={x1}"
    elif D == 0:
        x1 = -2*q**(1/3) - b/(3*a)
        x2 = q**(1/3) - b/(3*a)
        return f"КУР. Два корня: x1={x1}, x2={x2}"
    else:
        t = math.acos(-q/2 * math.sqrt(27/(-p**3)))/3
        x1 = 2*math.sqrt(-p/3) * math.cos(t) - b/(3*a)
        x2 = 2*math.sqrt(-p/3) * math.cos(t + 2*math.pi/3) - b/(3*a)
        x3 = 2*math.sqrt(-p/3) * math.cos(t - 2*math.pi/3) - b/(3*a)
        return f"КУР. Три корня: x1={x1}, x2={x2}, x3={x3}"

a3, b3, c3, d3 = map(int, input().split())
print(f"Уравнение {a3}x^3 + {b3}x^2 + {c3}x + {d3} = 0:")
print(solve_cubic_equation(a3, b3, c3, d3))