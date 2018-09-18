import React, { PureComponent } from 'react'
import styled from 'styled-components'
import RandomLetters from './RandomLetters'
import CountdownContainer from './CountdownContainer'
import GameInterfaceBottom from './GameInterfaceBottom'
import GameInterfaceTop from './GameInterfaceTop'
import ValidWordHTML from './ValidWordHTML'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import MultiBackend, { TouchTransition, Preview } from 'react-dnd-multi-backend'


const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend({enableMouseEvents: true}),
      preview: true,
      transition: TouchTransition
    }
  ]
};

const AppWrapper = styled.div`
  background-color: #F9F8F2;
  text-align: center;
  padding: 3rem 0;
  box-sizing: border-box;
`;

class App extends PureComponent {

  generatePreview(type, item, style) {
    Object.assign(style, {backgroundColor: item.color, width: '50px', height: '50px'});
    return <div style={style}>Generated</div>;
  }

  render() {
    return (
      <AppWrapper>
        <GameInterfaceTop />
        <RandomLetters />
        <ValidWordHTML />
        <Preview generator={this.generatePreview} />
        <GameInterfaceBottom />
        <CountdownContainer />
      </AppWrapper>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);
