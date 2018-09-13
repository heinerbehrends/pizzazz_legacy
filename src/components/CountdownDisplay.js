import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Circle, NumberDisplay, Container } from './styled/CountdownStyled'


const CountdownDisplay = props => {
   return(
     <Container>
       <NumberDisplay>{ props.value }</NumberDisplay>
       <Svg>
         <Circle />
       </Svg>
     </Container>
   )
 };

 CountdownDisplay.propTypes = {
   value: PropTypes.number.isRequired,
 }

 export default CountdownDisplay
