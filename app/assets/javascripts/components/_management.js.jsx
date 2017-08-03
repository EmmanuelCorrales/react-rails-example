var Management = React.createClass({

  getInitialState() {
    return { questions: [] }
  },

  componentDidMount() {
    console.log('Component mounted');
    $.getJSON('/api/questions.json',
      (response) => {
        console.log(response);
        this.setState(
            { questions: response },
            (state) => { console.log(this.state.questions)}
        );
      }
    );
  },

  handleSubmit(question) {
    console.log(question);
    var newState = this.state.questions.concat(question);
    this.setState({ questions: newState });
  },

  handleUpdate(question) {
    $.ajax({
      url: `/api/questions/${question.id}`,
      type: 'PUT',
      data: { question: question },
      success: () => {
        this.updateQuestions(question);
      }
    });
  },

  updateQuestions(question) {
    var questions = this.state.questions.filter(
        (q) => { return question.id != q.id }
    );
    questions.push(question);

    this.setState({questions: questions});
  },

  handleDelete(id) {
    console.log('Delete question clicked.');
    $.ajax({
      url: `/api/questions/${id}`,
      type: 'DELETE',
      success: () => {
        console.log('Successfull deleted a question.');
        this.removeQuestion(id);
      }
    });
  },

  removeQuestion(id) {
    var newQuestions = this.state.questions.filter((question) => {
      return question.id != id;
    });

    this.setState({ questions: newQuestions});
  },

  render() {
		var questions = this.state.questions.map((question) => {
			return (
        <Question key={question.id} question={question}
          handleDelete={this.handleDelete.bind(this, question.id)}
          handleUpdate={this.onUpdate} />
			)
		});

    return(
      <div>
        <NewQuestion handleSubmit={this.handleSubmit} />
        <br/>
        <Questions questions={this.state.questions}
          handleDelete={this.handleDelete}
          onUpdate={this.handleUpdate} />
      </div>
    )
  }
});
