(() => {
    const express = require('express');
    const getV1Controller = require('../controllers/get.v1.controller');
    const postV1Controller = require('../controllers/post.v1.controller');
    const putV1Controller = require('../controllers/put.v1.controller');
    const deleteV1Controller = require('../controllers/delete.v1.controller');
    const patchV1Controller = require('../controllers/patch.v1.controller');
    const router = express.Router();
    // router test
    router.get('/v1/test/router/get', getV1Controller.test);
    router.get('/v1/test/router/post', postV1Controller.test);
    router.get('/v1/test/router/put', putV1Controller.test);
    router.get('/v1/test/router/delete', deleteV1Controller.test);
    router.get('/v1/test/router/patch', patchV1Controller.test);
    // GET methods
    //router.get('/v1/:nameSpace', getV1Controller.many);
    //router.get('/v1/:nameSpace/:title', getV1Controller.one);
    // POST methods
    router.post('/v1/:namespace', postV1Controller.one);
    //router.post('/v1/:nameSpace/:title', postV1Controller.notAllowed);
    // PUT methods
    //router.put('/v1/:nameSpace', putV1Controller.many);
    //router.put('/v1/:nameSpace/:title', putV1Controller.one);
    // DELETE methods
    //router.delete('/v1/:nameSpace/:title', deleteV1Controller.one);
    // PATCH methods
    module.exports = router;
})();
//# sourceMappingURL=api.router.js.map