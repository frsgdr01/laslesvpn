document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.testimonials-wrapper');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.btn.prev');
    const nextBtn = document.querySelector('.btn.next');
    const cards = document.querySelectorAll('.testimonial-card');

    if (!wrapper || !nextBtn || !prevBtn) return;

    let currentIndex = 0;
    const step = 430; 

    function updateSlider(index) {
        if (index < 0) index = 0;
        if (index > cards.length - 1) index = cards.length - 1;
        
        currentIndex = index;

        wrapper.style.transform = `translateX(${-currentIndex * step}px)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        cards.forEach((card, i) => {
            card.style.borderColor = (i === currentIndex) ? '#F53838' : '#EEEFF2';
        });
    }

    nextBtn.addEventListener('click', () => updateSlider(currentIndex + 1));
    prevBtn.addEventListener('click', () => updateSlider(currentIndex - 1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateSlider(i));
    });

    updateSlider(0);
});