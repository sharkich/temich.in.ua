(function () {
    'use strict';


    const presentEl = document.getElementById('present');
    if (presentEl) {
        const monthDiff = (dateFrom, dateTo) => {
            return dateTo.getMonth() - dateFrom.getMonth() +
                (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
        };
        const months = monthDiff(new Date(2020, 4), new Date());
        presentEl.innerText = `(${months + 1} months)`;
    }

    const yearsOldEl = document.getElementById('years-old');
    if (yearsOldEl) {
        const diff = (birthday) => {
            const ageDifMs = Date.now() - birthday;
            const ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        };
        const years = diff(new Date(1984, 8, 26));
        yearsOldEl.innerText = `(${years} years old)`;
    }

    const loadingEls = document.querySelectorAll('.loading');
    if (!loadingEls) {
        return;
    }
    loadingEls.forEach((el) => {
        el.removeAttribute('hidden');
    });

    const loaderEl = document.querySelector('#spinner');
    if (!loaderEl) {
        return;
    }
    loaderEl.setAttribute('hidden', 'true');

    const logoEl = document.querySelector('#logo');
    const homeEl = document.querySelector('#home');
    if (!logoEl || !homeEl) {
        return;
    }
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
