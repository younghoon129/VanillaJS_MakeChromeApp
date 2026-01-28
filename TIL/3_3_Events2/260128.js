const title = document.querySelector('.hello:first-child h1');

console.dir(title)
// 콘솔창에서 property 이름 앞에 on이 붙어 있으면 event listener임
// 사용할 땐 on 을 제외하고 사용하면 됨 ex: onclick -> click

function handleTitleClick() {
    console.log('title was clicked!')
    // title.style.color = 'blue'
}

function handleMouseEnter() {
    title.innerText = 'Mouse is here!';
    title.style.color = 'red'
}

function handleMouseLeave() {
    title.innerText = 'Mouse is gone!';
    title.style.color = 'yellow'
}

// console.log(title);

// title.style.color = 'blue'
title.addEventListener('click', handleTitleClick)
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)
