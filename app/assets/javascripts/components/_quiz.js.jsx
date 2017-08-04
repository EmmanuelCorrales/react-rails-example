var Quiz = React.createClass({

  getInitialState() {
    return { questions: [] }
  },

  componentDidMount() {
    $.getJSON('/api/questions',
      (response) => {
        console.log(response);
        this.setState(
            { questions: response },
            (state) => { console.log(this.state.questions)}
        );
      }
    );
  },

  onClick() {
    Object.values(this.refs).forEach(key => {
      key.checkAnswer();
    });
  },

  render() {
		var questions = this.state.questions.map((question) => {
			return (
        <QuizItem ref={question.id} key={question.id} question={question} />
			)
		});

    return (
        <div>
          {questions}
          <button onClick={this.onClick} >
            Check Answers
          </button>
        </div>
    )
  }
})
