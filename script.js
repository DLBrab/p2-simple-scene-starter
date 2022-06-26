/* exported setup, draw */
let seed = 12345;

const iceMidColor = "#0e3743";
const iceDarkColor = "#082c38"
const iceLightColor = "#6e91a1";
const rad = 100

function setup() {
  createCanvas(400, 800);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background(30);

  noStroke();
  
  distanceBetweenSpotsX = 20 + random() * 20;
  distanceBetweenSpotsY = 10 + random() * 20;
  


  offsetX = (mouseX - (width / 3)) / 10 // Creates mouse responsiveness in generation
  offsetY = -mouseY / 20 // Creates mouse responsiveness in generation

  if (offsetY > 0) offsetY = 0

  for (i = 0; i < height; i = i + distanceBetweenSpotsY) {
    
    for (j = width; j > 0; j = j - distanceBetweenSpotsX) {
      distanceBetweenSpotsX = 20 + random() * 60
      distanceBetweenSpotsY = random() * 10 - 10
      radYTweak = 0.5 + random();
      fill (iceLightColor)
      ellipse(j - offsetX / 3,i - offsetY / 3 + distanceBetweenSpotsY,rad - 2,(rad - 2) * radYTweak)
      fill (iceMidColor)
      ellipse(j - offsetX / 2,i - offsetY / 2 + distanceBetweenSpotsY,rad - 1,(rad - 1) * radYTweak)
      fill (iceDarkColor)
      ellipse(j - offsetX,i - offsetY + distanceBetweenSpotsY,rad,rad * radYTweak)
    }
    if (i - distanceBetweenSpotsY < 0) {
      for (j = width; j > 0; j = j - distanceBetweenSpotsX) {
        distanceBetweenSpotsX = 20 + random() * 60;
        distanceBetweenSpotsY = random() * 10 - 10
        radYTweak = 1 + random();
        fill (iceLightColor)
        ellipse(j - offsetX / 3,i - offsetY / 3 + distanceBetweenSpotsY,rad - 2,(rad - 2) * radYTweak)
        fill (iceMidColor)
        ellipse(j - offsetX / 2,i - offsetY / 2 + distanceBetweenSpotsY,rad - 1,(rad - 1) * radYTweak)
        fill (iceDarkColor)
        ellipse(j - offsetX,i - offsetY + distanceBetweenSpotsY,rad,rad * radYTweak)
      }
    }
    distanceBetweenSpotsY = 10 + random() * 60;
  }
}