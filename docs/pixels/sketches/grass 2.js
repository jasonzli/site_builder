// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js

// draws some grass with density driven by a luminance map image

var testImage;

function preload() {
    testImage = loadImage("/pixels/sketches/cf.png");
    noLoop();
}

function setup() {
    // create a place to draw
    createCanvas(640, 320);

    // load up the pixel[] array so we can read colors out of it later
    testImage.loadPixels();
}


function draw() {
    // clear the background
    background(0, 0, 0);

    // set drawing styles
    stroke(255, 0, 0);
    fill(255, 255, 255);
    stroke(0, 200, 100, 80);

    var start = millis();

    // loop over every x,y pixel coordinate in the image
    for (x = 0; x < 640; x++) {
        for (y = 0; y < 320; y++) {

            // slow
            // this is _really_ slow, it might crash your browser
            // var pixelRed = red(testImage.get(x, y));

            // quick
            var pixelRed = getQuick(testImage, x, y)[0];


            // pick a random value and compare it pixelRed
            // for example:
            // if pixelRed is 0, we'll never draw
            // if pixelRed is 255, we'll always draw
            // if pixelRed is 127, we'll draw 50% of the time
            if (random(255) < pixelRed) {
                drawGrassBlade(x, y);
            }
        }
    }

    var end = millis();

    console.log(`took ${floor(end - start)} ms`);

    noLoop();
}

function drawGrassBlade(x, y) {

    var bladeHeight = min(
        random(1, 60), random(1, 60), random(1, 60),
        random(1, 60), random(1, 60), random(1, 60)
    );

    var bladeLean = random(-.3, .3);
    bladeLean *= bladeHeight;

    line(x, y, x + bladeLean, y - bladeHeight);

}


// find the RGBA values of the pixel at x, y in the img.pixels array
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the screen

function getQuick(img, x, y) {

    var i = (y * img.width + x) * 4;
    return [
        testImage.pixels[i],
        testImage.pixels[i + 1],
        testImage.pixels[i + 2],
        testImage.pixels[i + 3],
    ];
}