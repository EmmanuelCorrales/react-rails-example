# README
DESCRIPTION:
  Demo for using rails with react,rspec and postgresql.

REQUIREMENTS:
  This application uses a postgresql as its database.
  You should have it installed before setting up the app.
  Rails 5

SETTING UP THE PROJECT:
  Run 'bundle install'.
  Setup the project running 'rake db:setup'. This will run the neccessary migrations.
  Run the project with 'rails s'.

TESTING WITH RSPEC:
  Run 'bundle exec rspec'.

INSTRUCTION:
  Once you start running the app, go to localhost:3000 at your browser.
  The page is initially on 'MANAGEMENT MODE' where you can do CRUD operation for the question.
  You can switch to 'QUIZ MODE' if you click the 'Switch to Quiz Mode' button.
  You can go back to 'MANAGEMENT MODE' by clicking the 'Switch to Management Mode' button'
  On Quiz mode you can check all your answers buy clicking the 'Check Answers' button at the bottom of the screen.
  Clicking the button will show if the answer is correct or incorrect.
