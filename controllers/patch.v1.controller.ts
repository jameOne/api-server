(() => {
    // test PATCH router functionality
    exports.test = (req, res): object => {
        return res.json({
            response: 'PUT router is functional'
        });
    };
})();