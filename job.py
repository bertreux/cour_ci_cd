a = 2 
print("coucou", a)

def calculate_average(values):
    if not values:
        return 0
    return sum(values) / len(values)