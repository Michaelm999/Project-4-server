# QuestionThis

QuestionThis is the latest question and answer application on the web. On this application, people are able to post questions, edit questions, delete questions, and most importantly, answer questions.

There is no judgment here: only users in the pursuit of knowledge.

Here is the link to client [end](https://question-this.herokuapp.com/),
and here is a link to the server [end](https://serene-chamber-30424.herokuapp.com/)

--

# Technologies Used

This app was made out of HTML, React.js, Express, MongoDB, Node.js and CSS.

--

# General Approach

My approach was to start with the user login and build out from there. I used a json web token for authentication as well. After that, I built up the Questions model, controller and routes. After that, I created a Questions page, that had a list of all the questions present. I also included the ability to delete questions with a button next to each question. Then, I created a form that renders when a user clicks on a question. This form displays the details of the questions, the name of the user who asked the question, and a form for other users to post their own answers to the questions, which also appear in the form. Finally, I included a button in the form I had just created, which changes the field rendered to a space that allows the title and the text of the question to be edited and updated.

The answer model was made as a child of the question model, allowing it to access the params of the Question model. This made it easier to operate on the backend.

For a more detailed view of my work, as well as my user stories, you can find it here on my  [Trello Board](https://trello.com/b/cIKqkmI2/project-4).

--
# Future Features
There are a few additional features that I am unable to bring into the project as of yet.
One major feature I wish to add pertains to the user's page. While I can show some user information,, and can edit the user's information, I would like to have the user page show a list of questions the user has asked, for reference purposes.

--

# ScreenShots

## Opening Page

![screenshot](images/ScreenShot-FrontPage.png)

## Login Page

![screenshot](images/ScreenShot-LogIn.png)

## Sign In Page

![screenshot](images/ScreenShot-SignUp.png)

## User Page

![screenshot](images/ScreenShot-UserPage.png)

## Question Page

![screenshot](images/ScreenShot-Questions.png)

## Answer Section
![screenshot](images/ScreenShot-AnswerSection.png)

--

# WireFrames

## Welcome Page
![wireframe](images/WelcomePage-wireframe.JPG)

## Login
![wireframe](images/Login-wireframe.JPG)

## SignUp
![wireframe](images/SignUp-wireframe.JPG)

## User Page
![wireframe](images/User-wireframe.JPG)

## Questions
![wireframe](images/QuestionPage-wireframe.JPG)

## Answer Section
![wireframe](images/AnswerSection-wireframe.JPG)

--
# Installation Instructions

-To install this app you must run on the terminal:

-Run git clone on the client repo [here](https://github.com/Michaelm999/Project-4-client)

-Run git clone on the server repo [here](https://github.com/Michaelm999/Project-4-server)

-Run npm install on both repos you have cloned

-Go to the server repo on another window in the terminal, and then run mongod

-Then run nodemon again on the server

-Then open another window in the terminal and go to the client repo.

-Run npm start. The app should run locally.
