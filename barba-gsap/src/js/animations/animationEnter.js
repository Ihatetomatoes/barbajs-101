import gsap from 'gsap';

const animationEnter = (container) => {

    const activeLink = container.querySelector('a.is-active span');
    const projects = container.querySelectorAll('.project');
    const images = container.querySelectorAll('.image');
    const img = container.querySelectorAll('img');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9, ease: 'power4.out'
        }
    });

    tl
        .set(projects, {autoAlpha: 1})
        .fromTo(activeLink, {xPercent: -101}, {xPercent: 0, transformOrigin: 'left'}, 0)
        .from(images, {xPercent: -101, stagger: 0.1}, 0)
        .from(img, {xPercent: 101, stagger: 0.1}, 0);

    return tl;
}

export default animationEnter;