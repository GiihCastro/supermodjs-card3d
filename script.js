const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
    
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = (y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
    
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0) rotateY(0)`;
    });

    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    })
})

