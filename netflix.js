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
                poster: "assets/posters-real/jawan.jpg",
                yt: "COv52Qyitws"
            },
            {
                title: "Pathaan",
                year: "2023",
                desc: "An Indian spy takes on a group of mercenaries who have nefarious plans to destroy India.",
                poster: "assets/posters-real/pathaan.jpg",
                yt: "vqu4z34wENw"
            },
            {
                title: "Animal",
                year: "2023",
                desc: "A son shares a troubled relationship with his father and goes on a mission of revenge.",
                poster: "assets/posters-real/animal.jpg",
                yt: "sR0SDT2GeFg"
            },
            {
                title: "RRR",
                year: "2022",
                desc: "Two legendary Indian revolutionaries embark on a journey before they start fighting for their country.",
                poster: "assets/posters-real/rrr.jpg",
                yt: "f_vbAtFSEc0"
            },
            {
                title: "12th Fail",
                year: "2023",
                desc: "A boy from a small village dreams of becoming an IPS officer. Based on a true story.",
                poster: "assets/posters-real/12th-fail.jpg",
                yt: "iG1CV9FjVkQ"
            },
            {
                title: "KGF Chapter 2",
                year: "2022",
                desc: "Rocky takes his place at the top but enemies seek to destroy everything he has built.",
                poster: "assets/posters-real/kgf-chapter-2.jpg",
                yt: "JKa05nyUmuQ"
            },
            {
                title: "Stree 2",
                year: "2024",
                desc: "The haunted town of Chanderi faces a new supernatural threat in this horror comedy sequel.",
                poster: "assets/posters-real/stree-2.jpg",
                yt: "KMy1zO8m8sM"
            },
            {
                title: "Pushpa: The Rise",
                year: "2021",
                desc: "A laborer rises through the ranks of a red sandalwood smuggling syndicate.",
                poster: "assets/posters-real/pushpa-the-rise.jpg",
                yt: "Q1NKMPhP8PY"
            },
            {
                title: "Dangal",
                year: "2016",
                desc: "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers.",
                poster: "assets/posters-real/dangal.jpg",
                yt: "x_7YlGv9u1g"
            },
            {
                title: "Bajrangi Bhaijaan",
                year: "2015",
                desc: "An Indian man with a big heart undertakes the task of reuniting a young Pakistani girl with her family.",
                poster: "assets/posters-real/bajrangi-bhaijaan.jpg",
                yt: "4nwAra0mz_Q"
            }
        ],
        global: [
            {
                title: "Oppenheimer",
                year: "2023",
                desc: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
                poster: "assets/posters-real/oppenheimer.jpg",
                yt: "uYPbbksJxIg"
            },
            {
                title: "Barbie",
                year: "2023",
                desc: "Barbie and Ken leave Barbie Land on an adventure in the real world and discover themselves.",
                poster: "assets/posters-real/barbie.jpg",
                yt: "pBk4NYhWNMM"
            },
            {
                title: "Dune: Part Two",
                year: "2024",
                desc: "Paul Atreides unites with the Fremen on a warpath of revenge against those who destroyed his family.",
                poster: "assets/posters-real/dune-part-two.jpg",
                yt: "Way9Dexny3w"
            },
            {
                title: "Spider-Man: No Way Home",
                year: "2021",
                desc: "Spider-Man asks Doctor Strange for help, but a spell gone wrong unleashes multiverse villains.",
                poster: "assets/posters-real/spider-man-no-way-home.jpg",
                yt: "JfVOs4VSpmA"
            },
            {
                title: "Top Gun: Maverick",
                year: "2022",
                desc: "Maverick confronts his past while training a new generation of Top Gun graduates.",
                poster: "assets/posters-real/top-gun-maverick.jpg",
                yt: "giXco2jaZ_4"
            },
            {
                title: "The Batman",
                year: "2022",
                desc: "Batman investigates corruption in Gotham City when a sadistic serial killer targets political figures.",
                poster: "assets/posters-real/the-batman.jpg",
                yt: "mqqft2x_Aa4"
            },
            {
                title: "Avatar: The Way of Water",
                year: "2022",
                desc: "Jake Sully and his family face a renewed threat and must protect Pandora.",
                poster: "assets/posters-real/avatar-the-way-of-water.jpg",
                yt: "d9MyW72ELq0"
            },
            {
                title: "John Wick: Chapter 4",
                year: "2023",
                desc: "John Wick uncovers a path to defeating the High Table but faces a powerful new enemy.",
                poster: "assets/posters-real/john-wick-chapter-4.jpg",
                yt: "qEVUtrk8_B4"
            },
            {
                title: "Inside Out 2",
                year: "2024",
                desc: "Riley enters puberty and encounters brand-new emotions that shake up her inner world.",
                poster: "assets/posters-real/inside-out-2.jpg",
                yt: "LEjhY15eCx0"
            },
            {
                title: "Everything Everywhere All at Once",
                year: "2022",
                desc: "A Chinese-American woman gets swept up in an insane adventure through the multiverse.",
                poster: "assets/posters-real/everything-everywhere-all-at-once.jpg",
                yt: "wxN1T1qdqzk"
            }
        ]
    };

    /* --------- RENDER MOVIE ROW --------- */
    var movieRow = document.getElementById("movie-row");
    var currentRegion = "india";
    var posterThemes = [
        ["#e50914", "#111111"],
        ["#0071eb", "#050b18"],
        ["#f5b301", "#160d00"],
        ["#00a884", "#001611"],
        ["#ff5f57", "#170707"],
        ["#8e44ad", "#100717"],
        ["#ff7a00", "#1a0b00"],
        ["#14b8a6", "#031412"]
    ];

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (ch) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[ch];
        });
    }

    function getPosterTitleLines(title) {
        var words = String(title).split(" ");
        var lines = [""];
        words.forEach(function (word) {
            var current = lines[lines.length - 1];
            var next = current ? current + " " + word : word;
            if (next.length > 17 && lines.length < 3) {
                lines.push(word);
            } else {
                lines[lines.length - 1] = next;
            }
        });
        return lines.map(function (line) {
            return line.length > 24 ? line.slice(0, 21) + "..." : line;
        });
    }

    function makePosterDataUri(movie, index) {
        var theme = posterThemes[index % posterThemes.length];
        var safeYear = escapeHtml(movie.year);
        var titleLines = getPosterTitleLines(movie.title).map(function (line, lineIndex) {
            return '<text x="200" y="' + (360 + lineIndex * 42) + '" fill="#ffffff" font-size="34" font-weight="800" font-family="Arial, sans-serif" text-anchor="middle">' + escapeHtml(line) + '</text>';
        }).join("");
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">' +
            '<defs>' +
                '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
                    '<stop offset="0" stop-color="' + theme[0] + '"/>' +
                    '<stop offset="0.48" stop-color="#181818"/>' +
                    '<stop offset="1" stop-color="' + theme[1] + '"/>' +
                '</linearGradient>' +
                '<radialGradient id="glow" cx="50%" cy="36%" r="52%">' +
                    '<stop offset="0" stop-color="#ffffff" stop-opacity="0.26"/>' +
                    '<stop offset="1" stop-color="#000000" stop-opacity="0"/>' +
                '</radialGradient>' +
            '</defs>' +
            '<rect width="400" height="600" fill="url(#bg)"/>' +
            '<rect width="400" height="600" fill="url(#glow)"/>' +
            '<rect x="26" y="26" width="348" height="548" rx="22" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>' +
            '<circle cx="200" cy="216" r="78" fill="#000000" fill-opacity="0.42"/>' +
            '<path d="M178 168v96l82-48z" fill="#ffffff"/>' +
            titleLines +
            '<text x="200" y="490" fill="#ffffff" fill-opacity="0.72" font-size="22" font-family="Arial, sans-serif" text-anchor="middle">' + safeYear + ' Official Trailer</text>' +
            '<text x="200" y="526" fill="#e50914" font-size="28" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle">STREAMBOX</text>' +
        '</svg>';

        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    function wirePosterFallbacks(region) {
        movieRow.querySelectorAll(".movie-poster").forEach(function (img) {
            var idx = parseInt(img.dataset.idx, 10);
            var movie = MOVIES[region][idx];
            img.onerror = function () {
                img.onerror = null;
                img.src = makePosterDataUri(movie, idx);
            };
            img.src = movie.poster || makePosterDataUri(movie, idx);
        });
    }

    function renderMovies(r) {
        var list = MOVIES[r] || [];
        movieRow.innerHTML = list.map(function (m, i) {
            return '<div class="movie-card" data-idx="' + i + '" data-region="' + r + '">' +
                '<img class="movie-poster" data-idx="' + i + '" alt="' + escapeHtml(m.title) + '" loading="lazy" referrerpolicy="no-referrer">' +
                '<span class="movie-rank">' + (i + 1) + '</span>' +
                '<div class="movie-overlay">' +
                    '<div class="play-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>' +
                    '<span class="movie-hover-title">' + escapeHtml(m.title) + '</span>' +
                '</div>' +
                '<div class="movie-name">' + escapeHtml(m.title) + ' <span class="movie-year">(' + escapeHtml(m.year) + ')</span></div>' +
                '</div>';
        }).join("");
        wirePosterFallbacks(r);
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
        playerWrap.style.backgroundImage = "url('" + (m.poster || makePosterDataUri(m, idx)) + "')";

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


