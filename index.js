const personForm = document.querySelector('#personForm')

// personForm.addEventListener('submit')

function handleSubmit (ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('hi')
    heading.textContent = f.personName.value
    console.log(f.personName.value) //.value gives only the person's name typed
}

personForm.addEventListener('submit', handleSubmit); //Says there's only one argument error