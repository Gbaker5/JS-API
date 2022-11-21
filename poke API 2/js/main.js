//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


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
          //const statP = document.createElement('p')//create paragraph
          //statP.id = 'statPara'//set id of newly created pragraph to 'statPara'
          //statP.textContent = obj.stat.name //add text to paragraph
          
          //document.querySelector('#statPara').appendChild(statP)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('#test').addEventListener('click', getFetch2)

function getFetch2(){
  const url = 'https://pokeapi.co/api/v2/stat/2/'


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)



  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}