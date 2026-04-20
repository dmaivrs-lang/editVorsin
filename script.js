document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
    let ticking = false;
    const updateScroll = () => {
        root.style.setProperty('--sy', window.scrollY + 'px');
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }, { passive: true });
}

const lightbox = document.getElementById('lightbox');
const frame = lightbox.querySelector('.video-lightbox__frame');
const closeBtn = lightbox.querySelector('.video-lightbox__close');

function openVideo(videoId) {
    frame.innerHTML = `<iframe src="https://rutube.ru/play/embed/${videoId}/?autoStart=true" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    frame.innerHTML = '';
    lightbox.hidden = true;
    document.body.style.overflow = '';
}

document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => openVideo(card.dataset.videoId));
});

closeBtn.addEventListener('click', closeVideo);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeVideo();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeVideo();
});
