const express = require('express');

const router = express.Router();

let todos = [];

/**
 * Method for adding todo
 */
router.post('/api/addTodo', (req, res) => {
  const { payload } = req.body;
  const todo = {
    id: Date.now(),
    title: payload,
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

router.put('/api/updateTodo', (req, res) => {
  const { id, title } = req.body.payload;

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

router.patch('/api/toggleTodo/:id', (req, res) => {
  const { id } = req.params;

  todos = todos.map((item) => {
    if (item.id === +id) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });

  const newTodo = todos.find(elem => elem.id === +id);

  setTimeout(() => {
    res.json(newTodo);
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
