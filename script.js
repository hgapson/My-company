const button=document.querySelector('.menu-button');
button?.addEventListener('click',()=>{const header=document.querySelector('.site-header');const open=header.classList.toggle('open');button.setAttribute('aria-expanded',open)});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('enquiry-form').addEventListener('submit',(event)=>{event.preventDefault();document.getElementById('form-note').textContent='Thanks — your enquiry is ready to send. Connect this form to your business email or form service when you launch.';event.currentTarget.reset()});
