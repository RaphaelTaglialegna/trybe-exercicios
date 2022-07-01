values = input("Digite dois valores para soma.(Espaçar os valores)").split()

sum = 0 
for value in values:
  sum += int(value)

print("A soma dos valores é:", sum) 
