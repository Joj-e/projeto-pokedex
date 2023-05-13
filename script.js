//Função: Alterar tema escuro/claro do site.

const buttonAction = document.getElementById('dark-light-button');

buttonAction.addEventListener('click', themeChange);

function themeChange(){
    const background = document.querySelector('body');
    const themeImage = document.getElementsByClassName('button-icon')[0];

    background.classList.toggle('dark');
    
    if(background.classList.contains('dark')){
        themeImage.src = "src/imagens/moon.png";
    }else{
        themeImage.src = "src/imagens/sun.png";
    }
}