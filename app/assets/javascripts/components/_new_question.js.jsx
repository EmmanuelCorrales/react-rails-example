var NewQuestion = React.createClass({

  handleClick() {
    var content = this.refs.content.value;
    var answer = this.refs.answer.value;
    $.ajax({
      url: '/api/questions',
      type: 'POST',
      data: { question: { content: content, answer: answer } },
      success: (question) => {
        this.props.handleSubmit(question);
        console.log('it worked!', question);
      }
    });
  },

  render() {
    return (
      <div>
        <h3>New question.</h3>
        <input ref='content' placeholder='Question'/>
        <input ref='answer' placeholder='Answer'/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
});
