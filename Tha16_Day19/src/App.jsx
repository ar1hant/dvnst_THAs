import React from 'react';
// const ErrorComp = () => <div>{props.ignore}</div>

export default class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter : 0
    }
    this.increment = () => this.setState({counter: (this.state.counter+1)})
  }

  render() {
    console.log('render_method');
    return (
        <button onClick={this.increment}><div className="buttons_div">{this.state.counter}</div></button>
    )
  }

  // static getDerivedStateFromProps(props, state) {
  //   return null;
  // }

  // componentDidMount() {
  //   console.log("did_mount");
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("do_render");
  //   return true;
  // }

  // getSnapshotBeforeUpdate(props, prevState) {
  //   console.log("snapshot_bef_update");
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot){
  //   console.log("did_update");
  //   console.log("----------");
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // componentDidCatch(error, info){
  //   console.log("component_did_catch");
  //   this.setState({error, info});
  // }
}