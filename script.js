document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const frame = lightbox.querySelector('.video-lightbox__frame');
const closeBtn = lightbox.querySelector('.video-lightbox__close');

function openVideo(videoId) {
    frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
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
