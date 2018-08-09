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