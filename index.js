// Interatividade da barra de duvidas na pagina.
let elementosDuvida = document.querySelectorAll('.duvidas');
elementosDuvida.forEach(function(duvidas){
    duvidas.addEventListener('click', function(){
        duvidas.classList.toggle('ativa')
    })
})