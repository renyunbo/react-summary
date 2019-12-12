
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/actions/couter';

class Counter extends Component {
  render() {
    const {counter: { count },increment,decrement,reset} = this.props;
    return (
      <div>
        <div>
          当前计数为:
          {count}
        </div>
        <button onClick={() => increment()}>自增</button>
        <button onClick={() => decrement()}>自减</button>
        <button onClick={() => reset()}>重置</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
//connect函数作用是从Redux state树种读取部分数据，并通过props来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props

