
const estrellas = document.querySelectorAll('.star');
const final = document.querySelector('.calificador');
console.log(estrellas);

estrellas.forEach((star, i) =>{
  star.addEventListener('click', ()=>{

    let variable = i + 1;
    console.log(variable);
    final.innerHTML = `La calificacion es de ${variable}/5`;
    estrellas.forEach((star, j)=>{
      if(variable >= j+1){
        star.innerHTML = '&#9733';
      }else {
        star.innerHTML = '&#9734'
      }
    });

  });
});