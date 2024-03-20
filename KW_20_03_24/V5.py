def int_to_roman(num):
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]
    roman_num = ''
    i = 0
    while num > 0:
        for _ in range(num // val[i]):
            roman_num += syb[i]
            num -= val[i]
        i += 1
    return roman_num


def get_month_day(month, day, year):
    import datetime
    date_str = f"{month}/{day}/{year}"
    date_obj = datetime.datetime.strptime(date_str, "%m/%d/%Y")
    month_name = date_obj.strftime("%B")
    day_name = date_obj.strftime("%A")
    return month_name, day_name


num = int(input("Введите число в 10-й системе счисления (не более 1000): "))
roman_num = int_to_roman(num)
print(f"Число {num} в Римской системе счисления: {roman_num}")

month = int(input("Введите номер месяца: "))
day = int(input("Введите день: "))
year = int(input("Введите год: "))
month_name, day_name = get_month_day(month, day, year)
print(f"Название месяца: {month_name}, название дня недели: {day_name}")
