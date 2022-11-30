let btnTodos = {
    elemento: document.querySelector('#btnTodos'),
};
let btnManutencao = {
    elemento: document.querySelector('#btnManutencao'),
}
let btnOutros = {
    elemento: document.querySelector('#buttonOutros'),
};

arrayEsperiencias = document.querySelectorAll('.xp');
arrayManutencao = document.querySelectorAll('.manutencao');
arrayOutros = document.querySelectorAll('.outro');

btnTodos.elemento.addEventListener('click',()=>{
    arrayEsperiencias.forEach(elemento => {
        elemento.style.display = "";
    });
})
btnManutencao.elemento.addEventListener('click',()=>{
    arrayManutencao.forEach(elemento =>{
        elemento.style.display = "";
    })
    arrayOutros.forEach(elemento => {
        elemento.style.display = "none";
    });
})

btnOutros.elemento.addEventListener('click',()=>{
    arrayOutros.forEach(elemento => {
        elemento.style.display = "";
    });
    arrayManutencao.forEach(elemento =>{
        elemento.style.display = "none";
    })
})