import Users from 'both/collection/user';

export default function () {
    if (Users.find().cursor.count() === 0) {
        Accounts.createUser({
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin'
        });
    }
}