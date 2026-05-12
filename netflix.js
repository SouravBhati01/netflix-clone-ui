document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------------------------------------------------------------------------------
       MOVIE DATA --- All YouTube IDs are official trailers
       --------------------------------------------------------------------------------------------------------------------- */
    var MOVIES = {
        india: [
            {
                title: "Jawan",
                year: "2023",
                desc: "A man is driven by a personal vendetta to rectify the wrongs in society while fighting a threat.",
                poster: "https://m.media-amazon.com/images/M/MV5BNzE2NTIwMjEtZjYyMi00NjEzLWE4OTYtYTRlYjMzYjFhZDIyXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "COv52Qyitws"
            },
            {
                title: "Pathaan",
                year: "2023",
                desc: "An Indian spy takes on a group of mercenaries who have nefarious plans to destroy India.",
                poster: "https://m.media-amazon.com/images/M/MV5BM2E3ZjJhOTQtYjUzMi00NmVhLTg5MWItMTFiYmNlOTczNjYyXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "vqu4z34wENw"
            },
            {
                title: "Animal",
                year: "2023",
                desc: "A son shares a troubled relationship with his father and goes on a mission of revenge.",
                poster: "https://m.media-amazon.com/images/M/MV5BNGViMGMwOGEtNGM0Yi00M2Y2LWJhMzUtYTU0NjcxYjVmMjBkXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "sR0SDT2GeFg"
            },
            {
                title: "RRR",
                year: "2022",
                desc: "Two legendary Indian revolutionaries embark on a journey before they start fighting for their country.",
                poster: "https://m.media-amazon.com/images/M/MV5BNjk4NTMzNDEtNmQwNy00YjYwLTlkZmQtYzBiNmEzNDIyMjA4XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "f_vbAtFSEc0"
            },
            {
                title: "12th Fail",
                year: "2023",
                desc: "A boy from a small village dreams of becoming an IPS officer. Based on a true story.",
                poster: "https://m.media-amazon.com/images/M/MV5BYjhmODdhZDItNjAzZC00YzlhLThhMjgtOWIyOGE3OWQ3OTdhXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "iG1CV9FjVkQ"
            },
            {
                title: "KGF Chapter 2",
                year: "2022",
                desc: "Rocky takes his place at the top but enemies seek to destroy everything he has built.",
                poster: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMDYzMC00OTU4LTkwNjUtNWNjYzVlMjY0ZmVhXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "JKa05nyUmuQ"
            },
            {
                title: "Stree 2",
                year: "2024",
                desc: "The haunted town of Chanderi faces a new supernatural threat in this horror comedy sequel.",
                poster: "https://m.media-amazon.com/images/M/MV5BYzFkMjFkYjQtMmY1NS00MjU0LThiMDAtMTdjZjQ5ZTA3ZGQ0XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "KMy1zO8m8sM"
            },
            {
                title: "Pushpa: The Rise",
                year: "2021",
                desc: "A laborer rises through the ranks of a red sandalwood smuggling syndicate.",
                poster: "https://m.media-amazon.com/images/M/MV5BMmQ4YmM4YTctMWE0MC00MjhhLTg3ZmUtYjRhNmFiNjkzNjJhXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "Q1NKMPhP8PY"
            },
            {
                title: "Dangal",
                year: "2016",
                desc: "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers.",
                poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
                yt: "x_7YlGv9u1g"
            },
            {
                title: "Bajrangi Bhaijaan",
                year: "2015",
                desc: "An Indian man with a big heart undertakes the task of reuniting a young Pakistani girl with her family.",
                poster: "https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5OTI2NTE@._V1_SX300.jpg",
                yt: "4nwAra0mz_Q"
            }
        ],
        global: [
            {
                title: "Oppenheimer",
                year: "2023",
                desc: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
                poster: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZjUtYTg0ZTkwNTNlNGY3XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "uYPbbksJxIg"
            },
            {
                title: "Barbie",
                year: "2023",
                desc: "Barbie and Ken leave Barbie Land on an adventure in the real world and discover themselves.",
                poster: "https://m.media-amazon.com/images/M/MV5BYjI3NDk0ZGUtYjFhOS00Y2I0LTg5NTAtYzNjYjcyMTZlYzVmXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "pBk4NYhWNMM"
            },
            {
                title: "Dune: Part Two",
                year: "2024",
                desc: "Paul Atreides unites with the Fremen on a warpath of revenge against those who destroyed his family.",
                poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "Way9Dexny3w"
            },
            {
                title: "Spider-Man: No Way Home",
                year: "2021",
                desc: "Spider-Man asks Doctor Strange for help, but a spell gone wrong unleashes multiverse villains.",
                poster: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "JfVOs4VSpmA"
            },
            {
                title: "Top Gun: Maverick",
                year: "2022",
                desc: "Maverick confronts his past while training a new generation of Top Gun graduates.",
                poster: "https://m.media-amazon.com/images/M/MV5BYzBkOGRlNDItMmIzOS00MDk4LTliNDAtNmNlMzU3OGZhNTBkXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "giXco2jaZ_4"
            },
            {
                title: "The Batman",
                year: "2022",
                desc: "Batman investigates corruption in Gotham City when a sadistic serial killer targets political figures.",
                poster: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "mqqft2x_Aa4"
            },
            {
                title: "Avatar: The Way of Water",
                year: "2022",
                desc: "Jake Sully and his family face a renewed threat and must protect Pandora.",
                poster: "https://m.media-amazon.com/images/M/MV5BNzM1YjhkOGItOTE0Yy00YTViLThmMGEtZGJhZTRmOGUxNmI0XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "d9MyW72ELq0"
            },
            {
                title: "John Wick: Chapter 4",
                year: "2023",
                desc: "John Wick uncovers a path to defeating the High Table but faces a powerful new enemy.",
                poster: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtNDgxYi00NjM1LWEyZjctYTRmMTMyMzUzMTQ1XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "qEVUtrk8_B4"
            },
            {
                title: "Inside Out 2",
                year: "2024",
                desc: "Riley enters puberty and encounters brand-new emotions that shake up her inner world.",
                poster: "https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWEtZmFkMTVlOGE4YzNjXkEyXkFqcGc@._V1_SX300.jpg",
                yt: "LEjhY15eCx0"
            },
            {
                title: "Everything Everywhere All at Once",
                year: "2022",
                desc: "A Chinese-American woman gets swept up in an insane adventure through the multiverse.",
                poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGc@._V1_SX300.jpg",
                yt: "wxN1T1qdqzk"
            }
        ]
    };

    /* --------- RENDER MOVIE ROW --------- */
    var movieRow = document.getElementById("movie-row");
    var currentRegion = "india";

    function renderMovies(r) {
        var list = MOVIES[r] || [];
        movieRow.innerHTML = list.map(function (m, i) {
            var fallbackPoster = m.yt ? ("https://i.ytimg.com/vi/" + m.yt + "/hqdefault.jpg") : "";
            var posterUrl = fallbackPoster || m.poster;
            return '<div class="movie-card" data-idx="' + i + '" data-region="' + r + '">' +
                '<img src="' + posterUrl + '" alt="' + m.title + '" loading="lazy" referrerpolicy="no-referrer" ' +
                'onerror="this.onerror=null;this.src=\'data:image/svg+xml,' +
                encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect width="200" height="300" fill="#222"/><text x="100" y="140" fill="#888" text-anchor="middle" font-size="16" font-family="sans-serif">' + m.title + '</text><text x="100" y="165" fill="#e50914" text-anchor="middle" font-size="13" font-family="sans-serif">(' + m.year + ')</text></svg>') + '\'">' +
                '<span class="movie-rank">' + (i + 1) + '</span>' +
                '<div class="movie-overlay">' +
                    '<div class="play-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>' +
                    '<span class="movie-hover-title">' + m.title + '</span>' +
                '</div>' +
                '<div class="movie-name">' + m.title + ' <span class="movie-year">(' + m.year + ')</span></div>' +
                '</div>';
        }).join("");
    }

    renderMovies(currentRegion);

    /* --------- TAB SWITCHING --------- */
    var tabs = document.querySelectorAll(".ttab");
    tabs.forEach(function (t) {
        t.addEventListener("click", function () {
            tabs.forEach(function (x) { x.classList.remove("active"); });
            this.classList.add("active");
            currentRegion = this.dataset.region;
            movieRow.style.opacity = "0";
            setTimeout(function () {
                renderMovies(currentRegion);
                movieRow.style.opacity = "1";
            }, 250);
        });
    });
    movieRow.style.transition = "opacity .25s ease";

    /* --------- CLICK MOVIE --- PLAY TRAILER --------- */
    var playerOverlay = document.getElementById("player-overlay");
    var playerWrap = document.getElementById("player-wrap");
    var playerTitle = document.getElementById("player-title");
    var playerDesc = document.getElementById("player-desc");
    var playerClose = document.getElementById("player-close");

    movieRow.addEventListener("click", function (e) {
        var card = e.target.closest(".movie-card");
        if (!card) return;
        var r = card.dataset.region;
        var idx = parseInt(card.dataset.idx, 10);
        var m = MOVIES[r][idx];
        if (!m || !m.yt) return;

        playerTitle.textContent = m.title + " (" + m.year + ")";
        playerDesc.textContent = m.desc;

        // Embed YouTube player with autoplay
        playerWrap.innerHTML =
            '<iframe src="https://www.youtube.com/embed/' + m.yt +
            '?autoplay=1&rel=0&modestbranding=1&playsinline=1" ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
            'allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';

        playerOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    playerClose.addEventListener("click", closePlayer);
    playerOverlay.addEventListener("click", function (e) {
        if (e.target === playerOverlay) closePlayer();
    });

    function closePlayer() {
        playerOverlay.classList.remove("open");
        // Destroy iframe to stop video
        playerWrap.innerHTML = "";
        document.body.style.overflow = "";
    }

    /* --------- FAQ ACCORDION --------- */
    document.querySelectorAll(".faq-q").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var body = this.nextElementSibling;
            var isOpen = this.classList.contains("open");

            // Close all
            document.querySelectorAll(".faq-q").forEach(function (b) {
                b.classList.remove("open");
                b.nextElementSibling.classList.remove("open");
            });

            // Toggle clicked
            if (!isOpen) {
                this.classList.add("open");
                body.classList.add("open");
            }
        });
    });

    /* --------- EMAIL FORM VALIDATION --------- */
    function setupEmailForm(formId, inputId, errId) {
        var form = document.getElementById(formId);
        var input = document.getElementById(inputId);
        var errEl = document.getElementById(errId);

        if (!form || !input || !errEl) return;

        input.addEventListener("input", function () {
            if (this.value.length > 0) this.classList.add("has-val");
            else this.classList.remove("has-val");
            this.classList.remove("err");
            errEl.textContent = "";
        });

        // Also handle blur for floating label
        input.addEventListener("blur", function () {
            if (this.value.length > 0) this.classList.add("has-val");
            else this.classList.remove("has-val");
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var v = input.value.trim();

            if (!v) {
                errEl.textContent = "Email is required!";
                input.classList.add("err");
                input.focus();
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
                errEl.textContent = "Please enter a valid email address.";
                input.classList.add("err");
                input.focus();
                return;
            }

            errEl.textContent = "";
            input.classList.remove("err");
            showToast("Welcome! Redirecting to sign up...");
            input.value = "";
            input.classList.remove("has-val");
        });
    }

    setupEmailForm("hero-form", "hero-email", "hero-err");
    setupEmailForm("faq-form", "faq-email", "faq-err");

    /* --------- SIGN-IN MODAL --------- */
    var siOverlay = document.getElementById("signin-overlay");

    document.getElementById("signin-btn").addEventListener("click", function (e) {
        e.preventDefault();
        siOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
        setTimeout(function () {
            document.getElementById("si-email").focus();
        }, 100);
    });

    document.getElementById("signin-close").addEventListener("click", closeSI);
    siOverlay.addEventListener("click", function (e) {
        if (e.target === siOverlay) closeSI();
    });

    function closeSI() {
        siOverlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    // Password show/hide
    var passIn = document.getElementById("si-pass");
    document.getElementById("show-pass").addEventListener("click", function () {
        var newType = passIn.type === "password" ? "text" : "password";
        passIn.type = newType;
        this.textContent = newType === "password" ? "SHOW" : "HIDE";
    });

    // Sign-in submit
    document.getElementById("signin-form").addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("si-email").value.trim();
        var pass = passIn.value;
        if (!email || !pass) {
            showToast("Please fill in all fields.");
            return;
        }
        showToast("Signed in as " + email);
        closeSI();
        this.reset();
    });

    // ESC key to close any open modal
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (playerOverlay.classList.contains("open")) closePlayer();
            else if (siOverlay.classList.contains("open")) closeSI();
        }
    });

    /* --------- TOAST --------- */
    var toastEl = document.getElementById("toast");
    var toastTimer = null;
    function showToast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toastEl.classList.remove("show");
        }, 3000);
    }

    /* --------- NAVBAR SCROLL --------- */
    var nav = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    }, { passive: true });

    /* --------- SCROLL REVEAL --------- */
    if ("IntersectionObserver" in window) {
        var revealEls = document.querySelectorAll(".feat-row, .faq-sec, .movie-row, .reasons-grid");
        revealEls.forEach(function (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "opacity .6s ease, transform .6s ease";
        });
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.style.opacity = "1";
                    en.target.style.transform = "translateY(0)";
                    obs.unobserve(en.target);
                }
            });
        }, { threshold: 0.1 });
        revealEls.forEach(function (el) { obs.observe(el); });
    }
});

