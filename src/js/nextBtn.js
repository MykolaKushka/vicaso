'use strict';

const nextBtn = () => {
  if (
    typeof document.querySelector('#nextBtn') != 'undefined' &&
    document.querySelector('#nextBtn') != null
  ) {
    const nextBtn = document.querySelector('#nextBtn');

    let formItemsVisible = document.querySelectorAll(
      '#addressArea .form-item-shown .form-control'
    );

    let formItemsHidden = document.querySelectorAll(
      '#addressArea .form-item-in.height-0'
    );

    const map = document.getElementById('map');

    const checkIfInputsValued = () => {
      let value = true;
      formItemsVisible.forEach((el) => {
        if (el.value.length < 1) {
          value = false;
        }
        if (el.tagName.toLowerCase() === 'select' && el.value === '0') {
          value = false;
        }
        if (value) nextBtn.removeAttribute('disabled');
        else nextBtn.setAttribute('disabled', '');
      });
    };

    checkIfInputsValued();

    const inputEvent = () => {
      formItemsVisible.forEach((el) => {
        el.addEventListener('input', () => {
          checkIfInputsValued();
        });
      });
    };

    inputEvent();

    nextBtn.addEventListener('click', () => {
      if (formItemsHidden.length > 0) {
        formItemsHidden[0].classList.remove('height-0');
        formItemsHidden[0].classList.add('form-item-shown');
        if (formItemsHidden[0].id === 'shootDateArea') {
          document.getElementById('nextBtnArea').classList.add('d-none');
          document.getElementById('loginBtnArea').classList.remove('d-none');
        } else {
          formItemsHidden = document.querySelectorAll(
            '#addressArea .form-item-in.height-0'
          );
          formItemsVisible = document.querySelectorAll(
            '#addressArea .form-item-shown .form-control'
          );
          checkIfInputsValued();
          inputEvent();
        }
        map.src += '';
      }
    });
  }
};

nextBtn();
