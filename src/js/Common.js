import objectFitImages from 'object-fit-images';
import '@fancyapps/fancybox';

import './components/MobNav';

export class Common {
  constructor() {
    this.init();
  }
  init() {
    objectFitImages();
  }
}

export default new Common();
