# Rock, Paper, Scissors, Lizard & Spock

The Rock, Paper, Scissors, Lizard & Spock page displays a game that demonstrates JavaScript working in a real life format. Users can play against the computer and compete 1v1 to see who comes out victorious. 

The site will be targeted towards people who love The Big Bang Theory (thats where the game concept came from) and want to play it for real but also anyone else who might enjoy a twist on the traditonal game. Rock, Paper, Scissors, Lizard & Spock is a fully responsive JavaScript game that will allow users to pick from all the objects and try to beat the computer.

The goals for the design of the page were for the layout to be easily accessible and intuitive for new users. The information and contents should all be well structured and presented for easy use for the user. The interactive elements should be created in a way with a clear purpose and functionality. The game should meet the best practices of user experience design, accessibility and responsivity.

The live link can be found here - [Rock, Paper, Scissors, Lizard & Spock](https://fredboys.github.io/Rock-Paper-Scissors-Lizard-Spock/)

![Responsive display screen](/readme-assets/screenshot-rpsls.png)

## Features
---
### Header
* Featured at the top of the page, the Rock, Paper, Scissors, Lizard & Spock heading is easy to see for the user. Its in a font that is in good contrast with the background.
* The user will be able to clearly identify the game they will be playing.

![Header of the page](/readme-assets/rpsls-header.png)

### Rules modal
* Featured in the header of the page, the rules modal button is seperate and easy to identify for the user. The user will be able to click on the button and view the rules of the game.

![Rules of the game](/readme-assets/rpsls-rules.png)

### Game area
* Weapons selection
    * This section will allow the user to play the game. Here the user selects what weapon they would like to use and try to beat the computer with.
    * The user will be able to easily see icons for Rock, Paper, Scissors, Lizard & Spock and make their choice to play the game.
    * The weapon options includes a clear instruction and then a choice of options to choose from to play with. The option are interactive buttons the user can click.

![Weapon selection icons](/readme-assets/rpsls-weapons.png)

* Selected weapons results
    * This section will show the user what both they and the computer have selected. 
    * The icon will change from the default question mark icon to whichever icon was selected.
    * The JavaScript code chooses a random option for the computer player and then determines if the player won.

![The weapons selected](/readme-assets/rpsls-weapons-select.png)

* Winner display message
    * This feature provides the user a display of text of who won each game.

![Winner pop up message](/readme-assets/rpsls-message.png)

* Score area
    * This section will allow the user to see exactly what score both the player and the computer are on.

![Score area](/readme-assets/rpsls-score.png)

* Reset score
    * This section is a button that will allow the user to reset the scores of the game back to 0.
    * Once the user clicks the button, an alert will pop up displaying a message that the game has reset.

![Reset scores button](/readme-assets/rpsls-reset.png)
![Reset game alert](/readme-assets/rpsls-reset-alert.png)

## Testing
---
* I tested that this page works in different broswers such as; Google Chrome, Safari and Firefox.
* I confim that the game results are always correct.
* I confirm the page is responsive and it all looks good on different standard screen sizes using devtools and testing out on different devices.
* I confirm that the header, game area, rules and message text are all readable and easy to understand.
* I confirm that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![Lighthouse testing](/readme-assets/rpsls-lighthouse.png)

### Bugs 

* There were no bugs when deploying my page to GitHub Pages.

### Validator Testing

* HTML  
    * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)

* CSS 
    * No errors were returned when passing through the offical [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

* JavaScript
    * No errors were returned when passing through [JSHint JavaScript validator](https://jshint.com/)
        * The following metrics were returned :
            * There are 7 functions in this file
            * Function with the largest signature take 2 arguments, while the median is 1
            * Largest function has 12 statements in it, while the median is 4
            * The most complex function has a cyclomatic complexity value of 16 while the median is 2

## Deployment
---
* This site was deployed to GitHub Pages. The steps to deploy are as follows:
    * In GitHub pages , navigate to the Settings tab
    * Down the left hand side menu, navigate to the Pages tab 
    * Select the Main branch and select save
    * The page will automatically refresh and the page link will appear at the top of the GitHub pages
    * When a green tick appears it indicates a successful deployment

## Credits 
---
### Content

* The code to create the rules modal was taken and adapted from [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
* The code to make the weapons selected appear by the user and computer in their respected boxes and adding an event listener to the buttons were taken from [Code Institute's portfolio project scope](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/S) 
* The content for the rules were taken from [The Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

### Media 

* The images for the weapons were taken from [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/) and [Pixabay](https://pixabay.com/)
