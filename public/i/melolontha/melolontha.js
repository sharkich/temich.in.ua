(function () {
    'use strict';

    let Melolontha;

    Promise.all([
        import('./melolontha.model.js')
    ])

        .then((modules) => {
            console.log('import:', modules);

            Melolontha = modules[0]['Melolontha'];

            window.addEventListener('load', init, false);
        });

    const melolonthinae = [];

    const init = () => {
        console.log('init');

        melolonthinae.push(new Melolontha());

        setTimeout(() => {
            melolonthinae.map((melolontha) => melolontha.move());
            melolonthinae.map((melolontha) => melolontha.draw());
        }, 60);

        console.log(melolonthinae);
    };

})();