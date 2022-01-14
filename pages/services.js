function servicesComp (el){
  const serviciosEl  = document.createElement('div');
  serviciosEl.innerHTML = `
  <template id="servicios-template-card">
  <div class="servicios__card">
    <img src="./elementos/web-development.png" alt="" class="servicios__img">
    <div class="servicos__card-content">
      <h4 class="servicios__card-title">titulo de trabajo</h4>
      <p class="servicios__card-text">texto de relleno, texto de relleno, texto de relleno</p>
    </div>
  </div>
</template>  
  `;
el.appendChild(serviciosEl);
}

function addServices (params = {}){
const template = document.querySelector("#servicios-template-card");
const container = document.querySelector(".card__content");

template.content.querySelector(".servicios__card-title").textContent = params.title;
template.content.querySelector(".servicios__card-text").textContent = params.description.content[0].content[0].value;
template.content.querySelector(".servicios__img").src = "http:" + params.image;
//  template.content.querySelector(".url__acceso").href = params.url;


const clone = document.importNode(template.content, true);
container.appendChild(clone)
};

function findImg (id, datos) {
 const imagen = datos.includes.Asset.find((asset)=>{
   return asset.sys.id == id;
 });
 return imagen
};

function getData () {
return fetch("https://cdn.contentful.com/spaces/mie755vcmrcn/environments/master/entries?access_token=cCnuT46k1cak_o4Hpw0noj0G48jJOv89-QhcsCG1wzA&content_type=services")
 .then((res)=>{
   // console.log(res)
 return res.json();
})
 .then((dat)=>{
   console.log(dat)
   const fieldsC = dat.items.map((item)=>{
     const imgId = item.fields.imagen.sys.id
     const imagen = findImg(imgId, dat);
     const linkImg = imagen.fields.file.url;
     return {
       image: linkImg,
       title: item.fields.titulo,
       description: item.fields.descripcion,
     };
   }); 
 return fieldsC
});
};


function main (){
getData().then((works)=>{
  for(const w of works){
   addServices(w);
  }
});

}
main()