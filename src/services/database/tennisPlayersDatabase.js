
import JsonFileDatabase from './jsonFileDatabase';


class TennisPlayersDatabase extends JsonFileDatabase {

    constructor(_databaseFilePath) {
        super(_databaseFilePath);
    }

    connect() {

        super.connect();

        // If the connection is successful and consequently the JSON file was successfully loaded
        // we set the database content to be the tennis players array and not the whole JSON document.
        if (this._isConnected) {
            this._database = this._database.players;
        }

        return this._isConnected;

    }

    sync() {

        // We recreate the original tennis players database structure
        const dbContent = {
            players: this._database
        };
        this._database = dbContent;

        // We sync the database
        super.sync();

    }
}


export default TennisPlayersDatabase;