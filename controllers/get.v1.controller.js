(() => {
    // test GET router functionality
    exports.test = (req, res) => {
        res.json({
            response: 'GET router is functional'
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
        // prepare the db
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
            next();
        }

        // prepare the query
        const title = req.params.title;
        const key = uuidv3(`${nameSpace}.${title}`, appSpace);
        const query = { _key: key };

        // try to execute the query and prepare the resource
        try {
            const result = await db.collection(nameSpace).find(query).limit(1).next();
            const resource = result['details'];
            const status = 200;
            const object = {
                response: {
                    message: 'Resource returned successfully.',
                    resource: resource
                }
            };

            // respond
            res.status(status).json(object);
        // handle the empty result
        } catch (err) {
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
            throw new Error('Invalid "nameSpace"');
        }

        // prepare the query
        let query;
        if (typeof req.query.last === 'undefined') {
            query = {};
        } else {
            query = { _id: { $lt: ObjectId(req.query.last + '0000000000000000') } };
        }
        const sort = { _id: -1};

        // execute the query and prepare the resources
        const results = await db.collection(nameSpace).find(query).limit(20).sort(sort).toArray();
        const resources = [];
        results.forEach(result => { resources.push(result['details']); });
        

        // define the response object
        try {
            const nextPage = results[results.length - 1]['_id'].toString().substring(0,8);
            let status;
            let object;
            if (resources.length === 20) {
                status = 200;
                object = {
                    response: {
                        message: 'Resources returned successfully.',
                        next: `/boss/api/v1/autos?last=${nextPage}`,
                        resources: resources
                    }
                };
            } else {
                status = 200;
                object = {
                    response: {
                        message: 'Resources returned successfully.',
                        resources: resources
                    }
                };
            }
            // respond
            res.status(status).json(object);
        
        // handle an empty array
        } catch (err) {
            next();
        }
    
    // handle errors
    } catch (err) {
        next();
    }
};
*/ 
//# sourceMappingURL=get.v1.controller.js.map