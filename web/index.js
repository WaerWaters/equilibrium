// Mobile navigation bar rosponsivness
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Header animations
let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function() {
    let value = this.window.scrollY
    stars.style.left = value * 0.3 + 'px';
    moon.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.1 + 'px';
    mountains_behind.style.top = value * 0.35 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginTop = value + 'px';
    btn.style.marginTop = value + 'px';
    header.style.top = value * 0.7 + 'px';
})
