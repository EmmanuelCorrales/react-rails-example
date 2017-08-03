var Body = React.createClass({

  getInitialState() {
    return { quiz: false }
  },

  switchMode() {
    this.setState({ quiz: !this.state.quiz});
  },

  render() {
    var quiz = <div>QUIZ MODE</div>;
    var management = <Management/>

    return (
      <div>
        <SwitchMode quiz={this.state.quiz}
                    onSwitch={this.switchMode} />
        {this.state.quiz == true? quiz:management}
      </div>
    )
  }

});
