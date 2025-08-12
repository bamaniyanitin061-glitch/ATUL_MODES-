// Simple script for year & contact form
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  ['year','year2','year3'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });
});

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const out = document.getElementById('formResult');
  // यह सिर्फ frontend demo है — backend नहीं है
  out.textContent = `धन्यवाद ${name}! आपका संदेश प्राप्त हुआ (demo)।`;
  out.style.color = '#a7f3d0';
  document.getElementById('contactForm').reset();
}