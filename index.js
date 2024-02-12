// objects 

// Objects methods
let user2 = {
    name: 'Sam',
    age: 30,
    email: 'sam@example.com',
    location: 'USA',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    }
};

user2.login();
user2.logout();

// The 'this' keyword
let user3 =
{
    name: 'Shaun',
    age: 30,
    email: 'shaun@gmail.com',
    location: 'USA',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],

    // use shorthand regular function syntax to define a method in an object instead of using the function keyword.
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },

    // this is a method that logs the blogs of the user
    // this keyword is used to refer to the object that the method is called on.
    // this keyword does not work with arrow functions.

    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user3.logBlogs();

// Array of objects inside an object
const user = {
    blogs: [{
        title: 'why mac & cheese rules',
        likes: 30
    }, {
        title: '10 things to make with marmite',
        likes: 50
    }],
    logBlogs2() {
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user.blogs); // Access the 'blogs' property of the 'user' object
user.logBlogs2(); // Call the 'logBlogs2' method
console.log(user.blogs[0].title); // Access the first blog title



