import gql from 'graphql-tag'

const CATEGORIES_QUERY = gql`
  query {
    product {
      id
      title
      description
      price
      image {
        url
      }
      categories {
        id
      }
    }
  }
`

export default CATEGORIES_QUERY
