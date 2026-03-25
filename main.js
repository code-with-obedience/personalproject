// const slidesContainer = document.querySelector('.slides-container');
// const indicators = document.querySelectorAll('.indicator');
// const totalSlides = 3;
// let current = 0;

// function goToSlide(index) {
//   current = index;
//   slidesContainer.style.transform = `translateX(-${current * 100}vw)`;
//   indicators.forEach((ind, i) => {
//     ind.classList.toggle('active', i === current);
//   });
// }

// function nextSlide() {
//   goToSlide((current + 1) % totalSlides);
// }

// indicators.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     goToSlide(parseInt(btn.dataset.index));
//   });
// });

// setInterval(nextSlide, 3000);


   // Step 1: Get references to the overlay and video elements
    var overlay = document.getElementById("videoOverlay");
    var video = document.getElementById("myVideo");
    // Step 2: Function to OPEN the video
    function openVideo() {
      overlay.classList.add("active");  // show the overlay
      video.play();                      // start playing
    }
    // Step 3: Function to CLOSE the video
    function closeVideo() {
      overlay.classList.remove("active"); // hide the overlay
      video.pause();                       // pause the video
      video.currentTime = 0;               // reset to beginning
    }


    // ── Image data ──
    const images = [
      { src: "one.png", alt: "Gourmet plated dish",      shape: "circle" },
      { src: "testimonials-img1.jpg",   alt: "Seared steak with carrots", shape: "arch" },
      { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80", alt: "Café lifestyle",           shape: "square" },
      { src: "four.png", alt: "Champagne toast",          shape: "circle" },
      { src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80", alt: "Latte art",                shape: "rectangle-wide" },
    //   { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80", alt: "Truffle pasta",            shape: "arch" },
    //   { src: "https://images.unsplash.com/photo-1432139509613-5c4255a78e03?w=400&q=80", alt: "Charcuterie board",        shape: "rectangle-wide" },
    //   { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",   alt: "Cocktail crafting",        shape: "rectangle-tall" },
    ];

    // Vertical offset pattern
    const offsets = ["offset-end", "offset-start", "offset-center", "offset-end", "offset-start", "offset-center", "offset-end", "offset-start"];

    // ── Build marquee (doubled for seamless loop) ──
    const track = document.getElementById("marqueeTrack");
    const allImages = [...images, ...images]; // duplicate for infinite loop

    allImages.forEach((img, i) => {
      const card = document.createElement("div");
      card.className = `gallery-card shape-${img.shape} ${offsets[i % offsets.length]}`;

      const imgEl = document.createElement("img");
      imgEl.src = img.src;
      imgEl.alt = img.alt;
      imgEl.loading = "lazy";

      card.appendChild(imgEl);
      track.appendChild(card);
    });

    // ── Scroll reveal with IntersectionObserver ──
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.getElementById("heading").classList.add("visible");
            document.getElementById("tagline").classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(document.getElementById("gallery"));