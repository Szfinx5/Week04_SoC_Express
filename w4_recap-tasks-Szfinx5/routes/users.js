import { Router } from 'express';
const router = Router();

import {users} from '../libs/users.js';

//Get all users 
router.get('/', function(req, res){
    const responseObject = {
        success: true, 
        payload: users, 
    };
    res.json(responseObject)
});


//Get user by id
router.get('/:id', function(req, res){
    const id = req.params.id;
    let userById = {};
    userById = users.filter(r => r.id == id);
    
    const responseObject = {
        success: true, 
        payload: userById, 
    };
    res.json(responseObject)
});


//Create new user
router.post('/', function(req, res){
    const body = req.body;
    users.push(body);
 
    const responseObject = {
        success: true, 
        payload: body 
    };
    res.json(responseObject);
});


//Update user by id
router.put('/:id', function(req, res){
    const id = req.params.id;
    
    for(let i=0;i<users.length;i++){
        console.log(i);
        if(id == users[i].id){
            users[i] = req.body;
            break;
        };
    };
    const responseObject = {
        success: true, 
        payload: req.body 
    };
    res.json(responseObject);
});


//Delete user by id
router.delete('/:id', function (req, res){
    const id = req.params.id;
    
    let deletedUser = users.filter(r => r.id == id);
    
    for(let i=0;i<users.length;i++){
        if(id == users[i].id){
            users.splice(i,1);
            break;
        };
    };
    
    console.log(deletedUser);
    const responseObject = {
        success: true, 
        payload: `User ${req.params.id} is deleted`
    };
    res.json(responseObject);
})

export {router};