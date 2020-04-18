# hw-02-javascript
A password generator

Description: This assignment was a test of our ability to create and script logic using
the programming language javascript. The HTML/webpage and CSS/style code was created for us,
and we had to write the javascript code enabling a password generator to work.

The password generator prompts the user, after pressing a button, to select the types
of characters to be included in the password and the length of the password, after which
a password with at least on of each character type selected and of matching length is displayed
on the screen. Here are some screen shots of some of the prompts and the result:

Here is an example of one of the character type prompts:
![user being prompted if they would like to include lower case letters](Images/character-prompt-example.JPG)

Here is the user being prompted to enter the length of the password, as a number:
![user being promted to enter number between 8 and 128 to determine password length](Images/password-length-prompt.JPG)

What happens when the user enters invalid data:
![user is presented with an alert that the data entered was invalid](Images/wrong-length-input.JPG)

Finally, the user is rewarded with a password with the proper length, and at least one of every 
type of character chosen:
![a successfully generated password](Images/successful-password.JPG)

Here is a gif of the full process!
![animated gif of the password generation process](Images/animated-password.gif)


To make this work, I needed to create several functions that worked together to accept input, verify
the input, then use the input to create and verify the password before displaying it. Here is some
essential code examples of what was written:

This is the generatePassword function, which is whats being called to create and return the password
to be displayed by the webpage:
![picture of code containing generatePassword function](Images/generatePasswrd-function.JPG)

And here is the code for the function that accepts and checks the users input for
password length:
![code used to accept and verify user input on character length](Images/passwordLengthFinder.JPG)