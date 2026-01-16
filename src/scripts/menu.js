const menu = document.querySelector('.menu');

menu?.addEventListener('click', (e) => {
    const isExpanded = menu?.getAttribute('aria-expanded') === 'true';
    menu?.setAttribute('aria-expanded', `${!isExpanded}`);
})