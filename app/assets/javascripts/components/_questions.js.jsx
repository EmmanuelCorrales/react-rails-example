var Questions = React.createClass({
  render() {
		var questions = this.props.questions.map((question) => {
			return (
				<div key={question.id}>
					<h3>{question.content}</h3>
				</div>
			)
		});

    return(<div>{questions}</div>)
  }
});
