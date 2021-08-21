function PreencherSelect(){
			

  var vetSiglas = ["ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to"];
  
  var vetEstados = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];
  
  var select = document.getElementById("state");
    
  for(var i = 0; i < vetSiglas.length; i++){
    var Option = document.createElement("option");
    Option.value = vetSiglas[i];
    Option.innerHTML = vetEstados[i];
    
    select.appendChild(Option);
    
  }
}


window.onload = function() {
  PreencherSelect()
  let submitButton = document.querySelector('#buttonForm');
  submitButton.addEventListener('click', submitForm);

  let clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', clearForm);

}