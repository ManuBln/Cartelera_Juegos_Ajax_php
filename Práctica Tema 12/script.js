function datos(codigo) {
  var xhr = new XMLHttpRequest();
  var cargando = document.getElementById("cargando");



  xhr.onreadystatechange = function () {
    cargando.style.display = "block";
    setTimeout(() => {


      if (xhr.readyState == 4 && xhr.status == 200) {
        cargando.style.display = "none";
        document.getElementById('juegos').innerHTML = xhr.responseText;
      }
    }, 1000)
  }

  xhr.open('GET', 'datos.php?cod=' + codigo, true);
  xhr.send();
}