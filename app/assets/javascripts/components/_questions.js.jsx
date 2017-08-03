var Questions = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
		var questions = this.props.questions.map((question) => {
			return (
				<div key={question.id}>
					<h3>{question.content}</h3>
          <button onClick={this.handleDelete.bind(this, question.id)} >Delete</button>
				</div>
			)
		});

    return(<div>{questions}</div>)
  }
});
