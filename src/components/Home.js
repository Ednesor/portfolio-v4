import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
    const tl = gsap.timeline({
        repeat: -1,
        ease: "power1.inOut",
        delay: i * 1.72,
    });
    tl.to(dot, {
        duration: 2,
        yoyo: false,
        ease: "none",
        motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0.3,
        },
        scale: 3,
        opacity: 1,
        ease: "none",
    })
        .to(dot, { duration: 0, zIndex: 100 })
        .to(dot, {
            duration: 1.5,
            ease: "none",
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                start: 0.3,
                end: 0.5,
            },
            scale: 4,
            ease: "none",
        })
        .to(dot, {
            duration: 1.5,
            ease: "none",
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                start: 0.5,
                end: 0.7,
            },
            scale: 3,
            ease: "none",
        })
        .to(dot, { duration: 0, zIndex: -20 })
        .to(dot, {
            duration: 2,
            ease: "none",
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                start: 0.7,
                end: 1,
            },
            scale: 0,
            opacity: 0,
            zIndex: -100,
            ease: "none",
        })
        .to(dot, { duration: 15.48 });
});
