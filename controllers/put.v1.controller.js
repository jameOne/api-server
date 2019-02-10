(() => {
    // test PUT router functionality
    exports.test = (req, res) => {
        res.json({
            response: 'PUT router is functional'
        });
    };
})();
//const getDb = require('../db').getDb;
//const appSpace = require('../bin/config').appSpace;
//const uuidv3 = require('uuid/v3');
//const ObjectId = require('mongodb').ObjectId;
/*
exports.one = async (req, res, next) => {
    try {
        // get the db
        const db = getDb();

        // determine the nameSpace
        let nameSpace;
        switch(req.params.nameSpace) {
        case 'autos':
            nameSpace = req.params.nameSpace;
            break;
        case 'parties':
            nameSpace = req.params.nameSpace;
            break;
        case 'taxes':
            nameSpace = req.params.nameSpace;
            break;
        case 'fees':
            nameSpace = req.params.nameSpace;
            break;
        case 'sales':
            nameSpace = req.params.nameSpace;
            break;
        default:
            throw new Error('Error: Invalid "nameSpace".');
        }

        // prepare the query
        const title = req.params.title;
        const key = uuidv3(`${nameSpace}.${title}`, appSpace);
        const query = { _key: key };

        // prepare the update
        const updateField = 'details.' + req.body.update.field;
        const updateValue = req.body.update.value;

        let update;
        if (typeof updateField === 'undefined'
        || typeof updateValue === 'undefined') {
            throw new Error('Invalid update.');

        } else {
            update = {
                $set: {
                    [updateField]: updateValue
                }
            };
        }

        // try to execute the update and prepare the response
        const result = await db.collection(nameSpace).updateOne(
            query, update
        );
        const num = result['result']['n'];
        const numMod = result['result']['nModified'];
        let status;
        let object;
        if (num) {
            status = 200;
            object = {
                response: {
                    message: `${numMod} out of ${num} resources updated.`
                }
            };
            res.status(status).json(object);
        } else {
            next();
        }

    // handle errors
    } catch (err) {
        next();
    }
};

exports.many = async (req, res, next) => {
    try {
        // get the db
        const db = getDb();

        // determine the nameSpace
        let nameSpace;
        switch (req.params.nameSpace) {
        case 'autos':
            nameSpace = req.params.nameSpace;
            break;
        case 'parties':
            nameSpace = req.params.nameSpace;
            break;
        case 'taxes':
            nameSpace = req.params.nameSpace;
            break;
        case 'fees':
            nameSpace = req.params.nameSpace;
            break;
        case 'sales':
            nameSpace = req.params.nameSpace;
            break;
        default:
            throw new Error('Invalid "nameSpace".');
        }

        // prepare the query
        const queryField = 'details.' + req.body.query.field;
        const queryValue = req.body.query.value;

        let query;
        if (typeof queryField === 'undefined'
        || typeof queryValue === 'undefined') {
            throw new Error('Bad Request.');

        } else if (typeof queryField === 'undefined'
        && typeof queryValue === 'undefined') {
            throw new Error('Method not allowed.');

        } else {
            query = {
                [queryField]: queryValue
            };
        }

        // prepare the update
        const updateField = 'details.' + req.body.update.field;
        const updateValue = req.body.update.value;

        let update;
        if (typeof updateField === 'undefined'
        || typeof updateValue === 'undefined') {
            throw new Error('Invalid update.');

        } else {
            update = {
                $set: {
                    [updateField]: updateValue
                }
            };
        }

        // try to execute the update and prepare the response
        const result = await db.collection(nameSpace).updateMany(
            query, update
        );
        const num = result['result']['n'];
        const numMod = result['result']['nModified'];
        let status;
        let object;
        if (numMod) {
            status = 200;
            object = {
                response: {
                    message: `${numMod} out of ${num} resources updated.`
                }
            };
            res.status(status).json(object);
        } else {
            next();
        }

    // handle errors
    } catch (err) {
        let status;
        let object;
        if (err.message === 'Method not allowed.') {
            status = 405;
            object = {
                response:  {
                    message: err.message
                }
            };
            res.status(status).json(object);
        } else if (err.message === 'Bad request.') {
            status = 400;
            object = {
                response:  {
                    message: err.message
                }
            };
            res.status(status).json(object);
        } else {
            next();
        }
    }
};
*/ 
//# sourceMappingURL=put.v1.controller.js.map