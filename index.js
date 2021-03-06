const personForm = document.querySelector('#personForm')



function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const favoriteColor = f.favoriteColor.value
  const age = f.age.value

  const colorDiv = `
    <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
  `
  
  // const boldedName = document.createElement('strong')
  // boldedName.textContent = name
  // details.appendChild(boldedName)

  details.innerHTML = `
    <ul>
      <li>Name: ${name}</li>
      <li>Favorite Color: ${colorDiv}</li>
      <li>Age: ${age}</li>
    </ul>
  `
}

personForm.addEventListener('submit', handleSubmit)