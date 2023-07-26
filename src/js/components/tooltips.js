'use strict';

const tooltips = () => {
  if (
    typeof document.querySelector('[data-bs-toggle="tooltip"]') !=
      'undefined' &&
    document.querySelector('[data-bs-toggle="tooltip"]') != null
  ) {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }
};

export default tooltips;
