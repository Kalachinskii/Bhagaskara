// звуковая анимация
document.querySelector('.team .cards').addEventListener('click', (e) => {
    const shot = document.getElementById('sound');
    
    if (e.target.matches('img')) {
        shot.play();
    };
})

// пользовательская высота от бордера до бордера
function getHeightBox(teg) {
    return teg.scrollHeight + teg.clientLeft + (teg.offsetHeight - (teg.clientHeight + teg.clientLeft));
}

// вариант 1
window.addEventListener('scroll', function (event) {
    //вся высота
    const bodyHeight = document.documentElement.offsetHeight;
    //узнать сколько px прокрутил страницу
    const scrolUp = window.pageYOffset;
    // высота элемента
    const headerHeight = getHeightBox(document.querySelector('header'));
    if (scrolUp >= 0 && scrolUp < headerHeight) {
        document.querySelector('header h1').classList.add('active');
        document.querySelector('header h4').classList.add('activText');
        document.querySelector('header p').classList.add('activTextBottom');
        document.querySelector('header .bot').classList.add('botOpaciti');
        console.log(1);
    } else {
        document.querySelector('header h1').classList.remove('active');
        document.querySelector('header h4').classList.remove('activText');
        document.querySelector('header p').classList.remove('activTextBottom');
        document.querySelector('header .bot').classList.remove('botOpaciti');
    }
})









