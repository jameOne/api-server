(() => {
    const admin = require('../keys').admin;
    const dbKey = require('../keys').dbKey;
    exports.appspace = 'ttyi.network';
    exports.db = {
        'connectionString': `mongodb+srv://${admin}:${dbKey}@cluster0-y2lpo.gcp.mongodb.net/test?retryWrites=true`,
        'connectionOptions': { useNewUrlParser: true },
    };
})();
//# sourceMappingURL=config.js.map