// Функция для плавной прокрутки до указанного раздела
function navigateToSection(sectionId) {
    event.preventDefault(); // Отменяем стандартный переход по ссылке
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваемся плавно
}

// Функция для проверки видимости элемента на экране
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
    );
}

document.addEventListener("scroll", () => {
    const blocks = document.querySelectorAll(".content-block");
    blocks.forEach(block => {
        if (isElementVisible(block)) {
            block.classList.add("visible");
        }
    });
});