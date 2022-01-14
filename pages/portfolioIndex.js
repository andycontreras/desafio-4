function portfolioComp(el){
  const portfolioEl = document.createElement('div');
  portfolioEl.innerHTML=`
  <template id="Portfolio-template-card">
  <div class="portfolio__card">
    <img src="./elementos/web-development.png" alt="" class="portfolio__img">
    <div class="portfolio__card-content">
      <h4 class="portfolio__card-title">titulo de trabajo</h4>
      <p class="portfolio__card-text">texto de relleno, texto de relleno, texto de relleno</p>
      <a class="portfolio__link" href="https://andycontreras.github.io/desafiom3/">ver más</a>
    </div>
  </div>
</template>`
el.appendChild(portfolioEl)
}

function addPortfolio (params={}) {
  const template = document.querySelector("#Portfolio-template-card");
  const container = document.querySelector(".card-portfolio__content");

  template.content.querySelector(".portfolio__card-title").textContent = params.title;
  template.content.querySelector(".portfolio__card-text").textContent = params.description.content[0].content[0].value;
  template.content.querySelector(".portfolio__img").src = "http:" + params.image;
  template.content.querySelector(".portfolio__link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function findImg(id, datos){
  const imagen = datos.includes.Asset.find((asset)=>{
    return asset.sys.id == id;
  });
  return imagen
};

function getData(){
  return fetch("https://cdn.contentful.com/spaces/mie755vcmrcn/environments/master/entries?access_token=cCnuT46k1cak_o4Hpw0noj0G48jJOv89-QhcsCG1wzA&content_type=portfolio")
  .then((res)=>{
    return res.json();
  })
  .then((dat)=>{
    console.log(dat)
    const filedsContent = dat.items.map((item)=>{
      const imgId = item.fields.imagen.sys.id;
      const imag = findImg(imgId, dat);
      const linkImag = imag.fields.file.url;

      return {
        image: linkImag,
        title: item.fields.titulo,
        description: item.fields.descripcion,
        url: item.fields.url,
      };
    });
    return filedsContent
  })
}

function main () {
  getData().then((works)=>{
    for(const w of works){
      addPortfolio(w);
    };
  });
};

 main()