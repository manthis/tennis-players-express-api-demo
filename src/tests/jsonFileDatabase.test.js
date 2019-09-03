
import JsonFileDatabase from '../services/database/jsonFileDatabase';
import fs from 'fs';


jest.mock('fs', () => ({
    existsSync: jest.fn(),
    readFileSync: jest.fn(),
    writeFileSync: jest.fn(),
}));

describe('Test the jsonFileDatabase class', () => {

    const PATH = './resources/headtohead.json';
    let database;

    beforeAll(() => {
        database = new JsonFileDatabase(PATH);
    });

    test('Ensure the properties are correctly initialized by the constructor', () => {
        expect(database._database).toEqual([]);
        expect(database._databaseFilePath).toBe(PATH);
        expect(database._isConnected).toBe(false);
        expect(database.isConnected).toBe(false);
    });

    test('Ensure connect method returns false when file does not exists', () => {

        fs.existsSync.mockReturnValue(false);

        let isConnected = database.connect();

        expect(fs.existsSync).toHaveBeenCalled();
        expect(isConnected).toBe(false);

    });

    test('Ensure connect method read the json file when it exists', () => {

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [] }');

        database.connect();

        expect(fs.readFileSync).toHaveBeenCalled();
        expect(database._database).toEqual({ 'players': [] });

    });

    test('Ensure disconnect method resets class properties', () => {

        database.disconnect();

        expect(database.isConnected).toBe(false);
        expect(database._database).toEqual([]);

    });

    test('Ensure the sync method works properly', () => {

        database.sync();

        expect(fs.writeFileSync).toHaveBeenCalled();

    });

    test('Test the getAll method', () => {

        let results = database.getAll();

        expect(results).toEqual([]);

    });

    test('Test the getById method with by bad IDs', () => {

        let id = undefined;
        let results = database.getById(id);
        expect(results).toBeUndefined();

        id = NaN;
        results = database.getById(id);
        expect(results).toBeUndefined();

        id = null;
        results = database.getById(id);
        expect(results).toBeUndefined();

        id = 'test';
        results = database.getById(id);
        expect(results).toBeUndefined();

    });

    test('Test the getById method with proper ID', () => {

        let id = 65;
        database._database = [
            {
                id: 65,
                name: 'Tennis Player'
            }
        ];
        let results = database.getById(id);
        expect(results).toEqual({
            id: 65,
            name: 'Tennis Player'
        });
    });

    test('Test the deleteById method with by bad IDs', () => {

        let id = undefined;
        let results = database.deleteById(id);
        expect(results).toBeUndefined();

        id = NaN;
        results = database.deleteById(id);
        expect(results).toBeUndefined();

        id = null;
        results = database.deleteById(id);
        expect(results).toBeUndefined();

        id = 'test';
        results = database.deleteById(id);
        expect(results).toBeUndefined();

    });

    test('Test the deleteById method with proper ID', () => {

        let id = 65;
        database._database = [
            {
                id: 65,
                name: 'Tennis Player'
            }
        ];
        let results = database.deleteById(id);
        expect(results).toEqual([{
            id: 65,
            name: 'Tennis Player'
        }]);
    });

});