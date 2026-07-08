/* ============ FILE: js/main.js ============ */
document.addEventListener('DOMContentLoaded',()=>{
  // Mobile nav toggle
  const toggle=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle){
    toggle.addEventListener('click',()=>{
      links.style.display=links.style.display==='flex'?'none':'flex';
      links.style.cssText+='flex-direction:column;position:absolute;top:82px;left:0;right:0;background:#fff;padding:20px 24px;box-shadow:0 8px 16px rgba(0,0,0,.08);';
    });
  }

  // Back to top
  const backTop=document.querySelector('.back-top');
  if(backTop){
    window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>400));
    backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }

  // Load products.json into any [data-product-render] container
  const renderTarget=document.querySelector('[data-product-render]');
  if(renderTarget){
    fetch('data/products.json').then(r=>r.json()).then(products=>{
      const limit=renderTarget.dataset.limit?parseInt(renderTarget.dataset.limit):products.length;
      renderTarget.innerHTML=products.slice(0,limit).map(p=>`
        <div class="prod-card">
          <div class="prod-img">
            ${p.badge?`<span class="badge">${p.badge}</span>`:''}
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          </div>
          <div class="prod-body">
            <span class="prod-cat">${p.category}</span>
            <h3>${p.name}</h3>
            <div class="price-row">
              <span class="price">₹${p.price}${p.mrp?`<small>₹${p.mrp}</small>`:''}</span>
              <a href="product-details.html?id=${p.id}" class="icon-btn"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>`).join('');
    }).catch(()=>{});
  }

  // Contact form (contact.html) - basic front-end validation only
  const contactForm=document.querySelector('#contactForm');
  if(contactForm){
    contactForm.addEventListener('submit',e=>{
      e.preventDefault();
      const msg=document.querySelector('#formMsg');
      msg.textContent='Thanks! Your message has been received. We will contact you shortly.';
      msg.style.color='green';
      contactForm.reset();
    });
  }
});