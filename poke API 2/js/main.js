//Example fetch using pokemonapi.co
document.querySelector('#choose').addEventListener('click', getFetch)


let image = document.querySelector('image')


function getFetch(){
  //clear
  document.querySelector('#pokename').innerText = '' 
  document.querySelector('#pokeAbility').innerText = ''
  document.querySelector('#pokeMoves').innerText = ''
  document.querySelector('#pokeTypes').innerText = ''
  document.querySelector('#wgt').innerText = ''

  
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
          const abilityLi = document.createElement('li') //create an li
          abilityLi.textContent = obj.ability.name //add text to li
          document.querySelector('#pokeAbility').appendChild(abilityLi)//append the li to the ul
        })
        
        //moves
        data.moves.forEach(obj => {
          const moveLi = document.createElement('li') //create an li
          moveLi.textContent = obj.move.name //add text to li
          document.querySelector('#pokeMoves').appendChild(moveLi)//append the li to the ul
        })
        
        //types
        data.types.forEach(obj => {
          const typeLi = document.createElement('li') //create an li
          typeLi.textContent = obj.type.name //add text to li
          document.querySelector('#pokeTypes').appendChild(typeLi)//append the li to the ul
        })
        
        //weight
        document.querySelector('#wgt').innerText = data.weight

        //stats
        console.log(data.stats)
        console.log(data.stats[1].stat.name)
        data.stats.forEach( obj => {
          
        console.log(obj.stat.name)
        //console.log(obj.stat.url)
          const statButton = document.createElement('button')//create paragraph
          statButton.className = obj.stat.url//set id of newly created pragraph to 'statPara'
          statButton.innerText = obj.stat.name //add text to paragraph
          //statButton.addEventListener('click', getFetch2)
          document.querySelector('#pokeStats').appendChild(statButton)
          console.log()
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


document.querySelector('#test').addEventListener('click', getFetch2)




function getFetch2(){
 
  console.log('yes')
  const url = 


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)



  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}