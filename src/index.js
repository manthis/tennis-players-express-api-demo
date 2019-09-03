/* eslint-disable no-unused-vars */

import express from 'express';
import morgan from 'morgan';
import { Router } from 'express';
import {
    rootRoute,
    getAllPlayersRoute,
    getPlayerWithIdRoute,
    deletePlayerWithIdRoute,
} from './api/routes';


// Server port definition
const { PORT = 8080 } = process.env;

// Express App
const app = express();

// Logger
app.use(morgan('combined'));

// Error middleware
app.use((err, req, res, next) => {

    console.debug(`Error handling middleware called: ${err.stack}`);

    res.status(500).json({
        error: err.message
    });

});

// We define our router
let router = new Router();

// We defines our routes
router.get('/', rootRoute);
router.get('/players', getAllPlayersRoute);
router.get('/players/:id', getPlayerWithIdRoute);
router.delete('/players/:id', deletePlayerWithIdRoute);

// We pass our router to the Express app
app.use('/', router);

// We start our Express server
app.listen(PORT, () => console.info(`Express app listening on port ${PORT}`));
