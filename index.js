const fieldWidth = 700
const fieldHeight = 400
const diameter = 70

const maxleft = fieldWidth - diameter - 2
const maxtop = fieldHeight - diameter - 2
const vx = 5
const vy = 5

let running = false
let goRight = true
let goDown = true
let x = 0
let y = 0


let deg = 0; // Add a variable to track the rotation degree
let speed = 5; // Speed of the rotation

const randomDirection = () => {
    // สุ่มทิศทางการหมุน: 1 หมุนตามเข็มนาฬิกา, -1 หมุนทวนเข็มนาฬิกา
    return Math.random() < 0.5 ? 1 : -1;
};

let rotationDirection = randomDirection(); // ทิศทางการหมุนเริ่มต้น

const runClick = () => {
    running = !running
    render()
}


const calculate = () => {
    if (goRight) {
        x = x + vx
        if (x >= maxleft){
            goRight = false
            rotationDirection = randomDirection();
        }
    } else{
        x = x - vx
        if (x <= 0){
            goRight = true
            rotationDirection = randomDirection();
        }
    }

    if(goDown) {
        y = y + vy
        if (y >= maxtop){
            goDown = false
            rotationDirection = randomDirection();
        }
    } else {
        y = y - vy
        if (y <= 0){
            goDown = true
            rotationDirection = randomDirection();
        }
    }
    // Increment the rotation angle
    deg += speed * rotationDirection;
}

const render = () => {
    //run button
    if(running){
        document.getElementById('run').innerHTML = '<span class="bi bi-pause-fill"></span>&nbsp;Pause';
        document.getElementById('run').classList.remove('btn-success')
        document.getElementById('run').classList.add('btn-warning')
    } else {
        document.getElementById('run').innerHTML = '<span class="bi bi-play-fill"></span>&nbsp;Run';
        document.getElementById('run').classList.remove('btn-warning')
        document.getElementById('run').classList.add('btn-success')
    }

    const ball = document.getElementById('ball');
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    ball.style.transform = `rotate(${deg}deg)`; // Apply the rotation

}


const process = () => {
    if(running){
        calculate()
        render()
    }
}

const initial = () => {
    //field
    document.getElementById('field').style.height = fieldHeight + 'px'
    document.getElementById('field').style.width = fieldWidth + 'px'
    // ball
    document.getElementById('ball').style.height = diameter + 'px'
    document.getElementById('ball').style.width = diameter + 'px'
}


document.addEventListener('DOMContentLoaded' , () => {
    initial()
    setInterval(process, 25)
})

 
function picture(paramiter) {
    if(paramiter == 'none'){
        document.getElementById('None').classList.add('active')
        document.getElementById('Bas').classList.remove('active')
        document.getElementById('Foot').classList.remove('active')
        document.getElementById('Vole').classList.remove('active')
        document.getElementById('Hu').classList.remove('active')
        document.getElementById('CartOon').classList.remove('active')
        document.getElementById('logoo').classList.remove('active')
         document.getElementById('ball').style.backgroundImage = "url()"
        
    }

    if(paramiter == 'basketball'){
        document.getElementById('None').classList.remove('active')
        document.getElementById('Bas').classList.add('active')
        document.getElementById('Foot').classList.remove('active')
        document.getElementById('Vole').classList.remove('active')
        document.getElementById('Hu').classList.remove('active')
        document.getElementById('CartOon').classList.remove('active')
        document.getElementById('logoo').classList.remove('active')
        document.getElementById('ball').style.backgroundImage = "url(./img/Basketball.png)"
        document.getElementById('ball').style.backgroundSize = "120%"
    }
    if(paramiter == 'football'){
        document.getElementById('None').classList.remove('active')
        document.getElementById('Bas').classList.remove('active')
        document.getElementById('Foot').classList.add('active')
        document.getElementById('Vole').classList.remove('active')
        document.getElementById('Hu').classList.remove('active')
        document.getElementById('CartOon').classList.remove('active')
        document.getElementById('logoo').classList.remove('active')
        document.getElementById('ball').style.backgroundImage = "url(./img/football.png)"
        document.getElementById('ball').style.backgroundSize = "100%"
    }

    if(paramiter == 'voletball'){
        document.getElementById('None').classList.remove('active')
        document.getElementById('Bas').classList.remove('active')
        document.getElementById('Foot').classList.remove('active')
        document.getElementById('Vole').classList.add('active')
        document.getElementById('Hu').classList.remove('active')
        document.getElementById('CartOon').classList.remove('active')
        document.getElementById('logoo').classList.remove('active')
        document.getElementById('ball').style.backgroundImage = "url(./img/volleyball.png)"
        
        document.getElementById('ball').style.backgroundSize = "150%"
        
         
    }

    if(paramiter == 'human'){
        document.getElementById('None').classList.remove('active')
        document.getElementById('Bas').classList.remove('active')
        document.getElementById('Foot').classList.remove('active')
        document.getElementById('Vole').classList.remove('active')
        document.getElementById('Hu').classList.add('active')
        document.getElementById('CartOon').classList.remove('active')
        document.getElementById('logoo').classList.remove('active')
        document.getElementById('ball').style.backgroundImage = "url(./img/Humen.jpg)"
         document.getElementById('ball').style.backgroundSize = "100%"
    }

    if(paramiter == 'cartoon'){
        document.getElementById('None').classList.remove('active')
        document.getElementById('Bas').classList.remove('active')
        document.getElementById('Foot').classList.remove('active')
        document.getElementById('Vole').classList.remove('active')
        document.getElementById('Hu').classList.remove('active')
        document.getElementById('CartOon').classList.add('active')
        document.getElementById('logoo').classList.remove('active')
        document.getElementById('ball').style.backgroundImage = "url(./img/Cartoon.png)"
        document.getElementById('ball').style.backgroundSize = "90%"
    }

    if(paramiter == 'logo'){
        document.getElementById('None').classList.remove('active')
        document.getElementById('Bas').classList.remove('active')
        document.getElementById('Foot').classList.remove('active')
        document.getElementById('Vole').classList.remove('active')
        document.getElementById('Hu').classList.remove('active')
        document.getElementById('CartOon').classList.remove('active')
        document.getElementById('logoo').classList.add('active')
        document.getElementById('ball').style.backgroundImage = "url(./img/Logo.png)"
        document.getElementById('ball').style.backgroundSize = "135%"
    }
    
}
    
