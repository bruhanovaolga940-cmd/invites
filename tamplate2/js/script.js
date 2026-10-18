 const weddingDate = new Date("2027-06-15T16:00:00");

    // Обратный отсчёт
    function updateCountdown() {
      const diff = weddingDate - new Date();
      if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
          "<p class='text'>Сегодня наш особенный день! 💖</p>";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("d").textContent = days;
      document.getElementById("h").textContent = String(hours).padStart(2, "0");
      document.getElementById("m").textContent = String(minutes).padStart(2, "0");
      document.getElementById("s").textContent = String(seconds).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Кнопка подтверждения
    document.getElementById("rsvpBtn").addEventListener("click", () => {
      document.getElementById("rsvpMsg").textContent =
        "Спасибо! Мы ждём вас на нашем празднике 💕";
    });

    // Падающие лепестки
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 8 + Math.random() * 10 + "s";
      p.style.animationDelay = Math.random() * 10 + "s";
      p.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
      document.body.appendChild(p);
    }