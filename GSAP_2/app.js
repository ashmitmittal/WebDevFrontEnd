var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
