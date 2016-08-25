class CommentListController {
  constructor(commentsSrv, $stateParams) {
    "ngInject";
    this.id = $stateParams.id;
    this.comments = commentsSrv.getCommentsByMovieId(this.id);
  }
}

export default CommentListController;
