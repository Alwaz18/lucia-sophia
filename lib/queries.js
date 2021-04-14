import { gql } from "@apollo/client";

const GET_PRODUCT_SLUGS = gql`
query ProductSlugs{
  products{
    slug
  }
}
`

const GET_PRODUCT_DETAILS = gql`
query ProductDetail($slug: String!){
  products(where: {slug: $slug}){
    slug
    title
    hot
    new
    price
    description
    inStock
    productDescription
    image{
      url
    }
    meta_title
    meta_description
    productLink
    perks
    reviews{
      id
      name
      date
      testimonial
      feature
  }
  }
}`

const GET_ABOUT_US = gql`
  query About {
    aboutUs {
      title
      about
      logo{
        url
      }
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
query {
  products{
    id
    title
    description
    price
    inStock
    slug
    productLink
    new
    hot
    heroImg{
      url
    }
  }
}
`;

const GET_LANDING_PAGE = gql`
  query Landing {
    
    landingPage{
    title
    tagline
  }
  products{
    id
    title
    description
    price
    inStock
    slug
    productLink
    new
    hot
    heroImg{
      url
    }
  }

  }
`;


export { GET_LANDING_PAGE, GET_ALL_PRODUCTS, GET_ABOUT_US, GET_PRODUCT_SLUGS, GET_PRODUCT_DETAILS };
