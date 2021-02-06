1. Create 16x16 grid of square divs
    - do not do manually
    - should go inside a main div
    - Flex? Grid?
2. Hover effect to change div color when mouse passes through
    - should leave a trail
3. Button to clear screen and create new grid based on user's input
    - prompt?
4. Optional - have color change be a random RGB that gets add black to it as the mouse passes over multiple times

Comments as I work
- for loop to create grid. it will need an initial value that can change based on the number entered in the prompt (16?)
- button will need to run through addEventListener where the function reloads page then generates the prompt for the size of the grid
- DOM with hover event should probably change the color
- remember, to create and element you have to .createElement then parent.appendChild(child).
- cap the promt at 64