function sendForm(formEl, inputs){
  formEl.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData.entries());
    const mensaje = `
    Nombre Usuario: ${object.userName} <br> <br>
    Mail: ${object.userEmail} <br> <br>
    MEnsaje: ${object.message}
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
      
      alert("¡" + object.userName + "mensaje enviado con exito!" );
      
      inputs.forEach((input)=>{
        input.value = "";
      });
    })
    .catch(()=>{
      alert("Error al enviar, verifique los datos.");
    });
  });
}

function contactComp(el){
  const componenteEl = document.createElement('div');
  componenteEl.innerHTML = `
  <section class="contacto">
  <h2 class="contacto__title">Contacto</h2>
  <div class="formulario">
    <form class="contacto__form">
      <label>
        <h3 class="contacto__label" for="name">Nombre</h3>
        <input class="form__input contacto__input" type="text" name="name">
      </label>
      <label>
        <h3 class="contacto__label" for="email">Email</h3>
        <input class="form__input contacto__input" type="text" name="email">
      </label>
      <label>
        <h3 class="contacto__label" for="message">Mensaje</h3>
        <textarea class="form__input contacto__input" name="message"></textarea>
      </label>
      <div class="contacto__submit-cont">
        <button class="contacto__submit-button">Enviar</button>
      </div>
    </form>
  </div>
  </section>
  `
  const form = document.querySelector(".contacto");
  const inputs = document.querySelector(".form__input");
  sendForm(form, inputs)
  el.appendChild(componenteEl);
}
