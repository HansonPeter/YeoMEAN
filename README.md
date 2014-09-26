YeoMEAN GPA Calculator
======================

YeoMEAN is a Yeoman based, generator-angular-fullstack project created by Brian. This project includes quite a bit of automatically generated structure and template files. For this lab, your main goal is to build a GPA calculator that stores courses in a Mongo database and displays the overall GPA. You will want to spend some time browsing around the project with your partner once you fork the project and get the dependencies all set up. Good news! The project inculdes a couple tests to show you examples of ways to test your project.

Jacob Opdahl, Peter Hanson, Emma Sax
Lab 5

## Answers to Questions:
What are some of the dependencies of the project (i.e. which libraries does it depend on)? Hint: dependencies are in .json files. Look up four libraries and briefly explain what they each do.

What is the structure of the project? What is the purpose of each folder?

What are models? Where are they located? What does the current model describe?

What are views? Where are they located? What is a layout? What is a partial? Identify places where a layout renders partials.

schemas describe mongodb database schemas. What schema does your project have? What gets stored in the database?

What are routes? Open the route. Explain how each type of request gets processed. How does the resulting page change? How does the data in the database change?

Explain how the result GPA result is calculated and how it gets rendered on the page.

## Dependencies to run:

You will need to have some global dependencies installed. These should be installed, if not, have Brian run these as root for you:

```sh
$ npm install -g yo && npm install -g grunt && npm install -g generator-angular-fullstack
```

To use yo generators, see [https://github.com/DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

For example, running ```yo angular-fullstack:route testing``` from a terminal will generate a page titled 'testing'.

Use a route to add a new page. This generates an HTML, CSS, controller, javascript file, and test template for the page you want to add. It also links in all of these files for you. Use this to generate the page for your GPA calculator (don't copy your existing files (or if you do, don't ask for help :P)).

Use the endpoint generator to add a new database (similar to Brian's movies database).

## To Develop

Run ```grunt serve``` to start node and run the web application on [http://localhost:9000](http://localhost:9000). (The page will be opened automatically by grunt)

To run tests, run ```grunt test```.

## To Setup Mongo Plugin in WebStorm

* Go to File > Settings
* Then navigate to Plugins
* Search for "Mongo" and install "Mongo PLugin" (this will require WebStorm to be restarted)
* Once WebStorm is re-opened, there will be a Mongo Explorer tab on the righthand side of the window.
* Open the tab and click the gear and wrench icon (when hovered over, it says "Mongo Settings").
* Enter in "/usr/bin/mongo" to the path of the Mongo executable and click test.
* In the same settings menu, click the green "+" and add the database "yeoman-dev" and label it the same.

To use the plugin, open the Mongo Explorer tab and right click on the yeomean-dev server and choose "refresh this server". You can then double click on your dabatase and view its contents.

Play around with Mongo and this plugin, it's super helpful!

## What you should aim to accomplish

Re-implement the GPA calculator, but this time add the following features:
* Store the student's grades in the Mongo database.
* Display the course titles along with the number of credits and earned grades as an editable form. When the form is edited, the GPA gets recalculated.
* Add a button to add more courses. (This was not required last time, though I realize many of you did add such a button.)
* Edit the CSS so that the page looks different from the initial project you forked.

Along the way, *add at least two tests*. This week, I think you should be able to get some tests working. Use the example tests in the /client/app/umm/umm.controller.spec.js file as a guide. You should use Mongoose to create schemas as needed. Whenever you generate a new page, be sure to use the instructions above for adding a new route so that the appropriate things are created for you.

Update your README to include the following documentation that would help someone understand your project:
* What are some of the dependencies of the project (i.e. which libraries does it depend on)? Hint: dependencies are in .json files. Look up four libraries and briefly explain what they each do.
* What is the structure of the project? What is the purpose of each folder?
* What are models? Where are they located? What does the current model describe?
* What are views? Where are they located? What is a layout? What is a partial? Identify places where a layout renders partials.
* schemas describe mongodb database schemas. What schema does your project have? What gets stored in the database?
* What are routes? Open the route. Explain how each type of request gets processed. How does the resulting page change? How does the data in the database change?
* Explain how the result GPA result is calculated and how it gets rendered on the page.
