'use strict';

import checkboxItems from './checkboxItems.js';
import tooltips from './tooltips.js';
import customFileInput from './customFileInput.js';

export class App {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      checkboxItems();
      tooltips();
      customFileInput();
    });
  }
}
