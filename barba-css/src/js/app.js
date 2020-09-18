import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

barba.hooks.before((data) => {

    const background = data.current.container.dataset.background;
    body.style.setProperty('--page-background', background)

});

// init Barba
barba.init({
    transitions: [
        {
            name: 'home',
            beforeOnce(){
                console.log('beforeOnce')
            },
            once(){
                // with css plugin, this will not run
                console.log('once')
            },
            afterOnce(){
                console.log('afterOnce')
            }
        }, {
            name: 'fade',
            to: {
                namespace: ['fade']
            },
            leave() {},
            enter() {},
        }, {
            name: 'clip',
            sync: true,
            to: {
                namespace: ['clip']
            },
            leave() {},
            enter() {}
        }
    ]
});
