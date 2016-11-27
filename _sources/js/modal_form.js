export function modalInit() {
  document.querySelector('#menu .form_open')
    .addEventListener('click', (e) => openModalForm(e));

  document.querySelector('#about .row a.button')
    .addEventListener('click', (e) => openModalForm(e));

  document.querySelector('#services .sert_text a.button')
    .addEventListener('click', (e) => openModalForm(e));

  document.querySelector('#modal_form form .closer')
    .addEventListener('click', (e) => closeModalForm(e));

  document.querySelector('#modal_form button.close_modal_form')
    .addEventListener('click', (e) => closeModalForm(e));
}

export function openModalForm(e) {
  e.preventDefault();
  let _elem = document.querySelector('#modal_form');

  _elem.style.display = 'block';
  setTimeout( () => _elem.classList.add('open'), 10 );
}

export function closeModalForm(e) {
  e.preventDefault();
  let _elem = document.querySelector('#modal_form');

  _elem.classList.remove('open');
  setTimeout( () => _elem.style.display = 'none', 300 );

}
