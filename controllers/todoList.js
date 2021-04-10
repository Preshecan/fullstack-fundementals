const db = require('../config/dbConnection');
const todoList = require('../models/todoList');

//@desc Get all list items
//@route GET /api/v1/todoList
//@access public
exports.getListItems = async (req, res, next) =>{
    try{
        let todos = await todoList.findAll();
        return res.status(200).json({
            success: 'true',
            data: todos
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'server error'
        })
    }
}

//@desc Add a list item
//@route POST /api/v1/todoList
//@access public
exports.addListItem = async (req, res, next) =>{
    const { taskName, deadline } = req.body;
    try{
        const todoItem = await todoList.create(req.body);

        return res.status(201).json({
            success: 'true',
            data: todoItem
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: `POST failed: ${err}`
        })
    }
}

//@desc Delete all list items
//@route DELETE /api/v1/todoList/:id
//@access public
exports.deleteListItem = async (req, res, next) =>{
    const todoItem = await todoList.findByPk(req.params.id)

    if(!todoItem){
        return res.status(404).json({
            success: false,
            error: 'no todo item found'
        })
    }

    try{
        await todoItem.destroy();
        return res.json({success: true})
    }catch(err){
        return res.status(400).json({
            success: false,
            error: `DELETE failed: ${err}`
        })
    }
}