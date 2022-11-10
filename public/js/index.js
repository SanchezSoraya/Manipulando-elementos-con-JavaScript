window.addEventListener('load', function () {
  let main = document.querySelector('main')
  let h2 = document.querySelector('h2')
  let a = document.querySelector('a')
  let p = document.querySelectorAll('p')
  let body = document.querySelector('body')

  let name = prompt("Ingresa tu nombre");
  if (name == null) {
    h2.innerHTML += "Invitado";
  } else {
    h2.innerHTML += name;
  }
  h2.style.textTransform = 'uppercase';
  a.style.color = '#E51B3E';

  if (confirm("¿Desea colocar un fondo de pantalla?")) {
    body.classList.add('fondo');
  }

  for (let i = 0; i < i.length; i++) {
    if (i % 2 == 0) {
      p[i].classList.add('destacadoPar')
    } else {
      { p[i].classList.add('destacadoImpar') }
    }

    main.style.display = 'block';
  }
});



