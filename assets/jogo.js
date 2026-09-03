const challenges = {
    suave: [
        ['Conexão', '♥', 'Olhe nos olhos por 20 segundos. Quem sorrir primeiro dá um beijo no outro.'],
        ['Carinho', '✦', 'Escolha uma música e dancem juntinhos até ela terminar.'],
        ['Confissão', '♡', 'Conte qual pequeno gesto do outro mais faz você se sentir amado.'],
        ['Beijo', '♥', 'Dê três beijos: um carinhoso, um demorado e um completamente inesperado.'],
        ['Memória', '✦', 'Relembre o momento em que percebeu que estava se apaixonando.'],
        ['Toque', '♡', 'Faça um carinho de dois minutos no cabelo ou no rosto do outro.'],
        ['Segredo', '♥', 'Sussurre uma coisa que você ainda quer muito viver a dois.'],
        ['Escolha', '✦', 'Deixe o outro escolher onde quer receber cinco beijos delicados.'],
        ['Elogio', '♡', 'Diga três coisas que você acha irresistíveis no outro.'],
        ['Abraço', '♥', 'Fiquem abraçados em silêncio por um minuto, sem olhar o celular.'],
        ['Desejo', '✦', 'Complete: “Hoje eu quero fazer você se sentir...”'],
        ['Surpresa', '♡', 'Planejem um encontro que vocês gostariam de viver nas próximas semanas.'],
        ['Conexão', '♥', 'Segure a mão do outro e conte algo que tem vontade de agradecer.'],
        ['Beijo', '✦', 'Escolha o lugar mais bonito do rosto do outro e beije devagar.']
    ],
    quente: [
        ['Provocação', '♥', 'Chegue pertinho e diga, no ouvido, uma coisa que você adoraria que acontecesse hoje.'],
        ['Beijo', '✦', 'Beije o outro por 30 segundos, mas pare bem quando estiver ficando melhor.'],
        ['Toque', '♡', 'Faça uma massagem lenta nos ombros do outro por dois minutos.'],
        ['Desejo', '♥', 'Conte qual atitude do outro mais desperta seu desejo.'],
        ['Comando', '✦', 'Escolha uma música e conduza uma dança bem próxima, sem pressa.'],
        ['Tentação', '♡', 'Dê um beijo no lugar que você mais gosta — sem escolher a boca.'],
        ['Segredo', '♥', 'Sussurre uma fantasia romântica que gostaria de viver a dois.'],
        ['Olhar', '✦', 'Fique a um palmo de distância por 20 segundos. Só vale provocar com o olhar.'],
        ['Escolha', '♡', 'Deixe o outro escolher: beijo demorado ou massagem relaxante.'],
        ['Provocação', '♥', 'Diga exatamente o que mais chamou sua atenção no outro hoje.'],
        ['Desafio', '✦', 'Passe um minuto beijando apenas o pescoço e o rosto do outro.'],
        ['Promessa', '♡', 'Complete baixinho: “Quando esse jogo acabar, eu quero...”'],
        ['Toque', '♥', 'De olhos fechados, descubra onde o outro quer receber um carinho.'],
        ['Química', '✦', 'Recriem por um minuto a tensão do primeiro beijo de vocês.']
    ],
    intenso: [
        ['Ousadia', '♥', 'Descreva no ouvido do outro, sem tocar, como gostaria que a noite continuasse.'],
        ['Controle', '✦', 'Por um minuto, uma pessoa comanda os beijos; a outra apenas acompanha.'],
        ['Tentação', '♡', 'Escolha três lugares para beijar devagar. O outro decide a ordem.'],
        ['Confissão', '♥', 'Conte uma fantasia que se sentiria confortável em experimentar a dois.'],
        ['Proximidade', '✦', 'Sentem-se bem próximos e provoquem um ao outro por um minuto sem beijar.'],
        ['Toque', '♡', 'Faça uma massagem lenta por três minutos no lugar que o outro escolher.'],
        ['Desafio', '♥', 'O outro escolhe uma peça de roupa sua que acha especialmente atraente.'],
        ['Desejo', '✦', 'Diga qual momento entre vocês mais ficou guardado na sua imaginação.'],
        ['Comando', '♡', 'Peça, com poucas palavras, o tipo de beijo que você quer receber agora.'],
        ['Suspense', '♥', 'Com os olhos do outro fechados, surpreenda com um beijo inesperado.'],
        ['Escolha', '✦', 'Escolham juntos: luz baixa, música ou dança. Preparem o clima agora.'],
        ['Promessa', '♡', 'Façam uma promessa provocante para cumprir quando o jogo terminar.'],
        ['Ousadia', '♥', 'Mostre, com um beijo, a intensidade que você quer para o resto da noite.'],
        ['Química', '✦', 'Fiquem em silêncio por um minuto e deixem apenas as mãos conversarem.']
    ]
};

const intro = document.querySelector('[data-intro]');
const board = document.querySelector('[data-board]');
const finish = document.querySelector('[data-finish]');
const card = document.querySelector('[data-card]');
const levelButtons = document.querySelectorAll('[data-level]');
const levelLabel = document.querySelector('[data-level-label]');
const roundOutput = document.querySelector('[data-round]');
const progress = document.querySelector('[data-progress]');
const playerOutput = document.querySelector('[data-player]');
const typeOutput = document.querySelector('[data-card-type]');
const numberOutput = document.querySelector('[data-card-number]');
const iconOutput = document.querySelector('[data-card-icon]');
const challengeOutput = document.querySelector('[data-challenge]');

let selectedLevel = 'quente';
let round = 1;
let deck = [];
let currentIndex = 0;

function shuffled(items) {
    const result = [...items];

    for (let index = result.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }

    return result;
}

function showScreen(screen) {
    [intro, board, finish].forEach((section) => { section.hidden = section !== screen; });
}

function renderCard(animate = false) {
    const [type, icon, text] = deck[currentIndex];
    levelLabel.textContent = `Nível ${selectedLevel}`;
    roundOutput.textContent = round;
    progress.style.width = `${(round / 12) * 100}%`;
    playerOutput.textContent = round % 2 === 1 ? 'Amor 1' : 'Amor 2';
    typeOutput.textContent = type;
    numberOutput.textContent = String(round).padStart(2, '0');
    iconOutput.textContent = icon;
    challengeOutput.textContent = text;

    if (animate) {
        card.classList.remove('is-changing');
        void card.offsetWidth;
        card.classList.add('is-changing');
    }

    window.setTimeout(() => card.focus({ preventScroll: true }), animate ? 370 : 0);
}

function startGame() {
    round = 1;
    currentIndex = 0;
    deck = shuffled(challenges[selectedLevel]);
    showScreen(board);
    renderCard();
}

function advanceCard() {
    if (round >= 12) {
        showScreen(finish);
        return;
    }

    round += 1;
    currentIndex += 1;
    renderCard(true);
}

function passCard() {
    const previousCard = deck[currentIndex];
    currentIndex += 1;

    if (currentIndex >= deck.length) {
        deck = shuffled(challenges[selectedLevel]);

        if (deck[0] === previousCard && deck.length > 1) {
            [deck[0], deck[1]] = [deck[1], deck[0]];
        }

        currentIndex = 0;
    }

    renderCard(true);
}

levelButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selectedLevel = button.dataset.level;
        levelButtons.forEach((option) => option.classList.toggle('is-selected', option === button));
    });
});

document.querySelector('[data-start]').addEventListener('click', startGame);
document.querySelector('[data-next]').addEventListener('click', advanceCard);
document.querySelector('[data-pass]').addEventListener('click', passCard);
document.querySelector('[data-restart]').addEventListener('click', startGame);
document.querySelector('[data-back]').addEventListener('click', () => showScreen(intro));
