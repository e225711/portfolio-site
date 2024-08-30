document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineLinks = document.querySelectorAll('.timeline-link');
    
    timelineLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement.classList.contains('hidden')) {
                targetElement.classList.remove('hidden');
            } else {
                targetElement.classList.add('hidden');
            }
        });
    });
});

// スクロール位置を監視してボタンを表示/非表示
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// ボタンがクリックされたときにトップへスクロール
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
