# SystemJS-Node-Starter-Template
A simple project template for getting started with SystemJS and ECMAScript 6 syntax in Node.

-----------

Learn ES6: http://babeljs.io/docs/learn-es6/ 

Features
----
* Uses SystemJS for module loading.
* Bundles the Babel transpiler to enable the ES6 features.

Getting Started
----

Please read the "Notes" section for some important points.

Assuming that you already have installed Node.js (and Git, of course).

Clone this repository:

    git clone https://github.com/robertsundstrom/SystemJS-Node-Starter-Template.git
    
Enter the "src"-directory:

    cd "SystemJS-Node-Starter-Template/src"

Install the dependencies:

    npm install

Run the app:

    node main.js

*) For automatic restart while editing your files:

    nodemon main.js
  
The files  
----

* main.js - the entryfile that contains the SystemJS bootstraper.
* app.js - is the real entrypoint for your app (after main.js)
* greeter.js - an ES6 module defining a simple ES6 class called Greeter.

Notes
----
When creating ES6 modules, make sure to add the following line in the top of your module files to make SystemJS detect them as ES6 code:

    "format es6";

If you have ES6 import-statements then this will not be required.

Use the require("...") statement to load Node standard library modules, else they will not be loaded.

Links
----

* SystemJS - https://github.com/systemjs/systemjs
* Babel - http://www.babeljs.io
