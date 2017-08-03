var Body = React.createClass({

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
    return (
      <div>
        <NewQuestion handleSubmit={this.handleSubmit} />
        <Questions questions={this.state.questions} handleDelete={this.handleDelete} />
      </div>
    )
  }
});
