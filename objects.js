function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User('koustub28@hotmail.com', 'Koustubh Muktibodh');
var userTwo = new User('kmbodh28@gmail.com', 'Km Bodh');
var admin = new Admin('admin07@yahoo.com', 'Admin');

var users = [userOne, userTwo, admin];

console.log(admin);