document.addEventListener('DOMContentLoaded', () => {
    const musicCollage = document.getElementById('music-collage');
    const songModal = new bootstrap.Modal(document.getElementById('songModal'));
    const modalTitle = document.getElementById('songModalLabel');
    const youtubeLink = document.getElementById('youtubeLink');
    const spotifyLink = document.getElementById('spotifyLink');

    const songs = [
        { title: "Como Yo", image: "images/album8.jfif", youtube: "https://www.youtube.com/watch?v=5Dep0BKTIcs", spotify: "https://open.spotify.com/intl-es/album/0FuxLfb6woesVJh0uF1yBc" },
        { title: "La Cone", image: "images/album1.jfif", youtube: "https://www.youtube.com/watch?v=MaeJeZapP00", spotify: "https://open.spotify.com/intl-es/album/2CDSTMPpDUID91t3dAAQpm" },
        { title: "2:14", image: "images/album2.jfif", youtube: "https://www.youtube.com/watch?v=AOVX7S6aHnE", spotify: "https://open.spotify.com/intl-es/album/0BaprCxs2yV4X2zMx9wQvp" },
        { title: "Nako", image: "images/album5.jfif", youtube: "https://www.youtube.com/watch?v=7Ruq4Z1t97Q", spotify: "https://open.spotify.com/intl-es/album/3xHKmacwG7xuOzOZNxEXoz" },
        { title: "Las bbys", image: "images/album6.jfif", youtube: "https://www.youtube.com/watch?v=IYp2yVgK9Rc", spotify: "https://open.spotify.com/intl-es/album/4QVLM0LMSSoNS2GBPBpjSK" },
        { title: "EME", image: "images/album3.jfif", youtube: "https://www.youtube.com/watch?v=VcCo5jCqknc&list=OLAK5uy_nGpp5rib0jAA0hJeljSfbDicT1CzS7AvI&index=2", spotify: "https://open.spotify.com/intl-es/album/4IvAyIZUD5VsXq0XPHppbZ" },
        { title: "Hola", image: "images/album4.jfif", youtube: "https://www.youtube.com/watch?v=YLGGAiIDuxk", spotify: "https://open.spotify.com/intl-es/album/2ZaRhXhCAWUZHQMiwDXlb7" },
        { title: "Neon", image: "images/album7.jfif", youtube: "https://www.youtube.com/watch?v=65IXnmlRRuA", spotify: "https://open.spotify.com/intl-es/track/179v3iXjRDpZ3wZ01tZcTd" },
        { title: "MAI", image: "images/album9.jfif", youtube: "https://www.youtube.com/watch?v=R9gZnOFKDkQ", spotify: "https://open.spotify.com/intl-es/album/2WP7ekv3rK3bYcsdk15aiP" },
        { title: "Salele", image: "images/album10.jfif", youtube: "https://www.youtube.com/watch?v=kaL_VkN2xvc", spotify: "https://open.spotify.com/intl-es/album/6k3oCUjxdPSChBH8Zlbc3O" }
    ];

    // Generar las tarjetas de música
    songs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <div class="music-card-title">${song.title}</div>
        `;
        card.addEventListener('click', () => openSongModal(song));
        musicCollage.appendChild(card);
    });

    function openSongModal(song) {
        modalTitle.textContent = song.title;
        youtubeLink.href = song.youtube;
        spotifyLink.href = song.spotify;
        songModal.show();
    }

    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});