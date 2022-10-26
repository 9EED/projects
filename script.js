function rdm(max){
    return Math.floor(Math.random()*(max +1));
};
function random( min, max, floor){
    if(floor) return Math.floor((Math.random()*(max - min + 1)) + min);
    return(Math.random()*(max - min)) + min;
};
function rdmAround(x, floor){
    if(floor) return Math.floor( Math.random()* x * 2 - x )
    return Math.random()* x * 2 - x
}
function write(input){
    console.log('%c' +  JSON.stringify(input), 'color: #8BF');
    return void 0;
};
function error(input){
    console.log('%c' + JSON.stringify(input), 'color: #F54;');
    return void 0;
};
function $(id){
    return document.getElementById(id);
};
function randomColor(){
    return `hsl( ${rdm(360)}, ${random( 20, 70, true)}%, 50%)`
};
function lerp(a, b, k){
    return a + (b - a) * k
}
function getLine( x1, y1, x2, y2){
    let line = []
    if( x1 - x2 == 0 && y1 - y2 == 0) return line
    let dx = Math.abs(x1 - x2)
    let dy = Math.abs(y1 - y2)
    let m = dy / dx
    let steps = m > 1 ? dy : dx;
    let xincrement = dx / steps * (x1-x2 >= 0 ? -1 : 1)
    let yincrement = dy / steps * (y1-y2 >= 0 ? -1 : 1)
    for( let i = 0 ; i < steps+1 ; i++ ){
        line.push({x:Math.floor(x1+xincrement*i), y:Math.floor(y1+yincrement*i)})
    }
    return line
};
function getCircle( x, y, r){
    let circle = []
    for( let x1 = -r-1 ; x1 < r+1 ; x1++){
        for( let y1 = -r-1 ; y1 < r+1 ; y1++){
            if(Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2))<=r) circle.push({x:x+x1, y:y+y1})
        }
    }
    return circle
};
brightness = 0.1
mouse = {x: window.innerWidth/2, y: window.innerHeight/2}
active = false
x = window.innerWidth/2
y = window.innerHeight/2
speed = 0.5

window.addEventListener('mousemove', (event)=>{
    active = true
    mouse.x = event.x
    mouse.y = event.y
})
window.addEventListener('mouseout', ()=>{
    active = false
})

function animate(){
    requestAnimationFrame(animate)    
    $('interactive-background').style.background = `
    radial-gradient(
    500px circle at ${x}px ${y}px,
    rgba(255, 255, 255, ${brightness}),
    transparent
    )
    `
    if (active){
        x = lerp(x, mouse.x, .15)
        y = lerp(y, mouse.y, .15)
    } else {
        if (x > window.innerWidth/3) x -= 1
        else x += 1
        if (y > window.innerHeight/2) y -= 1
        else y += 1
    }
}

animate()