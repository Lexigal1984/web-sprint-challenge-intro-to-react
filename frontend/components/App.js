import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState()
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    
    const fetchData = () => {
    
      axios.get(urlPeople)
        .then(characterResponse => {
    
          axios.get(urlPlanets)
            .then(planetResponse => {
              const planets = planetResponse.data;
              const charactersWithHomeworld = characterResponse.data.map(character => {
                const homeworldData = planets.find(planet => planet.id === character.homeworld);
    
                return {
                  ...character,
                  homeworldData: homeworldData
                };
              });
    
              setCharacters(charactersWithHomeworld);
    
            })
    
            .catch(error => {
              console.error('Error fetching planet data:', error);
            });
        })
    
        .catch(error => {
          console.error('Error fetching character data:', error);
        });
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <div>
        {/* ❗ Map over the data in state, rendering a Character at each iteration */
        characters && characters.map(character => (
          <Character key={character.id} character={character} />
        ))
        }
      </div>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
