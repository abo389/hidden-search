const search = document.getElementById( "search" );
search.addEventListener( "click", () =>
{
  search.previousElementSibling.classList.toggle( "active" )
  search.previousElementSibling.focus()
})