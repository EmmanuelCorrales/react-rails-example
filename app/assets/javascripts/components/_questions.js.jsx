var Questions = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(question) {
    this.props.onUpdate(question);
  },

  render() {
		var questions = this.props.questions.map((question) => {
			return (
        <Question key={question.id} question={question}
          handleDelete={this.handleDelete.bind(this, question.id)}
          handleUpdate={this.onUpdate} />
			)
		});

    return(
      <div>
        <h3>List of Q&A</h3>
        <table>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Answers</th>
            </tr>
          </thead>
          <tbody>{questions}</tbody>
        </table>
      </div>
    )
  }
});
