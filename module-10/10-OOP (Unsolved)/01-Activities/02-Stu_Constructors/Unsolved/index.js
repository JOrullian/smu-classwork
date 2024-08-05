// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

function BlogPost (authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;

    // TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

    this.printMetaData = function() {
        // By adding 'this.' to the beginning of the template literals, you can grab the values if they are ever updated after creating the object from the constructor.
        console.log(`Created by ${this.authorName} on ${this.createdOn}.`)
    };
}

// TODO: Create a new object using the 'BlogPost' constructor

const newBlogPost = new BlogPost ('Jedediah', 'Happy Trails!', 'Wish you the best.', 'June 1, 2020')

// TODO: Call the 'printMetaData()' method on the new object

newBlogPost.printMetaData();
