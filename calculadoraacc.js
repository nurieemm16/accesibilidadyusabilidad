//Autora: Núria Marzo

document.addEventListener("DOMContentLoaded", function() {
  const modoOscuroBtn = document.getElementById("modo-oscuro-btn");
  const modoClaroBtn = document.getElementById("modo-claro-btn");
  const body = document.body;

  modoOscuroBtn.addEventListener("click", function() {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      cambiarModoModal('dark-mode');
  });

  modoClaroBtn.addEventListener("click", function() {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      cambiarModoModal('light-mode');
  });

  // Añade la función para cambiar el modo en el modal-body
  function cambiarModoModal(modo) {
      const modalBody = document.querySelector('.modal-body');
      modalBody.classList.remove('dark-mode', 'light-mode');
      modalBody.classList.add(modo);
  }
});



function calcularPropina() {
    let total = document.getElementById("total"); // Agafar l'element HTML
    console.log(total);
    let totalValue = total.value; // Agafar el valor de l'element input total i posar-lo dins de la variable total
    let totalFloat = parseFloat(totalValue); // Pasar el valor de totalValue a float/numero (perquè ve com str)

  // Afagem element Porcentaje de Propina i passar-ho a num i assignar-li el valor que se l'hi ha introduit
  let tipPercentage = parseFloat(
    document.getElementById("propinaPorcentaje").value
  ); // Forma curta

  // Passem propina de percentatge a decimal
  let tipDecimal = tipPercentage / 100;

  // Calculem propina
  let tip = totalFloat * tipDecimal;

  // Calculem preu total que paguem
  let result = totalFloat + tip;

  //El mateix càlcul però en una sola linia
  let resultOneLine = totalFloat + (totalFloat * tipPercentage) / 100;

  //Agafo element de l'html i el modifico amb innerhtml
  document.getElementById("propina").innerHTML = tip + " €"; //Per mostrar la propina i el simbol d'euro

  //Agafo element de l'html i el modifico amb innerhtml
  document.getElementById("totalResult").innerHTML = result + " €";
}



let btncalcular = document.getElementById("btnCalcular"); //Agafem de l'html el botón calcular
btncalcular.addEventListener("click", calcularPropina); //i li diem que quan fem click al botó, ens faci la funció calcular propina que està més adalt

