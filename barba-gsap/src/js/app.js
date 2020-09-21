import barba from '@barba/core';
import { animationEnter, animationLeave } from './animations';

barba.init({
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                animationEnter(next.container);
            }
        }
    ]
})