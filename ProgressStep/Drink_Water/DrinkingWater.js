const smallCups = document.querySelectorAll(".cup-small")
const literd = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")
updateBigCup()
smallCups.forEach((cup, idx) => {
    //   console.log(cup, idx)
    cup.addEventListener('click', () => {
        highlifgtcups(idx)
    }
    )
})

function highlifgtcups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    // console.log(idx)
    smallCups.forEach((cup, idx2) => {
        // console.log(idx2)
        if (idx2 <= idx) {
            cup.classList.add('full')

        }
        else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length
    // console.log(fullCups)
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0;
    }

    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }

    else {
        remained.style.visibility = 'visible'
        literd.innerText = `${2 - (250 * fullCups / 1000)}`
    }
}