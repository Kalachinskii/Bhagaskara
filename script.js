// звуковая анимация
document.querySelector('.team .cards').addEventListener('click', (e) => {
    const shot = document.getElementById('sound');
    
    if (e.target.matches('img')) {
        shot.play();
    };
})

// // пользовательская высота от бордера до бордера
// function getHeightBox(teg) {
//     return teg.scrollHeight + teg.clientLeft + (teg.offsetHeight - (teg.clientHeight + teg.clientLeft));
// }

// // вариант 1
// window.addEventListener('scroll', function (event) {
//     //вся высота
//     const bodyHeight = document.documentElement.offsetHeight;
//     //узнать сколько px прокрутил страницу
//     const scrolUp = window.pageYOffset;
//     // высота элемента
//     const headerHeight = getHeightBox(document.querySelector('header'));
//     if (scrolUp >= 0 && scrolUp < headerHeight) {
//         document.querySelector('header h1').classList.add('active');
//         document.querySelector('header h4').classList.add('activText');
//         document.querySelector('header p').classList.add('activTextBottom');
//         document.querySelector('header .bot').classList.add('botOpaciti');
//         console.log(1);
//     } else {
//         document.querySelector('header h1').classList.remove('active');
//         document.querySelector('header h4').classList.remove('activText');
//         document.querySelector('header p').classList.remove('activTextBottom');
//         document.querySelector('header .bot').classList.remove('botOpaciti');
//     }
// })

// выполнение когда загружаем страницу
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    // Находим все блоки
    const header = document.querySelector('header');
    const goals = document.querySelector('.goals');
    const about = document.querySelector('.about');
    const education = document.querySelector('.education');
    const team = document.querySelector('.team');
    const skills = document.querySelector('.skills');
    const services = document.querySelector('.services');
    const quotes = document.querySelector('.quotes');
    const portfolio = document.querySelector('.portfolio');
    const footer = document.querySelector('footer');
    // узнаём размер header
    let headerScrollEnd = header.offsetHeight;
    // добовляем событие прокрутки выполняющая ананимную функцию
    document.addEventListener('scroll', () => {
        // узнаём сколько прокрутили от вверха(0)
        let scrollTop = window.scrollY;
        // Когда header закончиться сделай nav-бар видемым
        if (scrollTop >= headerScrollEnd) {
            nav.classList.add('navActions');
            nav.style.marginTop = `${nav.offsetHeight}px`;
        }  else {
            nav.classList.remove('navActions');
            nav.style.marginTop = `0px`;
        } 
    })
    document.addEventListener('click', (event) => {
        if (event.target.matches('.material-symbols-outlined')) {
            document.querySelector('.link').classList.toggle("activFlex");
        } else if (event.target.matches('.btnDown i, .btnDown img')) {
            window.scroll(0, headerScrollEnd + 1);
        } else if (event.target.matches('.btns a')) {
            event.preventDefault();
            inactiveBtns();
            activBtn(event.target);
        };
    })
})

function inactiveBtns() {
    document.querySelectorAll('.btns a').forEach((element) => {
        element.classList.remove('acriveBtn');
    })
}
function activBtn (btn) {
    btn.classList.add('acriveBtn');
}







