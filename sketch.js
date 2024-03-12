

// // -----------------------------ORIGINAL CODE------------------------------
// let video;
// // let capture;
// // let question1;
// // let question1Correct;
// // let question1Edu;
// let playing = false;
// let isDone = false;
// let index = 0;
// let gameQuestions;
// let done = false;
// let question1Dict = {};
// let question2Dict = {};
// let question3Dict = {};
// let question4Dict = {};
// let question5Dict = {};
// let question6Dict = {};
// let question7Dict = {};
// let question8Dict = {};
// let question9Dict = {};
// let question10Dict = {};
// let Q1_1;
// let Q1_2;
// let Q2_1;
// let Q2_2;
// let Q3_1;
// let Q3_2;
// let Q4_1;
// let Q4_2;
// let Q5_1;
// let Q5_2;
// let Q6_1;
// let Q6_2;
// let Q7_1;
// let Q7_2;
// let Q8_1;
// let Q8_2;
// let Q9_1;
// let Q9_2;
// let Q10_1;
// let Q10_2;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     // video = createVideo('1.mp4');
//     // video.hide();
//     // video.showControls();
//     // video.size(400, 400);
//     video.volume(0);
//     video.play();
//     // capture = createCapture(VIDEO);
//     // capture.hide();

//     Q1_1 = createVideo('1.mp4');
//     Q1_2 = loadImage('Q1_2');
//     video.hide();
//     video.showControls();

//     Q1_1 = createVideo(); // Assume createVideo() is a function to create a video element
//     Q1_2 = loadImage();    // Assume loadImage() is a function to load an image
//     Q2_1 = createVideo();
//     Q2_2 = loadImage();
//     Q3_1 = createVideo();
//     Q3_2 = loadImage();
//     Q4_1 = createVideo();
//     Q4_2 = loadImage();
//     Q5_1 = createVideo();
//     Q5_2 = loadImage();
//     Q6_1 = createVideo();
//     Q6_2 = loadImage();
//     Q7_1 = createVideo();
//     Q7_2 = loadImage();
//     Q8_1 = createVideo();
//     Q8_2 = loadImage();
//     Q9_1 = createVideo();
//     Q9_2 = loadImage();
//     Q10_1 = createVideo();
//     Q10_2 = loadImage();

//     // question1Dict["A"] = [loadImage('Q1a.png'),loadImage('Q1a_edu.png')]
//     // question1Dict["B"] = [loadImage('Q1b.png'),loadImage('Q1b_edu.png')]
//     // question1Dict["C"] = [loadImage('Q1c.png'),loadImage('Q1c_edu.png')]
//     // question2Dict["A"] = [loadImage('Q2a.png'),loadImage('Q2a_edu.png')]
//     // question2Dict["B"] = [loadImage('Q2b.png'),loadImage('Q2b_edu.png')]
//     // question2Dict["C"] = [loadImage('Q2c.png'),loadImage('Q2c_edu.png')]

//     // Initialize and assign values for question1Dict
//     // let question1Dict = {};
//     question1Dict["A"] = [loadImage('Q1a.png'), loadImage('Q1a_edu.png')];
//     question1Dict["B"] = [loadImage('Q1b.png'), loadImage('Q1b_edu.png')];
//     question1Dict["C"] = [loadImage('Q1c.png'), loadImage('Q1c_edu.png')];

//     // Initialize and assign values for question2Dict
//     // let question2Dict = {};
//     question2Dict["A"] = [loadImage('Q2a.png'), loadImage('Q2a_edu.png')];
//     question2Dict["B"] = [loadImage('Q2b.png'), loadImage('Q2b_edu.png')];
//     question2Dict["C"] = [loadImage('Q2c.png'), loadImage('Q2c_edu.png')];

//     // Similarly, initialize and assign values for question3Dict to question10Dict
//     let question3Dict = {};
//     question3Dict["A"] = [loadImage('Q3a.png'), loadImage('Q3a_edu.png')];
//     question3Dict["B"] = [loadImage('Q3b.png'), loadImage('Q3b_edu.png')];
//     question3Dict["C"] = [loadImage('Q3c.png'), loadImage('Q3c_edu.png')];

//     // let question4Dict = {};
//     question4Dict["A"] = [loadImage('Q4a.png'), loadImage('Q4a_edu.png')];
//     question4Dict["B"] = [loadImage('Q4b.png'), loadImage('Q4b_edu.png')];
//     question4Dict["C"] = [loadImage('Q4c.png'), loadImage('Q4c_edu.png')];

//     // let question5Dict = {};
//     question5Dict["A"] = [loadImage('Q5a.png'), loadImage('Q5a_edu.png')];
//     question5Dict["B"] = [loadImage('Q5b.png'), loadImage('Q5b_edu.png')];
//     question5Dict["C"] = [loadImage('Q5c.png'), loadImage('Q5c_edu.png')];

//     // let question6Dict = {};
//     question6Dict["A"] = [loadImage('Q6a.png'), loadImage('Q6a_edu.png')];
//     question6Dict["B"] = [loadImage('Q6b.png'), loadImage('Q6b_edu.png')];
//     question6Dict["C"] = [loadImage('Q6c.png'), loadImage('Q6c_edu.png')];

//     // let question7Dict = {};
//     question7Dict["A"] = [loadImage('Q7a.png'), loadImage('Q7a_edu.png')];
//     question7Dict["B"] = [loadImage('Q7b.png'), loadImage('Q7b_edu.png')];
//     question7Dict["C"] = [loadImage('Q7c.png'), loadImage('Q7c_edu.png')];

//     // let question8Dict = {};
//     question8Dict["A"] = [loadImage('Q8a.png'), loadImage('Q8a_edu.png')];
//     question8Dict["B"] = [loadImage('Q8b.png'), loadImage('Q8b_edu.png')];
//     question8Dict["C"] = [loadImage('Q8c.png'), loadImage('Q8c_edu.png')];

//     // let question9Dict = {};
//     question9Dict["A"] = [loadImage('Q9a.png'), loadImage('Q9a_edu.png')];
//     question9Dict["B"] = [loadImage('Q9b.png'), loadImage('Q9b_edu.png')];
//     question9Dict["C"] = [loadImage('Q9c.png'), loadImage('Q9c_edu.png')];

//     // let question10Dict = {};
//     question10Dict["A"] = [loadImage('Q10a.png'), loadImage('Q10a_edu.png')];
//     question10Dict["B"] = [loadImage('Q10b.png'), loadImage('Q10b_edu.png')];
//     question10Dict["C"] = [loadImage('Q10c.png'), loadImage('Q10c_edu.png')];


//     // question1Correct = loadImage('Question1Correct.png');
//     // question1Edu = loadImage('Question1Edu.png');
    
//     gameQuestions = [Q1_1, Q1_2, question1Dict, Q2_1, Q2_2, question2Dict, Q3_1, Q3_2, question3Dict,
//       Q4_1, Q4_2, question4Dict, Q5_1, Q5_2, question5Dict, swap, Q6_1, Q6_2, question6Dict, Q7_1, Q7_2, question7Dict,
//       Q8_1, Q8_2, question8Dict, Q9_1, Q9_2, question9Dict, Q10_1, Q10_2, question10Dict];
//     // gameQuestions = [question1, question1Correct, question1Edu];
//     video.onended(() => {
//       isDone = true;
//     });
//     // video.loop();
//   }
  
//   function draw() {
//     background(200);
//     image(video, 0, 0, width, height);
//     // image(capture, 0, 0, width /10 , height /5 );
//     if (done) {
//       done = !done;

//     }
//     if (keyIsDown(32)){
//       video.play();
//     } else {
//       video.pause();
//     }

//     if (isDone) {
//       image(gameQuestions[index], 0, 0, width, height);
//       // image(capture, 0, 0, width /10 , height /5 );
//     }
//   }

//   // function mousePressed() {
//   //   if(playing || isDone === true) {
//   //       video.pause();
//   //   }
//   //   else {
//   //       video.play();
//   //   }
//   //   playing = !playing;
//   // }

//   function keyPressed() {
//     if (keyCode === UP_ARROW) {
//       secltion = "A";
//       index++;
//       done = true;

//     } else if (keyCode === DOWN_ARROW) {
//       selection = "B";
//       index += 2;
//       done = true;
//     } else if (keyCode === LEFT_ARROW) {
//       secltion = "C";
//     } else if (keyCode === 32 && isDone) { // Check if spacebar is pressed and image is shown
//       isDone = false; // Hide the image
//       video.play(); // Resume playing the video
//     }
//   }





let questionSets = []; // This will hold all our QuestionSet instances
let index = 0; // To keep track of the current question set
let currentQuestionSet; // The current question set being displayed
let displaySpecialImage = false; 
let specialImagesPaths = 'assets/congratsAt10.png';
let specialImage;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // frameRate(30); // Adjust as necessary

    // Initialize question sets here with paths as placeholders
    // questionSets.push(new QuestionSet('assets/Q1_1.mp4', 'assets/Q1_2.png', {
    //     'A': ['images/Q1a_1.png', 'images/Q1a_2.png'],
    //     'B': ['images/Q1b_1.png', 'images/Q1b_2.png'],
    //     'C': ['images/Q1c_1.png', 'images/Q1c_2.png']
    // }));
    // Repeat the above push for Q2 to Q10 with respective assets


  questionSets.push(new QuestionSet('assets/Q1_1.mp4', 'assets/Q1_2.png', {
    'A': ['images/Q1a_1.png', 'images/Q1a_2.png'],
    'B': ['images/Q1b_1.png', 'images/Q1b_2.png'],
    'C': ['images/Q1c_1.png', 'images/Q1c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q2_1.mp4', 'assets/Q2_2.png', {
    'A': ['images/Q2a_1.png', 'images/Q2a_2.png'],
    'B': ['images/Q2b_1.png', 'images/Q2b_2.png'],
    'C': ['images/Q2c_1.png', 'images/Q2c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q3_1.mp4', 'assets/Q3_2.png', {
    'A': ['images/Q3a_1.png', 'images/Q3a_2.png'],
    'B': ['images/Q3b_1.png', 'images/Q3b_2.png'],
    'C': ['images/Q3c_1.png', 'images/Q3c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q4_1.mp4', 'assets/Q4_2.png', {
    'A': ['images/Q4a_1.png', 'images/Q4a_2.png'],
    'B': ['images/Q4b_1.png', 'images/Q4b_2.png'],
    'C': ['images/Q4c_1.png', 'images/Q4c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q5_1.mp4', 'assets/Q5_2.png', {
    'A': ['images/Q5a_1.png', 'images/Q5a_2.png'],
    'B': ['images/Q5b_1.png', 'images/Q5b_2.png'],
    'C': ['images/Q5c_1.png', 'images/Q5c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q6_1.mp4', 'assets/Q6_2.png', {
    'A': ['images/Q6a_1.png', 'images/Q6a_2.png'],
    'B': ['images/Q6b_1.png', 'images/Q6b_2.png'],
    'C': ['images/Q6c_1.png', 'images/Q6c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q7_1.mp4', 'assets/Q7_2.png', {
    'A': ['images/Q7a_1.png', 'images/Q7a_2.png'],
    'B': ['images/Q7b_1.png', 'images/Q7b_2.png'],
    'C': ['images/Q7c_1.png', 'images/Q7c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q8_1.mp4', 'assets/Q8_2.png', {
    'A': ['images/Q8a_1.png', 'images/Q8a_2.png'],
    'B': ['images/Q8b_1.png', 'images/Q8b_2.png'],
    'C': ['images/Q8c_1.png', 'images/Q8c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q9_1.mp4', 'assets/Q9_2.png', {
    'A': ['images/Q9a_1.png', 'images/Q9a_2.png'],
    'B': ['images/Q9b_1.png', 'images/Q9b_2.png'],
    'C': ['images/Q9c_1.png', 'images/Q9c_2.png'],
    goToNextQuestionSet
  }));
  questionSets.push(new QuestionSet('assets/Q10_1.mp4', 'assets/Q10_2.png', {
    'A': ['images/Q10a_1.png', 'images/Q10a_2.png'],
    'B': ['images/Q10b_1.png', 'images/Q10b_2.png'],
    'C': ['images/Q10c_1.png', 'images/Q10c_2.png'],
    goToNextQuestionSet
  }));

  questionSets.push(specialImage);

    // Load the first question set if available
  if (questionSets.length > 0) {
      currentQuestionSet = questionSets[0];
      currentQuestionSet.load();
  }
      // Listen for key releases globally
  window.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && event.target === document.body) {
        event.preventDefault(); // Prevent the default action (scroll / page down)
        currentQuestionSet.playVideo();
    }
  });

  window.addEventListener('keyup', function(event) {
      if (event.code === 'Space') {
          currentQuestionSet.pauseVideo();
      }
  });
  
  specialImage = loadImage(specialImagesPaths);

}

// function goToNextQuestionSet() {
//   // if (index === 4 || index === 9) { // Check for special cases
//   //   displaySpecialImage = true;
//  // Load the corresponding special image
//   //   index++;
//   // } else {
//     index += 1;
//     if (index < questionSets.length) {
//       currentQuestionSet = questionSets[index];
//       currentQuestionSet.load();
//       // Reset flags or conditions as necessary
//       currentQuestionSet.onLastAnswer = false;
//       // Optionally start the video automatically if that's desired
//       // currentQuestionSet.video.play();
//       currentQuestionSet.isPlaying = true;
//     } else {
//       console.log("No more question sets.");
//       // Handle the end of question sets, if necessary
//     }
//   // }
// }
function goToNextQuestionSet() {
  index += 1;
  if (index < questionSets.length) {
      currentQuestionSet = questionSets[index];
      currentQuestionSet.load();
      currentQuestionSet.transitionInitiated = false; // Reset for the new question set
  } else {
      console.log("No more question sets.");
      // Handle the end of question sets, if necessary
  }
}


function draw() {
  background(200);

  if (keyCode === 32 && index === 10) {
    image(specialImage, 0, 0, width, height);
  }

  if (currentQuestionSet) {
      currentQuestionSet.display();
  }

  if (displaySpecialImage && specialImage) {
      image(specialImage, 0, 0, width, height); // Adjust dimensions as needed
  } else if (currentQuestionSet) {
      currentQuestionSet.display();
  }
}

// function keyPressed() {
//   if (keyCode === 32) { // Spacebar code
//     if (currentQuestionSet && currentQuestionSet.onLastAnswer) {
//         currentQuestionSet.checkForNextSet(); // Check if it's time to move to the next set
//     }
//   }
//   if (displaySpecialImage && keyCode === UP_ARROW) {
//     displaySpecialImage = false; // Turn off special image display
//     index++; // Increment to move to the next question set
//     if (index < questionSets.length) {
//       currentQuestionSet = questionSets[index];
//       currentQuestionSet.load(); // Load the next question set
//     } else {
//       console.log("No more question sets."); // Or handle the end of the question sets
//     }
//   } else if (currentQuestionSet) {
//     let selection;
//     if (keyCode === UP_ARROW) {
//         selection = 'A';
//     } else if (keyCode === DOWN_ARROW) {
//         selection = 'B';
//     } else if (keyCode === LEFT_ARROW) {
//         selection = 'C';
//     }

//     if (selection) {
//         currentQuestionSet.showAnswer(selection);
//     }
//   }
// }

function keyPressed() {
  // Handle Spacebar Press for Moving to Next Question Set or Handling Special Image Display
  if (keyCode === 32) { // Spacebar code
    if (currentQuestionSet && currentQuestionSet.onLastAnswer) {
      // If the last answer image has been shown, move to the next question set
      goToNextQuestionSet(); // Directly call goToNextQuestionSet function
    } else if (displaySpecialImage) {
      // If a special image is being displayed, turn off and move to next question set
      displaySpecialImage = false;
      goToNextQuestionSet(); // Ensuring to handle moving on from special image display
    }
    return; // Exit the function to avoid processing other keys when spacebar is pressed
  }

  // Below this point, handle other key presses (e.g., UP_ARROW, DOWN_ARROW, LEFT_ARROW) for answer selection
  if (!displaySpecialImage && currentQuestionSet) { // Ensure not to process if a special image is displayed
    let selection = null;
    switch(keyCode) {
      case UP_ARROW:
        selection = 'A';
        break;                                        
      case DOWN_ARROW:
        selection = 'B';
        break;
      case LEFT_ARROW:
        selection = 'C';
        break;
    }

    if (selection) {
      currentQuestionSet.showAnswer(selection);
    }
  }
}

function keyReleased() {
  if (currentQuestionSet) {
      // Check if the spacebar was released
      if (keyCode === 32) { // Spacebar code
          currentQuestionSet.toggleVideoPlaybackOnRelease();
      }
  }
}

class QuestionSet {
  constructor(videoPath, imagePath, answersDict, onVideoEndCallback) {
      this.videoPath = videoPath;
      this.imagePath = imagePath;
      this.answersDict = answersDict;
      this.video = null;
      this.image = null;
      this.answerImages = null;
      this.answerImageIndex = 0;
      this.state = 'video'; // Possible states: 'video', 'image', 'answers'
      this.answerDisplayTime = 2000; // Time to display each answer image in milliseconds
      this.lastAnswerChange = 0; // Last time the answer image was changed
      this.isPlaying = false; // Track if the video is playing
      this.onVideoEndCallback = onVideoEndCallback; 
      this.onLastAnswer = false;
      this.displayingFinalAnswer = false; // flag to indicate we are displaying the final answer
      this.autoTransitionDelay = 7000;
  }

  playVideo() {
    if (this.state === 'video' && !this.isPlaying) {
        this.video.play();
        this.isPlaying = true;
    }
}

  pauseVideo() {
      if (this.state === 'video' && this.isPlaying) {
          this.video.pause();
          this.isPlaying = false;
      }
  }

  // load() {
  //     this.video = createVideo(this.videoPath, () => {
  //         this.video.hide(); // Hide it initially
  //         this.video.onended(() => {
  //             this.state = 'image'; // Change to image when video ends
  //             this.isPlaying = false; // Update playback state
  //         });
  //     });
  //     this.video.onended(() => {
  //       this.state = 'image'; // Existing code
  //       this.isPlaying = false; // Existing code
  //       this.onVideoEndCallback(); // Notify that the video ended
  //   });

  //     this.image = loadImage(this.imagePath);
  // }
  load() {
    this.video = createVideo(this.videoPath, () => {
        this.video.hide(); // Hide it initially
        this.video.onended(() => {
            this.state = 'image'; // Change to image when video ends
            this.isPlaying = false; // Update playback state
            setTimeout(() => {
              this.onVideoEndCallback(); // Automatically move to the next question after a delay
            }, this.autoTransitionDelay); // Use the delay defined in the constructor
        });
    });

    this.image = loadImage(this.imagePath);
}

  // Adjustments for video playback state
  toggleVideoPlaybackOnRelease() {
    if (this.state === 'video') {
        if (!this.isPlaying) {
            this.video.play();
            this.isPlaying = true;
        } else {
            this.video.pause();
            this.isPlaying = false;
        }
    }
  }

  display() {
      switch (this.state) {
          case 'video':
              image(this.video, 0, 0, width, height);
              break;
          case 'image':
              image(this.image, 0, 0, width, height);
              break;
          case 'answers':
              if (millis() - this.lastAnswerChange > this.answerDisplayTime) {
                  this.answerImageIndex = (this.answerImageIndex + 1) % this.answerImages.length;
                  this.image = loadImage(this.answerImages[this.answerImageIndex]);
                  this.lastAnswerChange = millis();

                  // If we've cycled through all answer images, go back to the question image
                  if (this.answerImageIndex === 1) {
                      this.state = 'image';
                  }
                  if (!this.transitionInitiated) {
                    this.initiateAutoTransition();
                  } 
              }                                                    
              image(this.image, 0, 0, width, height);
              break;
      }
  }
  // display() {
  //   switch (this.state) {
  //       case 'video':
  //           image(this.video, 0, 0, width, height);
  //           break;
  //       case 'image':
  //           image(this.image, 0, 0, width, height);
  //           // Start the delay for the automatic transition right after the image is shown
  //           if (!this.transitionInitiated) {
  //               this.initiateAutoTransition();
  //           }
  //           break;
  //       case 'answers':
  //           image(this.image, 0, 0, width, height);
  //           // Also start the delay here if you want the auto-transition after showing an answer
  //           if (!this.transitionInitiated) {
  //               this.initiateAutoTransition();
  //           }
  //           break;
  //   }
  // }
  initiateAutoTransition() {
    this.transitionInitiated = true; // Prevent multiple timers from starting
    setTimeout(() => {
        goToNextQuestionSet(); // Assuming this is the global function to move to the next question
    }, 10000); // 10 seconds delay
  }

  // Method to move to the next question set if the last answer was shown
  checkForNextSet() {
    if (this.onLastAnswer) {
        // Logic to move to the next set or invoke the callback to do so
        this.onVideoEndCallback(); // Assuming this triggers the next question set
    }
  }

  // showAnswer(key) {
  //     if (this.state === 'image' && this.answersDict[key]) {
  //         this.answerImages = this.answersDict[key];
  //         this.answerImageIndex = 0;
  //         this.image = loadImage(this.answerImages[this.answerImageIndex]);
  //         this.state = 'answers';
  //         this.lastAnswerChange = millis();
  //         if (this.answerImageIndex === this.answersDict[key].length - 1) {
  //           this.onLastAnswer = true; // The last answer image is now being displayed
  //         } else {
  //           this.onLastAnswer = false;
  //       }
  //     }
  // }

  showAnswer(key) {
    if (this.state === 'image' && this.answersDict[key]) {
        this.answerImages = this.answersDict[key];
        this.answerImageIndex = 0; // Start with the first answer image
        this.image = loadImage(this.answerImages[this.answerImageIndex]);
        this.state = 'answers';
        this.lastAnswerChange = millis();
        this.onLastAnswer = false; // Reset this flag every time
    }
  } 

//   toggleVideoPlaybackOnRelease() {
//     if (this.state === 'video') {
//         if (!this.video.isPlaying()) {
//             this.video.play();
//         } else {
//             this.video.pause();
//         }
//     }
// }
}

