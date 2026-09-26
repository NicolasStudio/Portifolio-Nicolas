// ==============================
// Menu Mobile
// ==============================
// O scroll suave das âncoras é feito via CSS (scroll-behavior: smooth em Styles.css)
function toggleMenuMobile() {
    document.querySelector(".inicio__mobile")?.classList.toggle("ativo");
}

// Fecha o menu mobile ao escolher um link
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.inicio__mobile a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector(".inicio__mobile")?.classList.remove("ativo");
        });
    });
});
