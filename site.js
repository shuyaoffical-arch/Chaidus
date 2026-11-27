/*
 * Chaidus personal site
 * To add a blog post: add a list item with a <time datetime="YYYY-MM-DD"> date
 * to blog/index.html and the home page. Enter publication dates in ISO format.
 *
 * This optional first-party cookie counter is browser-local. GitHub Pages has no
 * server-side endpoint, so the count is never sent to or visible to the site owner.
 */
(() => {
  const consentCookie = 'chaidus_cookie_consent';
  const countCookie = 'chaidus_page_views';
  const cookieBase = `; Path=/; SameSite=Lax; Max-Age=${60 * 60 * 24 * 365}`;
  const secure = location.protocol === 'https:' ? '; Secure' : '';

  function readCookie(name) {
    const prefix = `${name}=`;
    const entry = document.cookie.split('; ').find((item) => item.startsWith(prefix));
    return entry ? decodeURIComponent(entry.slice(prefix.length)) : null;
  }

  function writeCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}${cookieBase}${secure}`;
  }

  function showStatus(message) {
    let status = document.getElementById('cookie-counter-status');
    if (!status) {
      status = document.createElement('p');
      status.id = 'cookie-counter-status';
      status.className = 'cookie-counter-status';
      status.setAttribute('aria-live', 'polite');
      (document.querySelector('.site-footer') || document.querySelector('.window-content')).append(status);
    }
    status.textContent = message;
  }

  function startLocalCounter() {
    const current = Number.parseInt(readCookie(countCookie) || '0', 10);
    const next = Number.isFinite(current) && current >= 0 ? current + 1 : 1;
    writeCookie(countCookie, String(next));
    showStatus(`This browser has viewed pages on this site ${next} time${next === 1 ? '' : 's'}. This count stays on this device and is not sent to the site owner.`);
  }

  function showConsent() {
    if (document.getElementById('cookie-consent')) return;
    const panel = document.createElement('section');
    panel.id = 'cookie-consent';
    panel.className = 'cookie-consent';
    panel.setAttribute('aria-label', 'Cookie preferences');
    panel.innerHTML = '<div><strong>Optional page-view cookie</strong><p>A first-party cookie can count page views on this browser. The count stays on this device; this static site cannot receive or identify visitors.</p></div><div class="cookie-actions"><button type="button" data-choice="accept">Allow local count</button><button type="button" data-choice="reject">Reject</button></div>';
    document.body.append(panel);
    panel.addEventListener('click', (event) => {
      const choice = event.target.closest('button')?.dataset.choice;
      if (!choice) return;
      writeCookie(consentCookie, choice);
      panel.remove();
      if (choice === 'accept') startLocalCounter();
      else showStatus('Cookie tracking is off for this browser.');
    });
  }

  function addCookieSettings() {
    const footer = document.querySelector('.site-footer');
    if (!footer || footer.querySelector('[data-cookie-settings]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cookie-settings';
    button.dataset.cookieSettings = '';
    button.textContent = 'Cookie settings';
    button.addEventListener('click', () => {
      document.cookie = `${consentCookie}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
      document.cookie = `${countCookie}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
      document.getElementById('cookie-counter-status')?.remove();
      showConsent();
    });
    footer.append(button);
  }

  document.addEventListener('DOMContentLoaded', () => {
    addCookieSettings();
    const consent = readCookie(consentCookie);
    if (consent === 'accept') startLocalCounter();
    else if (consent === 'reject') showStatus('Cookie tracking is off for this browser.');
    else showConsent();
  });
})();
