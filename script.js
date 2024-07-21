
### Código JavaScript (script.js)

```js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
