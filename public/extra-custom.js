// using this to manually load it at page call, have to check its impact

document.querySelectorAll(".team-win-btn").forEach((b) => {
  b.onmouseleave = (e) => {
    e.target.style.background = "black";
    e.target.style.borderImage = null;
  };
  b.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
    e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
  });
});
