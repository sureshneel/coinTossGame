// Write your code here
import {Component} from 'react'

import './index.css'

const tossList = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, toss: 0}

  tossClickButton = () => {
    const {total, heads, tails} = this.state
    const randomIndex = Math.floor(Math.random() * tossList.length)

    if (randomIndex === 0) {
      this.setState({
        total: total + 1,
        heads: heads + 1,
        toss: randomIndex,
      })
    } else {
      this.setState({
        total: total + 1,
        tails: tails + 1,
        toss: randomIndex,
      })
    }
  }

  render() {
    const {total, heads, tails, toss} = this.state
    return (
      <div className="toss-bg-container">
        <div className="toss-card">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="image-toss-prediction"> Heads (or) Tails </p>
          <img src={tossList[toss]} className="toss-image" alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.tossClickButton}
          >
            Toss coin
          </button>
          <p className="display-result">{`Total: ${total}   Heads: ${heads}   Tails: ${tails}`}</p>
        </div>
      </div>
    )
  }
}
export default CoinToss
