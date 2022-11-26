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
          const newUrl = obj.stat.url//set id of newly created pragraph to 'statPara'
          console.log(newUrl)
          statButton.innerText = obj.stat.name //add text to paragraph
          //statButton.addEventListener('click', getFetch2)
          document.querySelector('#pokeStats').appendChild(statButton)
          console.log()
        })
     
        //if you set each button to have a different id 
        //then write an if statement 'if id == id' then perform function for displaying those stats
        //create functions outside of this function to call api again
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//document.querySelector('#test').addEventListener('click', getFetch2)

//let buttonText = ('#pokeStat > button.innerText')



//function getFetch2(){
  //console.log(buttonText)
  //console.log('yes')
  //const url = 'https://pokeapi.co/api/v2/stat/1/'
  //if('#pokeStat')

  //fetch(url)
    //.then(res => res.json()) // parse response as JSON
    //.then(data => {
      //console.log(data)



  //})
  //.catch(err => {
      //console.log(`error ${err}`)
  //})
//}