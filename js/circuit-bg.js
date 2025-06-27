// Animated SVG circuit background inspired by neon/AI/cyber themes
const svgNS = "http://www.w3.org/2000/svg";
function createCircuitSvg() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.position = "fixed";
    svg.style.top = 0;
    svg.style.left = 0;
    svg.style.width = "100vw";
    svg.style.height = "100vh";
    svg.style.zIndex = 0;
    svg.style.pointerEvents = "none";

    // Neon circuit lines & dots
    const colors = ["#00ffe7", "#ff00ea", "#00cfff", "#00ff95", "#ffe600"];
    for (let i = 0; i < 36; i++) {
        let line = document.createElementNS(svgNS, "line");
        let x1 = Math.random() * width;
        let y1 = Math.random() * height;
        let x2 = x1 + (Math.random() - 0.5) * 320;
        let y2 = y1 + (Math.random() - 0.5) * 320;
        let color = colors[Math.floor(Math.random() * colors.length)];
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", "2.2");
        line.setAttribute("opacity", "0.19");
        line.setAttribute("filter", "url(#glow)");
        svg.appendChild(line);
    }
    for (let i = 0; i < 54; i++) {
        let circle = document.createElementNS(svgNS, "circle");
        let cx = Math.random() * width;
        let cy = Math.random() * height;
        let r = 3 + Math.random() * 4;
        let color = colors[Math.floor(Math.random() * colors.length)];
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", r);
        circle.setAttribute("fill", color);
        circle.setAttribute("opacity", "0.52");
        svg.appendChild(circle);
    }
    // Add filter for neon glow
    const defs = document.createElementNS(svgNS, "defs");
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", "glow");
    filter.innerHTML = `
        <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    `;
    defs.appendChild(filter);
    svg.appendChild(defs);

    return svg;
}
function renderCircuitBg() {
    const bg = document.querySelector('.circuit-bg');
    if (!bg) return;
    bg.innerHTML = '';
    bg.appendChild(createCircuitSvg());
}
window.addEventListener('resize', renderCircuitBg);
window.addEventListener('DOMContentLoaded', renderCircuitBg);