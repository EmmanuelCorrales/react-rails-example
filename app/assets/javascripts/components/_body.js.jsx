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

  render() {
    return (
      <div>
        <NewQuestion handleSubmit={this.handleSubmit} />
        <Questions questions={this.state.questions} />
      </div>
    )
  }
});
