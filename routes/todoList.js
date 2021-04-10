const express = require('express');
const router = express.Router();
const { getListItems, addListItem, deleteListItem} = require('../controllers/todoList');

//router.get('/', (req,res) => res.send('Hello'));
router
    .route('/')
    .get(getListItems)
    .post(addListItem)

router
    .route('/:id')
    .delete(deleteListItem);

module.exports = router;