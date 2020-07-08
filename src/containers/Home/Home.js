import React from 'react'
import messages from './../../assets/Local/messages'
import RecipeReviewCard from '../../components/Cards/RecipeReviewCard'
import TabsButtonAuto from '../../components/Controls/Tabs/CategoryTabs'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    const { lang } = this.props
    const message = messages[lang]
    return (
      //   <div className="container my-5">
      //     <p>{message.home.content}</p>
      //   </div>
      <div>
        <div>
          <TabsButtonAuto />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: 'auto',
            justifyContent: 'space-between',
          }}
        >
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps, null)(Home)
