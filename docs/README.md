## DNApuzzle

### Background

DNApuzzle is different than an ordinary puzzle in which the pieces are small one stranded **DNA molecules** that matches sequences on the damaged DNA that needs to be paired.

The game will be structured in an increasing difficulty levels, which will have one DNA molecule to be paired, and as the levels go higher, the molecules and their pairs will increase in number and in length. (Bonus)

Technical details of the project are outlined in the **Functionality & MVP** and **Bonus Features** sections.  

### Functionality & MVP  

In DNApuzzle game, users will be able to:

- [ ] Start, reset the game board
- [ ] Drag DNA's and strands and match strands to the corresponding DNA
- [ ] Click hint button that will pop up as a modal
- [ ] See the timer and their scores according to the duration of their game (Bonus)

In addition, this project will include:

- [ ] An Hint modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn, and the Hint modal.  Game controls will include Start, Stop, and Reset buttons. The DNA molecules and their missing pieces will be randomly spread over the window. The DNA will have a double helix view with rotation.(3D view as a Bonus) Once a piece is approached to the matching DNA molecule, it will stop spinning and will stick if the sequences matches.

[Wireframes](wireframes)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `EaselJS` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be four scripts involved in this project:

`dna.js`: this script will create and update the necessary Canvas elements to draw a 'DNA' and rendering them to the DOM. Each `DNA` will contain a `sequence` and the complementary strands of the DNA is structured within this script.

`base.js`: this lightweight script will house the constructor and update functions for the `base` objects.  Each `base` will contain a `type` and a `color`. This script is responsible for rendering bases of the DNA object.

`game.js`: this script will handle the logic behind the scenes.  A puzzle object will create random number of `damaged DNA`s along with their complementary 'one stranded DNA's'.  It will be responsible for doing checks for each `match` upon dragging a 'one stranded DNA' close enough to the corresponding `damaged DNA` and updating the 'damaged DNA' object appropriately.

`puzzle_view.js`: this script will create the modals and the header buttons along with the settings of the canvas that the DNA's will be rendered.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `EaselJS` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `EaselJS`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `EaselJS` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `EaselJS` library.  First, build out the `DNA` object to connect to the `Puzzle` object.  Then, use `puzzle.js` to create and render at least the 'damaged DNA', and 'one standed DNA'.  Build in the ability to toggle the 'isMatched' state on dragging to right match for each 'one stranded DNA' and 'isComplete' state on match for each 'DNA'.  Goals for the day:

- Complete the `dna.js` and `strand.js` modules (constructor, update functions)
- Render a 'damaged DNA' and 'one stranded DNA' to the `Canvas` using `EaselJS`
- Make each 'one stranded DNA' draggable, toggling the state of the element and the 'damaged DNA' on match

**Day 3**: Create the puzzle logic-levels. Define different strategies for each level. Style the 'DNA' elements so that they stop spinning when hovered. Goals for the day:

- Create puzzle object that holds levels with an increasing difficulty
- Make 'DNA' elements responsive

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `Canvas`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the cells


### Bonus features

Some directions that the DNAPuzzle may go are:

- [ ] Change 2D DNA models to 3D
- [ ] Add more levels
- [ ] Add timer
