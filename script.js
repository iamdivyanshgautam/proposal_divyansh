
const messages = [
    "Are you sure Renuka?",
    "Really sure bachha??",
    "Are you really positive 🥲?",
    "Rasna please...",
    "If you say no, I will be really sad...🥹",
    "I will be really really sad...🥹🥹",
    "Renuka just say yes naaa...😭😭",
    "Ok fine, I will stop asking...😒",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const img = document.querySelector('#CuteGIF');
    img.src = "./cuteGIF.webp";
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
