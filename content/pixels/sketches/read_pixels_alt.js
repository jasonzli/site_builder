// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var worldImage;

function preload() {
    worldImage = loadImage("/pixels/sketches/world.png");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);



    for (var y = 0; y < worldImage.height; y++) {
        for (var x = 0; x < worldImage.width; x++) {
            var in_color = worldImage.get(x, y);

            var r = red(in_color);
            var g = green(in_color);
            var b = blue(in_color);

            var out_color;
            if (r === 255) {
                out_color = color(255, 0, 0);
            } else {
                out_color = color(0, 0, 255);
            }

            worldImage.set(x, y, out_color);
            worldImage.updatePixels();
        }
    }

    noSmooth();
    image(worldImage, 0, 0, width, height);

    noLoop();
}