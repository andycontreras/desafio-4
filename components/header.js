function headerComp (el) {
  const compoEl = document.createElement('div');
  compoEl.innerHTML= `
  <header class="header">
      <a href="./index.html"><img src="./elementos/Nombre-01.png" alt="" class="logo"></a>
      <div class="header__menu">
        <div class="bloque"></div>
        <div class="bloque"></div>
        <div class="bloque"></div>
      </div>
      <div class="header__menu-web">
      <a href="./portfolio.html" class="menu-web__style">Portfolio</a>
      <a href="./services.html" class="menu-web__style">Servicios</a>
      <a href="./contact.html" class="menu-web__style">Contacto</a>
    </div>
      <div class="ventana">
      <div class="ventana--ajuste">
      <div class="ventana__cancel">X</div>
      <nav class="ventana__navi">
        <ul class="ventana__list">
          <a class="menu-burger__style" href="./portfolio.html"><li class="list--element">Portfolio</li></a>
          <a class="menu-burger__style" href="./services.html"><li class="list--element">Servicios</li></a>
          <a class="menu-burger__style" href="./contact.html"><li class="list--element">Contacto</li></a>
        </ul>
      </nav>
      </div>
    </div>

    </header>
  `;
  el.appendChild(compoEl)

  const abrirVentana = compoEl.querySelector(".header__menu");
  const cerrarVentana = compoEl.querySelector(".ventana__cancel");

  abrirVentana.addEventListener("click",()=>{
    compoEl.querySelector(".ventana").style.display = "inherit";
  })
  cerrarVentana.addEventListener("click", function(){
    compoEl.querySelector(".ventana").style.display = "";
    // cerrarVentana.style.display = "";
  })
  
}