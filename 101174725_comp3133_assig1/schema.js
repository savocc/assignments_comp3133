const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: Int!
     hotel_name: String!
     email: String!
     postal_code: String!
     city: String!
     street: String!
     price: Float!
   }

   type User {
    user_id: Int!
    username: String!
    password: String!
    email: String!
  }

  type Booking {
    hotel_id: Int
    user_id: Int
    date: String
    start: String
    end: String
  }

   type Query {
     getHotel: [Hotel]
     getUser:[User]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getBookings: [Booking]
   }

   type Mutation {
     addHotel(
        hotel_id: Int!
        hotel_name: String!
        email: String!
        postal_code: String!
        city: String!
        street: String!
        price: Float!): Hotel

     updateHotel(id: String!,
        hotel_id: Int!
        hotel_name: String!
        email: String!
        postal_code: String!
        city: String!
        street: String!
        price: Float!): Hotel

     addUser(
        user_id: Int!
        username: String!
        password: String!
        email: String!): User

     addBooking(
        hotel_id: Int!
        user_id: Int!
        date: String!
        start: String!
        end: String!): Booking
    }
`