/**
 * Project:
 * https://console.developers.google.com/apis/library?project=my-playground-project-143009
 * my-playground-project-143009
 *
 * KEY-API:
 * AIzaSyD-D3yRKiI3zX-3KhZFnlinMoEVa-PPW1Y
 */

let serviceWorkerRegistration;
let sub;
let isSubscribed = false;
const SUBSCRIBE_BUTTON_EL = document.getElementById('subscribe');
const UNSUBSCRIBE_BUTTON_EL = document.getElementById('unsubscribe');
const SEND_BUTTON_EL = document.getElementById('send');

if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('./sw.js') // always root of the project!
        .then(() => {
            console.log('registered', navigator.serviceWorker);
            return navigator.serviceWorker.ready;
        })
        .then((reg) => {
            console.log('Service Worker is ready', reg);
            serviceWorkerRegistration = reg;
            SUBSCRIBE_BUTTON_EL.disabled = false;
        })
        .catch((error) => {
            console.log('Service Worker error', error);
        });
}

// Actions

document.getElementById('a-img-01')
    .addEventListener('click', () => {
        document.getElementById('img').setAttribute('src', '/images/icon.png');
    });

document.getElementById('a-img-02')
    .addEventListener('click', () => {
        document.getElementById('img').setAttribute('src', './images/icon.png');
    });

// Push Notifications

SUBSCRIBE_BUTTON_EL.addEventListener('click', () => {
    if (!isSubscribed) {
        subscribe();
    }
});

UNSUBSCRIBE_BUTTON_EL.addEventListener('click', () => {
    if (isSubscribed) {
        unsubscribe();
    }
});

SEND_BUTTON_EL.addEventListener('click', () => {
    if (!sub.endpoint.startsWith('https://android.googleapis.com/gcm/send')) {
        console.log('another endpoint');
    }
    if (isSubscribed) {
        const ENDPOINT_PARTS = sub.endpoint.split('/');
        const REGISTRATION_ID = ENDPOINT_PARTS[ENDPOINT_PARTS.length - 1];
        fetch('https://android.googleapis.com/gcm/send', {
            method: 'POST',
            headers: new Headers({
                //AIzaSyD-D3yRKiI3zX-3KhZFnlinMoEVa-PPW1Y
                'Authorization': 'key=AIzaSyAMzp4LO9CiODdPEpfe7eQtdKHlB3foxcs',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                registration_ids: [REGISTRATION_ID]
            })
        })
            .then((response) => {
                console.log('response', response);
            })
            .catch((err) => {
                console.log('catch Error :(');
            });
    } else {
        console.error('You need to subscribe');
    }
});

function subscribe () {
    if (!serviceWorkerRegistration) {
        console.log('err !serviceWorkerRegistration');
        return;
    }
    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
        .then((pushSubscription) => {
            sub = pushSubscription;
            console.log('Subscribed! Endpoint:', sub.endpoint);
            // SUBSCRIBE_BUTTON_EL.textContent = 'Unsubscribe';
            SUBSCRIBE_BUTTON_EL.disabled = true;
            UNSUBSCRIBE_BUTTON_EL.disabled = false;
            SEND_BUTTON_EL.disabled = false;
            isSubscribed = true;
        });
}

function unsubscribe () {
    if (!sub) {
        console.log('err !sub');
        return;
    }
    sub.unsubscribe()
        .then((event) => {
            // SUBSCRIBE_BUTTON_EL.textContent = 'Subscribe';
            console.log('Unsubscribed!', event);
            SUBSCRIBE_BUTTON_EL.disabled = false;
            UNSUBSCRIBE_BUTTON_EL.disabled = true;
            SEND_BUTTON_EL.disabled = true;
            isSubscribed = false;
        })
        .catch((error) => {
            console.log('Error unsubscribing', error);
            SUBSCRIBE_BUTTON_EL.textContent = 'Subscribe';
        });
}

