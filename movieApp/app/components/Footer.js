export function Footer() {
    const $footer = document.createElement("footer");
    $footer.innerHTML = `
            <div class="footer-area">
                <div class="footer-area__title">
                    <span> Jairo Agüero Díaz</span>
                </div>
                <div class="footer-area__icons">
                    <a href="https://github.com/JairoAD" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="mailto:jairojohel@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://wa.me/50683603670" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
                </div>
            </div>
        
    `;
    return $footer;
}