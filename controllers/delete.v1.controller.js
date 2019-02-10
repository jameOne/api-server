(() => {
    // test DELETE router functionality
    exports.test = (req, res) => {
        res.json({
            response: 'DELETE router is functional'
        });
    };
})();
//const getDb = require('../db').getDb;
//const appSpace = require('../bin/config').appSpace;
//const uuidv3 = require('uuid/v3');
/*
exports.one = async (req, res, next): Promise<void> => {
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
        const result = await db.collection(nameSpace).deleteOne(query);
        const resource = result['result'];
        const num = resource['n'];
        if (num) {
            const status = 200;
            const object = {
                response: {
                    message: `${num} resources deleted.`
                }
            };
    
            // respond
            res.status(status).json(object);

        // handle the empty result
        } else {
            next();
        }

    // handle errors
    } catch (err) {
        next();
    }
};
*/ 
//# sourceMappingURL=delete.v1.controller.js.map