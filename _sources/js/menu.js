export default function menuInit() {

  document.querySelector('#menu .menu_opener')
    .addEventListener('click', () => {
      menuOpen();
      mobileOpener();
    });

  document.querySelector('#menu .menu_closer')
    .addEventListener('click', () => {
      menuClose();
      mobileOpener();
    });

  document.querySelector('#menu .mobile_menu_opener .burger')
    .addEventListener('click', () => {
      mobileOpener(true);
    });
}

function menuOpen() {
  document.querySelector('#menu footer').classList.add('open');
}

function menuClose() {
  document.querySelector('#menu footer').classList.remove('open');
}


// @event : bool -> Если функция самостоятельная передать true
function mobileOpener(event) {
  let _elem = document.querySelector('#menu .mobile_menu_opener .burger');

  if ( _elem.classList.contains('closer') ) {
    _elem.classList.remove('closer');
    event ? menuClose() : null;
  } else {
    _elem.classList.add('closer');
    event ? menuOpen() : null;
  }
}
