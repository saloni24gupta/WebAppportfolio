const TagsEl = document.getElementById("tags")
const TextArea = document.getElementById("textarea")

TextArea.focus()

TextArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
 TagsEl.innerHTML = ''

 tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerHTML = tag
    TagsEl.appendChild(tagEl)
 });
}

function randomSelect() {
    console.log(12)
}