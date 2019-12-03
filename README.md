# ![GA Logo and Misk Logo](https://misk.org.sa/miskacademy/wp-content/uploads/sites/5/2019/05/logo-aa.png)

# Project Tic-Tac-Toe Game
The project is a game of Tic Tac Tow with two players or player with computer. The application can store scores of games example how many wins or draw.

# My Project Deployment
Deploy with github
You can enjoy the game here [TIC-TAC-TOE](sss)


## Technologies used in the project
* Git
* Javascript
* HTML
* CSS
* jQuery
* [Sweet Alert](https://daneden.github.io/animate.css/)
* I used some css animate [ANIMATE](https://daneden.github.io/animate.css/)
* Also The sounds [SOUNDBIBKE](http://soundbible.com/)
* I make the game responsive with mobile versions


## wireframes and user stories.
- As a user, I need a play again button to play a new game. 
- As a user, I need to kkeep track the score for each player. 
- As a user, I need to know who's turn in the game.
- As a user, I need select between X or O to get started. 
- As a user, I need to see a message who is the winner. 
- As a user, I need hear some of sound effect to react with the game. 
- As a user, I shouldn't be able to click to any button when game is starting except play again. 
- As a user, I shouldn't be able to click to any index of the board if I didn't select any mark to start (X or O). 

## The process of developing the game:
1. Starting with a simple HTML file and few CSS.
2. Simplify the problem to small steps and do them one by one.
3. Started with every time I click on the boxes put X in it.
4. Let them alternate between X and O.
5. Store each move in an array.
6. Get the winner by checking if any line has a matching symbol after the fifth move if it reaches nine moves without winner it will be a tie.
7. Get the score for each player and display it underneath the board.
8. Be able to start a new game without refresh the page or lose the scores by click on `New Game`.
9. Add some sound effects when clicking on the boxes and if someone wins or ties
10. Add AI player to play against by clicking `Play Against AI`.
#OR
## Planning and Development Process
Planning started with searching and exploring different options and ways to build the game with an open mind
then: 

Day 1:
- Basic html layout
- Basic styling with css
- Adding special classes and IDs to html elements
- Building jQuery lines to enable clicks actions 
- Using developer tools all the way from here 

Day 2:
- Defining variables and building functions to use in jQuery to: manipulate page's content
- Defining winning scenarios, psudocode them
- Building  winning functions, along with ``turn()`` , ``tie()`` , ``reset()`` functions 
- Debugging functions

Day 3:
- Discussing, sharing thoughts on solving problems 
- Debugging and fixing JavaScript bugs 
- Adding a feature so the first player gets to pick X or O to play as
- Adding a feature to track and show winning/tie ``score()``
- Working on page styles and making it responsive 

Day 4:
- Adding sound feature
- Adding play vs computer feature
- Update ``winner()`` function
- Final touches on html, css and jQuery
# Describe any lines in the code
## winner() function
*side note: this function was written on the last day to replace three ones that were used before*
```javascript
let playBoard = ["", "", "", "", "", "", "", "", ""];
// the GameBoard:
// "box-1",     "box-4",    "box-7"
// "box-2",     "box-5",    "box-8"
// "box-3",     "box-6",    "box-9"
const winner = function () {
    // filling in a globally defined array with gameboared content
    for (let i = 0; i < 9; i++) { 
        playBoard[i] = $("div#box-" + (i + 1)).text();
    }
    if (playBoard[0] == 'X' && playBoard[1] == 'X' && playBoard[2] == 'X' || playBoard[3] == 'X' && playBoard[4] == 'X' && playBoard[5] == 'X' || playBoard[6] == 'X' && playBoard[7] == 'X' && playBoard[8] == 'X') // if X won with a column
    {
        winnerIsX(); // a function to print out the winner and update score 
    }
    if (playBoard[0] == 'O' && playBoard[1] == 'O' && playBoard[2] == 'O' || playBoard[3] == 'O' && playBoard[4] == 'O' && playBoard[5] == 'O' || playBoard[6] == 'O' && playBoard[7] == 'O' && playBoard[8] == 'O') // if O won with a column
    {
        winnerIsO(); 
    }
    if (playBoard[0] == 'X' && playBoard[3] == 'X' && playBoard[6] == 'X' || playBoard[1] == 'X' && playBoard[4] == 'X' && playBoard[7] == 'X' || playBoard[2] == 'X' && playBoard[5] == 'X' && playBoard[8] == 'X') // if X won with a row
    {
        winnerIsX(); 
    }
    if (playBoard[0] == 'O' && playBoard[3] == 'O' && playBoard[6] == 'O' || playBoard[1] == 'O' && playBoard[4] == 'O' && playBoard[7] == 'O' || playBoard[2] == 'O' && playBoard[5] == 'O' && playBoard[8] == 'O') {
        winnerIsO();
    }
    if (playBoard[0] == 'X' && playBoard[4] == 'X' && playBoard[8] == 'X' || playBoard[6] == 'X' && playBoard[4] == 'X' && playBoard[2] == 'X') // if X won diagonally
    {
        winnerIsX(); 
    }
    if (playBoard[0] == 'O' && playBoard[4] == 'O' && playBoard[8] == 'O' || playBoard[6] == 'O' && playBoard[4] == 'O' && playBoard[2] == 'O') {
        winnerIsO();
    }
}
```


## Challenges
How to determine the correct boxs like when boxs matched or not. 



# unsolved problems which would be fixed in future iterations.
- add option if the user want to play with (X or O) or with images or their names. 
- add a timer 


