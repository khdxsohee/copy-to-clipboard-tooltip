// copyToClipboard.js

(function () {
  function showTooltip(el, message) {
    let tooltip = document.createElement('span');
    tooltip.className = 'copy-tooltip';
    tooltip.innerText = message;
    el.appendChild(tooltip);
    setTimeout(() => {
      tooltip.remove();
    }, 2000);
  }

  function copyText(text, el) {
    navigator.clipboard.writeText(text).then(() => {
      showTooltip(el, 'Copied!');
    }).catch(() => {
      showTooltip(el, 'Failed!');
    });
  }

  function setupCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach(button => {
      button.addEventListener('click', () => {
        const text = button.getAttribute('data-copy');
        copyText(text, button);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', setupCopyButtons);
})();
