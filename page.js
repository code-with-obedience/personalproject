window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
    });

    // Particles
    const particlesEl = document.getElementById('particles');
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.animationDuration = (6 + Math.random() * 6) + 's';
      particlesEl.appendChild(p);
    }

    // Carousel data
    const slides = [
      {
        img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=512&h=512&fit=crop",
        title: "Sumi Roll",
        desc: "Fried shrimps, avocado, flambee salmon, togarashi spicy mix"
      },
      {
        img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=512&h=512&fit=crop",
        title: "Dragon Roll",
        desc: "Grilled eel, cucumber, avocado, tobiko, unagi sauce drizzle"
      },
      {
        img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=512&h=512&fit=crop",
        title: "Salmon Sashimi",
        desc: "Fresh Atlantic salmon, hand-sliced, with wasabi and pickled ginger"
      }
    ];

    let current = 0;
    const slideImg = document.getElementById('slideImg');
    const slideTitle = document.getElementById('slideTitle');
    const slideDesc = document.getElementById('slideDesc');
    const dotsEl = document.getElementById('dots');
    const card = document.getElementById('carouselCard');

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    });

    function goTo(idx) {
      current = idx;
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      setTimeout(() => {
        slideImg.src = slides[current].img;
        slideImg.alt = slides[current].title;
        slideTitle.textContent = slides[current].title;
        slideDesc.textContent = slides[current].desc;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
      }, 250);
    }

    document.getElementById('nextBtn').addEventListener('click', () => goTo((current + 1) % slides.length));
    document.getElementById('prevBtn').addEventListener('click', () => goTo((current - 1 + slides.length) % slides.length));

    // Auto-advance
    setInterval(() => goTo((current + 1) % slides.length), 6000);