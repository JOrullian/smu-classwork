// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.

class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem{
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Create a new object using the Comment class constructor.

const newComment = new Comment(
  ''
)

// TODO: Create a new object using the BlogPost class constructor.

const newBlogPost = new BlogPost (
  ''
)

// TODO: Log both newly created BlogPost and Comment to the console.
