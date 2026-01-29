const h1 = document.querySelector('.hello:first-child h1');

console.dir(h1)
// 콘솔창에서 property 이름 앞에 on이 붙어 있으면 event listener임
// 사용할 땐 on 을 제외하고 사용하면 됨 ex: onclick -> click

function handleTitleClick() {
    console.log('h1 was clicked!')
    h1.style.color = 'blue'
}

function handleMouseEnter() {
    h1.innerText = 'Mouse is here!';
    h1.style.color = 'red'
}

function handleMouseLeave() {
    h1.innerText = 'Mouse is gone!';
    h1.style.color = 'yellow'
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier!');
}

function handleWindowOffline() {
    alert('SOS no WIFI');
}

function handleWindowOnline() {
    alert('ALL Good');
}

// console.log(h1);

// h1.style.color = 'blue'
h1.addEventListener('click', handleTitleClick)
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)

// h1.onclick = handleh1Click;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;


window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('offline', handleWindowOnline);