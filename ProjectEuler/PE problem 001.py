def sum_of_muliples(num):
    return sum(n for n in range(num) if n % 3 == 0 or n % 5 == 0)

print(sum_of_multiples(1000))
