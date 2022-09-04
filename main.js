let progressBar = document.querySelector("#progress-bar")
let prevBtn = document.querySelector('#prev-btn');
let nextBtn = document.querySelector('#next-btn')
let squircles = document.querySelectorAll('.squircle')

let ongoingBar = 1;

nextBtn.addEventListener('click', () => {
    ongoingBar++;

    if (ongoingBar > squircles.length) {
        ongoingBar = squircles.length
    }
    ongoing()

})

prevBtn.addEventListener('click', () => {
    ongoingBar--;

    if (ongoingBar < 1) {
        ongoingBar = 1
    }
    ongoing()
})

function ongoing() {
    squircles.forEach((sqrc, i) => {
      if (i < ongoingBar) {
        sqrc.classList.add('ongoing')
      } else {
        sqrc.classList.remove('ongoing')
      }
    })
    let activeprog = document.querySelectorAll('.ongoing')
    let percentageBar = Math.floor(((activeprog.length - 1) / (squircles.length -1)) * 100) + '%'
    progressBar.style.width = percentageBar 
    console.log(ongoingBar)
    
    if ( ongoingBar === 1 ) {
        prevBtn.disabled = true;
    } else if (ongoingBar === squircles.length){
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false
        prevBtn.disabled = false;
    }
    
}