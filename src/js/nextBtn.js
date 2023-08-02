'use strict';

const nextBtn = () => {
  if (
    typeof document.querySelector('#nextBtn') != 'undefined' &&
    document.querySelector('#nextBtn') != null
  ) {
    const nextBtn = document.querySelector('#nextBtn');

    let formItems = document.querySelectorAll('.form-item-in.d-none');

    const map = document.getElementById('map');

    nextBtn.addEventListener('click', () => {
      if (formItems.length > 0) {
        formItems[0].classList.remove('d-none');
        formItems = document.querySelectorAll('.form-item-in.d-none');
        map.src += '';
      }
    });
  }
};

nextBtn();
