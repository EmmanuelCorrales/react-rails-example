var SwitchMode = React.createClass({

  switchMode() {
    this.setState({ quiz: !this.state.quiz },
        (state) => { console.log(this.state.quiz) } );
  },

  render() {
    var mode = this.props.quiz ? "Switch to Management Mode":"Switch to Quiz Mode";
    return(
      <button onClick={this.props.onSwitch}>{mode}</button>
    )
  }
});
