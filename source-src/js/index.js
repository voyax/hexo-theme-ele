import '../style/index.less'
import hljs from 'highlightjs/highlight.pack.min.js';

hljs.initHighlightingOnLoad();

const tocTip = document.querySelector(".toc-tip");
function toggleToc() {
  document.querySelector('.toc-container').classList.toggle('show');
}
if (tocTip) {
  tocTip.addEventListener("mouseenter", toggleToc);
}

const navIcon = document.querySelector(".nav-icon");
function toggleNav() {
  var nav = document.querySelector(".main-nav");
  if (nav.className === "main-nav") {
    nav.className += " responsive";
  } else {
      nav.className = "main-nav";
  }
}
if (navIcon) {
  navIcon.addEventListener('click', toggleNav);
}
