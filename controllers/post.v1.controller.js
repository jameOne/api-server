var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    const getDb = require('../db').getDb;
    const User = require('../models/user.model').User;
    const registrarIsOpen = require('../keys').registrarIsOpen;
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcryptjs');
    const jwtSecret = require('../keys').jwtSecret;
    // test POST router functionality 
    exports.test = (req, res) => {
        return res.json({
            response: 'POST router is functional'
        });
    };
    exports.one = (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            // get the db
            const db = getDb();
            // prepare the document for insert
            const namespace = req.params.namespace;
            const title = req.body.title;
            let doc;
            let object;
            let status;
            let secret;
            let token;
            switch (namespace) {
                case 'registrar':
                    if (registrarIsOpen) {
                        secret = bcrypt.hashSync(req.body.secret, 8);
                        doc = new User(title, secret);
                        token = jwt.sign({
                            key: doc.key
                        }, jwtSecret, {
                            expiresIn: 86400
                        });
                    }
                    else {
                        status = 403;
                        object = {
                            response: {
                                message: 'Unauthorized, registrar is closed.'
                            }
                        };
                        return res.status(status).json(object);
                    }
                    break;
                case 'user':
                    doc = new User(title);
                    break;
                default:
                    status = 404;
                    object = {
                        response: {
                            message: 'Not found.'
                        }
                    };
                    return res.status(status).json(object);
            }
            const result = yield db.collection(namespace).insertOne(doc);
            const response = result['result']['ok'];
            if (response) {
                status = 200;
                object = {
                    response: {
                        message: 'Resource created.',
                        path: `/api/v1/${namespace}/${title}`,
                        token: token
                    }
                };
            }
            else {
                status = 400;
                object = {
                    response: {
                        message: 'Bad request.'
                    }
                };
            }
            // respond
            return res.status(status).json(object);
            // handle error
        }
        catch (err) {
            const status = 500;
            const object = {
                response: {
                    message: 'Server Error.'
                }
            };
            // log the error
            console.log(err.stack);
            // respond
            return res.status(status).json(object);
        }
    });
    exports.notAllowed = (req, res) => {
        try {
            const status = 405;
            const object = {
                response: {
                    message: 'Method not allowed.'
                }
            };
            return res.status(status).json(object);
            // handle error
        }
        catch (err) {
            const status = 500;
            const object = {
                response: {
                    message: 'Server Error.'
                }
            };
            // log the error
            console.log(err.stack);
            // respond
            return res.status(status).json(object);
        }
    };
})();
//# sourceMappingURL=post.v1.controller.js.map