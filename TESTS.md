# TWUFO | Testing

## Introduction



## System Based Testing
### Jasmine Testing
For this project Jasmine has been used for testing the result of the code. However, Jasmine should have been used as a Test-Driven Development from the start of this project.  
Due to my basic knowledge of JavaScript, and Jasmine in general, this was unfortunately not possible.

#### Button Test
- To execute the test in twufo-jasmine-testing.html the JQuery 'document.ready' function in game.js needs to be temporarily removed
- Jasmine testing has been carried out specifically for buttons
- The results have all passed and can be found below:
![alt text][result]

[result]: https://raw.githubusercontent.com/MatthewYong/twufo/master/assets/images/readme-images/image-jasmine-results.JPG


## Manual Testing
The following test scenarios have been carried out:

### Navigation Testing
#### Access and leaving the game page
1. On the landing page click on **PLAY**    
2. Verified that this will open the game page
3. Click on the arrow button
4. Verified that the page will return to the index page

#### Access and leaving the instructions page
1. Go to the landing page click on **INSTRUCTIONS** 
2. Verified that this will open the instructions page
3. Click on the 'X' icon located at the top right corner of the window
4. Verified that the page will return to the index page

#### Access and leaving the contact page
1. Go to the landing page click on **CONTACT** 
2. Verified that this will open the contact page
3. Click on the 'X' icon located at the top right corner of the window
4. Verified that the page will return to the index page

### Contact Form Testing
#### Sending a message through contact form
1. Fill in all the rows with the required information
2. Click on send button
3. Verified that an alert message will pop up
4. Verified that sent message has been received

#### Overwriting variable messageForm through argument in function sendEmail
1. Set up a variable in function sendEmail as below:

![alt text][contactform]

[contactform]: https://raw.githubusercontent.com/MatthewYong/twufo/master/assets/images/readme-images/image-contact-messageForm.JPG
2. Go to contact form and fill in the different details than the variable in step 1
3. Verified that sent message has been received and that text has been overwritten

### Game Play Testing
#### Waiting for player's turn
1. Click on Start button to start the game
2. While the computer is flashing the icons try and click any other icons
3. Verified that nothing will happen until the computer has finished its sequence

#### Waiting for icon's rotation
1. Click on Start button and wait for computer's turn to finish
2. Select an icon and while the icon is rotating click another icon
3. Verified that nothing will happen until the rotation of each icon has finished

#### Error on any player sequence
1. Click on Start button and succesfully play to the third level
2. At level three select a wrong icon on the second try
3. Verified that the game play has stopped while the player array length has not been fully pushed


### Browser and Mobile Devices
All the test scenarios have been carried out in the browsers and mobile devices as listed below. No problems were found regarding the responsiveness, overflow and the functionality.

#### Browser Testing
- Google Chrome - version 83.0.4103.116 (64-bit)
- Mozilla Firefox - version 78.0.2 (64-bit)
- Microsoft Edge - version 83.0.478.61 (64-bit)
- Internet Explorer - version 11.719.18362.0

#### Mobile Device Testing through Chrome DevTools
- Moto G4 
- Galaxy S5
- iPhone 5/SE/6/7/8/Plus
- iPad (Pro)


## Key Issues and Code Validation
### W3C Markup Validator
- No errors or warnings were found on index.html, game.html, instructions.html and contact.html

### W3C CSS Validator
- No errors or warnings were found on index.css, game.css, instructions.css and contact.css
- Errors and warnings that were found are related to Bootstrap and can be ignored

### JSHint Validator
- No errors or warnings were found on index.css, about.css and gallery.css
- Errors and warnings that were found are related to Bootstrap and can be ignored

### Browser and mobile testing
- No issues were found on Google Chrome, Mozilla Firefox, Microsoft Edge and Internet Explorer

- No issues were found on any mobile devices