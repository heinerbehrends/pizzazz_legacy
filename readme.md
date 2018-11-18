# PIZZAZZ Word Game App
A multiplayer online micro scrabble game. All players receive the same random letters at the same time. When the time is up the player that played the longest valid word with the highest score wins.
Check out the [heroku app here](https://pizzazz-micro-scrabble.herokuapp.com "Pizzazz-micro-scrabble-app")
### Run pizzazz app on your local machine
```
$ git clone https://github.com/heinerbehrends/pizzazz.git
$ cd pizzazz
$ yarn install
$ yarn start
$ cd client
$ yarn install
$ yarn start
```
### Project descripition
Started as an self education project to learn how to build a real time multiplayer web application out of a scrabble like word game that I programmed as a simple command line app for the MIT 6.00 computer science course.
The implementation uses react and the create-react-app project as the foundation for the frontend code and node with sockets.io for the backend. Frontend state management is done using the redux pattern and redux-sagas for asynchronous code. The project uses the air bnb rules for style and linting except for the jsx extension rule and a few per file exceptions.
