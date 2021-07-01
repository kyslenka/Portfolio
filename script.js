function resize() {
    let toc = document.getElementById('toc');
    if (window.innerWidth > 768) {
        toc.style.display = 'block';
    } else {
        toc.style.display = 'none';
    }
}

window.onresize = resize;

function toggleMenu() {
    let toc = document.getElementById('toc');
    if (toc.style.display === 'none') {
        toc.style.display = 'block';
    } else if (window.innerWidth > 768) {
        toc.style.display = 'block';
    } else {
        toc.style.display = 'none';
    }
}