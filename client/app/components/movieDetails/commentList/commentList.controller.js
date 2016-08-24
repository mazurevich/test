class CommentListController {
  constructor(commentsSrv, $stateParams) {
    this.id = $stateParams.id;
    this.comments = commentsSrv.getCommentsByMovieId(this.id);
    // this.comments =[{author: 'asdf', text: 'asdf'}];
  }
}
CommentListController.$inject = ['Comments','$stateParams'];
export default CommentListController;
