import 'dotenv/config';
import express from 'express';
/*
    When using synchronization
*/
// import asyncHandler from 'express-async-handler';
import * as recipes from './recipe_model.mjs';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
/**
 * Create a new recipe with some propertises provided in the body HTML
 */

app.post('/recipe', (req, res) => {
    // movies.createMovie
    recipes.createRecipe(req.body.name, req.body.reps) // If the date is added to the recipe:  req.body.date)
        .then(recipes => {
            res.status(201).json(recipes);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Invalid Request'});
        });
});

// When a user try to find a specific recipe

app.get('/recipes', (req, res) => {
    // * filter => {} 로 대체 
    recipess.findrecipe({}, '', 0)
        .then(recipes => {
            res.status(200).send(recipes);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });
});

app.get('/recipes/:_id', (req, res) => {
    const recipeId = req.params._id;
    //console.log(movieId); //62971661a61c9106d7d10974
    recipes.findRecipeById(recipeId)
        .then(recipe => { 
            if (recipe !== null) {
                res.status(200).json(recipe);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            console.error(error);
            res.json({ Error: 'Request failed' });
        });
});

/**
 * Update the recipe whose id is provided in the path parameter and set
 * its title, date and so on to the values provided in the body.
 */
 app.put('/recipes/:_id', (req, res) => {
    recipes.replaceRecipe(req.params._id, req.body.name, req.body.reps) //req.body.date
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.params._id, name: req.body.name, reps: req.body.reps}) //date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid request' });
        });
});
/**
 * Delete the recipe whose id is provided in the query parameters
 */
app.delete('/recipes/:_id', (req, res) => {
    recipes.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});