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
    const navHeight = nav.offsetHeight;
    const header = document.querySelector('header');
    const headerScrollEnd = header.offsetHeight;
    const arrScrollItems = document.querySelectorAll('.animationItem');
    const arrScrollItems2 = document.body.querySelectorAll('.animationItemLeft');
    const arrScrollItems3 = document.querySelectorAll('.animationItemRight');
    const arrScrollItems4 = document.querySelectorAll('.animationItemOpacity');
    const arrScrollItems5 = document.querySelectorAll('.animationItemSkills1');
    const arrScrollItems6 = document.querySelectorAll('.animationItemSkills2');
    const arrScrollItems7 = document.querySelectorAll('.animationItemSkills3');
    const arrScrollItems8 = document.querySelectorAll('.animationItemSkills4');
    addAnimationElementsSection (arrScrollItems, 'animationClass');
    addAnimationElementsSection (arrScrollItems2, 'animationClassLeft');
    addAnimationElementsSection (arrScrollItems3, 'animationClassRight');
    addAnimationElementsSection (arrScrollItems4, 'animationClassOpacity');
    addAnimationElementsSection (arrScrollItems5, 'load-1');
    addAnimationElementsSection (arrScrollItems6, 'load-2');
    addAnimationElementsSection (arrScrollItems7, 'load-3');
    addAnimationElementsSection (arrScrollItems8, 'load-4');

    // animation
    document.addEventListener('scroll', () => {
        addAnimationElementsSection (arrScrollItems, 'animationClass');
        addAnimationElementsSection (arrScrollItems2, 'animationClassLeft');
        addAnimationElementsSection (arrScrollItems3, 'animationClassRight');
        addAnimationElementsSection (arrScrollItems4, 'animationClassOpacity');
        addAnimationElementsSection (arrScrollItems5, 'load-1');
        addAnimationElementsSection (arrScrollItems6, 'load-2');
        addAnimationElementsSection (arrScrollItems7, 'load-3');
        addAnimationElementsSection (arrScrollItems8, 'load-4');
    })

    //nav
    document.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= headerScrollEnd) {
            nav.classList.add('navActions');
            document.querySelector('header .top').style.marginTop = `${navHeight}px`;
        }  else {
            nav.classList.remove('navActions');
            document.querySelector('header .top').style.marginTop = `0px`;
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

// получить имена секций
getArrNameSection ();
function getArrNameSection () {
    const arrNameSections = [];
    document.querySelectorAll('section').forEach((element, index) => {
        arrNameSections[index] = element.className;
    })
    return arrNameSections;
}

// массив элементов с размером каждой секции
function getHeightSection() {
    const arrNameSection = getArrNameSection ();
    let arrHeightSection = [];
    arrHeightSection.push(document.querySelector('header').offsetHeight + 1);
    arrNameSection.forEach((element, index) => {
        arrHeightSection.push(document.querySelector('.' + element).offsetHeight + 1);
    })
    arrHeightSection.push(document.querySelector('footer').offsetHeight);
    return arrHeightSection;
}

// размер секций с учётом высоты  старых секций
function getHeightStartSection() {
    const arrHeightSection = getHeightSection();
    let arrHeightScrollSection = [];
    let sumBlock = arrHeightSection.reduce((a,b) => {
        return a + b;
    }, 0);
    arrHeightSection.reverse().forEach((element, i) => {
        arrHeightScrollSection[i] = sumBlock -= +element;
    })
    return arrHeightScrollSection.reverse();
}

function addAnimationElementsSection (arrItemAnimals, animationClass) {
    const arrName = getArrNameSection ();
    const arrHeight = getHeightStartSection();
    const elementScroll = window.scrollY + (window.innerHeight / 3);

    arrItemAnimals.forEach((element) => {
        if (element.closest('section').classList.contains(arrName[0])) {
            if (elementScroll >= arrHeight[1] && elementScroll < arrHeight[2]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[1])) {
            if (elementScroll >= arrHeight[2] && elementScroll < arrHeight[3]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[2])) {
            if (elementScroll >= arrHeight[3] && elementScroll < arrHeight[4]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[3])) {
            if (elementScroll >= arrHeight[4] && elementScroll < arrHeight[5]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[4])) {
            if (elementScroll >= arrHeight[5] && elementScroll < arrHeight[6]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[5])) {
            if (elementScroll >= arrHeight[6] && elementScroll < arrHeight[7]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[6])) {
            if (elementScroll >= arrHeight[7] && elementScroll < arrHeight[8]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        } else if (element.closest('section').classList.contains(arrName[7])) {
            if (elementScroll >= arrHeight[8] && elementScroll < arrHeight[9]) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        }
    })
};




