const express = require('express');

const router = express.Router();

let todos = [];

/**
 * Method for adding todo
 */
router.post('/api/addTodo', (req, res) => {
  const { title } = req.body;
  const todo = {
    id: Date.now(),
    title,
    completed: false,
  };


  todos = [...todos, todo];
  setTimeout(() => {
    res.json(todo);
  }, 300);
});

router.delete('/api/delTodo/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(elem => elem.id !== +id);

  setTimeout(() => {
    res.json({ id });
  }, 300);
});

router.put('/api/updateTodo/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  todos = todos.map((item) => {
    if (item.id === +id) {
      return { ...item, title };
    }
    return item;
  });

  const newTodo = todos.find(elem => elem.id === +id);

  setTimeout(() => {
    res.json(newTodo);
  }, 300);
});

router.post('/api/toggleComplete', (req, res) => {
  const todo = req.body;

  todos = todos.map((item) => {
    if (item.id === todo.id) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });

  const newTodo = todos.find(elem => elem.id === todo.id);

  setTimeout(() => {
    res.json({ success: true, todo: newTodo });
  }, 300);
});

/**
 * Getting todos
 */
router.get('/api/getTodos', (req, res) => {
  setTimeout(() => {
    res.json(todos);
  }, 500);
});

module.exports = router;
