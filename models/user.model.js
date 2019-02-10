(() => {
    const Document = require('./base.model').Document;
    exports.User = class User extends Document {
        constructor(handle, // twitter handle
        hashedPw, // bcrypt hash of user password
        user // incase we want to pull a user from db
        ) {
            super('user', handle, user);
            if (user) {
                this._handle = user['title'];
                this._hashedPw = user['hashedPw'];
            }
            else {
                this._handle = handle;
                this._hashedPw = hashedPw;
            }
        }
        get handle() {
            return this._handle;
        }
        set handle(newHandle) {
            this._handle = newHandle;
        }
        get password() {
            return this._hashedPw;
        }
        set password(hashedPw) {
            this._hashedPw = hashedPw;
        }
    };
})();
//# sourceMappingURL=user.model.js.map