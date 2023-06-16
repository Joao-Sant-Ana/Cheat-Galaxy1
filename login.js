var $right = document.getElementById('right')
var $left = document.getElementById('left')
var $registext = document.getElementById('txtregister')
var $logtext = document.getElementById('txtlogin')
var $login = document.getElementById('login')
var $userLogin = document.getElementById('username-login')
var $passLogin = document.getElementById('password-login')
var $btnLogin = document.getElementById('login-btn')
var $register = document.getElementById('register')
var $userRegis = document.getElementById('username-regis')
var $passRegis = document.getElementById('password-regis')
var $btnRegis = document.getElementById('register-btn')

$registext.addEventListener('click', clique)

function clique() {
    $left.style.pointerEvents = 'all'
    
    //Animação da cor\\

    $left.style.transitionDuration = '1.5s'
    $left.style.backgroundColor = 'white'

    //Animação do texto subindo\\

    $registext.style.transition = '1.5s'
    $registext.style.marginTop = '0'+'%'
    $registext.style.border = '2px solid white'
    $registext.style.color = 'black'
    $registext.style.backgroundColor = 'white'
    $registext.style.cursor = 'default'

    //Animação dos inputs\\

    $userRegis.style.transition = '1.5s'
    $userRegis.style.backgroundColor = 'white'
    $userRegis.style.border = '1px solid black'
    $userRegis.style.pointerEvents = 'all'

    $passRegis.style.transition = '1.5s'
    $passRegis.style.backgroundColor = 'white'
    $passRegis.style.border = '1px solid black'
    $passRegis.style.pointerEvents = 'all'

    $btnRegis.style.transition = '1.5s'
    $btnRegis.style.backgroundColor = 'white'
    $btnRegis.style.border = '1px solid black'
    $btnRegis.style.backgroundColor = 'Grey'
    $btnRegis.style.cursor = 'pointer'
    $btnRegis.style.pointerEvents = 'all'
}