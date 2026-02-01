const images = [
    '0.jpg',
    '1.jpeg',
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`

console.log(bgImage)
document.body.appendChild(bgImage)
