    /* VELORO — Premium Men's Formalwear Retail Storefront Core Application */
    (() => {
      'use strict';

      const $ = (selector, root = document) => root.querySelector(selector);
      const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

      const ICON_LIBRARY = `<svg xmlns="http://www.w3.org/2000/svg"><defs>
<symbol id="arrow-up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></symbol>
<symbol id="arrow-right" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="arrow-left" viewBox="0 0 24 24"><path d="M19 12H5m7 7-7-7 7-7"/></symbol>
<symbol id="chevron-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol>
<symbol id="chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>
<symbol id="menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
<symbol id="moon" viewBox="0 0 24 24"><path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/></symbol>
<symbol id="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></symbol>
<symbol id="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></symbol>
<symbol id="search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></symbol>
<symbol id="search-x" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5m-12-13 5 5m0-5-5 5"/></symbol>
<symbol id="sliders-horizontal" viewBox="0 0 24 24"><path d="M4 7h9m4 0h3M4 17h3m4 0h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></symbol>
<symbol id="rotate-ccw" viewBox="0 0 24 24"><path d="M3 11a9 9 0 1 1 2.7 6.4M3 4v7h7"/></symbol>
<symbol id="layers" viewBox="0 0 24 24"><path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/></symbol>
<symbol id="ruler" viewBox="0 0 24 24"><path d="M21 3 3 21m7-14 3 3m-6 0 3 3m-6 0 3 3m8-12 3 3"/></symbol>
<symbol id="award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.2 13 6 22l6-3 6 3-2.2-9"/></symbol>
<symbol id="map-pin" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
<symbol id="scissors" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.1 8.1 21 21M14 10l7-7M8.1 15.9 13 11"/></symbol>
<symbol id="shirt" viewBox="0 0 24 24"><path d="m8 3 4 2 4-2 5 4-3 4-2-1v11H8V10l-2 1-3-4 5-4Z"/></symbol>
<symbol id="sparkles" viewBox="0 0 24 24"><path d="m12 3 1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5L12 3ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"/></symbol>
<symbol id="info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/></symbol>
<symbol id="message-circle" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.8L3 21l1.8-5.5a8.5 8.5 0 1 1 16.2-4Z"/></symbol>
<symbol id="check" viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"/></symbol>
<symbol id="check-circle" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></symbol>
<symbol id="plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
<symbol id="lock-keyhole" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></symbol>
<symbol id="clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
<symbol id="phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L7.3 9.7a16 16 0 0 0 7 7l1.5-1.6a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.7 2Z"/></symbol>
<symbol id="mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></symbol>
<symbol id="instagram" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M18 6h.01"/></symbol>
<symbol id="facebook" viewBox="0 0 24 24"><path d="M15 22v-8h4l.7-4H15V8c0-1.2.5-2 2-2h3V2h-3.5C12 2 11 4.5 11 8v2H8v4h3v8"/></symbol>
<symbol id="linkedin" viewBox="0 0 24 24"><path d="M4 9v12M4 4v.1M10 21V9h4v2a4 4 0 0 1 8 3v7M10 13v8"/></symbol>
<symbol id="twitter" viewBox="0 0 24 24"><path d="m3 3 18 18M21 3 3 21M7 3l12 18"/></symbol>
<symbol id="zoom-in" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5M8 11h6m-3-3v6"/></symbol>
<symbol id="eye" viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></symbol>
<symbol id="shopping-bag" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></symbol>
<symbol id="shield-check" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="truck" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></symbol>
</defs></svg>`;

      const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"></use></svg>`;
      function installIcons() {
        if (document.getElementById('veloro-icon-library')) return;
        document.body.insertAdjacentHTML('afterbegin', ICON_LIBRARY.replace('<svg ', '<svg id="veloro-icon-library" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none" '));
      }
      function renderIcons() {
        $$('i[data-icon]').forEach(i => { i.innerHTML = icon(i.dataset.icon); });
      }
      function updateControlLabels() {
        const dark = document.documentElement.dataset.theme === 'dark'; const rtl = document.documentElement.dir === 'rtl';
        $$('[data-theme-toggle]').forEach((b) => { b.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`); b.setAttribute('aria-pressed', String(dark)); b.title = `Currently ${dark ? 'dark' : 'light'} mode — switch to ${dark ? 'light' : 'dark'}`; b.innerHTML = b.closest('.mobile-toggle-group') ? `${icon(dark ? 'sun' : 'moon')} <span>${dark ? 'Light mode' : 'Dark mode'}</span>` : `${icon(dark ? 'sun' : 'moon')}<span class="theme-label">${dark ? 'Dark' : 'Light'}</span>` });
        $$('[data-dir-toggle]').forEach(b => { b.setAttribute('aria-label', `Switch to ${rtl ? 'left-to-right' : 'right-to-left'} layout`); b.innerHTML = b.closest('.mobile-toggle-group') ? `${icon('globe')} <span>${rtl ? 'LTR mode' : 'RTL mode'}</span>` : `${rtl ? 'RTL' : 'LTR'} ${icon('globe')}` });

      }
        const money = n => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
        const products = window.VELORO_PRODUCTS || [];
        const brands = window.VELORO_BRANDS || [];
        const leadership = window.VELORO_LEADERSHIP || [];
        const config = window.VELORO_CONFIG || {};
        const page = document.body.dataset.page || 'home';

        const storage = {
          get(key) { try { return localStorage.getItem(key); } catch { return null; } },
          set(key, value) { try { localStorage.setItem(key, value); } catch { } }
        };

        const theme = storage.get('veloro-theme') === 'dark' ? 'dark' : 'light';
        const direction = storage.get('veloro-direction') === 'rtl' ? 'rtl' : 'ltr';
        document.documentElement.dataset.theme = theme;
        document.documentElement.dir = direction;

        const navLinks = [
          ['Collections', 'products.html', 'products'],
          ['Brands', 'brands.html', 'brands'],
          ['About Us', 'about.html', 'about'],
          ['Blog', 'blog.html', 'blog'],
          ['Contact', 'contact.html', 'contact']
        ];

        function brandLogo(isFooter = false) {
          const markSrc = isFooter ? 'assets/icons/veloro-footer-mark.svg' : 'favicon.svg';
          return `<a href="index.html" class="brand-logo" aria-label="VELORO Home"><img src="${markSrc}" alt="" width="35" height="35"><span><span class="brand-text">VELORO</span><span class="brand-tagline">Dress Sharp. Define Your Style.</span></span></a>`;
        }
          function renderHeader() {
            const area = $('#site-header');
            if (!area) return;
            area.innerHTML = `
    <header class="site-header" id="header">
      <div class="container nav-inner">
        ${brandLogo()}
        <nav class="desktop-nav" aria-label="Primary navigation">
          <div class="home-nav-dropdown">
            <button type="button" class="nav-link home-nav-toggle ${['home', 'home2'].includes(page) ? 'active' : ''}" aria-controls="home-nav-options" aria-expanded="false" aria-haspopup="true">
              Home ${icon('chevron-down')}
            </button>
            <div class="home-nav-options" id="home-nav-options">
              <a href="index.html" ${page === 'home' ? 'aria-current="page"' : ''}>
                <small>01 / THE HOUSE</small>
                <span>Classic Collection</span>
              </a>
              <a href="home2.html" ${page === 'home2' ? 'aria-current="page"' : ''}>
                <small>02 / THE EDIT</small>
                <span>Wedding & Occasion Atelier</span>
              </a>
            </div>
          </div>
          ${navLinks.map(([label, href, id]) => `<a href="${href}" class="nav-link ${page === id ? 'active' : ''}" ${page === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
        <div class="nav-tools">
          <button type="button" data-theme-toggle class="nav-icon-btn theme-toggle-button" aria-label="Toggle dark and light mode" title="Switch theme">
            ${icon('moon')}<span class="theme-label">Light</span>
          </button>
          <button type="button" data-dir-toggle class="nav-icon-btn nav-text-btn" aria-label="Switch reading direction" title="Toggle RTL/LTR">
            LTR ${icon('globe')}
          </button>
          <a href="contact.html#visit" class="btn btn-gold nav-cta">Visit Store ${icon('arrow-up-right')}</a>
          <button type="button" id="mobile-menu-trigger" class="nav-icon-btn mobile-menu-trigger" aria-controls="mobile-nav" aria-expanded="false" aria-label="Open navigation">
            ${icon('menu')}
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav-scrim" id="mobile-nav-scrim" aria-hidden="true"></div>
    <nav id="mobile-nav" class="mobile-nav-panel" aria-label="Mobile navigation" aria-hidden="true">
      <details class="mobile-home-group" ${['home', 'home2'].includes(page) ? 'open' : ''}>
        <summary>Home ${icon('chevron-down')}</summary>
        <div class="mobile-home-options">
          <a href="index.html" ${page === 'home' ? 'aria-current="page"' : ''}>Classic Collection</a>
          <a href="home2.html" ${page === 'home2' ? 'aria-current="page"' : ''}>Wedding & Occasion Atelier</a>
        </div>
      </details>
      ${navLinks.map(([label, href, id]) => `<a href="${href}" class="${page === id ? 'active' : ''}" ${page === id ? 'aria-current="page"' : ''}>${label}${icon('arrow-up-right')}</a>`).join('')}
      <div class="mobile-toggle-group">
        <button data-theme-toggle type="button">${icon('moon')} <span>Dark mode</span></button>
        <button data-dir-toggle type="button">${icon('globe')} <span>RTL mode</span></button>
      </div>
      <a href="contact.html#visit" class="btn btn-gold">Visit The Showroom ${icon('arrow-up-right')}</a>
      <p class="mobile-close-note">Dress Sharp. Define Your Style.</p>
    </nav>
  `;
            updateControlLabels();
            const header = $('#header');
            window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
          }
            function renderFooter() {
              const area = $('#site-footer');
              if (!area) return;
              area.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            ${brandLogo(true)}
            <p>Considered formalwear for the moments that define you. Tailored silhouettes, noble fabrics, and uncompromising sartorial distinction.</p>
            <div class="footer-socials">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram platform (VELORO profile)">${icon('instagram')}</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook platform (VELORO profile)">${icon('facebook')}</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn platform (VELORO profile)">${icon('linkedin')}</a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X platform (VELORO profile)">${icon('twitter')}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <a href="index.html">Home 1 · Classic</a>
            <a href="home2.html">Home 2 · Occasion Atelier</a>
            <a href="products.html">All Collections</a>
            <a href="brands.html">Curated House Labels</a>
            <a href="about.html">About VELORO</a>
            <a href="blog.html">The Style Journal</a>
            <a href="contact.html">Contact & Visits</a>
          </div>
          <div class="footer-col">
            <h4>Collections</h4>
            <a href="products.html?category=Formal%20Shirts">Formal Shirts</a>
            <a href="products.html?category=Formal%20Trousers">Formal Trousers</a>
            <a href="products.html?category=Business%20Suits">Business Suits</a>
            <a href="products.html?category=Blazers%20%26%20Jackets">Blazers & Jackets</a>
            <a href="products.html?category=Wedding%20%26%20Occasion%20Wear">Wedding & Occasion</a>
            <a href="products.html?category=Formal%20Accessories">Formal Accessories</a>
          </div>
          <div class="footer-col">
            <h4>Occasion Edits</h4>
            <a href="occasion-ceremony.html">01 · The Wedding Ceremony</a>
            <a href="occasion-reception.html">02 · The Evening Reception</a>
            <a href="occasion-guest.html">03 · The Wedding Guest List</a>
            <a href="products.html?collection=Signature">Signature Edit</a>
            <a href="products.html?sort=newest">New Arrivals</a>
            <a href="contact.html#visit">Store Visit</a>
          </div>
          <div class="footer-col">
            <h4>Stay In Touch</h4>
            <p class="footer-note"><strong>VELORO Flagship Showroom</strong><br>Showroom location coming soon · India<br><strong>Hours:</strong> Mon–Sat 10:30 AM – 8:00 PM</p>
            <a class="footer-mini-btn" href="contact.html#enquiry">Send An Enquiry ${icon('arrow-up-right')}</a>
            <p class="footer-note" style="margin-top:14px">Subscribe to style notes in our <a href="index.html#newsletter" style="display:inline;color:var(--gold);text-decoration:underline;">newsletter preview.</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} VELORO. All rights reserved. · Demonstration luxury storefront.</p>
          <nav aria-label="Legal navigation">
            <a href="privacy.html">Privacy Information</a>
            <a href="terms.html">Terms & Disclaimer</a>
            <a href="contact.html">Contact Us</a>
          </nav>
        </div>
      </div>
    </footer>
  `;
            }
                function toast(message) {
                  let root = $('.toast-container');
                  if (!root) {
                    root = document.createElement('div');
                    root.className = 'toast-container';
                    root.setAttribute('role', 'status');
                    root.setAttribute('aria-live', 'polite');
                    document.body.append(root);
                  }
                  const el = document.createElement('div');
                  el.className = 'toast';
                  el.innerHTML = `<i>${icon('info')}</i><span></span><button type="button" aria-label="Dismiss">×</button>`;
                  el.querySelector('span').textContent = message;
                  root.append(el);
                  el.querySelector('button').addEventListener('click', () => el.remove());
                  setTimeout(() => el.remove(), 5500);
                }

                let priorFocus = null;
                function openModal(html, small = false, modalClass = '') {
                  closeModal(false);
                  priorFocus = document.activeElement;
                  const root = $('#ui-root');
                  root.innerHTML = `
    <div class="ui-modal-backdrop" id="modal-backdrop">
      <div class="ui-modal ${small ? 'message-dialog' : ''} ${modalClass}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-x" data-close-modal type="button" aria-label="Close dialog">${icon('x')}</button>
        ${html}
      </div>
    </div>
  `;
                  document.body.classList.add('modal-open');
                  $('[data-close-modal]', root).focus();
                }

                function closeModal(returnFocus = true) {
                  const root = $('#ui-root');
                  if (root) root.innerHTML = '';
                  document.body.classList.remove('modal-open');
                  if (returnFocus && priorFocus && priorFocus.isConnected) priorFocus.focus();
                }

                function infoModal(title, message) {
                  openModal(`<i>${icon('info')}</i><h2 id="modal-title">${title}</h2><p>${message}</p><button class="btn btn-dark" type="button" data-close-modal>Understood ${icon('check')}</button>`, true);
                }

                const picture = name => `assets/images/${name}`;

                function enquireUrl(p, size = '', colour = '') {
                  const params = new URLSearchParams({
                    subject: 'Product Availability',
                    product: p.name,
                    ref: p.id
                  });
                  if (size) params.set('size', size);
                  if (colour) params.set('colour', colour);
                  return `contact.html?${params.toString()}#enquiry`;
                }

                /* Comprehensive Product Card */
                function productCard(p) {
                  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media">
        <a href="product-details.html?id=${p.id}" aria-label="View details of ${p.name}">
          <img src="${picture(p.image)}" alt="${p.name} in ${p.colour}" loading="lazy" width="800" height="920">
        </a>
        ${p.label ? `<span class="product-label">${p.label}</span>` : ''}
        <button type="button" class="product-quick" data-quick="${p.id}">
          ${icon('eye')} Quick View
        </button>
      </div>
      <div class="product-info">
        <div class="product-header-line">
          <a href="brands.html?brand=${encodeURIComponent(p.brand)}" class="product-brand">${p.brand}</a>
          <span class="product-cat-tag">${p.category}</span>
        </div>
        <h3><a href="product-details.html?id=${p.id}">${p.name}</a></h3>
        <p class="product-meta">${p.fit} · ${p.material}</p>
        <div class="product-bottom">
          <div class="product-price-row">
            <div class="product-price">${money(p.price)}</div>
            <div class="product-swatches" title="Colour: ${p.colour}">
              <span class="swatch" style="--swatch:${p.hex}"></span>
              <small>${p.colour}</small>
            </div>
          </div>
          <div class="product-sizes-preview">
            <small>Sizes: ${p.sizes.slice(0, 4).join(', ')}${p.sizes.length > 4 ? ' +' : ''}</small>
          </div>
          <div class="product-actions">
            <button type="button" class="btn btn-gold btn-card-buy" data-buynow="${p.id}">
              ${icon('shopping-bag')} Buy Now
            </button>
            <a class="product-view-details" href="product-details.html?id=${p.id}" title="View full details for ${p.name}">
              View ${icon('arrow-up-right')}
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
                }

                /* Buy Now Demo Order Request Flow */
                let buyProduct = null;
                let buySelectedSize = '';
                let buySelectedColour = '';
                let buyQuantity = 1;

                function openBuyNow(id, preSize = '', preColour = '', preQty = 1) {
                  const p = products.find(x => x.id === id);
                  if (!p) return;
                  buyProduct = p;
                  buySelectedSize = preSize && p.sizes.includes(preSize) ? preSize : p.sizes[0];
                  buySelectedColour = preColour || p.colour;
                  buyQuantity = Math.max(1, parseInt(preQty, 10) || 1);

                  const availableColours = p.availableColours && p.availableColours.length
                    ? p.availableColours
                    : [
                      { name: p.colour, hex: p.hex },
                      ...([
                        { name: 'Midnight Navy', hex: '#1C2940' },
                        { name: 'Warm Sandstone', hex: '#C8AF91' },
                        { name: 'Charcoal', hex: '#3E4146' }
                      ].filter(opt => opt.name.toLowerCase() !== p.colour.toLowerCase()).slice(0, 2))
                    ];

                  const subtotal = p.price * buyQuantity;

                  openModal(`
    <div class="buynow-modal-layout">
      <div class="buynow-product-summary">
        <span class="eyebrow light-eyebrow">DEMO STORE ORDER REQUEST</span>
        <div class="buynow-item-card">
          <img src="${picture(p.image)}" alt="${p.name}" class="buynow-thumb">
          <div>
            <span class="buynow-brand">${p.brand}</span>
            <h3>${p.name}</h3>
            <p class="buynow-sku">Ref: ${p.id} · ${p.category}</p>
            <div class="buynow-unit-price">${money(p.price)} <small>/ piece</small></div>
          </div>
        </div>

        <div class="buynow-selectors">
          <div class="buynow-field-group">
            <label>Select Size <b>*</b>: <strong id="buy-size-label">${buySelectedSize}</strong></label>
            <div class="buynow-sizes" role="radiogroup" aria-label="Available Sizes">
              ${p.sizes.map(s => `<button type="button" class="size-pill ${s === buySelectedSize ? 'active' : ''}" data-buynow-size="${s}" aria-pressed="${s === buySelectedSize}">${s}</button>`).join('')}
            </div>
          </div>

          <div class="buynow-field-group">
            <label>Select Colour: <strong id="buy-colour-label">${buySelectedColour}</strong></label>
            <div class="buynow-colours">
              ${availableColours.map(c => `
                <button type="button" class="colour-swatch-btn ${c.name === buySelectedColour ? 'active' : ''}" data-buynow-colour="${c.name}" style="--c:${c.hex}" title="${c.name}" aria-label="Choose colour ${c.name}">
                  <span class="swatch-dot"></span>
                  <span class="swatch-label">${c.name}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="buynow-field-group">
            <label for="buy-qty-input">Quantity:</label>
            <div class="qty-stepper">
              <button type="button" id="buy-qty-minus" aria-label="Decrease quantity">${icon('minus')}</button>
              <input type="number" id="buy-qty-input" value="${buyQuantity}" min="1" max="10" readonly aria-label="Quantity">
              <button type="button" id="buy-qty-plus" aria-label="Increase quantity">${icon('plus')}</button>
            </div>
          </div>
        </div>

        <div class="buynow-price-breakdown">
          <div class="breakdown-row">
            <span>Item Subtotal (<span id="buy-summary-qty">${buyQuantity}</span> pcs)</span>
            <strong id="buy-subtotal-val">${money(subtotal)}</strong>
          </div>
          <div class="breakdown-row">
            <span>Storefront White-Glove Shipping</span>
            <span class="free-pill">COMPLIMENTARY</span>
          </div>
          <div class="breakdown-total">
            <span>Estimated Total (INR)</span>
            <strong id="buy-grand-total">${money(subtotal)}</strong>
          </div>
        </div>

        <div class="buynow-trust-points">
          <div>${icon('shield-check')} <span>100% Authentic Fine Fabrics</span></div>
          <div>${icon('truck')} <span>Complimentary Pan-India Express Delivery</span></div>
          <div>${icon('ruler')} <span>Personal Fitting & Concierge Consultation</span></div>
        </div>
      </div>

      <div class="buynow-form-container">
        <div class="buynow-form-header">
          <h2>Order Request Details</h2>
          <p>Please enter your delivery details to record this demo order request. A showroom concierge will review measurements and availability.</p>
        </div>

        <div class="demo-banner">
          <i>${icon('info')}</i>
          <div>
            <strong>Demo Storefront Order Flow</strong>
            <p>This is a demonstration retail experience. No payment gateway is attached and no actual payment will be processed. Your order request is recorded in local browser storage.</p>
          </div>
        </div>

        <form id="buynow-form" class="buynow-form" novalidate>
          <div class="form-row-two">
            <div class="form-field">
              <label for="order-name">Full Name <b>*</b></label>
              <input id="order-name" type="text" autocomplete="name" required placeholder="e.g. Rahul Sharma" minlength="2">
              <small class="field-error" data-order-error="name"></small>
            </div>
            <div class="form-field">
              <label for="order-phone">Mobile Phone (10 digits) <b>*</b></label>
              <input id="order-phone" type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" required placeholder="10-digit mobile number">
              <small class="field-error" data-order-error="phone"></small>
            </div>
          </div>

          <div class="form-field">
            <label for="order-email">Email Address <b>*</b></label>
            <input id="order-email" type="email" autocomplete="email" required placeholder="e.g. rahul@example.com">
            <small class="field-error" data-order-error="email"></small>
          </div>

          <div class="form-field">
            <label for="order-address">Shipping / Delivery Address <b>*</b></label>
            <textarea id="order-address" rows="3" required placeholder="Apartment / Suite, Building, Street, Landmark" minlength="10"></textarea>
            <small class="field-error" data-order-error="address"></small>
          </div>

          <div class="form-row-two">
            <div class="form-field">
              <label for="order-city">City <b>*</b></label>
              <input id="order-city" type="text" required placeholder="e.g. Mumbai, New Delhi">
              <small class="field-error" data-order-error="city"></small>
            </div>
            <div class="form-field">
              <label for="order-pincode">PIN Code <b>*</b></label>
              <input id="order-pincode" type="text" inputmode="numeric" maxlength="6" required placeholder="6-digit PIN code">
              <small class="field-error" data-order-error="pincode"></small>
            </div>
          </div>

          <div class="form-field">
            <label for="order-fitting">Fitting / Customization Request</label>
            <select id="order-fitting">
              <option value="Standard Ready-to-Wear Size">Standard Ready-to-Wear Size</option>
              <option value="Request Showroom Fitting Consultation">Request Showroom Fitting Consultation</option>
              <option value="Trouser Inseam Hemming Adjustment">Trouser Inseam Hemming Adjustment</option>
              <option value="Sleeve Length Refinement">Sleeve Length Refinement</option>
              <option value="Wedding / Celebration Urgent Delivery">Wedding / Celebration Urgent Delivery</option>
            </select>
          </div>

          <div class="buynow-actions">
            <button type="submit" class="btn btn-gold btn-submit-order">
              Submit Demo Order Request ${icon('arrow-right')}
            </button>
            <button type="button" class="btn btn-outline-dark" id="buynow-whatsapp-btn">
              ${icon('message-circle')} Order via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  `, false, 'buynow-modal');

                  setupBuyNowInteractions(p);
                }

                function setupBuyNowInteractions(p) {
                  const qtyInput = $('#buy-qty-input');
                  const qtyMinus = $('#buy-qty-minus');
                  const qtyPlus = $('#buy-qty-plus');
                  const subtotalVal = $('#buy-subtotal-val');
                  const grandTotal = $('#buy-grand-total');
                  const summaryQty = $('#buy-summary-qty');

                  const updateCalculations = () => {
                    const total = p.price * buyQuantity;
                    if (qtyInput) qtyInput.value = buyQuantity;
                    if (summaryQty) summaryQty.textContent = buyQuantity;
                    if (subtotalVal) subtotalVal.textContent = money(total);
                    if (grandTotal) grandTotal.textContent = money(total);
                  };

                  if (qtyMinus) {
                    qtyMinus.addEventListener('click', () => {
                      if (buyQuantity > 1) {
                        buyQuantity--;
                        updateCalculations();
                      }
                    });
                  }

                  if (qtyPlus) {
                    qtyPlus.addEventListener('click', () => {
                      if (buyQuantity < 10) {
                        buyQuantity++;
                        updateCalculations();
                      }
                    });
                  }

                  const phoneInput = $('#order-phone');
                  if (phoneInput) {
                    phoneInput.addEventListener('input', () => {
                      phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
                    });
                  }

                  const pincodeInput = $('#order-pincode');
                  if (pincodeInput) {
                    pincodeInput.addEventListener('input', () => {
                      pincodeInput.value = pincodeInput.value.replace(/\D/g, '').slice(0, 6);
                    });
                  }

                  const form = $('#buynow-form');
                  if (form) {
                    form.addEventListener('submit', (e) => {
                      e.preventDefault();
                      const name = $('#order-name').value.trim();
                      const phone = $('#order-phone').value.trim();
                      const email = $('#order-email').value.trim();
                      const address = $('#order-address').value.trim();
                      const city = $('#order-city').value.trim();
                      const pincode = $('#order-pincode').value.trim();
                      const fitting = $('#order-fitting').value;

                      let hasError = false;
                      const setError = (field, msg) => {
                        const el = $(`[data-order-error="${field}"]`);
                        if (el) el.textContent = msg;
                        const input = $(`#order-${field}`);
                        if (input) {
                          input.classList.toggle('invalid', Boolean(msg));
                          input.setAttribute('aria-invalid', String(Boolean(msg)));
                          if (msg && !hasError) {
                            input.focus();
                            hasError = true;
                          }
                        }
                      };

                      setError('name', name.length >= 2 ? '' : 'Please enter your full name (at least 2 letters).');
                      setError('phone', /^\d{10}$/.test(phone) ? '' : 'Please enter a valid 10-digit Indian phone number.');
                      setError('email', /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(email) ? '' : 'Please enter a valid email address.');
                      setError('address', address.length >= 10 ? '' : 'Please enter a complete delivery address (at least 10 characters).');
                      setError('city', city.length >= 2 ? '' : 'Please specify your city.');
                      setError('pincode', /^\d{6}$/.test(pincode) ? '' : 'Please enter a valid 6-digit PIN code.');

                      if (hasError) {
                        toast('Please review the highlighted fields before submitting.');
                        return;
                      }

                      // Record demo order in localStorage
                      const orderRef = 'VEL-ORD-' + Math.floor(100000 + Math.random() * 900000);
                      const orderRecord = {
                        orderRef,
                        date: new Date().toISOString(),
                        product: {
                          id: p.id,
                          name: p.name,
                          brand: p.brand,
                          category: p.category,
                          unitPrice: p.price,
                          selectedSize: buySelectedSize,
                          selectedColour: buySelectedColour,
                          quantity: buyQuantity,
                          totalPrice: p.price * buyQuantity,
                          image: p.image
                        },
                        customer: { name, phone, email, address, city, pincode, fitting }
                      };

                      try {
                        const existing = JSON.parse(storage.get('veloro_demo_orders') || '[]');
                        existing.unshift(orderRecord);
                        storage.set('veloro_demo_orders', JSON.stringify(existing.slice(0, 20)));
                      } catch { }

                      // Render Order Confirmation
                      renderOrderConfirmation(orderRecord);
                    });
                  }

                  const waBtn = $('#buynow-whatsapp-btn');
                  if (waBtn) {
                    waBtn.addEventListener('click', () => {
                      const msg = `Hello VELORO, I would like to place an order request for ${p.name} (Ref: ${p.id}) in Size: ${buySelectedSize}, Colour: ${buySelectedColour}, Quantity: ${buyQuantity}. Please advise on delivery timeline and payment arrangement.`;
                      if (config.whatsapp) {
                        const number = String(config.whatsapp).replace(/\D/g, '');
                        window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
                      } else {
                        infoModal('WhatsApp Business Configuration', `To enable live WhatsApp orders, configure your verified WhatsApp number in assets/js/data.js. Message prepared:\n\n"${msg}"`);
                      }
                    });
                  }
                }

                function renderOrderConfirmation(order) {
                  const p = order.product;
                  const c = order.customer;
                  const formattedDate = new Date(order.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  openModal(`
    <div class="order-confirmation-body">
      <div class="confirmation-icon">${icon('check-circle')}</div>
      <span class="eyebrow">DEMO ORDER REQUEST RECORDED</span>
      <h2>Thank You, ${c.name}</h2>
      <p class="confirmation-lead">Your demo order request has been logged successfully. Below is your official request summary.</p>

      <div class="confirmation-ref-pill">
        <span>Order Reference:</span>
        <strong>${order.orderRef}</strong>
        <small>· Placed on ${formattedDate}</small>
      </div>

      <div class="confirmation-grid">
        <div class="confirmation-item-card">
          <img src="${picture(p.image)}" alt="${p.name}" class="confirmation-thumb">
          <div class="confirmation-item-details">
            <span class="confirmation-brand">${p.brand}</span>
            <h3>${p.name}</h3>
            <p>Size: <strong>${p.selectedSize}</strong> · Colour: <strong>${p.selectedColour}</strong></p>
            <p>Quantity: <strong>${p.quantity}</strong> piece(s)</p>
            <div class="confirmation-price">${money(p.totalPrice)}</div>
          </div>
        </div>

        <div class="confirmation-delivery-card">
          <h4>Delivery & Fitting Summary</h4>
          <p><strong>Recipient:</strong> ${c.name}</p>
          <p><strong>Contact:</strong> +91 ${c.phone} · ${c.email}</p>
          <p><strong>Address:</strong> ${c.address}, ${c.city} - ${c.pincode}</p>
          <p><strong>Fitting Preference:</strong> ${c.fitting}</p>
          <div class="confirmation-status-tag">
            ${icon('clock')} Status: Demo Order Logged Locally
          </div>
        </div>
      </div>

      <div class="confirmation-disclaimer">
        <i>${icon('info')}</i>
        <p><strong>Commercial Retail Note:</strong> As VELORO is currently operating in preview storefront mode without live payment processing, no credit card or bank funds were charged. To convert this into a live bespoke transaction, our showroom concierge will connect with you via telephone.</p>
      </div>

      <div class="confirmation-actions">
        <button type="button" class="btn btn-gold" data-close-modal>
          Continue Browsing Collections ${icon('arrow-right')}
        </button>
        <a href="contact.html#visit" class="btn btn-outline-dark">
          View Showroom Details ${icon('map-pin')}
        </a>
      </div>
    </div>
  `, false, 'order-confirmation-modal');
                }

                /* Quick View Modal */
                let quickProduct = null, quickSize = '', quickColour = '';
                function openQuick(id) {
                  const p = products.find(x => x.id === id);
                  if (!p) return;
                  quickProduct = p;
                  quickSize = p.sizes[0];
                  quickColour = p.colour;
                  const availableColours = [
                    { name: p.colour, hex: p.hex },
                    ...([
                      { name: 'Navy', hex: '#263B56' },
                      { name: 'Sandstone', hex: '#C7B8A4' },
                      { name: 'Charcoal', hex: '#35393F' }
                    ].filter(opt => opt.name.toLowerCase() !== p.colour.toLowerCase()).slice(0, 2))
                  ];

                  openModal(`
    <div class="quick-modal-body">
      <div class="quick-modal-image" id="quick-modal-image">
        <img src="${picture(p.image)}" alt="${p.name} - click to zoom" id="quick-image" tabindex="0" role="button" aria-label="Toggle image zoom">
        <span class="zoom-tip">${icon('zoom-in')} Click to zoom</span>
      </div>
      <div class="quick-modal-info">
        <span class="eyebrow">${p.brand} · ${p.collection}</span>
        <h2 id="modal-title">${p.name}</h2>
        <div class="quick-modal-price">${money(p.price)}</div>
        <p>${p.description}</p>
        <div class="quick-detail"><span>Category</span><strong>${p.category}</strong></div>
        <div class="quick-detail"><span>Material</span><strong>${p.material}</strong></div>
        <div class="quick-detail"><span>Fit</span><strong>${p.fit}</strong></div>
        <div class="quick-detail"><span>Reference</span><strong>${p.id}</strong></div>
        <div class="quick-selector">
          <strong>Select Size: <span id="selected-size">${quickSize}</span></strong>
          <div class="quick-sizes">
            ${p.sizes.map(s => `<button type="button" class="quick-size ${s === quickSize ? 'active' : ''}" data-quick-size="${s}" aria-pressed="${s === quickSize}">${s}</button>`).join('')}
          </div>
        </div>
        <div class="quick-selector">
          <strong>Select Colour: <span id="selected-colour">${quickColour}</span></strong>
          <div class="quick-colours">
            ${availableColours.map(c => `<button type="button" class="quick-colour ${c.name === quickColour ? 'active' : ''}" data-quick-colour="${c.name}" style="--colour:${c.hex}" title="${c.name}" aria-label="Request colour ${c.name}" aria-pressed="${c.name === quickColour}"></button>`).join('')}
          </div>
        </div>
        <div class="quick-actions-row">
          <button type="button" class="btn btn-gold" id="modal-buynow" data-quick-buynow="${p.id}">
            ${icon('shopping-bag')} Buy Now ${icon('arrow-right')}
          </button>
          <a href="product-details.html?id=${p.id}" class="btn btn-outline-dark">
            View Details ${icon('arrow-up-right')}
          </a>
        </div>
        <a href="${enquireUrl(p, quickSize, quickColour)}" id="modal-enquire" class="inline-link" style="margin-top:16px;">
          Enquire In Showroom About This Piece ${icon('arrow-up-right')}
        </a>
      </div>
    </div>
  `);
                }

                function manageQuickSize(size) {
                  if (!quickProduct) return;
                  quickSize = size;
                  $('#selected-size').textContent = size;
                  $$('[data-quick-size]').forEach(b => {
                    b.classList.toggle('active', b.dataset.quickSize === size);
                    b.setAttribute('aria-pressed', String(b.dataset.quickSize === size));
                  });
                  updateEnquireHref();
                }

                function manageQuickColour(colour) {
                  if (!quickProduct) return;
                  quickColour = colour;
                  $('#selected-colour').textContent = colour;
                  $$('[data-quick-colour]').forEach(b => {
                    b.classList.toggle('active', b.dataset.quickColour === colour);
                    b.setAttribute('aria-pressed', String(b.dataset.quickColour === colour));
                  });
                  updateEnquireHref();
                }

                function updateEnquireHref() {
                  const a = $('#modal-enquire');
                  if (a && quickProduct) a.href = enquireUrl(quickProduct, quickSize, quickColour);
                }

                /* Home 1 New Arrivals Grid */
                function renderHome() {
                  const area = $('#home-product-grid');
                  if (area) {
                    const selection = ['VL-103', 'VL-106', 'VL-109', 'VL-111', 'VL-117', 'VL-118', 'VL-119', 'VL-120']
                      .map(id => products.find(p => p.id === id))
                      .filter(Boolean);
                    area.innerHTML = selection.map(productCard).join('');
                  }
                }

                /* Home 2 Occasion Products Grid */
                function renderOccasionProducts() {
                  const area = $('#occasion-product-grid');
                  if (area) {
                    const selection = ['VL-127', 'VL-109', 'VL-112', 'VL-118', 'VL-120', 'VL-129']
                      .map(id => products.find(p => p.id === id))
                      .filter(Boolean);
                    area.innerHTML = selection.map(productCard).join('');
                  }
                }

                /* Catalogue & Filtering System */
                function colorGroup(p) {
                  const c = p.colour.toLowerCase();
                  if (/blue|navy|ink|midnight/.test(c)) return 'Blue & Navy';
                  if (/black|charcoal/.test(c)) return 'Black & Charcoal';
                  if (/olive/.test(c)) return 'Olive';
                  if (/burgundy|cognac|camel|gold/.test(c)) return 'Warm Tones';
                  return 'Cream & Neutral';
                }

                const categories = [
                  'Formal Shirts',
                  'Formal Trousers',
                  'Business Suits',
                  'Blazers & Jackets',
                  'Office Wear',
                  'Wedding & Occasion Wear',
                  'Premium Cotton Shirts',
                  'Formal Accessories'
                ];

                const colorGroups = [
                  ['Blue & Navy', '#263D68'],
                  ['Black & Charcoal', '#32363B'],
                  ['Olive', '#62694B'],
                  ['Warm Tones', '#9E5A50'],
                  ['Cream & Neutral', '#D8C5A5']
                ];

                const state = {
                  categories: new Set(),
                  brands: new Set(),
                  sizes: new Set(),
                  colours: new Set(),
                  price: 25000,
                  sort: 'featured',
                  search: '',
                  collection: ''
                };

                const allSizes = ['S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', '38', '40', '42', '44', '46', 'One Size'];

                function catMatch(p, c) {
                  if (c === 'Wedding & Occasion Wear' || c === 'Wedding & Occasion') {
                    return p.category.includes('Wedding') || p.category.includes('Occasion');
                  }
                  return p.category.toLowerCase() === c.toLowerCase();
                }

                function matched() {
                  let result = products.filter(p => {
                    if (state.categories.size && ![...state.categories].some(c => catMatch(p, c))) return false;
                    if (state.brands.size && !state.brands.has(p.brand)) return false;
                    if (state.sizes.size && ![...state.sizes].some(s => p.sizes.includes(s))) return false;
                    if (state.colours.size && !state.colours.has(colorGroup(p))) return false;
                    if (state.collection && p.collection !== state.collection) return false;
                    if (p.price > state.price) return false;
                    if (state.search) {
                      const query = state.search.toLowerCase();
                      const searchable = [p.name, p.category, p.brand, p.material, p.fit, p.colour, p.collection, p.description].join(' ').toLowerCase();
                      if (!searchable.includes(query)) return false;
                    }
                    return true;
                  });

                  if (state.sort === 'price-asc') result.sort((a, b) => a.price - b.price);
                  else if (state.sort === 'price-desc') result.sort((a, b) => b.price - a.price);
                  else if (state.sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
                  else if (state.sort === 'newest') result.sort((a, b) => Number(b.label === 'NEW') - Number(a.label === 'NEW') || b.id.localeCompare(a.id));
                  return result;
                }

                function filterMarkup() {
                  const cats = $('#filter-categories');
                  if (!cats) return;
                  cats.innerHTML = categories.map(c => `
    <label>
      <input type="checkbox" data-filter-category="${c}" ${state.categories.has(c) ? 'checked' : ''}>
      <span>${c}</span>
      <small>${products.filter(p => catMatch(p, c)).length}</small>
    </label>
  `).join('');

                  $('#filter-brands').innerHTML = brands.map(b => `
    <label>
      <input type="checkbox" data-filter-brand="${b.name}" ${state.brands.has(b.name) ? 'checked' : ''}>
      <span>${b.name}</span>
      <small>${products.filter(p => p.brand === b.name).length}</small>
    </label>
  `).join('');

                  $('#filter-sizes').innerHTML = allSizes.map(s => `
    <button type="button" class="size-option ${state.sizes.has(s) ? 'active' : ''}" data-filter-size="${s}" aria-pressed="${state.sizes.has(s)}">${s}</button>
  `).join('');

                  $('#filter-colours').innerHTML = colorGroups.map(([label, colour]) => `
    <button type="button" class="colour-option ${state.colours.has(label) ? 'active' : ''}" data-filter-colour="${label}" style="--circle:${colour}" aria-label="${label}" title="${label}" aria-pressed="${state.colours.has(label)}"></button>
  `).join('');

                  if ($('#filter-price')) {
                    $('#filter-price').value = state.price;
                    $('#max-price-label').textContent = money(state.price);
                  }
                }

                function showFilters(open) {
                  const box = $('#filter-sidebar');
                  if (!box) return;
                  box.classList.toggle('open', open);
                  $('#filter-scrim').classList.toggle('show', open);
                  $('#filter-scrim').hidden = !open;
                  document.body.classList.toggle('filters-open', open);
                  if (open) $('#mobile-filter-close')?.focus();
                  else $('#mobile-filter-open')?.focus();
                }

                function resetFilters() {
                  state.categories.clear();
                  state.brands.clear();
                  state.sizes.clear();
                  state.colours.clear();
                  state.price = 25000;
                  state.search = '';
                  state.sort = 'featured';
                  state.collection = '';
                  if ($('#product-search')) $('#product-search').value = '';
                  if ($('#sort-products')) $('#sort-products').value = 'featured';
                  try { history.replaceState(null, '', 'products.html'); } catch { }
                  filterMarkup();
                  renderProducts();
                }

                function renderProducts() {
                  const grid = $('#catalogue-grid');
                  if (!grid) return;
                  const list = matched();
                  grid.innerHTML = list.map(productCard).join('');
                  if ($('#result-count')) $('#result-count').textContent = list.length;
                  if ($('#catalogue-empty')) $('#catalogue-empty').hidden = list.length !== 0;

                  const active = [];
                  const add = (name, label) => {
                    for (const value of state[name]) active.push({ name, value, label: `${label}: ${value}` });
                  };
                  add('categories', 'Category');
                  add('brands', 'Brand');
                  add('sizes', 'Size');
                  add('colours', 'Colour');
                  if (state.price < 25000) active.push({ name: 'price', value: '', label: `Max ${money(state.price)}` });
                  if (state.collection) active.push({ name: 'collection', value: '', label: state.collection + ' Edit' });

                  const activeContainer = $('#active-filters');
                  if (activeContainer) {
                    const pills = active.map(a => `
      <span class="active-pill">
        ${a.label}
        <button type="button" data-remove-filter="${a.name}" data-remove-value="${a.value}" aria-label="Remove ${a.label}">${icon('x')}</button>
      </span>
    `).join('');
                    const clearBtn = active.length > 0 ? `
      <button type="button" class="active-pill active-pill-clear" id="active-clear-all" title="Clear all filters">
        ${icon('rotate-ccw')} Reset All (${active.length})
      </button>
    ` : '';
                    activeContainer.innerHTML = pills + clearBtn;
                  }
                  if ($('#filter-number')) $('#filter-number').textContent = active.length ? `(${active.length})` : '';
                }

                function initializeProducts() {
                  if (page !== 'products') return;
                  const url = new URL(location.href);
                  let c = url.searchParams.get('category');
                  const b = url.searchParams.get('brand');
                  const sort = url.searchParams.get('sort');
                  const collection = url.searchParams.get('collection');

                  // Handle category aliases e.g. Wedding & Occasion -> Wedding & Occasion Wear
                  if (c) {
                    if (c === 'Wedding & Occasion' || c === 'Wedding & Occasion Wear') {
                      c = 'Wedding & Occasion Wear';
                    }
                    const match = categories.find(cat => cat.toLowerCase() === c.toLowerCase());
                    if (match) state.categories.add(match);
                  }

                  if (b && brands.some(x => x.name.toLowerCase() === b.toLowerCase())) {
                    const foundBrand = brands.find(x => x.name.toLowerCase() === b.toLowerCase());
                    state.brands.add(foundBrand.name);

                    // Show custom brand banner on products.html
                    const banner = $('#brand-focus-banner');
                    if (banner) {
                      banner.hidden = false;
                      banner.innerHTML = `
        <div class="brand-focus-inner">
          <div>
            <span class="eyebrow light-eyebrow">${foundBrand.type} · CURATED HOUSE LABEL</span>
            <h2>${foundBrand.mark}</h2>
            <p>${foundBrand.detail}</p>
          </div>
          <a href="brands.html" class="inline-link" style="color:var(--gold);">All House Labels ${icon('arrow-right')}</a>
        </div>
      `;
                    }
                  }

                  if (['price-asc', 'price-desc', 'name', 'newest'].includes(sort)) {
                    state.sort = sort;
                    if ($('#sort-products')) $('#sort-products').value = sort;
                  }

                  if (collection === 'Signature' || collection === 'Seasonal' || collection === 'Everyday Edit') {
                    state.collection = collection;
                  }

                  filterMarkup();
                  renderProducts();

                  $('#product-search')?.addEventListener('input', e => {
                    state.search = e.target.value.trim();
                    renderProducts();
                  });

                  $('#sort-products')?.addEventListener('change', e => {
                    state.sort = e.target.value;
                    renderProducts();
                  });

                  $('#filter-price')?.addEventListener('input', e => {
                    state.price = Number(e.target.value);
                    $('#max-price-label').textContent = money(state.price);
                    renderProducts();
                  });

                  $('#filter-sidebar')?.addEventListener('change', e => {
                    for (const [datasetName, field] of [['filterCategory', 'categories'], ['filterBrand', 'brands']]) {
                      const item = e.target.dataset[datasetName];
                      if (item) {
                        if (e.target.checked) state[field].add(item);
                        else state[field].delete(item);
                        renderProducts();
                        return;
                      }
                    }
                  });

                  $('#clear-filters')?.addEventListener('click', resetFilters);
                  $('#clear-filters-top')?.addEventListener('click', resetFilters);
                  $('#empty-reset')?.addEventListener('click', resetFilters);
                  $('#mobile-filter-open')?.addEventListener('click', () => showFilters(true));
                  $('#mobile-filter-close')?.addEventListener('click', () => showFilters(false));
                  $('#filter-scrim')?.addEventListener('click', () => showFilters(false));
                }

                /* Brands Page View */
                function renderBrands(selected = 'all') {
                  const area = $('#brand-cards');
                  if (!area) return;
                  const items = selected === 'all' ? brands : brands.filter(b => b.name === selected);

                  area.innerHTML = items.map(b => `
    <article class="brand-card">
      <img src="${picture(b.image)}" alt="Editorial formalwear representing ${b.name} concept label" loading="lazy">
      <div class="brand-card-content">
        <span class="brand-card-type">${b.type}</span>
        <h3>${b.mark}</h3>
        <strong>${b.tag}</strong>
        <p>${b.detail}</p>
        <div class="brand-card-specialty"><small>Signature Specialty: ${b.specialty}</small></div>
        <div class="brand-card-ctas">
          <a class="btn btn-gold btn-brand-explore" href="products.html?brand=${encodeURIComponent(b.name)}">
            Explore ${b.name} Pieces ${icon('arrow-up-right')}
          </a>
          <a class="inline-link" href="contact.html?subject=Brand%20Enquiry&ref=${encodeURIComponent(b.name)}#enquiry">
            Enquire About Label ${icon('arrow-right')}
          </a>
        </div>
      </div>
    </article>
  `).join('');

                  $$('.brand-filter-btn').forEach(btn => {
                    btn.classList.toggle('is-selected', btn.dataset.brand === selected);
                    btn.setAttribute('aria-pressed', String(btn.dataset.brand === selected));
                  });

                  const featured = $('#brand-featured-products');
                  if (featured) {
                    const brandProducts = selected === 'all'
                      ? ['VL-107', 'VL-121', 'VL-127', 'VL-110'].map(id => products.find(p => p.id === id)).filter(Boolean)
                      : products.filter(p => p.brand === selected).slice(0, 4);
                    featured.innerHTML = brandProducts.map(productCard).join('');
                  }
                }

                /* Journal / Blog System */
                const posts = window.VELORO_POSTS || [];
                let journalCategory = 'All', journalQuery = '';

                function journalCard(p) {
                  return `
    <article class="journal-card">
      <a class="journal-card-image" href="article.html?slug=${encodeURIComponent(p.slug)}" aria-label="Read article: ${p.title}">
        <img src="${picture(p.image)}" alt="${p.imageAlt}" loading="lazy">
        <span>${p.category}</span>
      </a>
      <div class="journal-card-copy">
        <div class="journal-meta">${p.readTime} MIN READ <span aria-hidden="true">/</span> VELORO JOURNAL</div>
        <h3><a href="article.html?slug=${encodeURIComponent(p.slug)}">${p.title}</a></h3>
        <p>${p.excerpt}</p>
        <a class="inline-link" href="article.html?slug=${encodeURIComponent(p.slug)}">Read Article ${icon('arrow-up-right')}</a>
      </div>
    </article>
  `;
                }

                function renderJournal() {
                  const grid = $('#journal-grid');
                  if (!grid) return;
                  const result = posts.filter(p =>
                    (journalCategory === 'All' || p.category === journalCategory) &&
                    [p.title, p.excerpt, p.category, p.tags.join(' ')].join(' ').toLowerCase().includes(journalQuery)
                  );

                  grid.innerHTML = result.length
                    ? result.map(journalCard).join('')
                    : `<div class="journal-empty">
        <h3>No style notes found.</h3>
        <p>Try a different keyword or reset filters to browse all editorial guides.</p>
        <button class="btn btn-outline-dark" type="button" data-journal-reset>View All Articles ${icon('rotate-ccw')}</button>
      </div>`;

                  if ($('#journal-count')) $('#journal-count').textContent = `${result.length} ${result.length === 1 ? 'article' : 'articles'}`;
                  $$('[data-journal-category]').forEach(b => {
                    const selected = b.dataset.journalCategory === journalCategory;
                    b.classList.toggle('is-selected', selected);
                    b.setAttribute('aria-pressed', String(selected));
                  });
                }

                function initJournal() {
                  if ($('#journal-grid')) {
                    renderJournal();
                    $('#journal-search')?.addEventListener('input', e => {
                      journalQuery = e.target.value.trim().toLowerCase();
                      renderJournal();
                    });
                  }

                  const root = $('#article-root');
                  if (!root) return;

                  let slug = new URLSearchParams(location.search).get('slug');
                  // Check slug aliasing map
                  if (window.VELORO_SLUG_MAP && window.VELORO_SLUG_MAP[slug]) {
                    slug = window.VELORO_SLUG_MAP[slug];
                  }

                  let article = posts.find(p => p.slug === slug);
                  if (!article && posts.length > 0) {
                    article = posts[0]; // gracefully load first article if invalid slug
                  }

                  if (!article) {
                    document.title = 'Article Not Found | VELORO';
                    root.innerHTML = `
      <section class="section">
        <div class="container journal-empty">
          <h1>Article not found.</h1>
          <p>This story is not available in the journal archives.</p>
          <a class="btn btn-gold" href="blog.html">Browse The Journal ${icon('arrow-right')}</a>
        </div>
      </section>
    `;
                    return;
                  }

                  document.title = `${article.title} | The VELORO Journal`;
                  $('meta[name="description"]')?.setAttribute('content', article.excerpt);

                  const sections = article.sections.map(sec => `
    <section class="article-section">
      <h2>${sec.heading}</h2>
      ${sec.paragraphs.map(p => `<p>${p}</p>`).join('')}
      ${sec.points ? `<ul>${sec.points.map(pt => `<li>${pt}</li>`).join('')}</ul>` : ''}
    </section>
  `).join('');

                  const related = posts.filter(p => p.slug !== article.slug).slice(0, 3);

                  // Relevant products tailored to the article's theme
                  let relevantCategory = 'Business Suits';
                  if (/shirt/i.test(article.title)) relevantCategory = 'Formal Shirts';
                  else if (/blazer/i.test(article.title)) relevantCategory = 'Blazers & Jackets';
                  else if (/wedding|occasion/i.test(article.title)) relevantCategory = 'Wedding & Occasion Wear';
                  else if (/accessories/i.test(article.title)) relevantCategory = 'Formal Accessories';

                  const relatedProducts = products.filter(p => catMatch(p, relevantCategory)).slice(0, 4);

                  root.innerHTML = `
    <div class="article-hero">
      <div class="container">
        <a class="article-back" href="blog.html">${icon('arrow-left')} Back to All Articles</a>
        <span class="eyebrow light-eyebrow">${article.category} / THE VELORO JOURNAL</span>
        <h1>${article.title}</h1>
        <p>${article.excerpt}</p>
        <div class="article-hero-meta">
          <span>${article.readTime} MIN READ</span>
          <span>•</span>
          <span>EDITORIAL STYLE GUIDE</span>
          <span>•</span>
          <span>VELORO ATELIER</span>
        </div>
      </div>
    </div>
    <div class="article-cover container">
      <img src="${picture(article.image)}" alt="${article.imageAlt}">
    </div>
    <div class="section">
      <div class="container article-reading">
        <p class="article-lead">${article.lead}</p>
        ${sections}
        <div class="article-takeaway">
          <span class="eyebrow">THE SARTORIAL TAKEAWAY</span>
          <p>${article.takeaway}</p>
        </div>
        <div class="article-end-links">
          <a class="btn btn-outline-dark" href="blog.html">${icon('arrow-left')} Back to Journal</a>
          <a class="btn btn-gold" href="products.html">Explore The Collection ${icon('arrow-up-right')}</a>
        </div>
      </div>
    </div>

    ${relatedProducts.length ? `
      <section class="section section-cream">
        <div class="container">
          <div class="section-top">
            <div>
              <span class="eyebrow">PIECES DISCUSSED IN THIS GUIDE</span>
              <h2>Featured <em>recommendations.</em></h2>
            </div>
            <a href="products.html?category=${encodeURIComponent(relevantCategory)}" class="inline-link">
              Explore ${relevantCategory} ${icon('arrow-up-right')}
            </a>
          </div>
          <div class="product-grid">${relatedProducts.map(productCard).join('')}</div>
        </div>
      </section>
    ` : ''}

    <section class="section">
      <div class="container">
        <div class="section-top">
          <div>
            <span class="eyebrow">CONTINUE READING</span>
            <h2>More from the <em>journal.</em></h2>
          </div>
          <a href="blog.html" class="inline-link">All Stories ${icon('arrow-right')}</a>
        </div>
        <div class="journal-grid related-grid">${related.map(journalCard).join('')}</div>
      </div>
    </section>
  `;
                }

                /* Product Details Page Logic */
                let detailProduct = null;
                let detailSize = '';
                let detailColour = '';
                let detailQty = 1;

                function initProductDetails() {
                  const root = $('#product-details-root');
                  if (!root) return;

                  const url = new URL(location.href);
                  let id = url.searchParams.get('id');
                  detailProduct = products.find(p => p.id === id) || products[0];
                  const p = detailProduct;

                  detailSize = p.sizes[0];
                  detailColour = p.colour;
                  detailQty = 1;

                  document.title = `${p.name} | ${p.brand} | VELORO`;
                  $('meta[name="description"]')?.setAttribute('content', `${p.name} by ${p.brand} in ${p.colour}. ${p.description}`);

                  const related = products.filter(x => x.id !== p.id && (x.category === p.category || x.brand === p.brand)).slice(0, 4);

                  root.innerHTML = `
    <div class="container product-details-layout">
      <!-- Breadcrumb -->
      <nav class="breadcrumb-bar" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        ${icon('chevron-right')}
        <a href="products.html">Collections</a>
        ${icon('chevron-right')}
        <a href="products.html?category=${encodeURIComponent(p.category)}">${p.category}</a>
        ${icon('chevron-right')}
        <span aria-current="page">${p.name}</span>
      </nav>

      <div class="pdp-main-grid">
        <!-- Gallery Section -->
        <div class="pdp-gallery">
          <div class="pdp-main-image-wrap" id="pdp-main-image-wrap">
            <img src="${picture(p.image)}" alt="${p.name} primary angle" id="pdp-main-img" class="pdp-main-img" tabindex="0">
            <span class="pdp-zoom-badge">${icon('zoom-in')} Click to Zoom</span>
            ${p.label ? `<span class="product-label">${p.label}</span>` : ''}
          </div>
          <div class="pdp-thumbnails pdp-view-selector" role="tablist" aria-label="Perspective and Detail Selector">
            <button type="button" class="pdp-thumb-btn pdp-view-pill active" data-thumb-src="${p.image}" aria-label="Front Silhouette View">
              <span class="view-pill-badge">01</span>
              <span class="view-pill-title">Front Silhouette</span>
            </button>
            <button type="button" class="pdp-thumb-btn pdp-view-pill" data-thumb-src="assets/images/hand-tailored-seam.webp" aria-label="Tailored Seam Craft">
              <span class="view-pill-badge">02</span>
              <span class="view-pill-title">Tailored Seam</span>
            </button>
            <button type="button" class="pdp-thumb-btn pdp-view-pill" data-thumb-src="assets/images/about-tailoring.webp" aria-label="Bespoke Construction Detail">
              <span class="view-pill-badge">03</span>
              <span class="view-pill-title">Sartorial Detail</span>
            </button>
          </div>
        </div>

        <!-- Product Information & Order Actions -->
        <div class="pdp-info-panel">
          <div class="pdp-eyebrow">
            <a href="brands.html?brand=${encodeURIComponent(p.brand)}" class="pdp-brand-link">${p.brand}</a>
            <span class="pdp-divider">·</span>
            <span class="pdp-cat">${p.category}</span>
          </div>

          <h1 class="pdp-title">${p.name}</h1>
          <div class="pdp-price-wrap">
            <span class="pdp-price">${money(p.price)}</span>
            <span class="pdp-tax-note">Inclusive of all taxes · Complimentary express white-glove shipping</span>
          </div>

          <p class="pdp-description">${p.description}</p>

          <div class="pdp-spec-table">
            <div class="pdp-spec-row"><span>Material</span><strong>${p.material}</strong></div>
            <div class="pdp-spec-row"><span>Fit Profile</span><strong>${p.fit}</strong></div>
            <div class="pdp-spec-row"><span>Collection</span><strong>${p.collection}</strong></div>
            <div class="pdp-spec-row"><span>Product Reference</span><strong>${p.id}</strong></div>
          </div>

          <!-- Selectors -->
          <div class="pdp-selectors">
            <div class="pdp-selector-group">
              <div class="selector-head">
                <label>Select Size: <strong id="pdp-selected-size">${detailSize}</strong></label>
                <button type="button" class="btn-text-size-guide" id="open-size-guide-btn">
                  ${icon('ruler')} Size Guide
                </button>
              </div>
              <div class="pdp-sizes-list">
                ${p.sizes.map(s => `
                  <button type="button" class="pdp-size-btn ${s === detailSize ? 'active' : ''}" data-pdp-size="${s}" aria-pressed="${s === detailSize}">
                    ${s}
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="pdp-selector-group">
              <label>Available Colour: <strong>${p.colour}</strong></label>
              <div class="pdp-colour-preview">
                <span class="swatch-large" style="--swatch:${p.hex}"></span>
                <span>${p.colour} (Featured Editorial Cloth)</span>
              </div>
            </div>

            <div class="pdp-selector-group">
              <label for="pdp-qty-select">Quantity:</label>
              <div class="qty-stepper pdp-qty-stepper">
                <button type="button" id="pdp-qty-minus" aria-label="Decrease quantity">${icon('minus')}</button>
                <input type="number" id="pdp-qty-input" value="1" min="1" max="10" readonly aria-label="Quantity">
                <button type="button" id="pdp-qty-plus" aria-label="Increase quantity">${icon('plus')}</button>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="pdp-cta-stack">
            <button type="button" class="btn btn-gold btn-pdp-buy" id="pdp-buynow-btn">
              ${icon('shopping-bag')} Buy Now · Request Order ${icon('arrow-right')}
            </button>
            <a href="${enquireUrl(p, detailSize, detailColour)}" class="btn btn-outline-dark" id="pdp-enquire-btn">
              ${icon('message-circle')} Enquire In Store About This Piece
            </a>
          </div>

          <div class="pdp-service-badges">
            <div>${icon('shield-check')} <span>Sartorial Guarantee & Authenticity</span></div>
            <div>${icon('ruler')} <span>Complimentary In-Store Alteration Consultation</span></div>
            <div>${icon('truck')} <span>White-Glove Doorstep Delivery Across India</span></div>
          </div>
        </div>
      </div>

      <!-- Accordion Details -->
      <div class="pdp-accordions section">
        <details class="pdp-accordion-item" open>
          <summary>Fabric & Tailoring Specifications ${icon('chevron-down')}</summary>
          <div class="pdp-accordion-content">
            <p>${p.description}</p>
            <ul>
              ${p.specs.map(sp => `<li><strong>${sp.label}:</strong> ${sp.value}</li>`).join('')}
            </ul>
          </div>
        </details>

        <details class="pdp-accordion-item">
          <summary>Fabric Care & Longevity ${icon('chevron-down')}</summary>
          <div class="pdp-accordion-content">
            <p>${p.care}</p>
            <p>For fine suiting and luxury shirting, always air-dry naturally and utilize contoured wooden hangers to preserve the natural shoulder arc.</p>
          </div>
        </details>

        <details class="pdp-accordion-item">
          <summary>Recommended Occasions & Styling ${icon('chevron-down')}</summary>
          <div class="pdp-accordion-content">
            <p>${p.occasions}</p>
            <p>Pairs seamlessly with handcrafted silk neckwear from our Caldera accessories collection and bespoke leather footwear.</p>
          </div>
        </details>
      </div>

      <!-- Related Products -->
      ${related.length ? `
        <section class="pdp-related section-cream">
          <div class="section-top">
            <div>
              <span class="eyebrow">COMPLEMENTARY PIECES</span>
              <h2>Complete the <em>look.</em></h2>
            </div>
            <a href="products.html?category=${encodeURIComponent(p.category)}" class="inline-link">
              More from ${p.category} ${icon('arrow-up-right')}
            </a>
          </div>
          <div class="product-grid">${related.map(productCard).join('')}</div>
        </section>
      ` : ''}
    </div>
  `;

                  setupProductDetailsInteractions(p);
                }

                function setupProductDetailsInteractions(p) {
                  // Gallery thumbnails
                  $$('.pdp-thumb-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                      const src = btn.dataset.thumbSrc;
                      const main = $('#pdp-main-img');
                      if (main && src) {
                        main.src = picture(src);
                        $$('.pdp-thumb-btn').forEach(b => b.classList.toggle('active', b === btn));
                      }
                    });
                  });

                  // Image zoom toggle
                  const mainWrap = $('#pdp-main-image-wrap');
                  if (mainWrap) {
                    mainWrap.addEventListener('click', () => {
                      mainWrap.classList.toggle('zoomed');
                    });
                  }

                  // Size buttons
                  $$('[data-pdp-size]').forEach(btn => {
                    btn.addEventListener('click', () => {
                      detailSize = btn.dataset.pdpSize;
                      $('#pdp-selected-size').textContent = detailSize;
                      $$('[data-pdp-size]').forEach(b => {
                        b.classList.toggle('active', b.dataset.pdpSize === detailSize);
                        b.setAttribute('aria-pressed', String(b.dataset.pdpSize === detailSize));
                      });
                      const eq = $('#pdp-enquire-btn');
                      if (eq) eq.href = enquireUrl(p, detailSize, detailColour);
                    });
                  });

                  // Quantity stepper
                  const qtyInput = $('#pdp-qty-input');
                  $('#pdp-qty-minus')?.addEventListener('click', () => {
                    if (detailQty > 1) {
                      detailQty--;
                      if (qtyInput) qtyInput.value = detailQty;
                    }
                  });

                  $('#pdp-qty-plus')?.addEventListener('click', () => {
                    if (detailQty < 10) {
                      detailQty++;
                      if (qtyInput) qtyInput.value = detailQty;
                    }
                  });

                  // Buy Now button
                  $('#pdp-buynow-btn')?.addEventListener('click', () => {
                    openBuyNow(p.id, detailSize, detailColour, detailQty);
                  });

                  // Size Guide Modal
                  $('#open-size-guide-btn')?.addEventListener('click', openSizeGuideModal);
                }

                function openSizeGuideModal() {
                  openModal(`
    <div class="size-guide-modal-inner">
      <span class="eyebrow">VELORO SARTORIAL SPECIFICATIONS</span>
      <h2>Menswear Size & Fit Guide</h2>
      <p>All measurements are provided in inches and centimeters for your convenience. If between sizes, we recommend selecting the larger size for custom tailoring.</p>

      <div class="table-responsive">
        <table class="size-guide-table">
          <thead>
            <tr>
              <th>VELORO Size</th>
              <th>Chest (in)</th>
              <th>Waist (in)</th>
              <th>Collar (in)</th>
              <th>Sleeve (in)</th>
              <th>Shoulder (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>38 / S</strong></td><td>38 – 39</td><td>30 – 32</td><td>15.0</td><td>33.5</td><td>17.5</td></tr>
            <tr><td><strong>40 / M</strong></td><td>40 – 41</td><td>32 – 34</td><td>15.5</td><td>34.0</td><td>18.0</td></tr>
            <tr><td><strong>42 / L</strong></td><td>42 – 43</td><td>34 – 36</td><td>16.5</td><td>34.5</td><td>18.5</td></tr>
            <tr><td><strong>44 / XL</strong></td><td>44 – 45</td><td>36 – 38</td><td>17.5</td><td>35.0</td><td>19.0</td></tr>
            <tr><td><strong>46 / XXL</strong></td><td>46 – 48</td><td>38 – 40</td><td>18.0</td><td>35.5</td><td>19.5</td></tr>
          </tbody>
        </table>
      </div>

      <div class="size-guide-notes">
        <h4>How to Measure Correctly:</h4>
        <p><strong>Chest:</strong> Measure horizontally around the fullest part of your chest, keeping the tape snug beneath the armpits.</p>
        <p><strong>Waist:</strong> Measure around your natural waistline, where your trousers naturally sit.</p>
        <p><strong>Collar:</strong> Measure around the base of your neck where the shirt collar button fastens, inserting one finger for comfort allowance.</p>
      </div>

      <button type="button" class="btn btn-gold" data-close-modal style="margin-top:20px;">
        Got It, Return to Product ${icon('check')}
      </button>
    </div>
  `, false, 'size-guide-modal');
                }

                /* About Us Leadership Team Renderer */
                function renderLeadership() {
                  const area = $('#leadership-team-grid');
                  if (!area || area.children.length > 0) return;
                  area.innerHTML = leadership.map(m => `
    <article class="leadership-card">
      <div class="leadership-media">
        <img src="${picture(m.image)}" alt="${m.name}, ${m.role} at VELORO" loading="lazy" width="700" height="900">
        <span class="leadership-badge">${m.badge}</span>
      </div>
      <div class="leadership-info">
        <span class="leadership-role">${m.role}</span>
        <h3 class="leadership-name">${m.name}</h3>
        <p class="leadership-bio">${m.bio}</p>
        <div class="leadership-focus"><small>Core Focus: ${m.focus}</small></div>
        <blockquote class="leadership-quote">“${m.quote}”</blockquote>
      </div>
    </article>
  `).join('');
                }

                /* Newsletter handler */
                function setupNewsletter() {
                  const f = $('#newsletter-form');
                  if (!f) return;
                  f.addEventListener('submit', e => {
                    e.preventDefault();
                    const input = $('#newsletter-email'), err = $('#newsletter-error');
                    const email = input.value.trim();
                    const valid = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(email);
                    err.textContent = valid ? '' : 'Please enter a valid email address (e.g. name@example.com).';
                    if (!valid) {
                      input.focus();
                      return;
                    }
                    input.value = '';
                    toast('Newsletter preview: Your demonstration subscription was registered locally.');
                  });
                }

                /* Contact form handler */
                function setupContact() {
                  const form = $('#contact-form');
                  if (!form) return;
                  const phone = $('#contact-phone');
                  if (phone) {
                    phone.addEventListener('input', () => {
                      phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
                    });
                  }

                  const url = new URL(location.href);
                  const subject = url.searchParams.get('subject'), item = url.searchParams.get('product'), size = url.searchParams.get('size'), colour = url.searchParams.get('colour'), ref = url.searchParams.get('ref');
                  const allowed = [...$('#contact-subject').options].map(x => x.value);
                  if (subject && allowed.includes(subject)) $('#contact-subject').value = subject;
                  if (item) {
                    $('#contact-subject').value = 'Product Availability';
                    $('#contact-message').value = `Hello VELORO, I would like to enquire about ${item}${ref ? ' (' + ref + ')' : ''}.${size ? ' Preferred size: ' + size + '.' : ''}${colour ? ' Colour preference: ' + colour + '.' : ''} Please let me know regarding in-store fitting availability.`;
                  }

                  const fields = {
                    name: $('#contact-name'),
                    email: $('#contact-email'),
                    phone,
                    subject: $('#contact-subject'),
                    message: $('#contact-message')
                  };

                  const validators = {
                    name: v => /^[\p{L}][\p{L}\s.'-]{1,}$/u.test(v) && v.replace(/[^\p{L}]/gu, '').length >= 2 ? '' : 'Enter a meaningful name with at least two letters.',
                    email: v => /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(v) ? '' : 'Enter a valid email address, e.g. name@example.com.',
                    phone: v => !v || /^\d{10}$/.test(v) ? '' : 'Enter exactly 10 digits or leave this field empty.',
                    subject: v => allowed.includes(v) && v ? '' : 'Please select an enquiry type.',
                    message: v => v.length >= 15 ? '' : 'Please include a little more detail (at least 15 characters).'
                  };

                  const validate = (key) => {
                    const field = fields[key], value = field.value.trim();
                    const msg = validators[key](value);
                    $(`[data-error="${key}"]`).textContent = msg;
                    field.classList.toggle('invalid', Boolean(msg));
                    field.setAttribute('aria-invalid', String(Boolean(msg)));
                    return !msg;
                  };

                  Object.keys(fields).forEach(key => fields[key].addEventListener('blur', () => {
                    if (fields[key].value) validate(key);
                  }));

                  form.addEventListener('submit', e => {
                    e.preventDefault();
                    const errors = Object.keys(fields).filter(key => !validate(key));
                    if (errors.length) {
                      fields[errors[0]].focus();
                      toast('Please correct the highlighted fields before submitting.');
                      return;
                    }
                    form.reset();
                    Object.values(fields).forEach(f => f.classList.remove('invalid'));
                    infoModal('Enquiry Preview Recorded', 'Your enquiry details passed all validation checks. This is a demonstration storefront preview: no email was dispatched. Connect a verified business backend before live launch.');
                  });
                }

                /* Scroll Motion */
                function setupScrollMotion() {
                  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
                  const targets = $$('.section-heading,.craft-copy,.brand-story-top,.store-feature-grid,.quote-card,.category-card,.brand-card,.journal-card,.about-value-card,.leadership-card,.pdp-main-grid');
                  targets.forEach(el => el.classList.add('motion-reveal'));
                  const observer = new IntersectionObserver(entries => {
                    for (const entry of entries) {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                      }
                    }
                  }, { threshold: .07, rootMargin: '0px 0px 40px 0px' });
                  targets.forEach(el => observer.observe(el));
                }

                /* Global Click Handlers */
                function handleDocumentClick(e) {
                  const target = e.target;

                  // Home dropdown in nav
                  const homeToggle = target.closest('.home-nav-toggle');
                  if (homeToggle) {
                    const dropdown = homeToggle.closest('.home-nav-dropdown');
                    const open = !dropdown.classList.contains('open');
                    dropdown.classList.toggle('open', open);
                    homeToggle.setAttribute('aria-expanded', String(open));
                    return;
                  }
                  if (!target.closest('.home-nav-dropdown')) {
                    const dropdown = $('.home-nav-dropdown');
                    if (dropdown) {
                      dropdown.classList.remove('open');
                      dropdown.querySelector('.home-nav-toggle')?.setAttribute('aria-expanded', 'false');
                    }
                  }

                  // Theme & Direction toggles
                  const themeBtn = target.closest('[data-theme-toggle]');
                  if (themeBtn) {
                    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
                    document.documentElement.dataset.theme = newTheme;
                    storage.set('veloro-theme', newTheme);
                    updateControlLabels();
                    return;
                  }
                  const dirBtn = target.closest('[data-dir-toggle]');
                  if (dirBtn) {
                    const newDir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
                    document.documentElement.dir = newDir;
                    storage.set('veloro-direction', newDir);
                    updateControlLabels();
                    return;
                  }

                  // Mobile menu
                  if (target.closest('#mobile-menu-trigger')) {
                    menu(!$('#mobile-nav').classList.contains('open'));
                    return;
                  }
                  if (target.closest('#mobile-nav-scrim')) {
                    menu(false);
                    return;
                  }

                  // Modals
                  if (target.closest('[data-close-modal]')) {
                    closeModal();
                    return;
                  }
                  if (target.id === 'modal-backdrop') {
                    closeModal();
                    return;
                  }

                  // Quick View triggers
                  const quick = target.closest('[data-quick]');
                  if (quick) {
                    openQuick(quick.dataset.quick);
                    return;
                  }
                  const quickSizeBtn = target.closest('[data-quick-size]');
                  if (quickSizeBtn) {
                    manageQuickSize(quickSizeBtn.dataset.quickSize);
                    return;
                  }
                  const quickColourBtn = target.closest('[data-quick-colour]');
                  if (quickColourBtn) {
                    manageQuickColour(quickColourBtn.dataset.quickColour);
                    return;
                  }
                  if (target.closest('#quick-image')) {
                    $('#quick-modal-image')?.classList.toggle('zoomed');
                    return;
                  }
                  const quickBuyNow = target.closest('[data-quick-buynow]');
                  if (quickBuyNow) {
                    openBuyNow(quickBuyNow.dataset.quickBuynow, quickSize, quickColour);
                    return;
                  }

                  // Buy Now triggers from product card
                  const buyBtn = target.closest('[data-buynow]');
                  if (buyBtn) {
                    openBuyNow(buyBtn.dataset.buynow);
                    return;
                  }

                  // Buy Now Modal variant selectors
                  const buySizeBtn = target.closest('[data-buynow-size]');
                  if (buySizeBtn) {
                    buySelectedSize = buySizeBtn.dataset.buynowSize;
                    $('#buy-size-label').textContent = buySelectedSize;
                    $$('[data-buynow-size]').forEach(b => {
                      b.classList.toggle('active', b.dataset.buynowSize === buySelectedSize);
                      b.setAttribute('aria-pressed', String(b.dataset.buynowSize === buySelectedSize));
                    });
                    return;
                  }
                  const buyColourBtn = target.closest('[data-buynow-colour]');
                  if (buyColourBtn) {
                    buySelectedColour = buyColourBtn.dataset.buynowColour;
                    $('#buy-colour-label').textContent = buySelectedColour;
                    $$('[data-buynow-colour]').forEach(b => {
                      b.classList.toggle('active', b.dataset.buynowColour === buySelectedColour);
                    });
                    return;
                  }

                  // Catalogue filters
                  const csize = target.closest('[data-filter-size]');
                  if (csize) {
                    const s = csize.dataset.filterSize;
                    state.sizes.has(s) ? state.sizes.delete(s) : state.sizes.add(s);
                    filterMarkup();
                    renderProducts();
                    return;
                  }
                  const ccolour = target.closest('[data-filter-colour]');
                  if (ccolour) {
                    const v = ccolour.dataset.filterColour;
                    state.colours.has(v) ? state.colours.delete(v) : state.colours.add(v);
                    filterMarkup();
                    renderProducts();
                    return;
                  }
                  if (target.closest('#active-clear-all') || target.closest('#clear-filters-top')) {
                    resetFilters();
                    return;
                  }
                  const remove = target.closest('[data-remove-filter]');
                  if (remove) {
                    const key = remove.dataset.removeFilter;
                    if (key === 'price') state.price = 25000;
                    else if (key === 'collection') state.collection = '';
                    else state[key].delete(remove.dataset.removeValue);
                    filterMarkup();
                    renderProducts();
                    return;
                  }

                  // Journal filter & reset
                  const jcategory = target.closest('[data-journal-category]');
                  if (jcategory) {
                    journalCategory = jcategory.dataset.journalCategory;
                    renderJournal();
                    return;
                  }
                  if (target.closest('[data-journal-reset]')) {
                    journalCategory = 'All';
                    journalQuery = '';
                    if ($('#journal-search')) $('#journal-search').value = '';
                    renderJournal();
                    return;
                  }

                  // Brand filter
                  const bfilter = target.closest('.brand-filter-btn');
                  if (bfilter) {
                    renderBrands(bfilter.dataset.brand);
                    return;
                  }

                  // WhatsApp and Map handlers
                  if (target.closest('#whatsapp-action')) {
                    if (config.whatsapp) {
                      const number = String(config.whatsapp).replace(/\D/g, '');
                      window.open(`https://wa.me/${number}?text=${encodeURIComponent('Hello VELORO, I would like to enquire about your formalwear collections.')}`, '_blank', 'noopener,noreferrer');
                    } else {
                      infoModal('WhatsApp Showroom Concierge', 'To enable live WhatsApp concierge services, please configure the verified store WhatsApp number in assets/js/data.js.');
                    }
                    return;
                  }
                  if (target.closest('#map-action') || target.closest('#map-placeholder-action')) {
                    if (config.address) {
                      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`, '_blank', 'noopener,noreferrer');
                    } else {
                      infoModal('Showroom Address Notice', 'The flagship showroom address will be confirmed upon grand launch. Add the verified location in assets/js/data.js to enable live directions.');
                    }
                    return;
                  }
                }

                function setupA11y() {
                  document.addEventListener('keydown', e => {
                    if (e.key === 'Escape') {
                      const homeDrop = $('.home-nav-dropdown.open');
                      if (homeDrop) {
                        homeDrop.classList.remove('open');
                        homeDrop.querySelector('button')?.setAttribute('aria-expanded', 'false');
                        homeDrop.querySelector('button')?.focus();
                        return;
                      }
                      if ($('#modal-backdrop')) {
                        closeModal();
                        return;
                      }
                      if ($('#filter-sidebar')?.classList.contains('open')) {
                        showFilters(false);
                        return;
                      }
                      if ($('#mobile-nav')?.classList.contains('open')) {
                        menu(false);
                        return;
                      }
                    }
                    if (e.key === 'Tab' && $('#modal-backdrop')) {
                      const focusables = $$('button,a,input,select,textarea,[tabindex="0"]', $('#modal-backdrop')).filter(n => !n.disabled && n.offsetParent !== null);
                      if (!focusables.length) return;
                      const first = focusables[0], last = focusables[focusables.length - 1];
                      if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                      } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                      }
                    }
                  });

                  window.addEventListener('resize', () => {
                    if (innerWidth > 991 && $('#mobile-nav')?.classList.contains('open')) menu(false);
                    if (innerWidth > 767 && $('#filter-sidebar')?.classList.contains('open')) showFilters(false);
                  });
                }

                function initBrandsPage() {
                  if (page !== 'brands') {
                    renderBrands('all');
                    return;
                  }
                  const url = new URL(location.href);
                  const b = url.searchParams.get('brand');
                  if (b && brands.some(x => x.name.toLowerCase() === b.toLowerCase())) {
                    const matched = brands.find(x => x.name.toLowerCase() === b.toLowerCase());
                    renderBrands(matched.name);
                  } else {
                    renderBrands('all');
                  }
                }

                function initialize() {
                  installIcons();
                  renderHeader();
                  renderFooter();
                  renderIcons();
                  renderHome();
                  renderOccasionProducts();
                  initializeProducts();
                  initBrandsPage();
                  initJournal();
                  initProductDetails();
                  renderLeadership();
                  setupNewsletter();
                  setupContact();
                  setupA11y();
                  document.addEventListener('click', handleDocumentClick);
                  setupScrollMotion();
                }

                // Global hooks for inline occasion cards and order requests
                window.openBuyNow = openBuyNow;
                window.productCard = productCard;
                window.openQuick = openQuick;

                if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
                else initialize();

              })();
