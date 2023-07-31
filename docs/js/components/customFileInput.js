'use strict';

const customFileInput = () => {
  if (
    typeof document.querySelector('.custom-file-input') != 'undefined' &&
    document.querySelector('.custom-file-input') != null
  ) {
    const customFileBtns = document.querySelectorAll('.custom-file-input');

    customFileBtns.forEach((el) => {
      el.addEventListener('change', () => {
        el.nextElementSibling.innerHTML = el.files[0].name;
      });
    });
  }
};

export default customFileInput;
