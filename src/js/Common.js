import objectFitImages from 'object-fit-images';
import '@fancyapps/fancybox';

export class Common {
  constructor() {
    this.init();
  }
  init() {
    objectFitImages();
  }
}

export default new Common();
