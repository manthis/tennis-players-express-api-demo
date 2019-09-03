
import TennisPlayerModel from '../models/tennisplayer';
import fs from 'fs';


jest.mock('fs', () => ({
    existsSync: jest.fn(),
    readFileSync: jest.fn(),
    writeFileSync: jest.fn(),
}));

describe('Test the TennisPlayerModel class', () => {

    beforeAll(() => {

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [] }');

    });

    test('Test the _performDatabaseOperations private method of the class', () => {

        let mockFn = jest.fn();
        mockFn.mockReturnValue(true);

        let model = new TennisPlayerModel();
        model._performDatabaseOperations(mockFn);

        expect(mockFn).toHaveBeenCalled();

    });

    test('Test the getAllTennisPlayersSortedByIdAsc static method of the class', () => {

        let results = TennisPlayerModel.getAllTennisPlayersSortedByIdAsc();
        expect(results).toBeUndefined();

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [ {"id": 65, "name": "Pierre"} ] }');

        results = TennisPlayerModel.getAllTennisPlayersSortedByIdAsc();
        expect(results).toEqual([{"id": 65, "name": "Pierre"}]);

    });

    test('Test the getTennisPlayerWithId static method', () => {

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [] }');

        let results = TennisPlayerModel.getTennisPlayerWithId(65);
        expect(results).toBeUndefined();

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [ {"id": 65, "name": "Pierre"} ] }');

        results = TennisPlayerModel.getTennisPlayerWithId(65);
        expect(results).toEqual({"id": 65, "name": "Pierre"});

    });

    test('Test the deleteTennisPlayerWithId static method', () => {

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [] }');

        let results = TennisPlayerModel.deleteTennisPlayerWithId(65);
        expect(results).toBeUndefined();

        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('{ "players": [ {"id": 65, "name": "Pierre"} ] }');

        results = TennisPlayerModel.deleteTennisPlayerWithId(65);
        expect(results).toEqual([{"id": 65, "name": "Pierre"}]);

    });

});