
import { DATABASE } from '../config';

class Model extends Object {

    constructor() {
        super();
        this._database = DATABASE;
    }

    get database() {
        return this._database;
    }

}

export default Model;