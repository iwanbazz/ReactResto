import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Query from '../components/Query'
import CATEGORIES_QUERY from '../queries/category/categories'

import messages from '../assets/Local/messages'
import RecipeReviewCard from '../components/RecipeReviewCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

function TabsButtonAuto() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {categories.map((category, i) => {
                    return <Tab label={category.name} {...a11yProps(i)} />
                  })}
                </Tabs>
              </AppBar>
              {categories.map((category, i) => {
                return (
                  <TabPanel value={value} index={i}>
                    {category.products.title}
                  </TabPanel>
                )
              })}
            </div>
          )
        }}
      </Query>
    </div>
  )
}

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
