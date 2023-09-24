const Counter = document.querySelectorAll(".counter")

Counter.forEach(counter => {
    console.log(counter)
    counter.innerHTML = '0'

    const UpdateCounter = () => {
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)
        const c = +counter.innerText

        const increment = target / 200
        // console.log(increment)

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(UpdateCounter, 1)
        }
        else {
            counter.innerText = target
        }
    }

    UpdateCounter()
})