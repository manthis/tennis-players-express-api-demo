
import _ from 'lodash';
import { version } from '../../package.json';

import TennisPlayerModel from '../models/tennisplayer';


export const rootRoute = (req, res) => {

    res.status(200).send({
        message: `Tennis Players Demo API v${version}`
    });

}

export const getAllPlayersRoute = (req, res) => {

    let players = TennisPlayerModel.getAllTennisPlayersSortedByIdAsc();

    if (_.isUndefined(players)) {
        res.status(404).send();
        return;
    }

    res.status(200).send({ players });

}

export const getPlayerWithIdRoute = (req, res) => {

    const { id } = req.params;

    if (_.isString(id)) {

        let idInt = _.parseInt(id);
        if (!_.isNaN(idInt)) {

            let player = TennisPlayerModel.getTennisPlayerWithId(idInt);
            if (player) {
                res.status(200).send({ player });
                return;
            }

        }

    }

    res.status(404).send();
}

export const deletePlayerWithIdRoute = (req, res) => {

    const { id } = req.params;

    if (_.isString(id)) {

        let idInt = _.parseInt(id);
        if (!_.isNaN(idInt)) {

            let deletedPlayer = TennisPlayerModel.deleteTennisPlayerWithId(idInt);
            if (deletedPlayer) {
                res.status(200).send({ deletedPlayer });
                return;
            }

        }

    }

    res.status(404).send();

}
