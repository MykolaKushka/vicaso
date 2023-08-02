'use strict';

const nextBtn = () => {
  if (
    typeof document.querySelector('#nextBtn') != 'undefined' &&
    document.querySelector('#nextBtn') != null
  ) {
    const nextBtn = document.querySelector('#nextBtn');

    const formItems = document.querySelectorAll('.form-item-in');

    nextBtn.addEventListener('click', () => {
      formItems.forEach((el) => {
        if (el.classList.contains('d-none')) {
          el.classList.remove('d-none');
          return;
        }
      });
    });
  }
};

export default nextBtn;
