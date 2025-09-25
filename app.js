// app.js - leves interações
document.addEventListener('DOMContentLoaded', function(){
  // fade in card
  const card = document.querySelector('.card');
  card.style.opacity = 0;
  card.style.transform = 'translateY(8px)';
  setTimeout(()=> {
    card.style.transition = 'opacity .45s ease, transform .45s ease';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, 80);

  // optional: small load animation on buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((b,i)=>{
    b.style.opacity = 0;
    setTimeout(()=> b.style.transition = 'opacity .35s ease, transform .25s ease', i*80);
    setTimeout(()=> b.style.opacity = 1, 120 + i*120);
  });

  // ensure target _blank accessibility (already set in HTML)
});
