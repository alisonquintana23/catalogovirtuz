document.addEventListener("DOMContentLoaded", function () {
    // Inicializa todos os carrosseis Swiper
    document.querySelectorAll(".swiper-container").forEach(container => {
        new Swiper(container, {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    });

    // Adiciona efeito de movimento ao passar o mouse nos produtos
    document.querySelectorAll(".product").forEach(product => {
        product.style.transition = "transform 0.3s ease-out, box-shadow 0.3s ease-out";
        product.addEventListener("mousemove", (e) => {
            const rect = product.getBoundingClientRect();
            const moveX = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const moveY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            product.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg) scale(1.05)`;
            product.style.boxShadow = "0 15px 30px rgba(255, 255, 255, 0.3)";
        });
        product.addEventListener("mouseleave", () => {
            product.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
            product.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.1)";
        });
    });
});