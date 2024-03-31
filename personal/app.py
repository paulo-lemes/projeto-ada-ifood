temperaturaF = int(input("Digite a temperatura em Farenheit: "))
temperaturaC = int((temperaturaF - 32) / 1.8)

print ("A temperatura digitada corresponde a {}° C".format (temperaturaC))



numero1 = int(input("Digite o 1º número: "))
numero2 = int(input("Digite o 2º número: "))
numero3 = int(input("Digite o 3º número: "))

media = float((numero1 + numero2 + numero3) / 3)

print ("A média dos números digitados é {:.2f}".format (media))



nome = input("Digite seu nome: ")
nota1 = float(input("Digite a nota da prova 1: "))
nota2 = float(input("Digite a nota da prova 2: "))

media = float(((nota1 * 2) + (nota2 * 3)) / 5)

print (nome,", sua média é {:.2f}".format (media))



nome = input("Digite seu nome: ")
cargo = input("Digite seu cargo: ")
salario = float(input("Digite seu salário para que seja calculado o aumento: "))

if cargo.lower() == "programador":
    salario *= 1.5
    print (nome, ", seu novo salário será R${:.2f} após o reajuste.".format (salario))
elif cargo.lower() == "analista de sistemas":
    salario *= 1.4
    print (nome, ", seu novo salário será R${:.2f} após o reajuste.".format (salario))
elif cargo.lower() == "analista de banco de dados":
    salario *= 1.3
    print (nome, ", seu novo salário será R${:.2f} após o reajuste.".format (salario))
else:
    print ("O cargo digitado não é válido.")



altura = float(input("Digite sua altura: "))
sexo = input("Digite seu gênero (masculino ou feminino): ")

if sexo.lower() == "masculino":
    altura = int((72.7 * altura) - 58.0)
    print ("O seu peso ideal é {}kg.".format (altura))
elif sexo.lower() == "feminino":
    altura = int((62.1 * altura) - 44.7)
    print ("O seu peso ideal é {}kg.".format (altura))
else:
    print ("O gênero digitado não é válido.")



quantidade = int(input("Quantos números deseja informar para que seja calculada a média? \nResp.: ")) 
numero = 0

for x in range(quantidade):
    n = int(input("Digite o número: "))
    numero += n

media = numero / quantidade

print("A média dos números digitados é igual a {:.2f}".format (media))



print ("Informe cinco números inteiros positivos.") 
pares = 0

for x in range(1, 6):
    numero = int(input("Digite o {}° número: ".format (x)))
    if numero % 2 == 0:
        pares += 1

if pares == 5:
    print("Todos os números digitados são pares.")    
elif pares == 0:
    print("Nenhum número digitado é par.")
else:
    print("A quantidade de números pares digitados é: {}".format (pares))



regiaoSudeste = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"]

print(regiaoSudeste[0])

regiaoSudeste [0] = "SP"
regiaoSudeste [1] = "RJ"
regiaoSudeste [2] = "BH"
regiaoSudeste [3] = "VT"

for capital in range(4):
    print(regiaoSudeste[capital])



alunos = []

while True:
    nomeAluno = input("Digite o nome do aluno: ")
    alunos.append(nomeAluno)

    mais = input("Deseja acrescentar mais algum nome? [S|N]")

    if mais.upper() == "N":
        break

print("Os nomes de alunos digitados foram:")

alunos.sort()

for nomeAluno in alunos:
    print(nomeAluno)



numerosPositivos = []

quantidade = int(input("Digite quantos números deseja inserir: "))

for x in range(1, quantidade + 1):
    numero = int(input("{}° número: ".format(x)))
    
    if numero >= 0:
        numerosPositivos.append(numero)

media = (min(numerosPositivos) + max(numerosPositivos)) / 2

print("A média entre o menor e maior número digitado é {:.2f}.".format(media))


    
numerosPositivos = []

numerosPares = []
numerosImpares = []

quantidade = int(input("Digite quantos números deseja inserir: "))

for x in range(1, quantidade + 1):
    numero = int(input("{}° número: ".format(x)))
    
    if numero >= 0:
        numerosPositivos.append(numero)

    if numero % 2 == 0:
        numerosPares.append(numero)
    else:
        numerosImpares.append(numero)

print("A lista de números positivos digitados:\n{}".format(numerosPositivos))
    
escolha = input("Digite P para mostrar somente os números pares na lista, ou I para mostrar somente os números ímpares: ")

if escolha.upper() == "P":
    print("Lista atualizada com os números pares:\n{}".format(numerosPares))
elif escolha.upper() == "I":
    print("Lista atualizada com os números ímpares:\n{}".format(numerosImpares))
else:
    print("A opção digitada é inválida.")



equipamentos = []
precos = []
quantidade = 0

print("Digite respectivamente o nome e o preço do equipamento, nos campos abaixo.\n")

while True:
    nomeEquip = input("Descrição: ")
    equipamentos.append(nomeEquip)

    valorEquip = float(input("Valor (R$): "))
    precos.append(valorEquip)

    quantidade += 1

    adicionar = input("\nDigite S para continuar adicionando dados ou N para finalizar: ")
    print("")
    
    if adicionar.upper() == "N":
        break

barato = precos.index(min(precos))

print("O equipamento com o menor preço informado é: {}.".format(equipamentos[barato]))

somaPrecos = sum(precos)
media = somaPrecos / quantidade

print("A média dos preços dos equipamentos é: R${:.2f}.".format(media))



compra = {}
total = 0

while True:
    print("Informe abaixo os dados do produto.\n")

    codigo = int(input("Digite o código: "))
    nome = input("Digite o nome: ")
    preco = float(input("Digite o preço: R$"))
    quantidade = int(input("Digite a quantidade: "))
    subtotal = float(quantidade*preco)

    total += subtotal

    valorChave = nome, preco, quantidade, subtotal

    compra.update({codigo: valorChave})
    
    print("")

    adicionarProduto = input("Digite S para adicionar mais um produto ou N para encerrar a compra: ")

    if adicionarProduto.upper() == "N":
        break

print("")
print("Resumo da compra realizada:\n")

for codigo, conteudo in sorted(compra.items()):
    print("{} - {}".format(codigo, conteudo))

print("Total a ser pago: R${:.2f}.".format(total))



