
let arrayElementos = [
    'nada',
    document.querySelector('#oferta1'),
    document.querySelector('#oferta2'),
    document.querySelector('#oferta3'),
]

for (let i = 1; i <= 3; i++) {
    arrayElementos[i].addEventListener('mouseover',()=>{
        document.getElementById(`off-icon${i}`).style.color = '#28a745';
        document.getElementById(`off-icon${i}`).style.transition = 0.7 + 's all';
        
    })
    arrayElementos[i].addEventListener('mouseout', ()=>{
        document.getElementById(`off-icon${i}`).style.color = 'black';
        document.getElementById(`off-icon${i}`).style.transition = 0.7 + 's all';
        document.getElementById(`off-icon${i}`).style.boxShadow = "";
    })
}

