## Exercícios HTML e CSS - Seletores e posicionamento

#### Para fixar - Visualizando o Box Model na prática

html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício de Fixação: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>

```
CSS

```
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}

```

Se você tiver curiosidade para saber sobre as propriedades display , text-align e vertical-align , sinta-se livre para consultar as documentações do MDN e da W3Schools . Mas não se preocupe, iremos falar melhor sobre posicionamento dos elementos em alguns instantes.
O importante é que você tenha compreendido bem como funciona o box model do CSS, que é base para todos esses assuntos! Se tiver alguma dúvida não hesite em perguntar.


Parte 2 

Para fixar
Que tal praticarmos como manipular o posicionamento de elementos? Utilize o HTML e CSS a seguir como ponto de partida para resolver os exercícios:
index.html

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Posicionamento de elementos</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Exercícios de fixação 3.3</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/2MV2bY0" alt="bowser" class="bowser" />
    <p class="speach">
      Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
  </body>
</html>

```

style.css

```
.super-mario {
  width: 200px;
}

.goomba {
  width: 100px;
}

.baloon {

}

.speach {
  font-size: 25px;
}

.bowser {
  width: 200px;
}

```
Personagens pertencentes à Nintendo©
1 - Posicione o Mário acima do Goomba.
2 - Posicione a tag p para que fique dentro do balão de fala.
3 - Posicione o balão para que se torne uma fala de Bowser.