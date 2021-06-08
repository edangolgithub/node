("use strict");

module.exports.hello = async (event) => {
  var posts = {
    1: {
      id: "1",
      title: "First book",
      author: "Author1",
      url: "https://amazon.com/",
      content:
        "SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1",
      ups: "100",
      downs: "10",
    },
    2: {
      id: "2",
      title: "Second book",
      author: "Author2",
      url: "https://amazon.com",
      content: "SAMPLE TEXT AUTHOR 2 SAMPLE TEXT AUTHOR 2 SAMPLE TEXT",
      ups: "100",
      downs: "10",
    },
    3: {
      id: "3",
      title: "Third book",
      author: "Author3",
      url: null,
      content: null,
      ups: null,
      downs: null,
    },
    4: {
      id: "4",
      title: "Fourth book",
      author: "Author4",
      url: "https://www.amazon.com/",
      content:
        "SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4",
      ups: "1000",
      downs: "0",
    },
    5: {
      id: "5",
      title: "Fifth book",
      author: "Author5",
      url: "https://www.amazon.com/",
      content:
        "SAMPLE TEXT AUTHOR 5 SAMPLE TEXT AUTHOR 5 SAMPLE TEXT AUTHOR 5 SAMPLE TEXT AUTHOR 5 SAMPLE TEXT",
      ups: "50",
      downs: "0",
    },
  };

  var relatedPosts = {
    1: [posts["4"]],
    2: [posts["3"], posts["5"]],
    3: [posts["2"], posts["1"]],
    4: [posts["2"], posts["1"]],
    5: [],
  };
  switch (event.info.fieldName) {
    case "getPost":
      return posts[event.arguments.id];
    case "allPosts":
      var zack = [];
      for (var d in posts) {
        zack.push(posts[d]);
      }
      return zack;
    default:
      return { message: "you made mistake" };
  }
};
