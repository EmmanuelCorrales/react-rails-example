var Question = React.createClass({

  getInitialState() {
    return {editable: false}
  },

  handleEdit() {
    if(this.state.editable) {
      var id = this.props.question.id;
      var content = this.refs.content.value;
      var answer = this.refs.answer.value;
      var question = { id: id, content: content, answer: answer };
      this.props.handleUpdate(question);
      console.log('in handleEdit', this.state.editable, content, answer);
    }
    this.setState({editable: !this.state.editable})
  },

  render() {
    var content = this.state.editable ? 
      <input type='text' ref='content' defaultValue={this.props.question.content} /> :
        <p>{this.props.question.content}</p>;

    var answer = this.state.editable ? 
      <input type='text' ref='answer'  defaultValue={this.props.question.answer} /> :
        <p>{this.props.question.answer}</p>;

    return (
      <tr>
        <td>{content}</td>
        <td>{answer}</td>
        <td><button onClick={this.props.handleDelete} >Delete</button></td>
        <td>
          <button onClick={this.handleEdit}>
            {this.state.editable ? 'Update' : 'Edit'}
          </button>
        </td>
      </tr>
    )
  }
});
