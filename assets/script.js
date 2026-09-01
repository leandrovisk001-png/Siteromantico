const openButton = document.querySelector('[data-open-letter]');
const letter = document.querySelector('#carta');
const heartButton = document.querySelector('[data-heart]');
const toast = document.querySelector('.heart-toast');
const counter = document.querySelector('[data-start-date]');

if (counter) {
    const [year, month, day] = counter.dataset.startDate.split('-').map(Number);
    const today = new Date();
    const startUtc = Date.UTC(year, month - 1, day);
    const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const daysTogether = Math.floor((todayUtc - startUtc) / 86400000);
    const output = counter.querySelector('[data-days-together]');

    if (output && daysTogether >= 0) {
        output.textContent = daysTogether.toLocaleString('pt-BR');
    }
}

openButton?.addEventListener('click', () => {
    openButton.setAttribute('aria-expanded', 'true');
    letter?.scrollIntoView({ behavior: 'smooth' });
});

heartButton?.addEventListener('click', () => {
    toast?.classList.add('is-visible');
    window.setTimeout(() => toast?.classList.remove('is-visible'), 2400);

    for (let index = 0; index < 9; index += 1) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = '♥';
        heart.style.left = `${heartButton.getBoundingClientRect().left + heartButton.offsetWidth / 2}px`;
        heart.style.setProperty('--drift', `${(Math.random() - 0.5) * 180}px`);
        heart.style.animationDelay = `${index * 55}ms`;
        heart.style.fontSize = `${0.7 + Math.random() * 1.1}rem`;
        document.body.appendChild(heart);
        window.setTimeout(() => heart.remove(), 2800);
    }
});
