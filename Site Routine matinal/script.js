let icon = document.getElementsByClassName('icon');
let nav = document.getElementsByTagName('nav');
var width = document.documentElement.clientWidth;

let logo = document.getElementsByClassName('logo');
let date = document.getElementsByClassName('date');

moment.locale('fr')

/* vérification d'entrée pour savoir si on doit mettre ou non l'icone */
/* PROBLEME: avec onload, il faut attendre que la page soit complétement 
chargé pour exécuter le code javascript. Et avant, on peut voir les éléments 
de la page qui devraient être caché... */
window.onload = function() {
    /* vérification d'entrée pour savoir si on doit mettre ou non l'icone */
    let icon = document.getElementsByClassName('icon');
    let nav = document.getElementsByTagName('nav');
    var width = document.documentElement.clientWidth;

    if (width < 1000) {
        icon[0].classList.remove('hidden');
        nav[0].classList.add('hidden')
    } else {
        icon[0].classList.add('hidden');
        nav[0].classList.remove('hidden');
    }
    /* cacher le logo et la date */
    setTimeout(function() {
        logo[0].classList.remove('visuallyhiddensmooth');
    }, 1500);
    setTimeout(function() {
        date[0].classList.remove('visuallyhiddensmooth');
    }, 3000);

    /* mise à jour de date */
    var now = moment(new Date()).format('D MMMM YYYY');

    date[0].innerHTML = now;
}

/* lorqu'il y a un changement de taille de la fenêtre */
window.onresize = function() {
    width = document.documentElement.clientWidth;
    if (width < 1000) {
        /* on rajoute l'icone */
        icon[0].classList.remove('hidden');
        /* on cache la bar nav */
        nav[0].classList.add('visuallyhidden')
            /* et après avoir cacher la bar nav, on retire la bar nav*/
        nav[0].addEventListener('transitionend', function(e) {
            nav[0].classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    } else {
        /* on retire l'icone */
        icon[0].classList.add('hidden');
        /* on rajoute la bar nav */
        nav[0].classList.remove('hidden');
        setTimeout(function() {
            nav[0].classList.remove('visuallyhidden');
        }, 0.3);
        /* pour la gestion d'un problème avec le retour de nav, ajout de cette partie: */
        nav[0].addEventListener('transitionend', function(e) {
            nav[0].classList.remove('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }

};