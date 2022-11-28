/**
 * You can find an explanation for this code here - https://dev.to/jashgopani
 */
document.querySelectorAll(".win-btn").forEach((b) => {
  // console.log(b);
  b.onmouseleave = (e) => {
    e.target.style.background = "#eb0028";
    e.target.style.borderImage = null;
  };

  b.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,0,0,0.7),rgba(255,0,0,0.5) )`;
    e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,0,0,0.9),rgba(255,0,0,0.1) ) 1 / 1px / 0px stretch `;
  });
});

// document.querySelectorAll(".team-win-btn").forEach((b) => {
//   console.log("pro");
//   b.onmouseleave = (e) => {
//     e.target.style.background = "black";
//     e.target.style.borderImage = null;
//   };
//   console.log("yay");
//   b.addEventListener("mousemove", (e) => {
//     const rect = e.target.getBoundingClientRect();
//     const x = e.clientX - rect.left; //x position within the element.
//     const y = e.clientY - rect.top; //y position within the element.
//     e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
//     e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
//   });
// });
