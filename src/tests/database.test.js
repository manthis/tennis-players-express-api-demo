
import Database from '../services/database/database';

describe('Test the Database class', () => {

    let database;

    beforeAll(() => {
        database = new Database();
    });

    test('Ensure the database property is correctly initialized', () => {
        expect(database._database).toEqual([]);
    });

    test('Ensure the database connect method throws an Error', () => {
        expect(() => {
            database.connect()
        }).toThrowError();
    });

    test('Ensure the database disconnect method throws an Error', () => {
        expect(() => {
            database.disconnect()
        }).toThrowError();
    });

    test('Ensure the database sync method throws an Error', () => {
        expect(() => {
            database.sync()
        }).toThrowError();
    });

    test('Ensure the database getAll method throws an Error', () => {
        expect(() => {
            database.getAll()
        }).toThrowError();
    });

    test('Ensure the database getById method throws an Error', () => {
        expect(() => {
            database.getById(65)
        }).toThrowError();
    });

    test('Ensure the database deleteById method throws an Error', () => {
        expect(() => {
            database.deleteById(65)
        }).toThrowError();
    });

});