
import Database from './database';
import fs from 'fs';
import _ from 'lodash';


class JsonFileDatabase extends Database {

    constructor(_databaseFilePath) {
        super();
        this._databaseFilePath = _databaseFilePath;
        this._isConnected = false;
    }

    get isConnected() {
        return this._isConnected;
    }

    connect() {
        if (fs.existsSync(this._databaseFilePath)) {
            this._database = JSON.parse(fs.readFileSync(this._databaseFilePath, 'utf-8'));
            this._isConnected = true;
            return true;
        }
        return false;
    }

    disconnect() {
        this._database = [];
        this._isConnected = false;
    }

    sync() {
        fs.writeFileSync(
            this._databaseFilePath,
            JSON.stringify(this._database, null, '\t'),
        );
    }

    getAll() {
        return this._database;
    }

    getById(_id) {

        let result;

        const isIdOk = _id && !_.isNull(_id) && !_.isNaN(_id) && _.isInteger(_id);
        if (isIdOk) {
            const index = _.findIndex(this._database, ['id', _id]);
            result = this._database[index];
        }

        return result;

    }

    deleteById(_id) {

        let result;

        const isIdOk = _id && !_.isNull(_id) && !_.isNaN(_id) && _.isInteger(_id);
        if (isIdOk) {
            result = _.remove(this._database, (player) => {
                return player.id === _id;
            });
        }

        return result;

    }

}

export default JsonFileDatabase;