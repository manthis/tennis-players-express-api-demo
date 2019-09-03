import TennisPlayersDatabase from "./services/database/tennisPlayersDatabase";


// The path to the JSON file to be used as a TennisPLayersDatabase
export const TENNIS_DATABASE_FILE_PATH = './resources/headtohead.json';

// The database to be used by our Model class
export const DATABASE = new TennisPlayersDatabase(TENNIS_DATABASE_FILE_PATH);
