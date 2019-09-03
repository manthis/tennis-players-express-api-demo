
import Model from '../models/model';


describe('Test the Model class', () => {

    test('Test the Model class is correctly initialized', () => {

        let model = new Model();

        expect(model.database).toEqual({"_database": [], "_databaseFilePath": "./resources/headtohead.json", "_isConnected": false});

    });

});