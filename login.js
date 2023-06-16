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
var $btnRegis = document.getElementById('btn-regis')

$registext.addEventListener('click', clique)

function clique() {
    $left.style.animation = 'changeColor'
    $registext.style.border = 'none'
    $registext.style.transition = '2s'
    $registext.style.transform = 'translatey(0px)'
    $registext.style.animation = 'goUp 3s'
    setTimeout(() => {
        $registext.style.position = 'static'
    }, 3000)
}