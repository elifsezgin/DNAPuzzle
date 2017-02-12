[dnapuzzlelive]: https://www.dnapuzzle.com
## DNApuzzle

### Background

DNApuzzle is different than an ordinary puzzle in which the pieces are small one stranded **DNA molecules** that matches sequences on the damaged DNA that needs to be paired.

The puzzle is randomly generated for each game, which will have random number of DNA molecules to be paired in each game.

Technical details of the project are outlined in the **Functionality & MVP** and **Future Directions** sections.  

Feel free to browse at [DNAPuzzle][dnapuzzlelive]

<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1486892787/Screen_Shot_2017-02-12_at_1.45.41_AM_qg3yl3.png' width='30%' height='300px'/>

### Functionality & MVP  

In DNApuzzle game, users will be able to:

- [ ] Start, reset the game board
- [ ] Drag DNA's and strands and match strands to the corresponding DNA
- [ ] Click hint button that will pop up as a modal
- [ ] See the timer and their scores according to the duration of their game (Bonus)

### Architecture and Technologies

This project is implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `EaselJS` with `HTML5 Canvas` for drawing draggable models and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there are four scripts involved in this project:

`dna.js`: this script creates and updates the necessary Canvas elements to draw a 'DNA' and rendering them to the DOM. Each `DNA` contains a `sequence` and the complementary strands of the DNA is structured within this script.

`base.js`: this lightweight script houses the constructor and updates functions for the `base` objects.  Each `base` contains a `type` and a `color`. This script is responsible for rendering bases of the DNA object.

`game.js`: this script handle the logic behind the scenes.  A puzzle object creates random number of `damaged DNA`s along with their complementary 'one stranded DNA's'.  It is responsible for recognizing each `match` upon dragging a 'one stranded DNA' close enough to the corresponding `damaged DNA` and updating the 'damaged DNA' object appropriately.

`puzzle_view.js`: this script creates the modals and the header buttons along with the settings of the canvas that the DNA's will be rendered.

### Future Directions

Some directions that the DNAPuzzle may go are:

- [ ] Change 2D DNA models to 3D
- [ ] Add more levels
- [ ] Add timer
