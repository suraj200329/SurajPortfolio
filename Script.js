 // year
    document.getElementById('y').textContent = new Date().getFullYear();

    // smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href');
        if(id && id !== '#'){
          e.preventDefault();
          document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    // simple form validation + fake submit
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if(!data.name || !data.email || !data.message){
        msg.textContent = 'Please fill out all fields.';
        return;
      }
      // simulate send
      msg.textContent = 'Thanks, ' + data.name + '! I\'ll get back to you shortly.';
      form.reset();
    });