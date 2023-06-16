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

$registext.addEventListener('click', leftClick)
$logtext.addEventListener('click', rightClick)

function leftClick() {

    //ESQUERDA\\

    $left.style.pointerEvents = 'all'
    
    //Animação da cor esquerda\\

    $left.style.transitionDuration = '1.5s'
    $left.style.backgroundColor = 'white'

    //Animação do texto subindo esquerda\\

    $registext.style.transition = '1.5s'
    $registext.style.marginTop = '0'+'%'
    $registext.style.border = '2px solid white'
    $registext.style.color = 'black'
    $registext.style.backgroundColor = 'white'
    $registext.style.cursor = 'default'

    //Animação dos inputs esquerda\\

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

    //DIREITA\\

    $right.style.pointerEvents = 'none'

    //Animação da cor direita\\

    $right.style.transitionDuration = '1s'
    $right.style.backgroundColor = 'black'

    //Animação do texto subindo direita\\

    $logtext.style.transition = '2s'
    $logtext.style.marginTop = '62'+'%'
    $logtext.style.border = '2px solid black'
    $logtext.style.color = 'white'
    $logtext.style.backgroundColor = 'black'
    $logtext.style.borderRadius = '15'+'px'
    $logtext.style.cursor = 'pointer'
    $logtext.style.pointerEvents = 'all'

    //Animação dos inputs direita\\

    $userLogin.style.transition = '1.5s'
    $userLogin.style.backgroundColor = 'black'
    $userLogin.style.border = 'none'
    $userLogin.style.pointerEvents = 'none'

    $passLogin.style.transition = '1.5s'
    $passLogin.style.backgroundColor = 'black'
    $passLogin.style.border = 'none'
    $passLogin.style.pointerEvents = 'none'

    $btnLogin.style.transition = '1.5s'
    $btnLogin.style.backgroundColor = 'black'
    $btnLogin.style.border = 'none'
    $btnLogin.style.backgroundColor = 'black'
    $btnLogin.style.cursor = 'none'
    $btnLogin.style.pointerEvents = 'none'
}

function rightClick() {
    
    //ESQUERDA\\

    $left.style.pointerEvents = 'none'
    
    //Animação da cor esquerda\\

    $left.style.transitionDuration = '1.5s'
    $left.style.backgroundColor = 'black'

    //Animação do texto subindo esquerda\\

    $registext.style.transition = '1.5s'
    $registext.style.marginTop = '69.5'+'%'
    $registext.style.border = 'none'
    $registext.style.color = 'white'
    $registext.style.backgroundColor = 'black'
    $registext.style.cursor = 'pointer'

    //Animação dos inputs esquerda\\

    $userRegis.style.transition = '1.5s'
    $userRegis.style.backgroundColor = 'black'
    $userRegis.style.border = 'none'
    $userRegis.style.pointerEvents = 'none'

    $passRegis.style.transition = '1.5s'
    $passRegis.style.backgroundColor = 'black'
    $passRegis.style.border = 'none'
    $passRegis.style.pointerEvents = 'none'

    $btnRegis.style.transition = '1.5s'
    $btnRegis.style.backgroundColor = 'black'
    $btnRegis.style.border = 'none'
    $btnRegis.style.backgroundColor = 'black'
    $btnRegis.style.cursor = 'default'
    $btnRegis.style.pointerEvents = 'none'

    //DIREITA\\

    $right.style.pointerEvents = 'none'

    //Animação da cor direita\\

    $right.style.transitionDuration = '1s'
    $right.style.backgroundColor = 'black'

    //Animação do texto subindo direita\\

    $logtext.style.transition = '2s'
    $logtext.style.marginTop = '62'+'%'
    $logtext.style.border = '2px solid black'
    $logtext.style.color = 'white'
    $logtext.style.backgroundColor = 'black'
    $logtext.style.borderRadius = '15'+'px'
    $logtext.style.cursor = 'pointer'
    $logtext.style.pointerEvents = 'all'

    //Animação dos inputs direita\\

    $userLogin.style.transition = '1.5s'
    $userLogin.style.backgroundColor = 'black'
    $userLogin.style.border = 'none'
    $userLogin.style.pointerEvents = 'none'

    $passLogin.style.transition = '1.5s'
    $passLogin.style.backgroundColor = 'black'
    $passLogin.style.border = 'none'
    $passLogin.style.pointerEvents = 'none'

    $btnLogin.style.transition = '1.5s'
    $btnLogin.style.backgroundColor = 'black'
    $btnLogin.style.border = 'none'
    $btnLogin.style.backgroundColor = 'black'
    $btnLogin.style.cursor = 'none'
    $btnLogin.style.pointerEvents = 'none'
}
