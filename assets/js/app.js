window.addEventListener('scroll', function(){
        const nav = document.querySelector('nav');
        
        nav.classList.toggle("sticky", window.scrollY > 0);
    })

    
// toggleMenu()
function toggleMenu()
{
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}