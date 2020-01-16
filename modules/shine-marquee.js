// load web components polyfill first, then load this JS file
// see https://github.com/mdn/web-components-examples and 
// https://www.webcomponents.org/introduction / https://github.com/webcomponents/community/blob/8d0be8b2f118c4cfb8298ffb6a0b07e2d3610101/static/introduction.md
class ShineMarquee extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    // self functionality written in here
    // self.addEventListener(...)
    // return the right context

    var shadow = this.attachShadow({mode: 'open'});
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class','wrapper');
    wrapper.innerHTML = `Big Words`

    var style = document.createElement('style');

    style.textContent = `.wrapper {

    }`
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    return self;
  }
}

window.customElements.define('shine-marquee', ShineMarquee);

