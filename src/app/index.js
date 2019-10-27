import CustomComponent from '../components/custom';
import '../style/main.scss';

class TestClass {
  constructor() {
    let msg = 'Using ES2015+ syntax';
    console.log(msg);
  }
}
let test = new TestClass();

(async () => {
  console.log('async arrow func!');
})();

const component = async () => CustomComponent();

component().then(element => {
  window.document.querySelector('body > main').appendChild(element);
  console.log('Started');
});
