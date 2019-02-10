(() => {
    const Document = require('./base.model').Document;
    exports.User = class User extends Document {
        _handle: string;
        _hashedPw: string;
        user: object;
        constructor(
            handle: string, // twitter handle
            hashedPw?: string, // bcrypt hash of user password
            user?: object // incase we want to pull a user from db
        ) {
            super(
                'user',
                handle,
                user
            );
            if (user) {
                this._handle = user['title'];
                this._hashedPw = user['hashedPw'];
            } else {
                this._handle = handle;
                this._hashedPw = hashedPw;
            }
        }
        get handle() {
            return this._handle;
        }
        set handle(newHandle: string) {
            this._handle = newHandle;
        }
        get password() {
            return this._hashedPw;
        }
        set password(hashedPw: string) {
            this._hashedPw = hashedPw;
        }
    }
})();