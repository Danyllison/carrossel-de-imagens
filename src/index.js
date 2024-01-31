const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0;

setaAvancar.addEventListener("click", function() {
    
    if(imagemAtual === 3){
        return;
    }
    
    esconderImagemAberta();

    imagemAtual++;

    imagens[imagemAtual].classList.add("mostrar")
    setaVoltar.classList.remove("opacidade")

    if(imagemAtual === 3){
        setaAvancar.classList.add("opacidade")
    }
});

setaVoltar.addEventListener("click", function() {

    if(imagemAtual === 0){
        return
    }

    esconderImagemAberta();

    imagemAtual--;

    imagens[imagemAtual].classList.add("mostrar")


    if(imagemAtual === 0){
        setaVoltar.classList.add("opacidade")
    }

    if(imagemAtual === 2){
        setaAvancar.classList.remove("opacidade")
    }
})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

