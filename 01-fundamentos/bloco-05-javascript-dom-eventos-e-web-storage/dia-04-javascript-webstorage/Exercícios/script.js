const mainBlog = document.querySelector('main');
function color(value){
	document.body.style.backgroundColor=value;
	let selectionText = value;
	localStorage.setItem('color', selectionText);  
}

function colorFont(value){
    document.body.style.color=value;
		let selectionText = value;
		localStorage.setItem('colorFont', selectionText);  
}

function fontSize(value){
   mainBlog.style.fontSize= value;
	 let selectionText = value;
	localStorage.setItem('sizeFont', selectionText); 
}

function lineHeight(value){
    mainBlog.style.lineHeight= value;
		let selectionText = value;
		localStorage.setItem('heightLine', selectionText); 
 }
 
 function familyFont(value){
    mainBlog.style.fontFamily= value;
		let selectionText = value;
		localStorage.setItem('familyFont', selectionText); 
 }

 window.onload = function() {
  initialRenderization();
};
//função de inicialização
 function initialRenderization() {
    let selectionText = localStorage.getItem('color');
 	 	color(selectionText);
		
		let selectionText1 = localStorage.getItem('colorFont');
 	 	colorFont(selectionText1);
			
		let selectionText2= localStorage.getItem('sizeFont');
 	 	fontSize(selectionText2);
		let selectionText3 = localStorage.getItem('heightLine');
		lineHeight(selectionText3);
		let selectionText4 = localStorage.getItem('familyFonts');
		familyFont(selectionText4);
  }
  
