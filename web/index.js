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


// API Data
let floorPrice = document.getElementById('floor_price')

getFloorPrice().then(data => floorPrice.textContent = "floor price for " + "TBD" + ": " + data.floor_price/1000000 + " ADA")

async function getFloorPrice() {
    let response = await fetch('https://api.opencnft.io/1/policy/d79181749db228d10c98501a7e1728585780bcf133b7b3df953a9017/floor_price');
    let data = await response.json()
    return data
}
/*async function getCollectionName() {
    let response = await fetch('https://api.opencnft.io/1/policy/d79181749db228d10c98501a7e1728585780bcf133b7b3df953a9017/floor_price');
    let data = await response.json()
    return data
}*/


// Nami wallet connect
let namiWallet = document.getElementById('nami_wallet')

async function namiLogin() {
    
    let api = await cardano.nami.enable()
    let connectedCheck = await cardano.nami.isEnabled()
    if (connectedCheck != true) {
        namiWallet.textContent = 'failed'
    } else {
        console.log(await api.getBalance())
        //namiWallet.textContent = cardano.nami.enable().getBalance()
    }
}




