let btn_chicken = document.getElementById('btn_chicken')
let btn_datushuish = document.getElementById('btn_datushuish')
let btn_timer_play = document.getElementById('btn_timer_play')
let btn_pay = document.getElementById('btn_pay')
let btn_photo = document.getElementById('btn_photo')

let chicken = document.getElementById('chicken')
let lol = document.getElementById('lol')
let pay = document.getElementById('pay')
let photo = document.getElementById('photo')



btn_chicken.addEventListener('click', function() {
    console.log('-- кнопка btn_chicken нажата')
    chicken.currentTime = 0;
    chicken.play();
})


btn_datushuish.addEventListener('click', function() {
    console.log('-- кнопка btn_datushuish нажата')
    chicken.currentTime = 0;
    lol.play();

})


btn_pay.addEventListener('click', function() {
    console.log('-- кнопка btn_pay нажата');
    pay.currentTime = 0;
    pay.play();

})


btn_photo.addEventListener('click', function() {
    console.log('-- кнопка btn_photo нажата');
    photo.currentTime = 0;
    photo.play();

})





// ниже код от Grok AI 

let audioContext;
let timerId = null;
let scheduled = false;

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Запуск при клике
btn_timer_play.addEventListener('click', () => {
    console.log('-- кнопка btn_timer_play нажата');

    initAudioContext(); // важно инициализировать контекст от user gesture

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
        chicken.play().then(() => {
            console.log('Воспроизведение начато');

            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: 'Курочка',
                    artist: 'Твой таймер', // можно добавить
                });
                navigator.mediaSession.playbackState = 'playing';
            }
        }).catch(err => {
            console.error('Play failed:', err);
        }).finally(() => {
            scheduled = false;
            timerId = null;
        });
    }, 15000);

    scheduled = true;
});


// конец выше код от Grok AI