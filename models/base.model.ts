(() => {
    const appspace = require('../bin/config').appspace;

    exports.Document = class Document {
        created: Date;
        key: string;
        namespace: string;
        title: string;
        constructor(
            namespace: string,
            title: string,
            document?: Document
            ) {
            if (document) {
                this.created = document.created;
                this.key = document.key;
            } else {
                this.created = new Date();
                this.key = `${appspace}.${namespace}.${title}`;
            }
        }
    }
})();