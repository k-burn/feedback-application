const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');

// GET all feedback that has been submitted
router.get('/', (req, res) => {
    console.log('GET /api/feedback');
    //SQL query to find all feedback and return them
    const query = `SELECT * FROM "feedback" ORDER BY "date" DESC;`;
    pool.query(query).then((results)=>{
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error GET /api/order', error);
        res.sendStatus(500);  
    });
});

// POST a new order (SQL)
router.post('/', (req, res) => {
  console.log('in POST /feedback', req.body);
  const feedback = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [feedback.input1Feedback, feedback.input2Feedback, feedback.input3Feedback, feedback.input4Feedback])
    .then((result)=>{
        res.sendStatus(201);
    })
    .catch((error)=>{
        console.log('error making feedback POST', error);
        res.sendStatus(500);
    })
});

// DELETE a line of feedback
router.delete('/:id', (req, res) => {
    console.log('DELETE /api/feedback', req.params.id);
    const idOfFeedbackToDelete = req.params.id;
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [idOfFeedbackToDelete]).then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in delete route', error);
        res.sendStatus(500);
    })
});

module.exports = router;