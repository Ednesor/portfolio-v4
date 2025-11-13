import { gsap } from "gsap";
document.addEventListener("DOMContentLoaded", (event) => {
    const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
    tl1.to(".shadow1", { x: 200, y: -100, duration: 12, ease: "sine.inOut" })
        .to(".shadow1", { x: -150, y: 150, duration: 12, ease: "sine.inOut" })
        .to(".shadow1", { x: 0, y: 0, duration: 12, ease: "sine.inOut" });

    const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
    tl2.to(".shadow2", {
        y: -120,
        scale: 1.2,
        rotate: 10,
        duration: 10,
        ease: "power1.inOut",
    })
        .to(".shadow2", {
            y: 100,
            scale: 0.9,
            rotate: -5,
            duration: 10,
            ease: "power1.inOut",
        })
        .to(".shadow2", {
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 12,
            ease: "power1.inOut",
        });

    const tl3 = gsap.timeline({ repeat: -1, yoyo: true });
    tl3.to(".shadow3", {
        x: 150,
        y: 100,
        scale: 1.1,
        duration: 12,
        ease: "sine.inOut",
    })
        .to(".shadow3", {
            x: -100,
            y: 150,
            scale: 1.3,
            duration: 12,
            ease: "sine.inOut",
        })
        .to(".shadow3", {
            x: 0,
            y: 0,
            scale: 1,
            duration: 10,
            ease: "sine.inOut",
        });

    const tl4 = gsap.timeline({ repeat: -1, yoyo: true });
    tl4.to(".shadow4", {
        x: 250,
        y: -80,
        rotate: 15,
        scale: 1.2,
        duration: 15,
        ease: "power2.inOut",
    })
        .to(".shadow4", {
            x: -150,
            y: 120,
            rotate: -10,
            scale: 0.8,
            duration: 12,
            ease: "power2.inOut",
        })
        .to(".shadow4", {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 12,
            ease: "power2.inOut",
        });

    const tl5 = gsap.timeline({ repeat: -1, yoyo: true });
    tl5.to(".shadow5", {
        y: -80,
        scale: 1.1,
        opacity: 0.9,
        duration: 10,
        ease: "sine.inOut",
    })
        .to(".shadow5", {
            y: 80,
            scale: 0.95,
            opacity: 0.7,
            duration: 12,
            ease: "sine.inOut",
        })
        .to(".shadow5", {
            y: 0,
            scale: 1,
            opacity: 0.8,
            duration: 12,
            ease: "sine.inOut",
        });
});
