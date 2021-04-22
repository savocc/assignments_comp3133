const Hotel = require('./models/Hotel');
const User =  require('./models/User');
const Booking =  require('./models/Booking');

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.find({"hotel_name" : args.hotel_name});
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        },
        getBookings: async (parent, args) => {
            return await Booking.find(args);
        },
        getUser: async (parent, args) => {
            return await User.find({});
        },
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                email: args.email,
                postal_code: args.postal_code,
                city: args.city,
                street: args.street,
                price: args.price,
            });
        return await newHotel.save();
      },
      addUser: async (parent, args) => {
        console.log(args)
        const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
        
        if(!isValidEmail){
            throw new Error("email not in proper format")
        }

        let newUser = new User({
            user_id: args.user_id,
            username: args.username,
            email: args.email,
            password: args.password,
        });
    return await newUser.save();
  },
  
  addBooking: async (parent, args) => {
    console.log(args)

    let newBooking = new Booking({
        hotel_id: args.hotel_id,
        user_id: args.user_id,
        date: args.date,
        start: args.start,
        end: args.end,

    });
return await newBooking.save();
},
      updateHotel: async (parent, args) => {
            console.log(args)
            if (!args.hotel_id){
                return;
            }
            return await Hotel.findOneAndUpdate(
            {
                hotel_id: args.hotel_id
            },
            {
                $set: {
                    hotel_name: args.hotel_name,
                    email: args.email,
                    postal_code: args.postal_code,
                    city: args.city,
                    street: args.street,
                    price: args.price
                }
            }, {new: true}, (err, hotel) => {
                if (err) 
                {
                    console.log('Something went wrong when updating the Hotel');
                } else 
                {
                    return hotel
                }
            }
        );
      },
    }
  }