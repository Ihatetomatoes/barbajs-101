import barba from '@barba/core';
import gsap from 'gsap';
import { revealProject, leaveToProject, leaveFromProject, animationEnter, animationLeave } from './animations';

const resetActiveLink = () => gsap.set('a.is-active span', {
    xPercent: -100,
    transformOrigin: 'left'
});

barba.init({
    transitions: [
        {
            name: 'detail',
            to: {
                namespace: ['detail']
            },
            once({next}){
                revealProject(next.container)
            },
            leave: ({current}) => leaveToProject(current.container),
            enter({next}){
                revealProject(next.container)
            }
        },
        {
            name: 'general-transition',
            once({next}){
                resetActiveLink();
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(next.container)
                });
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                animationEnter(next.container);
            }
        }
    ]
})