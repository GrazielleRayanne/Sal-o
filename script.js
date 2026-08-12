document.addEventListener('DOMContentLoaded', () => {
    // Tratamento para imagem quebrada do Gloss Express
    const glossImg = document.getElementById('glossImg');
    
    if (glossImg) {
        glossImg.addEventListener('error', function() {
            // Caso a imagem não exista no diretório, carrega um placeholder elegante
            this.src = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80';
            this.alt = 'Tratamento Capilar Studio Grazielle Rayanne';
        });
    }

    // Rolagem suave ao clicar nos links do menu
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