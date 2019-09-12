import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelector('.content');
    const contentInner = node.querySelector('.content--inner');

    timeline
        .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
        .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
        .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

    return timeline;
}

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const divs = node.querySelectorAll('div');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        .staggerFrom(divs, 1.5, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

    return timeline;
}


const getAboutTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const divs = node.querySelectorAll('div');
    const titles = node.querySelectorAll('div h1');
    const body = node.querySelectorAll('div h1 p');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        .staggerFrom([divs, titles, body], 1.5, { autoAlpha: 0, x: -30, ease: Power1.easeOut }, 1.5);


    return timeline;
}

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline

    if (pathname === '/') timeline = getHomeTimeline(node, delay);

    else if (pathname == '/about') timeline = getAboutTimeline(node, delay);
    else
        timeline = getDefaultTimeline(node, delay);

    window
        .loadPromise.then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
}
