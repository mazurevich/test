import Comment from './comment';


let CommentFactory = function (moviesService) {
  "ngInject";
  const comments = [];

  let currentId = 0;

  let movies = moviesService.getMovies();

  for (let i = 0; i < movies.length; i++) {

    let commentCount = Math.floor(Math.random() * 10) + 3;
    for (let j = 0; j < commentCount; j++)
      comments.push( new Comment( currentId++, i,`author${j}`, `comment${j}`));
  }

  let getCommentsByMovieId = (movieId) => {
    return comments.filter((comment) => comment.movieId == movieId);
  };

  return {getCommentsByMovieId};
};

export default CommentFactory;
