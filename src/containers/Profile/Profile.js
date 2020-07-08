import React from 'react'
import messages from './../../assets/Local/messages'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render() {
    const { lang } = this.props
    const message = messages[lang]
    return (
      <div className="container my-5">
        <p>{message.profile}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps, null)(Profile)
