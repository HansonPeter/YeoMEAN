YeoMEAN GPA Calculator
======================

YeoMEAN is a Yeoman based, generator-angular-fullstack project created by Brian. This project includes quite a bit of automatically generated structure and template files. For this lab, your main goal is to build a GPA calculator that stores courses in a Mongo database and displays the overall GPA. You will want to spend some time browsing around the project with your partner once you fork the project and get the dependencies all set up. Good news! The project inculdes a couple tests to show you examples of ways to test your project.

Jacob Opdahl, Peter Hanson, Emma Sax
Lab 5

## Answers to Questions:
What are some of the dependencies of the project (i.e. which libraries does it depend on)? Hint: dependencies are in .json files. Look up four libraries and briefly explain what they each do.

* grunt-mocha-test: A grunt task for running server side mocha tests.
  
* karma-firefox-launcher: A launcher for firefox so applications will open in Firefox.
  
* karma-jade-preprocessor: Preprocessor to compile Handlebars on the fly. Handlebars provide the power to let semantic templates effectively be built with no frustration.
  
* grunt-angular-templates: Grunt build task to put together and register AngularJS templates.

What is the structure of the project? What is the purpose of each folder?

* Client is where the front-end material exists. All the HTML files, JS files, CSS files, etc are in the app folder underneath the client folder; this is where the bulk of our work was done. Within app we see three folders, gpacalc, main, umm. Umm and main is Brian's work. Gpacalc is the folder where we put our lab. These all represent different pages on the website. Bower-components is where all of the angular functionality comes from. Components holds the modal and navigation bar; the navigation bar is present on the top of all of the pages, and we added our page to it. It appears that node_modules holds all of the dependencies talked about above. Server is the back-end portion of our work. Within server is the folder api where we stored our virtual databases. Within that we have the folder course which is the database we used for our lab.

What are models? Where are they located? What does the current model describe?

* Models are how we define how we want our structure of the courses to work. We define these through the schema, which controls the organization of our database. Our model/schema is located in server/api/course/course.model.js. Our current model is an object which contains the course name, grade, gradePoints, and credits.

What are views? Where are they located? What is a layout? What is a partial? Identify places where a layout renders partials.

* Views are formatting for how the page will look. The views for our page are located in server/views/404.html and in our html files in the client side. Layout is how each specific page is organized. Partials are the segments that are pieces of the webpage that will apply to all webpages. Examples are the title header or the navigation bar; it's the default part of a new page. The folder client/components is where we store all of our partials. They include the modal and the navigation bar. We then also have to reference them in our specific html files.

Schemas describe mongodb database schemas. What schema does your project have? What gets stored in the database?

*Schemas are the database controllers which describe the organization and layout of the database. They define the shape of documents in the database. Our schema uses a array of objects with the course name, grade, gradePoints, and credits.

What are routes? Open the route. Explain how each type of request gets processed. How does the resulting page change? How does the data in the database change?

* Routes are the methods that give the information to the client which presents it on the webpage. The routes that we used mostly boil down to adding and removing data from the database. The data being added to the database has a query being sent; the query is either approved and the data is stored or the query is denied and the data is not stored. On a pull the query is sent and upon approval the data is sent to the page from the server. The page then displays the data. The data in the database does not leave the database when the data is called unless a deletion query is called.

Explain how the result GPA result is calculated and how it gets rendered on the page.

* Upon adding a class to the database, the gradePoints is automatically calculated through a switch function. Then the objects in the database are pulled to the local array. Then the HTML file reads the array our function calculateGPA is called through two-way data binding from the HTML page. 

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
