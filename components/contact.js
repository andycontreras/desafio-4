function sendForm(){
  const formEl = document.querySelector(".contacto__form");
  formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData.entries());
    const mensaje = `
    Nombre Usuario: ${object.name} <br> <br>
    Mail: ${object.email} <br> <br>
    Mensaje: ${object.message}
    `;
    
    fetch("https://apx-api.vercel.app/api/utils/dwf",{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        to: "andresconvar@gmail.com",
        message: mensaje,
      }),
    })
    .then(()=>{
      
      alert("¡" + object.name + " mensaje enviado con exito!" );
    })
    formEl.reset();
  });
}

function contactComp(el){
  const componenteEl = document.createElement('div');
  componenteEl.innerHTML = `
  <section class="contacto">
  <h2 class="contacto__title">Contacto</h2>
  <div class="formulario">
  <form id="contact-form" class="contacto__form">
  <label>
  <h3 class="contacto__label" for="name">Nombre</h3>
        <input class="form__input contacto__input" type="text" name="name" required>
      </label>
      <label>
        <h3 class="contacto__label" for="email">Email</h3>
        <input class="form__input contacto__input" type="text" name="email" required>
      </label>
      <label>
      <h3 class="contacto__label" for="message">Mensaje</h3>
        <textarea class="form__input contacto__input" name="message" required></textarea>
        </label>
      <div class="contacto__submit-cont">
        <button class="contacto__submit-button">Enviar</button>
      </div>
    </form>
    </div>
    </section>
    `
    
    el.appendChild(componenteEl);
    
    sendForm();
}
