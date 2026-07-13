document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');

    if (button && header) {
        button.addEventListener('click', function () {
            header.classList.toggle('menu-open');
            const expanded = header.classList.contains('menu-open');
            button.setAttribute('aria-expanded', expanded);
            button.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
        });
    }

    const expandButtons = document.querySelectorAll('.expand-toggle');

    expandButtons.forEach((expandButton) => {
        const targetId = expandButton.getAttribute('aria-controls');
        const target = targetId ? document.getElementById(targetId) : null;
        const section = expandButton.closest('.categoria__curso');

        if (!target || !section) return;

        const isCollapsed = section.classList.contains('collapsed');
        expandButton.setAttribute('aria-expanded', !isCollapsed);
        expandButton.textContent = isCollapsed ? 'Mostrar' : 'Ocultar';
        target.setAttribute('aria-hidden', isCollapsed);

        expandButton.addEventListener('click', function () {
            section.classList.toggle('collapsed');
            const collapsed = section.classList.contains('collapsed');
            expandButton.setAttribute('aria-expanded', !collapsed);
            expandButton.textContent = collapsed ? 'Mostrar' : 'Ocultar';
            target.setAttribute('aria-hidden', collapsed);
        });
    });
});
