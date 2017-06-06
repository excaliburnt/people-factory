const personForm = document.querySelector('#personForm') // Creates var personForm. It returns form elements 

function handleSubmit(ev) {
  ev.preventDefault() //Stops the default action happening
  const f = ev.target //says which DOM element triggered the event
  const heading = document.querySelector('h1')
  heading.textContent = f.personName.value + " is " +  f.personAge.value + " years old." //Returns the content of a specefied node
  const paragraph = document.querySelector('h2')
  paragraph.textContent = "Favorite Color is " + f.favColor.value 
}

  

personForm.addEventListener('submit', handleSubmit) //Adds event to to the button, 'submit'