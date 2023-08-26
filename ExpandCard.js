const Panels = document.querySelectorAll(".panel")
Panels.forEach((panel) => {
   panel.addEventListener('click', () => {
    removeactiveclass()
    panel.classList.add("active")
   })
})

function removeactiveclass() {
    Panels.forEach((panel) => {
        panel.classList.remove("active")
    })
}
