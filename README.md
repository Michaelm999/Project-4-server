# QuestionThis

QuestionThis is the latest question and answer application. On this application, people are able to post questions, edit questions, delete questions, and most importantly, answer questions.
There is no judgment here: only users in the pursuit of knowledge.

Here is the link to our [app]

--

# Technologies Used

This app was made out of HTML, React.js, Express, and CSS.

--

# General Approach

My approach was to start with the user login and build out from there. I used a json web token for authentication as well. After that, I built up the Questions model, controller and routes. With these elements set up, It became possible for users to post questions, delete questions, view details on individual questions, like who posted it and what exactly the question is about, and finally to edit the content of questions. And finally, I built in a way for individuals to give answers to individual questions.

For a more detailed view of the work, here is my [Trello](https://trello.com/b/oqc04sL4/project-4) Board.

--
# Unsolved Problems
The biggest hurdles we had to overcome were importing new technology onto the app. In particular, adding the ability to login to Facebook proved to be difficult, and took a considerable amount of time to get working flawlessly. In addition, we had some struggles with editing, updating and deleting comments that took some time to overcome.

--

# ScreenShots

## Opening Page

![wireframe]

## Login Page

![wireframe]

## Sign In Page

![wireframe]

## Question Page

![wireframe]
--

# ERD

![erd]


--
# Installation Instructions

To install this app you must run:

git clone

npm install

mongod (on another window of the terminal)

nodemon

And then visit localhost 3000
