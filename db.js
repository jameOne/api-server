"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const assert = require('assert');
    const config = require('./bin/config');
    const MongoClient = require('mongodb').MongoClient;
    let _db;
    exports.testDb = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield MongoClient.connect(config.db.connectionString, config.db.connectionOptions);
            client.close();
            return true;
        }
        catch (err) {
            return false;
        }
    });
    exports.initDb = (callback) => __awaiter(this, void 0, void 0, function* () {
        if (_db) {
            console.warn('Trying to init DB again!');
            return callback(null, _db);
        }
        try {
            const client = yield MongoClient.connect(config.db.connectionString, config.db.connectionOptions);
            const db = client.db('test');
            console.log('DB initialized - connected to: ' + config.db.connectionString.split('@')[1]);
            _db = db;
            return callback(null, _db);
        }
        catch (err) {
            return callback(err);
        }
    });
    exports.getDb = () => {
        assert.ok(_db, 'Db has not been initialized. Please called init first.');
        return _db;
    };
})();
//# sourceMappingURL=db.js.map