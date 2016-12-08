import serv from './services'

export default function initModal() {
  document.querySelector('#modal .wrap .closer')
    .addEventListener('click', () => {
      modalClose();
    });

  // Услуги
  [...document.querySelectorAll('#services ul li')]
    .forEach( (elem, num) => {
      elem.addEventListener('click', () => {
        modalChange(serv[num]);
      });
    });

  // бренд партнеры
  [...document.querySelectorAll('#brand ul li')]
    .forEach( (elem) => {
      elem.addEventListener('click', function () {
        getQuery(this);
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
  }, 300);
}

/*
  @elem : HTMLElement ->  do query on the server and get post
*/
function getQuery(elem) {
  let link = elem.dataset.link;
  $.get(`${link}&json=1`, function (data) {
    let result = {};

    if (data.post.type === 'brand') {
      result.title = data.post.title;
      result.content = 'wpcf-brand_content' in data.post.custom_fields ?
        data.post.custom_fields['wpcf-brand_content'][0] : '';
      result.footer = 'wpcf-brand_site' in data.post.custom_fields ?
        data.post.custom_fields['wpcf-brand_site'][0] : '';
    }

    modalChange(result);
  });
}

/*
  @data : object -> abstract object which create in getQuery function
*/
function modalChange(data) {
  let markup = '';
  markup += headerModalMarkup(data.title);
  markup += contentModalMarkup(data.content, data.image);
  markup += footerModalMarkup(data.footer);

  document.querySelector('#modal .wrap .content_query')
    .innerHTML = markup;

  $("#modal .wrap .content").mCustomScrollbar({
    axis: "y",
    theme: 'dark'
  });

  modalOpen();
}


/* markup functions */
function headerModalMarkup(title) {
  return `<h3>${title}</h3>`;
}

function contentModalMarkup(content, image) {
 let markup = '<div class="content">';

 if (image) {
   markup += `<div class="image"><img src="${image}"></div>`;
 }
 markup += `<p>${content}</p>`;

 return markup + '</div>';
}

function footerModalMarkup(link) {
  let markup = '';

  if (link) {
    markup += `<a href="${link}" class="link">${link}</a>`
  }

  return markup;
}
