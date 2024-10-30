document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.text_title');
    const lines = title.querySelectorAll('span');

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1'; // Зробити видимим
            line.style.animation = 'fade-in 0.5s forwards'; // Запустити анімацію
        }, index * 500); // Затримка 500 мс між рядками
    });
});
