'use strict';

const checkboxItems = () => {
  if (
    typeof document.querySelector('.content-items-area .form-check-input') !=
      'undefined' &&
    document.querySelector('.content-items-area .form-check-input') != null
  ) {
    const checkboxItems = document.querySelectorAll(
      '.content-items-area .form-check-input'
    );

    const selectArea = () => {
      checkboxItems.forEach((el) => {
        if (el.checked) {
          el.closest('.content-items-area').classList.add('selected');
        }
      });
    };

    checkboxItems.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.checked) {
          el.closest('.content-items-area').classList.add('selected');
        } else if (!el.checked) {
          let checked = false;
          const closestCheckItems = el
            .closest('.content-items-area')
            .querySelectorAll('.form-check-input');
          closestCheckItems.forEach((el) => {
            if (el.checked) checked = true;
          });
          if (!checked)
            el.closest('.content-items-area').classList.remove('selected');
        }
      });
    });

    selectArea();
  }
};

export default checkboxItems;
