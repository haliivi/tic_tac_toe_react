import './App.css';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  isWinner = (e) => {
    let s = (this.state.count % 2 === 0) ?  'X' : 'O';
    for (let i = 0; i < 8; i++ ) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s &&
          this.state.squares[line[1]] === s &&
          this.state.squares[line[2]] === s) {
            alert(s + ' win');
            setTimeout(() => {
              this.setState({
                squares: Array(9).fill(null),
                count: 0,
              })
            }, 3000)
          }
    };
  }

  clickHandler = (e) => {
    let data = e.target.getAttribute('data'),
        currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ?  'X' : 'O';
      this.setState({
        squares: currentSquares,
        count: this.state.count + 1,
      });
    } else {
      alert('Так нельзя!!!');
    };
    this.isWinner();
  }

  render () {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-grid" data="0" onClick={this.clickHandler}>{this.state.squares[0]}</div>
        <div className="ttt-grid" data="1" onClick={this.clickHandler}>{this.state.squares[1]}</div>
        <div className="ttt-grid" data="2" onClick={this.clickHandler}>{this.state.squares[2]}</div>
        <div className="ttt-grid" data="3" onClick={this.clickHandler}>{this.state.squares[3]}</div>
        <div className="ttt-grid" data="4" onClick={this.clickHandler}>{this.state.squares[4]}</div>
        <div className="ttt-grid" data="5" onClick={this.clickHandler}>{this.state.squares[5]}</div>
        <div className="ttt-grid" data="6" onClick={this.clickHandler}>{this.state.squares[6]}</div>
        <div className="ttt-grid" data="7" onClick={this.clickHandler}>{this.state.squares[7]}</div>
        <div className="ttt-grid" data="8" onClick={this.clickHandler}>{this.state.squares[8]}</div>
      </div>
    );
  }
}

export default App;
