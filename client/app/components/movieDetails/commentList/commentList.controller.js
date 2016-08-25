class CommentListController {
  constructor(Comments, $stateParams) {
    "ngInject";
    this.id = $stateParams.id;
    this.comments = Comments.getCommentsByMovieId(this.id);
  }
}

export default CommentListController;
