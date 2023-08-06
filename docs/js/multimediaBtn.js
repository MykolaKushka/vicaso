'use strict';

const multimediaBtn = () => {
  if (
    typeof document.querySelector('#videoBtn') != 'undefined' &&
    document.querySelector('#videoBtn') != null
  ) {
    const videoBtn = document.getElementById('videoBtn');
    const threeDBtn = document.getElementById('threeDBtn');
    const photosArea = document.getElementById('photosArea');
    const videoArea = document.getElementById('videoArea');
    const threeDTours = document.getElementById('threeDTours');

    videoBtn.addEventListener('click', () => {
      photosArea.classList.remove('d-lg-block');
      threeDTours.classList.remove('d-lg-block');
      videoArea.classList.add('d-lg-block');
    });

    threeDBtn.addEventListener('click', () => {
      photosArea.classList.remove('d-lg-block');
      videoArea.classList.remove('d-lg-block');
      threeDTours.classList.add('d-lg-block');
    });
  }
};

multimediaBtn();
