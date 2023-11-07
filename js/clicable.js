  // Obtiene una referencia a los elementos con las clases ".slider" y ".anuncios"
  var sliderElement = document.querySelector(".slider");
  var anunciosElement = document.querySelector(".anuncios");

  // Agrega controladores de eventos de clic a los elementos
  sliderElement.addEventListener("click", function() {
    // Redirige a la página "construccion.php" cuando se hace clic en el elemento ".slider"
    window.location.href ="construccion.php";
  });

  anunciosElement.addEventListener("click", function() {
    // Redirige a la página "construccion.php" cuando se hace clic en el elemento ".anuncios"
    window.location.href ="construccion.php";
  });