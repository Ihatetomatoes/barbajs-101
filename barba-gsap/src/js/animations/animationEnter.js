import gsap from 'gsap';

const animationEnter = (container) => {
    return gsap.from(container, { autoAlpha: 0, duration: 0.7, clearProps: 'all', ease: 'none'});
}

export default animationEnter;