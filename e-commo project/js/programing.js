var scroll=document.querySelector('.scrolltop');
window.addEventListener("scroll",function()
{
    
    scroll.classList.toggle("active",window.scrollY > 500);
})
function scrollup()
{
    window.scrollTo(
        {
            top:0,
            behavior:'smooth'
        }
    )
    
}
