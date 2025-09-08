// ...existing code...
(function () {
  'use strict';

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // Accepts an optional name (index.html will pass name). Falls back to prompt if none.
  window.greetUser = function (name) {
    if (typeof name !== 'string' || !name.trim()) {
      name = prompt('Enter your name:') || '';
    }
    name = name.trim();
    setText('greeting', name ? `Hello, ${name}!` : 'Hello!');
    const title = document.getElementById('title');
    if (title) title.textContent = 'Welcome' + (name ? ` — ${name}` : '');
  };

  // Toggle the CSS class (keeps styling concerns in CSS)
  window.changeBackground = function () {
    document.body.classList.toggle('alt-bg');
  };

  // Render numbers into the UI (fallback to console if element missing)
  window.showNumbers = function () {
    const numbersEl = document.getElementById('numbers');
    if (!numbersEl) {
      for (let i = 1; i <= 5; i++) console.log('Number ' + i);
      return;
    }
    const nums = Array.from({ length: 5 }, (_, i) => i + 1).join(', ');
    numbersEl.textContent = nums;
  };

  // Toggle visibility using the `.hidden` class (keeps transitions / accessibility consistent)
  window.toggleMessage = function () {
    const msg = document.getElementById('message');
    if (!msg) return;
    msg.classList.toggle('hidden');
  };
})();