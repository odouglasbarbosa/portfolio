document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li a');
    const projectImages = document.querySelectorAll('.project-image');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            console.log('Image clicked:', img); // Adicionado para verificar o clique
            openModal(img);
        });
    });
});

function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
    console.log('Modal opened:', modalImg.src); // Adicionado para verificar a abertura do modal
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    console.log('Modal closed'); // Adicionado para verificar o fechamento do modal
}

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1Z92HWPQ8D"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1Z92HWPQ8D');
</script>
