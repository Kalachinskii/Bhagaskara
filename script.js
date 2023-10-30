const shot = document.getElementById('sound');

document.querySelector('.team .cards').addEventListener('click', (e) => {
    if (e.target.matches('img')) {
        shot.play();
    };
})
