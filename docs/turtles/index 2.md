---
title: Turtle Graphics
layout: layouts/compform_chapter.pug
debug: false

header_title: "Turtle Graphics"
next: Strategy
next_url: ../strategy
previous: Pixel Data
previous_url: ../pixels

hero_title: Turtle Graphics
description: Introduced as a feature of Logo programming language in 1969, turtle graphics connect computer drawing to how we move our bodies through space, and encourage approaching computational form with a new mindset.
software: p5.js
---

## Logo and Turtle Graphics

The Logo computer programming language was [created in 1967](http://el.media.mit.edu/logo-foundation/what_is_logo/history.html) by Wally Feurzeig, Seymour Papert, and Cynthia Solomon to explore how programming can help children learn critical thinking and problem solving. One of the creators of Logo, Seymour Papert, wrote the 1980 book [Mindstorms](https://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746/ref=asap_bc?ie=UTF8) which discusses Logo and its goals:

> In many schools today, the phrase "computer-aided instruction" means making the computer teach the child. One might say _the computer is being used to program the child_. In my vision, _the child programs the computer_ and, in doing so, both acquires a sense of mastery over a piece of the most modern and powerful technology and establishes an intimate contact with some of the deepest ideas from science, from mathematics, and from the art of intellectual model building.

::: .links-sidebar
[Wikipedia:<br/> Turtle Graphics](https://en.wikipedia.org/wiki/Turtle_graphics)

[MIT: Scratch + Turtles](https://scratch.mit.edu/projects/196503540/)
/::

One of the key ideas introduced in Logo was _turtle graphics_. The turtle was originally a small programmable physical robot that carried a pen and could trace its path as it moved. Logo could control this turtle with simple commands: `left` and `right` to turn and `forward` to move. This idea was extended to drawing on-screen using a virtual turtle.

::: .two-up
![Papert w/ turtle](http://cyberneticzoo.com/wp-content/uploads/Papert-x640.jpg)
Seymour Papert with a physical turtle robot, photo by Cynthia Solomon{figure}

![turtle screenshot](images/turtle.png)
A virtual turtle in action!{figure}
/::


Logo's use of turtles allows students to make a strong association between what happens in the program and how they move their own bodies in the real world. Papert called this _body-syntonic_ learning. Body-syntonic learning supports understanding of abstract ideas through sensory experience. Papert often discussed these ideas in writing and videos.

- [Seymour Papert and Students (1972)](https://www.youtube.com/watch?v=5dZMgdqy7zY), [longer cut](https://www.youtube.com/watch?v=xMzojQFyMo0)
- [Seymour Papert on Logo (1986, full video series)](http://el.media.mit.edu/logo-foundation/resources/onlogo/index.html)
- [Seymour Papert on Logo: Teaching (1986) 4:25 - 6:40](https://youtu.be/ZG9cYhekB8A?t=4m25s)
- [Learning with Toys (1986)](https://www.youtube.com/watch?v=IhEovwWiniY)

::: .activity

## Be the Turtle

Explore body-syntonic reasoning by acting out a logo-like program.


### Write a Program
- Draw an image from the deck and keep it secret.
- Think about the path someone would need to take to trace that image as they walked.
- Write a series of instructions for tracing the image using `turn(degrees)` and `forward(steps)`.


### Run a Program
- Break into pairs.
- Trade instructions, but not images, with your partner.
- Follow the instructions your partner wrote, and think about the shape you are tracing on the ground.
- Draw an image of the path you took, and compare that image with your partner's original image.

### Discuss
Did involving your bodily senses and physical movement impact how you thought about the program?

/::



# A Shift in Perspective
The p5.js graphics API uses a _Cartesian_ coordinate system. To draw a line in p5.js you might use code like this: 

```javascript
line(100, 100, 200, 200)
```

This prioritizes the `x,y` coordinates of the **start** and **end** of the line. The **length** and **angle** of the line are deprioritized: they are not directly specified at all.

Turtle graphics flips these priorities around. This is code you might write to draw a line using a turtle:
```javascript
right(45); forward(100);
```
Now the line's **angle** and **length** are specified instead of its **start** and **end**. This is one of the key shifts in thinking encouraged by turtle graphics. 

The second shift becomes apparent if we ask where the line in the second example should be drawn. We can figure out the angle and length of a line from its start and end points, but we can't go the other way. Knowing the length and angle of a line does not tell us where it should be drawn. In turtle graphics, commands like `right` and `forward` use coordinates **relative** to the turtle, rather than **absolute** coordinates measured on the canvas.

This shift in priorities makes some things easier to express and some things harder:



::: .columns

::: .half
**Cartesian: Drawing a Square**
```javascript
rect(100, 100, 100, 100);
```
/::

::: .half
**Turtle Graphics: Drawing a Square**
```javascript
t.moveTo(100, 100);
t.penDown();
for(side = 0; side < 4; side++) {
    t.forward(100);
    t.turnRight(90);
}
```
/::

/::


::: .columns

::: .half
**Cartesian: Drawing a Star**
```javascript
line(100, 100, 200, 100);
line(200, 100, 119.09, 158.77);
line(119.09, 158.77, 150, 63.67);
line(150, 63.67, 180.90, 158.77);
line(180.90, 158.77, 100.00, 100.00);
```
/::

::: .half
**Turtle Graphics: Drawing a Star**
```javascript
t.moveTo(100, 100);
t.penDown();
for(side = 0; side < 5; side++) {
    t.forward(100);
    t.turnRight(135);
}
```
/::

/::

In the examples above, the Cartesian system works well for drawing a square, but the Cartesian code for the star is awkward and unclear. Changing the star's position or size would take a lot of work. Work should be done by computers, not programmers. With turtle graphics, the code that draws the star mirrors how we might describe the figure. It is a more natural expression of the idea and will be easier to modify.

<!-- ::: js-lab
/turtles/sketches/turtle_star.js
/:: -->


Both frameworks can be used to draw a square or star. We are not [_forced_](https://en.wikipedia.org/wiki/Technological_determinism) to draw specific things by either framework, but each framework encourages a different way of thinking. Just as working directly with pixels encourages different forms than working with higher-level drawing APIs, working with turtle graphics encourages yet other forms. 


Two of the forms that turtles are very good for are spirograph-like figures and recursive trees.


::: js-lab
/turtles/sketches/turtle_spirograph.js
/::

::: js-lab
/turtles/sketches/turtle_tree.js
/::



## A Simple Turtle in p5.js

To explore using turtle graphics with p5.js, I've created a basic turtle class for you to use this week. The examples above and below use this library, and you can copy it into your sketches.

Grab [the code here](turtle/turtle.html).

<!-- ::: js-lab
/turtles/sketches/turtle_house.js
/:: -->


### Comp Form Turtle API

`myTurtle = new Turtle(x, y)`

The turtle constructor: it creates a turtle object.

It takes optional [x, y] starting coordinates or defaults to the center of the sketch.

`myTurtle.moveForward(distance)`

Moves the turtle along its current bearing, drawing a line if pen is down.

`myTurtle.moveBackward(distance)`

Moves the turtle backward from its current bearing, drawing a line if pen is down.

`myTurtle.moveTo(x, y)`

Instantly transports the turtle to the provided x, y location, drawing a line if pen is down.

`myTurtle.turnRight(angleDegrees)`

Rotates the turtle's bearing clockwise by the provided angle in degrees.

`myTurtle.turnLeft(angleDegrees)`

Rotates the turtle's bearing counter-clockwise by the provided angle in degrees.

`myTurtle.turnTo(angleDegrees)`

Changes the turtle's bearing to the provided angle. The angle is measured in clockwise degrees from straight right. 

`myTurtle.penUp()`

Tells the turtle to stop drawing lines while it moves.

`myTurtle.penDown()`

Tells the turtle to start drawing lines while it moves.

`myTurtle.image(image, width, height)`

Draws an image centered on the turtle's current location and aligned with the turtle's rotation.

`myTurtle.pushState()`

Records the turtle’s current state (position, bearing, etc.) to a stack. 

`myTurtle.popState()`

Restores the turtle’s state to the top recorded state on the stack.




## Turtle Examples

### Turtle Square Example
::: js-lab
/turtles/sketches/turtle_square.js
/::

### Turtle Triangle Example
::: js-lab
/turtles/sketches/turtle_triangle.js
/::

### Turtle Multiple Triangles Example
::: js-lab
/turtles/sketches/turtle_triangles.js
/::





::: .activity
## In-class Challenge


Explore turtle graphics by modifying the examples above. Work through the following challenges in order. Don't skip any.


| Time                 | Comment                                                      |
| -------------------- | ------------------------------------------------------------ |
| < 11 in 20 Minutes   | Keep studying to improve your understanding of these topics. |
| 11 in 20 Minutes     | Good.                                                        |
| All 15 in 20 Minutes | Great.                                                       |




### Modify the Triangle Example
1. Draw a pentagon.
2. Draw an octagon.
3. Draw a circle.
4. Draw a circle with a dashed line. Tip: `penUp() + penDown()`

### Modify the Multiple Triangles Example
5. Draw each triangle with different colors.
6. Change the triangle function to draw pentagons.
7. Draw a 3x3 grid of pentagons.
{continue}

Style Tip: If you change what a function does, you should change its name as well. Did you change the function name when completing challenge 6?

### Modify the Spirograph Example
8. Change the `moveForward()` parameter to `i * 3`.
9. Center the drawing.
10. Comment out the `noLoop()`
11. Change the `turnRight()` parameter to `175 + frameCount`.
{continue}


### Challenging Challenges
12. Start with the original Triangle Example. Change it to draw a spiral.
13. Using a loop, draw 10 concentric triangles.
14. Draw the figure below.
15. Create a `polygon(sides)` function that receives a `sides` parameter and draws a regular polygon.
{continue}

![challenge_1.png](challenge_1.png)

/::


### Turtle + Images
::: js-lab
/turtles/sketches/turtle_image.js
/::


### Turtle Push + Pop
::: js-lab
/turtles/sketches/turtle_push.js
/::


### Turtle Recursive Tree
::: js-lab
/turtles/sketches/turtle_tree_2.js
/::



## Drawing Machines in Code

Turtles make it possible to change how you think about drawing and give you a new set of tools for expressing an image in code. They don't change _what you can do_ though: [under the hood](turtle/turtle.html) the turtle class uses the standard p5.js drawing API and a little trigonometry. Instead, using a turtle changes _how you do it_. Changing your approach and mental model has a significant effect on the solutions you create. You could make the same exact drawing with or without turtles, but in practice using turtles tends to lead to certain motifs and styles.

Turtles are just one example of a drawing machine. Inventing your own drawing machine is a rewarding exercise. It leads to new ways of approaching problems, a deeper understanding of programming, and new aesthetics to explore. 

::: .assignment

## Keep Sketching!

### Base
Explore using turtle graphics. Start with a crazy spirograph thing and get that out of the way. Then see how much variety you can get from the turtle.{bigger}

### Challenge: Animal Face
Using turtle graphics, create an **intricate** portrait of an animal. Begin by choosing an animal. Look at photo references of your animal and note interesting details, textures, patterns, and features. How can you translate those details into your sketch? Create your sketch primarily using turtle graphics techniques.

/::






## Reference Links

[Mitchel Resnick: The Seeds that Seymour Sowed](https://www.media.mit.edu/posts/the-seeds-that-seymour-sowed/)

[Rough.js](https://roughjs.com/): A tool for creating graphics with a sketchy, hand-drawn aesthetic.

[Turtle for Processing](http://leahbuechley.com/Turtle/): A turtle library for Processing from Leah Buechley.

[iLogo](http://www.cr31.co.uk/logojs/logo.html): Draw with turtles on this web editor, iLogo. 