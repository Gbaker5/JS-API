//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


let image = document.querySelector('image')


function getFetch(){
  const choice = document.querySelector('input').value //value from input
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        
        //name 
        document.querySelector('#pokename').innerText = data.name
        
        //abilities
        data.abilities.forEach(obj => {
          console.log(obj.ability.name)
          const abilityLi = document.createElement('li') //create an li
          abilityLi.textContent = obj.ability.name //add text to li
          document.querySelector('#pokeAbility').appendChild(abilityLi)//append the li to the ul
        })
        
        //moves
        console.log(data.moves)
        data.moves.forEach(obj => {
          const moveLi = document.createElement('li') //create an li
          moveLi.textContent = obj.move.name //add text to li
          document.querySelector('#pokeMoves').appendChild(moveLi)//append the li to the ul
        })
        
        //types
        console.log(data.types)
        data.types.forEach(obj => {
          const typeLi = document.createElement('li') //create an li
          typeLi.textContent = obj.type.name //add text to li
          document.querySelector('#pokeTypes').appendChild(typeLi)//append the li to the ul
        })
        
        //weight
        document.querySelector('#wgt').innerText = data.weight

        //stats

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getFetch2(){
  const url = document.querySelectorAll('span').innerText


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)



  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}