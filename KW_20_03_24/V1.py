s = input().split(",")
a = int(s[0])
b = int(s[1])
c = int(s[2])

numbers = [a, b, c]
if a == b == c:
    print("Числа равны")
else:
    max_num = max(numbers)
    min_num = min(numbers)
    if a != max_num and a != min_num:
        avg_num = a
    elif b != max_num and b != min_num:
        avg_num = b
    else:
        avg_num = c
    equal_count = numbers.count(a) - 1 + numbers.count(b) - 1 + numbers.count(c) - 1
    print(f"Максимум - {max_num}, Минимум - {min_num}, Среднее - {'Его нет' if equal_count > 0 else avg_num}, Одинаковых - {equal_count}")
