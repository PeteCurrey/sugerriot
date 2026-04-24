import { gql } from 'graphql-request';

export const CART_FRAGMENT = gql`
  fragment cart on Cart {
    id
    checkoutUrl
    totalQuantity
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              product {
                title
                handle
                featuredImage {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
    }
  }
`;

export const CREATE_CART_MUTATION = gql`
  mutation createCart($input: CartInput) {
    cartCreate(input: $input) {
      cart {
        ...cart
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const GET_CART_QUERY = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
      userErrors {
        message
        field
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
      userErrors {
        message
        field
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const UPDATE_CART_MUTATION = gql`
  mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
      userErrors {
        message
        field
      }
    }
  }
  ${CART_FRAGMENT}
`;
