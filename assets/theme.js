document.addEventListener('click',function(e){
  if(e.target.closest('.mobile-nav a')) document.body.classList.remove('menu-open');
});
