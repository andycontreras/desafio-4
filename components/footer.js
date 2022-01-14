function footerCompo (el){
  const compoEl = document.createElement('div');
  compoEl.innerHTML = `
  <footer class="footer">
    <a href="./home.html"><img src="./elementos/Nombre-01.png" alt="" class="logo"></a>
    <div class="footer__redes-container">
      <div class="redes_links">
        <a href="https://www.instagram.com/andresconvar/"><img src="./elementos/instagram.png"  class="redes__img"></a>
        <a href="https://www.linkedin.com/in/andr%C3%A9s-contreras-vargas-0a4432206/"><img src="./elementos/linkedin.png" class="redes__img"></a>             
        <a href="https://github.com/andycontreras"><img src="./elementos/github.png" class="redes__img"></a>    
    </div>
  </footer>
  `;
  el.appendChild(compoEl)
  };