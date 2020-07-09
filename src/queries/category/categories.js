import gql from 'graphql-tag'

const CATEGORIES_QUERY = gql`
  query {
    categories {
      id
      name
      products {
        title
        description
        price
        image {
          url
        }
      }
    }
  }
`

export default CATEGORIES_QUERY
