(() => {
    const appspace = require('../bin/config').appspace;
    exports.Document = class Document {
        constructor(namespace, title, document) {
            if (document) {
                this.created = document.created;
                this.key = document.key;
            }
            else {
                this.created = new Date();
                this.key = `${appspace}.${namespace}.${title}`;
            }
        }
    };
})();
//# sourceMappingURL=base.model.js.map