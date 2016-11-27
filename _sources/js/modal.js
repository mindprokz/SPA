export default function initModal() {
  document.querySelector('#modal .wrap .closer')
    .addEventListener('click', () => {
      modalClose();
    });

  // Услуги
  [...document.querySelectorAll('#services ul li')]
    .forEach( (elem) => {
      elem.addEventListener('click', () => {
        modalOpen();
      });
    });

  // бренд партнеры
  [...document.querySelectorAll('#brand ul li img')]
    .forEach( (elem) => {
      elem.addEventListener('click', () => {
        modalOpen();
      });
    });
}

function modalOpen() {
  let _modal = document.querySelector('#modal');
  let _modal_wrap = document.querySelector('#modal .wrap');

  _modal.style.display = 'block';
  setTimeout( () => {
    _modal.classList.add('open');
    _modal_wrap.classList.add('open');
  }, 10);

}

function modalClose() {
  let _modal = document.querySelector('#modal');
  let _modal_wrap = document.querySelector('#modal .wrap');

  _modal.classList.remove('open');
  _modal_wrap.classList.remove('open');

  setTimeout( () => {
    _modal.style.display = 'none';
  }, 300);}
