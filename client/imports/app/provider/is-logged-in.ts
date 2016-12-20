const IsLoggedIn = {
    provide: 'isLoggedIn',
    useValue: () => !!Meteor.userId()
};

export default IsLoggedIn;