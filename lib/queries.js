import { gql } from "@apollo/client";

const GET_PRODUCT_SLUGS = gql`
query ProductSlugs{
  products{
    slug
  }
}
`

const GET_VIDEO = gql`
query Video{
  playbackvideo{
  video{
    url
  }
  thumbnail{
    url
  }
}
}`

const GET_ALL_REVIEWS = gql`
query AllReviews{
  reviews{
    name
    testimonial
    feature
    date

  }
}`
const GET_ONE_CATEGORY = gql`
query Category{
  categories{
  name
  id
}  

}`


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
  categories{
name
id

}
}
`;

const GET_CATEGORY = gql`
query Categories($name: String!){
  categories(where: {name: $name}){
    name
     products{
      title
      description
      price
      inStock
      heroImg{
        url
      }
      productLink
      slug
      new
      meta_description
    }
  }
}`
const GET_LANDING_PAGE = gql`
  query Landing {
    
    landingPage{
    title
    tagline
  }
  playbackvideo{
  video{
    url
  }
  thumbnail{
    url
  }
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
  gallery{
  imageOne{
    url
  }
  captionOne
  imageTwo{
    url
  }
  captionTwo
}

  }
`;




export { GET_LANDING_PAGE, GET_ALL_PRODUCTS, GET_ABOUT_US, GET_PRODUCT_SLUGS, GET_CATEGORY, GET_PRODUCT_DETAILS, GET_ALL_REVIEWS, GET_ONE_CATEGORY };
