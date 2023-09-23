const ToggleBtn = document.querySelectorAll('.faq-toggle')
ToggleBtn.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
        
    })
})