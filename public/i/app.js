(function () {
    'use strict';

    const loadingEls = document.querySelectorAll('.loading');
    loadingEls.forEach((el) => {
        el.removeAttribute('hidden');
    });

    const loaderEl = document.querySelector('#spinner');
    loaderEl.setAttribute('hidden', 'true');

    const logoEl = document.querySelector('#logo');
    const homeEl = document.querySelector('#home');
    const mouseInEvent = () => {
        logoEl.classList.add('hover');
        homeEl.classList.add('hover');
    };
    const mouseOutEvent = () => {
        logoEl.classList.remove('hover');
        homeEl.classList.remove('hover');
    };
    logoEl.addEventListener('mouseover', mouseInEvent.bind(this));
    homeEl.addEventListener('mouseover', mouseInEvent.bind(this));
    logoEl.addEventListener('mouseout', mouseOutEvent.bind(this));
    homeEl.addEventListener('mouseout', mouseOutEvent.bind(this));
})();