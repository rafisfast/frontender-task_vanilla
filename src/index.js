import data     from './data.js';
import Event    from './components/event';
import Comments from './components/comments';

/**
 * Fundraising App
 */

class App {
  constructor(el, data) {
    this.el = el;
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.event    = new Event(data);
    this.comments = new Comments(data);
  }

  render() {
    this.el.innerHTML = `
      <div class="row mt-5">
        <div class="col-md-6 column">${this.event.render()}</div>
        <div class="col-md-m6 column">${this.comments.render()}</div>
      </div>
    `;
  }
}
const app = new App(document.querySelector('.container'), data);
