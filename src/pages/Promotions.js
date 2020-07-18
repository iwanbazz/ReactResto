import React from 'react'
import messages from '../assets/Local/messages'
import { connect } from 'react-redux'

class Promotions extends React.Component {
  render() {
    const { lang } = this.props
    const message = messages[lang]
    return (
      <div className="container my-5">
        <p>{message.promotions}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps, null)(Promotions)
