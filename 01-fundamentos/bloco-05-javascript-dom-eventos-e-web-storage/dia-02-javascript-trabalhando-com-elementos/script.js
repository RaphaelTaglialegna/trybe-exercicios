//Primeira parte;

// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const h1Element = document.createElement('h1');
h1Element.innerText = "Exercício 5.2 - JavaScript DOM"; 
document.body.appendChild(h1Element);
// 2- Adicione a tag main com a classe main-content como filho da tag body ;
const mainElement = document.createElement('main');
mainElement.className = 'main-content';
document.body.appendChild(mainElement);

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionElement = document.createElement('section');
sectionElement.className = 'center-content';
mainElement.appendChild(sectionElement);


// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.innerText ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."; 
sectionElement.appendChild(tagP);


// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const section2Element = document.createElement('section');
section2Element.className = 'left-content';
mainElement.appendChild(section2Element);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const section3Element = document.createElement('section');
section3Element.className = 'right-content';
mainElement.appendChild(section3Element);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const imgElement = document.createElement('img');
imgElement.className = 'small-image';
imgElement.src = 'https://picsum.photos/200';
section2Element.appendChild(imgElement);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const newListNumbers = document.createElement('ul');
section3Element.appendChild(newListNumbers);
const listNumbers = ['one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' , 'eight' , 'nine' , 'ten']
    
  for (let index = 0; index < listNumbers.length; index += 1){
    let lineNewListNumbers = document.createElement('li');    
    lineNewListNumbers.innerHTML = listNumbers[index];
    newListNumbers.appendChild(lineNewListNumbers);
  }

// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. 
for (let index = 1; index <= 3; index +=1){
  const newH3 = document.createElement('h3');
  newH3.innerHTML = 'Aqui tem um h3 ' + index;
  mainElement.appendChild(newH3);
}



// Segunda Parte 

// Adicione a classe title na tag h1 criada;
const title = document.querySelector('h1');
title.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
const description = document.getElementsByTagName ('h3');
// Aqui o getElementsByTagName retorna um array com as tags h3 que vai de 0 a 2 sendo 3 tags encontradas. 
for (let index = 0; index < 3; index +=1){
description[index] .className = 'description';
}
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
const removeSection = document.getElementsByClassName('left-content')[0];
mainElement.removeChild(removeSection);
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
const ceterSection = document.getElementsByClassName('right-content')[0];
ceterSection.style.marginRight ='auto';
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
const changeColor = document.getElementsByClassName('center-content')[0];
changeColor.parentNode.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
newListNumbers.lastChild.remove();

newListNumbers.lastChild.remove();