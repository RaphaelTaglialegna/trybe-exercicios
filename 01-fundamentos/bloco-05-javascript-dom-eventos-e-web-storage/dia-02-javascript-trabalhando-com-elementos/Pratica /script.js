// 1 - Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'pink';
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
// 4 - Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstElementChild;
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let testAtent = elementoOndeVoceEsta.nextSibling;
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// 8 - Agora acesse o terceiroFilho a partir de pai .
let terceiroFilho2 = pai.lastElementChild.previousElementSibling