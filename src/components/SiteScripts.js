// One small inline script: delegated click tracking for every tracked link.
export const BODY_SCRIPT = `(function(){
document.addEventListener("click",function(e){
  var a=e.target&&e.target.closest&&e.target.closest("a[data-ev]");
  if(!a||typeof window.gtag!=="function")return;
  try{window.gtag("event",a.getAttribute("data-ev"),JSON.parse(a.getAttribute("data-p")||"{}"))}catch(_){}
});
})();`;
