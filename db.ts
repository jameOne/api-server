import { MongoClient } from "mongodb";

(() => {

    const assert = require('assert');
    const config = require('./bin/config');
    const MongoClient = require('mongodb').MongoClient;
    
    let _db;
    
    exports.testDb = async (): Promise<boolean> => {
        try {
            const client = await MongoClient.connect(config.db.connectionString, config.db.connectionOptions);
            client.close();
            return true;
        } catch (err) {
            return false;
        }
    }
    
    exports.initDb = async (callback): Promise<Function> => {
        if (_db) {
            console.warn('Trying to init DB again!');
            return callback(null, _db);
        }
        try {
            const client = await MongoClient.connect(config.db.connectionString, config.db.connectionOptions);
            const db = client.db('test');
            console.log('DB initialized - connected to: ' + config.db.connectionString.split('@')[1]);
            _db = db;
            return callback(null, _db);
        } catch (err) {
            return callback(err);
        }
    }
    
    exports.getDb = (): MongoClient => {
        assert.ok(_db, 'Db has not been initialized. Please called init first.');
        return _db;
    }
})();