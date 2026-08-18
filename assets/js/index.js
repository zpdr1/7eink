    // 加载动画 - 等待所有图片加载完成
        const loader = document.getElementById('loader');
        const loaderBarFill = document.getElementById('loaderBarFill');
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        const totalImages = images.length;

        function updateProgress() {
            loadedCount++;
            const progress = (loadedCount / totalImages) * 100;
            loaderBarFill.style.width = progress + '%';
            if (loadedCount >= totalImages) {
                setTimeout(() => {
                    loader.classList.add('hidden');
                    // 触发滚动淡入动画
                    document.querySelectorAll('.fade-up').forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight) {
                            el.classList.add('visible');
                        }
                    });
                }, 400);
            }
        }

        images.forEach(img => {
            if (img.complete && img.naturalWidth > 0) {
                updateProgress();
            } else {
                img.addEventListener('load', updateProgress);
                img.addEventListener('error', updateProgress);
            }
        });

        // 如果图片已缓存或没有图片，直接隐藏加载动画
        if (totalImages === 0) {
            loader.classList.add('hidden');
        }

        const header = document.getElementById('header');
        const backToTop = document.getElementById('backToTop');
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('#navbar a:not([href="#contact"])');
        const menuToggle = document.getElementById('menuToggle');

        window.addEventListener('scroll', () => {
            header.classList.toggle('shadow-sm', window.scrollY > 50);
            const shouldShow = window.scrollY > 300;
            backToTop.classList.toggle('opacity-100', shouldShow);
            backToTop.classList.toggle('visible', shouldShow);
            backToTop.classList.toggle('opacity-0', !shouldShow);
            backToTop.classList.toggle('invisible', !shouldShow);
        });

        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));