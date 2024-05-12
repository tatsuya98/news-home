const showMenu = () =>{
    getMenu().style.display = 'block'
    getClose().addEventListener('click',closeMenu)
    getBurger().removeEventListener('click',showMenu)
}
const closeMenu = () =>{
    getMenu().style.display = 'none'
    getClose().removeEventListener('click',closeMenu)
    getBurger().addEventListener('click',showMenu)
}

const getBurger = () =>{
    return document.querySelector('.burger')
}

const getClose = () =>{
    return document.querySelector('.close')
}

const getMenu = () =>{
    return document.querySelector('.sidebar')
}

getBurger().addEventListener('click',showMenu)