/**
 * Navbar & Mega Menu Logic
 * Toyota Agung Pekanbaru
 */

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar');
    
    // 1. Efek Scroll Navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Logic Mobile Menu (Toggle)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu-container');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. Hover Delay for Mega Menu (Optional - agar transisi lebih smooth)
    const megaMenuParent = document.querySelector('.mega-menu-parent');
    const megaMenu = document.querySelector('.mega-menu');

    if (megaMenuParent && megaMenu) {
        megaMenuParent.addEventListener('mouseenter', () => {
            megaMenu.style.display = 'block';
            setTimeout(() => {
                megaMenu.style.opacity = '1';
                megaMenu.style.visibility = 'visible';
                megaMenu.style.transform = 'translateY(0)';
            }, 10);
        });

        megaMenuParent.addEventListener('mouseleave', () => {
            megaMenu.style.opacity = '0';
            megaMenu.style.visibility = 'hidden';
            megaMenu.style.transform = 'translateY(10px)';
            setTimeout(() => {
                megaMenu.style.display = 'none';
            }, 300);
        });
    }
});