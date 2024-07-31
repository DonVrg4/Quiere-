document.addEventListener('DOMContentLoaded', (event) => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const message = document.getElementById('message');
    const bigHeart = document.getElementById('big-heart');

    noBtn.addEventListener('mouseover', (event) => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        const offset = 10; // Desplazamiento del botón
        let newLeft = Math.random() * (containerRect.width - btnRect.width - offset * 2) + offset;
        let newTop = Math.random() * (containerRect.height - btnRect.height - offset * 2) + offset;

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newLeft}px`;
        noBtn.style.top = `${newTop}px`;
    });

    noBtn.addEventListener('click', (event) => {
        event.preventDefault();
        alert('No puedes decir no!');
    });

    yesBtn.addEventListener('click', (event) => {
        message.classList.remove('hidden');
        bigHeart.classList.remove('hidden');
    });
});
