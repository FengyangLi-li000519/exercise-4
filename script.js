
const $button = document.getElementById('button')
const $menu = document.getElementById('menu')

let menuToggle = false

$button.addEventListener('click',function(){
     if (menuToggle === false){
         $menu.style.display = 'block'
        
         menuToggle = true
     }else if(menuToggle === true){
        $menu.style.display = 'none'
         menuToggle = false
     }
})
window.addEventListener('resize',function(){
    if(window.innerWidth>=768){
        $menu.style.display = 'none'
        
        menuToggle = false
    }
})
AOS.init()
