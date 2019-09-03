
import Model from './model';
import _ from 'lodash';


class TennisPlayerModel {

    _performDatabaseOperations(_callback) {

        const model = new Model();
        const database = model.database;

        let results;

        database.connect();
        if (database.isConnected) {
            results = _callback(database);
        }
        database.disconnect();

        return results;

    }

    static getAllTennisPlayersSortedByIdAsc() {

        const model = new TennisPlayerModel();
        return model._performDatabaseOperations((database) => {
            const sortedEntries = _.sortBy(database.getAll(), ['id']);
            return sortedEntries.length === 0 ? undefined: sortedEntries;
        });

    }

    static getTennisPlayerWithId(_id) {

        const model = new TennisPlayerModel();
        return model._performDatabaseOperations((database) => {
            return database.getById(_id);
        });

    }

    static deleteTennisPlayerWithId(_id) {

        const model = new TennisPlayerModel();
        return model._performDatabaseOperations((database) => {
            const deletedPlayer = database.deleteById(_id);
            if (deletedPlayer.length > 0) {
                database.sync();
            }
            return deletedPlayer.length === 0 ? undefined: deletedPlayer;
        });

    }

}

export default TennisPlayerModel;