import * as actions from './actionCreators';
import * as types from './actionTypes';

describe('startGameAction', () => {
  it('should create an action to start a game', () => {
    const game = {
      randomLetters: 'pizzazz',
      validWords: ['pi', 'pia', 'zap', 'pizza', 'pizazz', 'pizzaz', 'pizzazz'],
      seconds: 40,
    };
    const expectedAction = {
      type: types.START_GAME,
      game,
    };
    expect(actions.startGameAction(game)).toEqual(expectedAction);
  });
});

describe('endDragAction', () => {
  it('should create an action with props and target', () => {
    const props = {
      string: 'pizzazz',
      index: 0,
      parent: 'randomLetters',
    };
    const target = {
      targetString: '0000000',
      index: 0,
      parent: 'scrabbleBoard',
    };
    const expectedAction = {
      type: types.END_DRAG,
      props,
      target,
    };
    expect(actions.endDragAction(props, target)).toEqual(expectedAction);
  });
});

describe('replaceLettersAction', () => {
  const randomLetters = 'pizzazz';
  const scrabbleBoard = false;
  const expectedAction = {
    type: types.REPLACE_LETTER,
    randomLetters,
    scrabbleBoard,
  };
  it('should create an action to replace letters', () => {
    expect(actions.replaceLettersAction(randomLetters, scrabbleBoard)).toEqual(expectedAction);
  });
});

describe('isValidIndexAction', () => {
  const index = 1;
  const expectedAction = {
    type: types.IS_VALID,
    index,
  };
  it('should create an action to change the isValid index', () => {
    expect(actions.isValidIndexAction(index)).toEqual(expectedAction);
  });
});

describe('isValidIndexAction', () => {
  const index = 1;
  const expectedAction = {
    type: types.IS_VALID,
    index,
  };
  it('should create an action to change the isValid index', () => {
    expect(actions.isValidIndexAction(index)).toEqual(expectedAction);
  });
});

describe('sendSolutionAction', () => {
  const solution = 'pizza';
  const expectedAction = {
    type: types.SEND_SOLUTION,
    solution,
  };
  it('should create an action to send a solution', () => {
    expect(actions.sendSolutionAction(solution)).toEqual(expectedAction);
  });
});

describe('sendNameAction', () => {
  const name = 'pizzaro';
  const expectedAction = {
    type: types.SEND_NAME,
    name,
  };
  it('should create an action to send the name', () => {
    expect(actions.sendNameAction(name)).toEqual(expectedAction);
  });
});

describe('joinGameAction', () => {
  const expectedAction = {
    type: types.JOIN_GAME,
  };
  it('should create an action to change the message display', () => {
    expect(actions.joinGameAction()).toEqual(expectedAction);
  });
});

describe('messageAction', () => {
  const message = 'pizzaro';
  const expectedAction = {
    type: types.MESSAGE,
    message,
  };
  it('should create an action to change the message display', () => {
    expect(actions.messageAction(message)).toEqual(expectedAction);
  });
});
