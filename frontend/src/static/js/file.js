const navLinks = document.querySelectorAll('.nav-link');
        const contentSections = document.querySelectorAll('.content-section');

        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                contentSections.forEach(section => {
                    section.style.display = 'none';
                });
                const targetId = e.target.getAttribute('href');
                document.querySelector(targetId).style.display = 'block';
            });
        });