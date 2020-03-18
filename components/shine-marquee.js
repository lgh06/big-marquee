// load web components polyfill first, then load this JS file
// see https://github.com/mdn/web-components-examples and
// https://www.webcomponents.org/introduction / https://github.com/webcomponents/community/blob/8d0be8b2f118c4cfb8298ffb6a0b07e2d3610101/static/introduction.md
(function() {
  function html(strings, ...keys) {
    return strings;
  }
  function css(strings, ...keys) {
    return strings;
  }

  var wrapperInnerHtml = html`
    <div class="inner">
      asdsda <br />
      asdsadas
    </div>
  `;

  class ShineMarquee extends HTMLElement {
    constructor(...args) {
      const self = super(...args);
      // self functionality written in here
      // self.addEventListener(...)
      // return the right context

      var shadow = this.attachShadow({ mode: "open" });
      // this.shadowRoot === shadow
      console.log(this.shadowRoot === shadow);

      var wrapper = document.createElement("div");
      wrapper.setAttribute("class", "wrapper");
      wrapper.innerHTML = wrapperInnerHtml;

      var style = document.createElement("style");

      style.textContent = css`
        .wrapper {
          height: 100%;
          width: 100%;
          background-color: black;
          color: white;
          font-size: 80vh;
          line-height: 100vh;
          overflow: hidden;
        }
        .inner {
          height: 100%;
          transition: none;
        }
        .inner.anime {
          transition: transform 5s linear;
          transform: translateY(-100vh);
        }
        :host {
          width: 100%;
          height: 100vh;
          display: block;
        }
      `;
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      return self;
    }
    static get observedAttributes() {
      return ["moving"];
    }

    get moving() {
      return this.hasAttribute("moving");
    }

    set moving(val) {
      if (val) {
        this.setAttribute("moving", "");
      } else {
        this.removeAttribute("moving");
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (this.moving) {
        this.shadowRoot.querySelector('.inner').classList.add('anime')
      } else {
        this.shadowRoot.querySelector('.inner').classList.remove('anime')
      }
    }
  }

  // window.customElements.define('shine-marquee', ShineMarquee);
  Slim.tag("shine-marquee", null, ShineMarquee);
})();
