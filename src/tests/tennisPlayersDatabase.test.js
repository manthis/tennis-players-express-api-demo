
import TennisPlayersDatabase from '../services/database/tennisPlayersDatabase';
import fs from 'fs';


jest.mock('fs', () => ({
    existsSync: jest.fn(),
    readFileSync: jest.fn(),
    writeFileSync: jest.fn(),
}));

describe('Test the TennisPlayersDatabase class', () => {

    const PATH = './resources/headtohead.json';
    let database;

    beforeAll(() => {
        database = new TennisPlayersDatabase(PATH);
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
        expect(database._database).toEqual([]);

    });

    test('Ensure the sync method works properly', () => {

        database.sync();

        expect(fs.writeFileSync).toHaveBeenCalled();
        expect(database._database).toEqual({"players": []});

    });

});