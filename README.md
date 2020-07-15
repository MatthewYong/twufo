# TWUFO | A Memory Game
TWUFO is a memory game build to entertain the user and test the developer's knowledge of JavaScript. The theme of the website is 'space', which will be visible in various aspect of the game.  
The website contains an instruction page, a contact form, and the actual memory game. The result of this project is an interactive frontend website. 

![alt text][logo]

[logo]: https://raw.githubusercontent.com/MatthewYong/twufo/master/assets/images/readme-images/image-landing-device.png

## Table of Contents
- [UX](#ux)
  * [Strategy Plane](#strategy-plane)
  * [Scope Plane](#scope-plane)
  * [Structure Plane](#structure-plane)
  * [Skeleton Plane](#skeleton-plane)
  * [Surface Plane](#surface-plane)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Key Issues](#key-issues)
- [Deployment](#deployment)
- [Credits](#credits)
- [Disclaimer](#disclaimer)


## UX
To understand how to develop a game that will attract and entertain the end-user, we need to define the development process of each stage. This can be done by analyzing and breaking down the development process of the project into five planes:


### Strategy Plane
The strategy plane defines the website's objective and the user needs (goals), which can be interpreted as user stories:

#### User Stories
As a **game player** I want to:
1. Enjoy playing the game
2. Read instructions that tells me how to play the game
3. Contact the owner of the website
4. See my high score

As a **developer** I want to:
1. Gain more knowledge on JavaScript
2. Entertain me and the end-user by playing the game
3. Gameplayers to contact me for questions or remarks

### Scope Plane
The scope plane defines the features that are and are not possible to include on the website.  
This will be further in detail explained in the next chapter. A summary of the included and not included features are:

| Features (included) | Future features (not included)|
| :------------- | :---------- |
|1. Landing page with navigation to game, instructions and contact form | 1. Ability to pause the game|
|2. Game page | 2. Ability to replay the computer sequence |
|3. Audio on/off button| 3. Leader board
|4. Instructions | 
|5. Contact form |  

### Structure Plane
The structure plane defines the information architecture and interaction design with the user.  
The following definitions has been used for this website:

- First impression of the website needs to be simple and clear as possible
- No more than two clicks are required for the user to reach a page
- The type of information architecture that will be used is the ‘Hub and Spoke, see below:

![alt text][hubspoke]

[hubspoke]: https://raw.githubusercontent.com/MatthewYong/twufo/master/assets/images/readme-images/image-wireframe-structureplane.JPG


### Skeleton Plane
The skeleton plane defines a basic visual design of the website through, for example, a wireframe.  
The wireframes for this project are made with Balsamiq can be downloaded from the following link:

- [Wireframe - Desktop version](https://github.com/MatthewYong/twufo/raw/master/wireframes/Wireframe%20-%20Desktop.pdf)
- [Wireframe - Tablet version](https://github.com/MatthewYong/twufo/raw/master/wireframes/Wireframe%20-%20Tablet.pdf)
- [Wireframe - Mobile version](https://github.com/MatthewYong/twufo/raw/master/wireframes/Wireframe%20-%20Mobile.pdf)

Below you can find an example of a wireframe of the landing page.

![alt text][wireframe]

[wireframe]: https://raw.githubusercontent.com/MatthewYong/twufo/master/assets/images/readme-images/image-wireframe-skeletonplane.jpg

### Surface Plane
The surface plane is the final plane in the design process and defines the appearance of the website. This website needs to encourage users to play the game. The website has a 'space' theme and must give the user a futuristic experience.  
The following design style has been used:

| Design Style | Design Choice|
| :------------- | :---------- |
Font: Orbitron | A clear font to give the website a futuristic look|
Text color: #00FF7F | A green bright 'alienish' colour |
Background: Earth from Space | To enhance the space theme |
Contrast ratio: 9.98 | A high ratio to express the visibility of the text (source: contrast-ratio.com)|


## Features
A summary of the features was described in the scope plane. This chapter will explain what the purpose is of each feature and what will be left to implement for the future.

### Existing Features
| Features (included) | Explanation|
| :------------- | :---------- |
|1. Start button | 1. The start button allows users to start the game|
|2. Back button | 2. The back button allows users to return to the landing page|
|3. Audio button | 3. The audio button let users to control the sound of the game|
|4. Game icons | 4. The five game icons allows users to interact with the game|
|5. Instructions | 5. The instructions page allows users to read the instructions of the game|
|6. Contact form | 6. The contact form allow users to contact the owner of the website for questions or remarks|

### Features Left to Implement
| Features (not included) | Explanation|
| :------------- | :---------- |
|1. Ability to pause the game | This feature allows users to return to the main menu or to access the contact form while playing the game|
|2. Ability to replay the computer sequence | This feature allows users to repeat the computer's sequence. This can also be described as an 'easy' mode
|3. Leader board | This feature allows users to compete with other users by keeping track of a high score|


## Technologies Used
The following technologies have been used to achieve this project:

Resources
- [HTML](https://www.w3.org/TR/html52/) is used as the main writing language of this project
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) is used for styling the HTML text
- [JavaScript](https://www.javascript.com/) is used for coding the user interaction, the contact form, and the Jasmine testing framework

Styling
- [FontAwesome](https://fontawesome.com/) is used to improve the visual design of the website and is used for the main icons in the game
- [Contrast-ratio.com](https://contrast-ratio.com/) is used to test the visibility of the text with the background color
- [Google fonts](https://fonts.google.com/) is used for the style the font

Framework & API
- [Bootstrap](https://getbootstrap.com/) is used for its framework. Specifically, for this project: the grid system in the game
- [JQuery](https://jquery.com/) is used to simplify codes
- [Jasmine](https://jasmine.github.io/) is used to test certain codes in game.js
- [Jasmine-JQuery](https://developers.google.com/maps/documentation/javascript/markers) is used for the jasmine frame work to recognise JQuery commands

Images
- [Adobe Photoshop CC 2019](https://www.adobe.com/uk/products/photoshop) is used to crop the images and delete white background
- [Tinyjpg.com](https://tinyjpg.com/) is used to reduce the size of the JPG images
- [Tinypng.com](https://tinypng.com/) is used to reduce the size of the PNG images

Sound
- [Beepbox.co](https://beepbox.co/) is used create sound effect in the game

Wireframe
- [Balsamic](https://balsamiq.com/) is used to draw wireframes for the skeleton plane and making the visual design of the structure plane

Testing
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) is used to test the responsiveness of the website and to debug any problems
- [Jasmine](https://jasmine.github.io/) is used to test certain codes in game.js
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) is used to determine any overflow on the website
- [Validator.w3.org](https://validator.w3.org/) is used to validate the HTML code
- [Jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/validator.html.en) is used to validate the CSS code
- [JSHint](https://jshint.com/) is used to validate the JavaScript code


## Testing
The test procedures and the key issues of the tests are written in the file [TEST.md](https://github.com/MatthewYong/twufo/blob/master/TESTS.md).


## Deployment
### GitHub Pages
To publish the website, the following steps needs to be taken:

1. Open GitHub and go to your site's **'Repositories'**
2. Go to **'Settings'**
3. Scroll down until you see **'GitHub Pages'**
4. Under GitHub pages, click on the dropdown under **'Source'** and select the **'Master Branch'** option
5. A green box should appear with the following message **'Your site is published at https://matthewyong.github.io/twufo/'**

![alt text][deploy]

[deploy]: https://raw.githubusercontent.com/MatthewYong/twufo/master/assets/images/readme-images/image-deployment.JPG

For more information on how to deploy a website on GitHub, please visit [here](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Cloning a Repository 
To make a clone of the website and work locally, the following steps needs to be taken:
1. Go to the main page of the GitHub repository and click on the dropdown menu **'Clone or download'**
2. Copy the URL and go to your local IDE (Integrated Development Environment)
3. In the terminal of your IDE type in **'git clone'** and the paste the URL copied from step 2 
4. Press **Enter** and the clone will be created

## Credits
### Content
- All text in the website is entirely written by myself
- To maintain consistency through all my Code Institute projects, a similar structure for the readme file has been used from my previous project

### Media
- All photos for this project are used from:
    - [Unsplash.com](https://unsplash.com)


### Source of codes
The following codes were inspired or taken from:
- [YouTube](https://www.youtube.com/watch?v=n_ec3eowFLQ&t=2706s): How to start coding a memory game in JavaScript

- [YouTube](https://www.youtube.com/watch?v=xxDqhU-0mek&t=257s): Comparison of Player and Computer sequence. Idea used in file game.js on code line 138

- [Geeksforgeeks](https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/): Adding a delay between flashing icons. Idea used in file game.js on code line 60

- [emailJS](https://www.emailjs.com/docs/sdk/send-form/): For API use in contact form. Code used in file contact.js on code line 11

- [Code Institute](https://courses.codeinstitute.net/): For API use in contact form. Code used in contact.html code line 41

### Acknowledgement
The completion of this project could not have been possible without support and the extensive knowledge of other people. My appreciation goes to:
- Gerard (Gerry) McBride, my mentor, for giving me me tips on how to start with coding a memory game, guidance throughout the project and giving me useful tips to finish a good project
- Tutors from Code Institute, for guiding me through some tough codes in JavaScript
- Code Institute, for the valuable lessons through videos and exercises
- Stack Overflow, for giving me code support 
- Slack community giving me new ideas and code support. Mainly Anna_ci for her tips on how to deploy the website and Paul F_alumni for reviewing my project

## Disclaimer
This website is for educational purposes only. All content and images are illustrative.
