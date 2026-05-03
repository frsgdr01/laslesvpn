document.addEventListener('DOMContentLoaded', () => {
    const planCards = document.querySelectorAll('.plan-card');

    planCards.forEach(card => {
        const selectBtn = card.querySelector('.btn-select');
        if (selectBtn) {
            selectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                planCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        }
    });

    const wrapper = document.querySelector('.testimonials-wrapper');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.btn.prev');
    const nextBtn = document.querySelector('.btn.next');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (wrapper && testimonialCards.length > 0) {
        let currentIndex = 0;

        const updateSlider = (index) => {
            if (index < 0) index = 0;
            if (index >= testimonialCards.length) index = testimonialCards.length - 1;
            
            currentIndex = index;

            const cardWidth = testimonialCards[0].offsetWidth;
            const gap = parseInt(window.getComputedStyle(wrapper).gap) || 0;
            const offset = currentIndex * (cardWidth + gap);

            wrapper.style.transform = `translateX(${-offset}px)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });

            testimonialCards.forEach((card, i) => {
                card.classList.toggle('active', i === currentIndex);
            });
        };

        nextBtn?.addEventListener('click', () => updateSlider(currentIndex + 1));
        prevBtn?.addEventListener('click', () => updateSlider(currentIndex - 1));

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => updateSlider(i));
        });

        updateSlider(0);
        window.addEventListener('resize', () => updateSlider(currentIndex));
    }
});