import React, { useState } from 'react'
import { styled } from 'styled-components'


const StyledChar = styled.div`
span {
  color: black;
}
`
function Character(props) { // ❗ Add the props
  const { character } = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  return (
    <StyledChar className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">
        {character.name}
      </h3>
      {/* Use the same markup with the same attributes as in the mock */
      showHomeworld && character.homeworldData && (
          <><p>Planet: <span className="character-planet">{character.homeworldData.name}</span></p><p>Birth Year: <span className="character-birth-year">{character.birth_year}</span></p><p>Height: <span className="character-height">{character.height}</span></p></>
      )}
    </StyledChar>
  )
}



export default Character
