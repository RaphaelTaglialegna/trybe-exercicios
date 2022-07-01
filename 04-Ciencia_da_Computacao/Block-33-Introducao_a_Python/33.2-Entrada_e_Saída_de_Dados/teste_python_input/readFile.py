# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close() 

# # leitura com interação por linha
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(line)  # não esqueça que a quebra de linha também é um caractere da linha
# file.close()  # não podemos esquecer de fechar o arquivo


# escrita binária
file = open("arquivo.dat", mode="wb")
file.write(b"C\xc3\xa1ssio 30")  # o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura binário
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo