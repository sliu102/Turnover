import React, { Component } from 'react';

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      desc: ''
    };
  }
  render() {
    return (
      <div className="item-card">
        <image className="image"></image>
        <div className="description"></div>
      </div>
    );
  }
}
export default ItemCard;