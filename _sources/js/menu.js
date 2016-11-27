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


  $(document).on('click', '.anchor', function () {
    $('html, body').animate({
      scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 85
    }, 1000 );

    if ( menuHasOpen() ) {
      menuClose();
    }

    return false;
  });
}

function menuOpen() {
  document.querySelector('#menu footer').classList.add('open');
}

function menuClose() {
  document.querySelector('#menu footer').classList.remove('open');
}

function menuHasOpen() {
  return document.querySelector('#menu footer').classList.contains('open');
}

// @event : bool -> Если нужно так же закрыть меню сразу, передать true
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
