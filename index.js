const {Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter; //Pull out Matter library objects
const width = 800;
const height = 600;
const engine = Engine.create();
const {world} = engine; //When we create an engine we get a world object
const render = Render.create({
    element:document.body, //render the representation of world in the body
    engine: engine,
    //our canvas
    options: {
        wireframes: false, //get solid shapes instead of outlines
        width,
        height
    }
});
Render.run(render); //start working and draw in our world
Runner.run(Runner.create(), engine); //Runner coordinates changes from state A to state B
//Add the mouse click and drag options
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))
//Walls - elements cant go past this
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true}),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true}),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true}),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true})
];
World.add(world, walls); //for it to show up

//Random Shapes

for(let i = 0; i<50; i++){
    if (Math.random() > 0.5){
    World.add(world, Bodies.rectangle(Math.random() * width,Math.random() * height,50,50));
    } else{
        World.add(world, Bodies.circle(Math.random()* width, Math.random()* height, 35, {
            render: {
                fillStyle: 'red' //change the color if wireframe mode is false
            }
        }));
    }
}


