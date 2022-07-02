<div align="center">
    <img src="https://miro.medium.com/max/700/1*hYfdBkfKgvtMoDcqk_LjWA.png" alt="drawing" width="200"/>
</div>
<h1 align="center">School of Code, Week 04</h1>

### This week we learned the following:
 - how to create RESTFul API, 
 - What Middleware is an how to use them
 - how to structure our Node.js code

---
### This repository contains the following tasks:    

#### w4d5_build-a-back-end-hackathon-adamandgabor

We built a server which function as a data API and it also serves an HTML page.

When the server is working, we should see a website at http://localhost:3000.    
Currently, there is a very basic front-end (HTML/CSS/JS) served at localhost:${port} (index.html). 
We started out by building a back end that fits with its needs.  
##### Bonus tasks:
 - Create your models
 - Join up to the front end
 - Add middleware
 - Add additional routes
---
 #### w4_recap-tasks-Szfinx5

 This task was the weekend work where we built the following Express API which needed to be fully RESTful with all CRUD routes (create, read, update, delete).


| Operation         | Path          | Response body shape                                                          |
| ----------------- | ------------- | ---------------------------------------------------------------------------- |
| Get all users     | `/users`      | <code>{ success: true, payload: array of user objects } </code>              |
| Get user by id    | `/users/<id>` | <code>{ success: true, payload: user object }</code>                         |
| Create new user   | `/users`      | <code>{ success: true, payload: newly created user object }</code>           |
| Update user by id | `/users/<id>` | <code>{ success: true, payload: new user object (after replacement) }</code> |
| Delete user by id | `/users/<id>` | <code>{ success: true, payload: deleted user } </code>                       |
