// звуковая анимация
document.querySelector('.team .cards').addEventListener('click', (e) => {
    const shot = document.getElementById('sound');
    
    if (e.target.matches('img')) {
        shot.play();
    };
})

// АНИМАЦИИ
// выполнение когда загружаем страницу
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const headerScrollEnd = header.offsetHeight;

    document.addEventListener('scroll', () => {
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
        // находим начальную высоту блоков
        const headerStartScrol = 0;
        const goalsStartScrol = header.offsetHeight + 1;
        const aboutStartScrol = goals.offsetHeight + goalsStartScrol + 1;
        const educationStartScrol = about.offsetHeight + aboutStartScrol + 1;
        const teamStartScrol = education.offsetHeight + educationStartScrol + 1;
        const skillsStartScrol = team.offsetHeight + teamStartScrol + 1;
        const servicesStartScrol = skills.offsetHeight + skillsStartScrol + 1;
        const quotesStartScrol = services.offsetHeight + servicesStartScrol + 1;
        const portfolioStartScrol = quotes.offsetHeight + quotesStartScrol + 1;
        const footerStartScrol = portfolio.offsetHeight + portfolioStartScrol + 1;

        // получить массив всех скролов определённого класса
        const scrollItems = document.querySelectorAll('.scrollItem');
        // вытащить каждый элемент
        scrollItems.forEach((element) => {
            // узнать к какой секции относиться элемент
            const section = element.closest('section');
            // узнаём сколько прокрутили от вверха(0)
            let scrollTop = window.scrollY
            // 1/3 высоты области просмотра окна браузера с прокруткой.
            const elementScroll = scrollTop + (window.innerHeight / 3);
            // console.log('Прокручено: '+scrollTop+' px');

            if (section.classList.contains('goals')) {
                if (elementScroll >= goalsStartScrol && elementScroll < aboutStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('about')) {
                if (elementScroll >= aboutStartScrol && elementScroll <= educationStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('education')) {
                if (elementScroll >= educationStartScrol && elementScroll <= teamStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('team')) {
                if (elementScroll >= teamStartScrol && elementScroll <= skillsStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('skills')) {
                if (elementScroll >= skillsStartScrol && elementScroll <= servicesStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('services')) {
                if (elementScroll >= servicesStartScrol && elementScroll <= quotesStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('quotes')) {
                if (elementScroll >= quotesStartScrol && elementScroll <= portfolioStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            } else if (section.classList.contains('portfolio')) {
                if (elementScroll >= portfolioStartScrol && elementScroll <= footerStartScrol) {
                    element.classList.add('animationClass');
                } else {
                    element.classList.remove('animationClass');
                }
            }
        })
    })

    //                                              navbar
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





