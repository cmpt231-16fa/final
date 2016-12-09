// Show/hide all elements class="soln"
function toggleSolns() {
  var solns = document.getElementsByClassName('soln');
  for (i=0; i<solns.length; i++)
    solns[i].style.display = 
      (window.getComputedStyle(solns[i]).display == 'none') ? 'block' : 'none';
}
