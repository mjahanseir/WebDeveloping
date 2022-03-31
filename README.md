# WebDeveloping

 ## node.js
 ### mongoDB
 ## react


- [setup MongoDB (.html)](https://github.com/mjahanseir/WebDeveloping/blob/main/mongoose.md)
- [setup Nodejs (.html)](https://github.com/mjahanseir/WebDeveloping/blob/main/Nodejs.md)
- [setup REST (.html)](https://github.com/mjahanseir/WebDeveloping/blob/main/REST.md)
- [setup REST (.html)](https://github.com/mjahanseir/WebDeveloping/blob/main/REST.md)
- [Node Document (.docx)](https://github.com/mjahanseir/WebDeveloping/raw/main/CWEB602-LO1.%20Introduction%20to%20Nodejs%20and%20REST.docx)
- [React Document (.docx)](https://github.com/mjahanseir/WebDeveloping/blob/main/CWEB602-LO6.%20Introduction%20to%20REACT.docx)
- [Exploring MongoDB (.pdf)](https://github.com/mjahanseir/WebDeveloping/blob/main/Exploring%20MongoDB.pdf)
- [Setting up MongoDB (.pdf)](https://github.com/mjahanseir/WebDeveloping/blob/main/Setting%20up%20MongoDB.pdf)



<hr>


# Node.js

# Node0 - Introduction to Node
One of the defacto standards that has emerged in recent years for web application development is Nodejs. You will see reference to various different frameworks such as React, Angular, Vue and others but all of these are Node-based frameworks. As we will see upcoming, these frameworks are entirely dependent on Node.

What is it?
Nodejs is a javascript run-time environment. Recall that javascript is an interpreted language and requires something to act as the interpreter to execute javascript code. Previously, in CWEB601, we learned how to write javascript that could execute in a web browser. The browser in that case was the runtime environment. Prior to Nodejs, that was the only option and there was no way to execute javascript code on a local machine. With Nodejs installed, we can now execute javascript locally which means we can now build applications which can run locally. In this course, we'll look at building a web application in the form of a locally run web server.


<hr>

# Node1 - Instalation
There are various tools we'll need to develop our web application. The following are required:

Nodejs
An IDE of some kind
Postman
Nodejs can be downloaded from https://nodejs.org/en/download/. It is available for Windows, MacOS or Linux.

There are several IDEs available that support javascript and this is really all you need. Technically, we can simply use a basic text editor but using some form of IDE will make life easier and it will also make it easier to work with GIT with our code as well since most IDEs provide support for version control. The IDE used here will be Visual Studio Code which can be downloaded at no cost from https://code.visualstudio.com/download, also for all three of the above environments.

Postman is a tool that we will need to test our backend before moving on to front end development. Some parts of our web application can be checked easily but much of it cannot be unless we have either a completed front end or a tool that emulates what that front end would do. That is the role that Postman fills. It can be downloaded from https://www.postman.com/downloads/ .

Installing the above software is straightforward in that the install programs can be run by clicking through with just default settings. Note that once complete, you may want to have environment variables set up to point to the installed directories for node. In windows 10 this can be done using the following steps(NOTE: EXERCISE CAUTION HERE AS A MISTAKE CAN CAUSE SERIOUS PROBLEMS FOR YOUR SYSTEM):

1. Open File Explorer and right click on 'This PC' -> select 'Properties'.  
2. Click on the text "Advanced system settings" on the left side. The following dialog will appear. Click the bottom button "Environment Variables..." to open the Environment Variables dialog.
3. Here we will set the Path variable. The upper part of the window allows us to set parameters only for the current user, the lower part for system variables. Setting the Path in the lower part will set it for all users. Find the Path variable and either double-click it or select it and click the 'Edit...' button.
In the resulting dialog, click 'New' and enter the path to where the Node.exe executable is installed. You only need to specify the folder location here. The standard on windows should be something like "C:\Program Files\nodejs\".
4. Once this is done, click OK on each dialog and then close the original System window.

On MacOS, you may not need to do anything as the node executable files should end up in /usr/local/bin which is already in the $PATH variable. If you need to, this can be done a couple of different ways. You can add a $PATH via your bash profile or .zshrc file if using zsh. Or to add the path more directly, modify the /etc/paths file:
1. Open your Mac terminal 
2. Execute the following command:
   sudo nano /etc/paths
3. Enter your password when prompted
4. navigate to the bottom of the file and add the path for node.
5. Type control-x to quit
6. Enter Y to save 

<hr>

# Node2 - First Node Application
Before we create an actual application, let's do the standard Hello World test to make sure Node is set up correctly.
I'll be using Visual studio code. Create a folder somewhere to store your application. In VS Code, select Open Folder from the File menu. Open the folder you just created.
Next create a new file. In the left portion of the window, right click and select New File. A file will be created and you can enter a name for it. Call it app.js.
Since this is just a simple test, type the following and save
     console.log("Hello World!!");
You can run this within VS Code or open a command line/terminal window and navigate to the directory. Either way, type the following to run your app:
     node app.js
And you should see the text 'Hello World!!' show up as output in the terminal window.

<hr>

# Node3 - Nodes and Packages
One of the most fundamental aspects of development with Nodejs is the use of packages. We can program whatever we like from scratch, including web servers, but there's no need to because almost any functionality you could need for an application can be found in Nodejs packages.

Nodejs comes with its own package manager, npm. To search for packages to add to an application, go to www.npmjs.com. The way packages work, you don't download them from the npm website, rather, you use the node package manager npm to import packages via terminal. When you find a package you want on the npm website, it will tell you the two main pieces of information you need: how to install and how to use.

First Intro Web App
For our first introductory application, we'll build a simple web server. One of the most common packages for this in Node is called express. You can search 'express' on the npm website and you'll find the primary information for it. Express is a simple framework which allows for building web applications. The quick installation listed uses an application generator. We can skip this and just do a simple, usual install using npm.

Before we can do that, we will first need to create an application using npm by issuing the following command on the command line/terminal:

       npm init

This starts the npm application wizard which will prompt you for a basic set of information for your application. For our simple starter, we can accept all defaults here and just press the enter/return key for each until we're done. Once complete, npm will generate a file called package.json in the root of our project directory. This file is very important as it contains project information which will include any packages we add. The reason package.json is important is because it gets used for deployment. We will develop our apps in our own development environment but eventually they will have to be migrated to a production environment which will likely not have all of the packages we installed. That's where package.json comes in. As we install packages, the package information will be added to package.json so it will know what packages are needed when it comes time to deploy our application in a production environment.

Before we write any code, we'll need to add the express package to our project. The usual way to do this at the command line is using the command npm install _____ where ______ is the package we want to add. So type

       npm install express

It will take a few seconds for npm to download and install the express package. We can now move on to building our intro app in the next item. Note that the install part of the command can be shortened to just i.
<hr>


# Node4 - Creating a Simple Web App
To create our web app, we will first need a main file for our application. In package.json, this will be listed as "main". In our case, the default is index.js so we'll use that. Create a new file in your project called index.js.

Next we will need to import the express package into our index.js file. This is done in javascript using a require() method and assigning its result to a variable:
      const express = require('express');
Then we create an app variable using a call to express:

      const app = express();
We now have what we need to build the rest of our application. We first add code at the end of our file to start our web server and listen for connections:

      app.listen(3010, function(){
           console.log("The server is running.");
      });
Note that the callback function can be left out here:

      app.listen(3010);
In either case, the server starts and begins listening on port 3010.Note that we can choose pretty much any port as long as its not in the reserved range up to 1024. 

Now we'll add a basic root route that will produce some output when we access our server from a web browser using a basic localhost web address. Add the following code after the first two lines but before the app.listen line:

       app.get('/',function(req,res){
          res.send("This is the home page!!");
       });
There's a lot going on here so let's step through this.

The method app.get will be executed in response to a user request to our server. The request must specify the root of our server which would be, in this case, http://localhost:3010. This target is specified by '/' as the first parameter. If we wanted to respond to the user typing http://localhost:3010/mydirectory/ we would specify '/mydirectory' instead. Also note that you can also use 127.0.0.1 instead of localhost to specify the local computer.

The anonymous function here is a callback function. It is executed in response to the user request. The two parameters to the function req and res represent the request and response. The request is the user request and contains information associated with the user request from their browser. The response is whatever our server sends back to that browser. res.send() is a simple method that simply sends text back to the browser in response to its request.

The get method also represents a wrapper for the HTTP GET method and is the only method that a user triggers manually from their browser when they open a website.

To test that this is working, first run the app using node index.js. You should see the text from the app.listen callback showing on the command line but you won't have access to the command line. This is because the server is running and waiting for connection requests. We can now open a web browser and type localhost:3010 into the address window to access our app. You should see the text from the app.get callback showing in the window.

Use control-c in the terminal to stop the server.

<hr>

# Node5 - Finishing the Introductory web App
We've seen how to create a basic web app with a root or index route. Eventually we'll need other types of routes as well.

Additional Routes
To specify additional routes, we simply add '/' and then the name of the route as the first parameter for app.get (or post, put, delete). Lets add another route called 'next'.

   app.get('/next',function(req,res){
      res.send("This is the NEXT page");
   });
Here we've done mostly the same thing we did to create the root route but now we've specified the route as /next. To access this, save and restart your web server and enter localhost:3010/next in the browser address bar and press return/enter.

Additional routes with parameters
We can also allow a mechanism to pass a parameter as part of the route. By adding text prefixed with ':' after a route name, whatever the user enters in the spot when calling the route will get passed in the request parameters to the web server. Let's try this out:

   app.get('/next/:myParam',function(req,res){
      var myparam = req.params.myParam;
      res.send("This is the " + myparam + " page");
   });
So here we have a few new things. First, we've added a parameter to the route called :myParam. We then retrieve the value passed from the client's browser by referring to req.params.<param_name>.  We can then use that value however we need to. Try the route out by saving and restarting the server, then entering localhost:3010/next/ in the address bar and adding any random text you want on the end. You should see the text you entered in the page that gets displayed.

That's it for our first, introductory express web app!
<hr>




#  REST

# REST Concept
REST stands for REpresentational State Transfer and is currently the most popular architecture for web application development. Some things that make REST appealing for web development include:

It can return data without exposing methods
Can be used over almost any protocol but HTTP for web
Supports any content type - mainly JSON
Works in HTTP with just regular HTTP methods
One notable thing that is not supported by REST is the ability to maintain state as REST is considered stateless.

There are some important constraints for REST:
      Client-Server Separation
      Stateless
      Cacheable
      Uniform Interface
Layered System
### Client Server Separation

The client and server are separate from one another and one is not dependent on the other. Ie. You should be able to change the front end of your application without affecting the data structure in the database.

### Stateless

As we mentioned above, REST APIs are stateless. This means that any call to an API can be made independently of any other. It also implies that any API call contains all of the information it needs to execute and complete. It should never have to rely on any contextual information or information from the server for this.

### Cacheable

APIs should be designed to encourage data caching. When a server returns data, it can include information similar to version information so a client doesn't need to re-request the same data.

### Uniform Interface

By designing a uniform interface to the API, all requests to the API look the same regardless of whether they come from Firefox or any other browser. This principle helps with #1. 

### Layered System

There may be numerous layers between the Client and the Server to perform various functions such as security or load-balancing or other functions. These layers should be invisible to the client and have no affect on how the client communicates with the server.

RESTful Routes
A RESTful API will be implemented to provide a set of RESTful routes which encapsulate so-called CRUD functionality. With web applications, these are set up using HTTP methods GET, POST, PUT and DELETE. The routes look like the following:

### 7 REST routes:

new       /dataitem/new  GET         show a new dataitem creation form
create    /dataitem      POST       create a new dataitem and then redirect

index     /dataitem      GET         list all dataitems
show      /dataitem/:id  GET         show a single dataitem

edit      /dataitem/:id/edit GET  show an edit form for a single dataitem
update    /dataitem/:id      PUT  update a particular dataitem and then redirect

destroy   /dataitem/:id  DELETE    delete a particular dataitem and then redirect

Note that while there are seven routes, some can be implemented in the front-end while some must be implemented as the back-end. The individual routes using PUT, POST and DELETE are implemented in the backend while the front-end provides an initial form or view(GET) which in turn triggers these routes. 
<hr>


# REACT   
# React0- Introduction to React
### What is REACT?

REACT is a nodejs library used to build front-ends for nodejs web applications. The library was developed by Facebook and is used to develop the view layer of a web app. REACT uses a component model and so therefore we create components which, in turn, can be reused. This is one reason for REACT being one of the most popular js libraries.

### Installation

Installing REACT can be done simply by creating a template REACT app using the following command:
      npx create-react-app _____ 
      
where you can specify an app name in the blank. Note that app names cannot contain capital letters and only hyphens are allowed aside from alphanumeric characters. This process will take some time to run as node will have to download the package content which is quite a bit larger than other packages. Once this is done, we will have a react app residing in the directory named for the app we created. If you received an error at this point, see below "Troubleshooting Install". Navigate into that directory and type

      npm start
We can do this whenever we want and leave it. npm will monitor files and if we change anything, automatically restart our app for us. If everything worked correctly, the app will start and open a browser window. In the browser window, you should see a rotating REACT logo. 

Now to look at some of the files created. You will find most files in two directories: public and src. First navigate to the public directory and open the index.html file. DO NOT CHANGE THIS FILE. You can scroll to the body of the file and note a div with an id set to 'root'. This is where our app will eventually be rendered.

We will be creating our first real REACT app in these directories so we can delete most of the files. In the src directory, delete everything. You can choose to leave the public directory alone or you can delete everything except the index.html file. The main thing is that we clear out the src file since that is where all of the files to be created will reside.

That's initial setup done. Now to start writing some REACT code.

### Troubleshooting Install

One issue that can happen in Windows environments is if your user directory is your first and last name with a space. npx doesn't allow this. Part of the initial setup is to install REACT which it will attempt to do in the npm cache directory. The default for this is : "C:\Users\<USERNAME>\AppData\Roaming\npm-cache". If this is the case for you, you will need to set a different cache directory. You can do this with the following steps:

edit the npm config file. At the command line:    npm config edit
look for a line that looks like cache=C:\Users\<USERNAME>\AppData\Roaming\npm-cache

it should be only a few lines down. Create a new folder, say, C:\npmcache and set that line, without the ;, and with cache set to this folder.
Then try running the initial npx command again.

<hr>

# React1- First REACT Code
We'll start by creating a file in the src folder called index.js. This is the main starting point for our app and is hardcoded into the app's config files.
Inside this file, add the following lines:

              import React from 'react';
              import ReactDOM from 'react-dom';
We'll come back to this file once there is something to render to our browser window.

Now create a file in src called App.jsx. This is an extensible form of javascript where jsx stands for JavaScript XML. Essentially it allows us to write html directly into our javascript. We'll start by adding an import and creating our first component.

Add the import line:  import React, {Component} from 'react';

Now add the following after this:

            class App extends Component {

            }
Now that we have a component called App, we need to be able to have it return html to be rendered. This is done by adding a render() method as follows:

            class App extends Component {
                 render(){
                    return( 

                    );
                 }
            }
One of the most common mistakes at this point is getting mixed up regarding parentheses and brackets. Add something simple to display:

             <h1>My Header</h1>
inside the return block. Finally, we have to add an export line at the end of the file to export our component to be used:

   export default App;
Now return to the index.js file and add the following lines after the import lines:

import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
This imports the component into this index.js file and then renders it to the browser window, within the div we saw in the index.html file(the one with id='root').

Once both files are saved, npm will restart the app and you should see the following in the browser window.



Congratulations! You've created your first REACT component!



<hr>

# React2- REACT Components
REACT is heavily component-based. This means we can not only create properly encapsulated components, we can embed them within other components. Create two additional components in the same App.jsx file. We'll call them Header and Content.

            class Header extends Component {
              render(){
                return(
                  <h1>My Header</h1>
                );
              }
            }

            class Content extends Component {
              render(){
                return(
                  <p>My Content</p>
                );
              }
            }
We can then embed these components within our original App component. We do this by referencing them as xml tags:

            class App extends React.Component {
              render(){
                return(
                  <div>
                    <Header />
                    <Content />
                  </div>
                );
              }
            }
Note that in this case, Header and Content must be enclosed in a div. When there is only one thing, this isn't required but when there are two or more adjacent components, tags, etc they have to be enclosed in a container of some kind.

Since these are classes, we can also invoke a constructor method right before render(). This is done if we want to include state within our component and is discussed in the next item.


<hr>


# React3- Stateful REACT

### State

Maintaining state within a REACT component requires the use of a constructor method and the this.state object. For our initial App component this would be:

      class App extends Component {
        constructor(){
          super();
          this.state = { ...  }
        }
        render(){
          return(
            <h1>My Header</h1>
          );
        }
      }
Note that we also invoke the parent constructor with super(). this.state will contain any data we wish to have available to work with in our component. It can contain one or more items and the items can be different data types or arrays. Let's update our App's state by adding an array of objects called data.

    constructor() {
      super();
      this.state = {
        data: [ {   },{   },{   } ]
      }
    }
now some fields('id', 'name' and 'age') and data in those objects: 

    constructor() {
      super();
      this.state = {
        data: 
        [
          {
            "id":1,
            "name":"Foo",
            "age":"20"
          },
          {
            "id":2,
            "name":"Bar",
            "age":"30"
          },
          {
            "id":3,
            "name":"Baz",
            "age":"40"
          }
        ]
      }
    }
We could also have this along with a single valued variable as well:

    constructor() {
      super();
      this.state = {
        myvar: "This is just some text",
        data: 
        [
          ...
        ]
      }
    }
So the built-in state object allows us to store whatever data we need within our component. 

We may also need some way to get data into a component as well. This can be done using Properties.

### Props

Props or properties are immutable variables which allow a means to pass data into a component. Properties are named by the passing module and that naming is then used to reference the property data in the receiving component.

There are three ways to look at props:

- Passing properties into our top level component from index.js
- Passing properties to child components
- Using default properties
Properties can be passed into our top level component by altering the ReactDOM.render as follows:

    ReactDOM.render(
      <App headerProp = "Header from props..." contentProp = "Content from props..." /> , 
      document.getElementById('root'));
These can then be referred to in our App component via the this.props object after including the parameter props in the constructors.

      constructor(props){
        super(props);

      }
      render(){
        return(
          <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
          </div>
        );
      }
We can also use default properties by adding the following:

      App.defaultProps = {
        headerProp: "Header from default props...",  
        contentProp: "Content from default props..."
      }
Finally, we can use props as a mechanism to pass state data from the parent component to child components:

Consider our component with this.state containing an array of objects called data as shown above. We could create a table in the parent object and then create a table row object as a child and pass our data array to the child to be outputted in table rows.

The table row component could be created as:

      class TableRow extends Component {
        render(){
          return(
            <tr>
              <td>{this.props.tableData.id}</td>
              <td>{this.props.tableData.name}</td>
              <td>{this.props.tableData.age}</td>
            </tr>
          );
        }
      }
Then the component can be embedded within a table in the App class using the array map function:

      <table>
        <tbody>
          {this.state.data.map((person, i) => <TableRow key = {i} tableData = {person} />)}
        </tbody>
      </table>
Here we use an arrow function:
      ( (person, i) => <TableRow key={i} tableData={person} /> )
      
.      
where person is the element to be mapped, i is the index and TableRow is the receiving component which will have two variables, i and person, passed as properties key and tableData to be referenced within the TableRow component. Note that 'person' and 'tableData' are just identifiers and these names are not dependent on any other identifier used in this.state.

What we've essentially done is use the map function to generate an array of TableRow components, each populated with one data object.


For a review of how the javascript array function map() works, check the Mozilla documentation.

<hr>


# React4- Prop Validation

Recall that javascript is weakly typed so the values of the properties we set can be any type. It may be useful to perform some type validation on props which can be done using a package called Prop-Types.

### First, start by importing from the prop-types package:

import PropTypes from 'prop-types';
Then validation can be set up for the component by creating ---- . propTypes to define the validation rules we wish to use. In our case, we will create App.propTypes.

      App.propTypes = {
        propString: PropTypes.string,
        propNumber: PropTypes.number,
        propBoolean: PropTypes.bool.isRequired,
        propObject: PropTypes.object,
        propArray: PropTypes.array.isRequired,
        propFunction: PropTypes.func
      }
We can set up some sample data with default props:

     App.defaultProps = {
       propString: "Some string",
       propNumber: 10,
       propBoolean: true,
       propObject: {
         field1:"Val1",
         field2:"Val2"
       },
       propArray: [1,2,3,4,5],
       propFunction: function(x){return x}
     }
### Finally, we can add some content to the component to display the props.

     <div>
       <p>String: {this.props.propString}</p>
       <p>Number: {this.props.propNumber}</p>
       <p>Bool: {this.props.propBoolean ? "True..." : "False..."}</p>
       <p>Object: {this.props.propObject.field1}</p>
       <p>Object: {this.props.propObject.field2}</p>
       <p>Array: {this.props.propArray}</p>
       <p>Func: {this.props.propFunction(3)}</p>
     </div>
To check the typing, try changing one of the default prop values to an invalid type and then check the console.  Any exceptions raised will show in the console.


<hr>
