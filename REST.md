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

