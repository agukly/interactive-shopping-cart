import React, { Component} from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  renderItems() {
    if (this.state.tags.length === 0) return <p>Your cart is empty</p>

    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
  };

  render() {
    return (
      <div>
        <h5>{this.props.id}</h5>
        <span className={this.changeBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn m-2 btn-secondary btn-sm">
          +
          </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm">
          -
          </button>
          <button
          onClick ={() => this.props.onDelete(this.props.counter.id)}
          className="btn m-2 btn-danger btn-sm">
          Delete
          </button>
      </div>
      );
  }

  changeBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes
  }


  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }



}

export default Counter
