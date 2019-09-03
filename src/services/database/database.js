/* eslint-disable no-unused-vars */

/**
 * @description This class is an interface to build the type of database you want to use.
 * @author Maxime AUBURTIN
 * @date 2019-09-01
 * @class Database
 * @extends {Object}
 */
class Database extends Object {

    /**
     * Creates an instance of Database.
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @memberof Database
     */
    constructor() {
        super();
        this._database = [];
    }

    /**
     * @description This method must be used in order to connect to the database.
     *              This method must load the content of the database into the "_database" property of this class.
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @memberof Database
     */
    connect() {
        throw new Error(`Method must be overidden!`);
    }

    /**
     * @description This method is used to disconnect from the database
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @memberof Database
     */
    disconnect() {
        throw new Error(`Method must be overidden!`);
    }

    /**
     * @description This method is used to sync/persist data into the database.
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @memberof Database
     */
    sync() {
        throw new Error(`Method must be overidden!`);
    }

     /**
     * @description This method is used to return all database entries.
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @memberof Database
     */
    getAll() {
        throw new Error(`Method must be overidden!`);
    }

    /**
     * @description This method is used to return the entry matching the ID provided as a parameter.
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @param {*} _id The ID of the database entry to retrieve
     * @memberof Database
     */
    getById(_id) {
        throw new Error(`Method must be overidden!`);
    }

    /**
     * @description This method is used to delete the entry matching the ID provided as a parameter.
     * @author Maxime AUBURTIN
     * @date 2019-09-01
     * @param {*} _id The ID of the database entry to delete
     * @memberof Database
     */
    deleteById(_id) {
        throw new Error(`Method must be overidden!`);
    }
}

export default Database;