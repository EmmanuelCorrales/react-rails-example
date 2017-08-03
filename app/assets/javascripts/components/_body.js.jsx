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

  render() {
    return (
      <div>
        <Questions questions={this.state.questions} />
      </div>
    )
  }
});
