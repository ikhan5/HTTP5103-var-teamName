window.onload = loadingAnimation;

function loadingAnimation() {
   const loading = document.getElementById('loading-wrapper');
   loading.classList.add('visible'); 
   setTimeout(function(){
    loading.classList.remove('visible');
   }, 5000);
}