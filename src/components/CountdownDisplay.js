import React from 'react'
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

 export default CountdownDisplay
