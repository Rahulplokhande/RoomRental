// // const fs = require('fs');
// // const path = require('path');

// // // Helper function to read image buffer
// // const getImageBuffer = (filename) => ({
// //   data: fs.readFileSync(path.join(__dirname, '../public/images', filename)),
// //   contentType: 'image/avif'
// // });

// // const data = [
// //   {
// //     title: "3 BHK House For Rent In Hinjewadi Phase 1",
// //     location: "Independent House, Near Wipro Company",
// //     rent: 50000,
// //     deposit: 150000,
// //     builtup: 1500,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "3 BHK",
// //     preferredTenants: ["Family", "Female"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent1.avif"),
// //     ownerDetails: {
// //       ownerName: "Rajesh Sharma",
// //       ownerContact: "9876543210",
// //       ownerEmail: "rajesh@example.com",
// //       ownerAddress: "Hinjewadi, Pune"
// //     }
// //   },
// //   {
// //     title: "2 BHK Flat For Rent In Baner",
// //     location: "Apartment, Near Balewadi High Street",
// //     rent: 35000,
// //     deposit: 100000,
// //     builtup: 1100,
// //     furnishing: "Semi Furnished",
// //     apartmentType: "2 BHK",
// //     preferredTenants: ["Family", "Male"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent2.avif"),
// //     ownerDetails: {
// //       ownerName: "Sneha Patil",
// //       ownerContact: "9123456789",
// //       ownerEmail: "sneha@example.com",
// //       ownerAddress: "Baner, Pune"
// //     }
// //   },
// //   {
// //     title: "1 BHK Studio Apartment In Koregaon Park",
// //     location: "Luxury Apartment, Near Osho Garden",
// //     rent: 25000,
// //     deposit: 75000,
// //     builtup: 700,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "1 BHK",
// //     preferredTenants: ["Bachelors", "Female"],
// //     availableFrom: "Next Month",
// //     image: getImageBuffer("rent3.avif"),
// //     ownerDetails: {
// //       ownerName: "Aarav Mehta",
// //       ownerContact: "9988776655",
// //       ownerEmail: "aarav@example.com",
// //       ownerAddress: "Koregaon Park, Pune"
// //     }
// //   },
// //   {
// //     title: "4 BHK Duplex Villa In Kalyani Nagar",
// //     location: "Independent Villa, Near Gold Gym",
// //     rent: 85000,
// //     deposit: 250000,
// //     builtup: 3000,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "4 BHK",
// //     preferredTenants: ["Family"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent4.avif"),
// //     ownerDetails: {
// //       ownerName: "Nisha Kamat",
// //       ownerContact: "9911223344",
// //       ownerEmail: "nisha@example.com",
// //       ownerAddress: "Kalyani Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "2 BHK House For Rent In Wakad",
// //     location: "Apartment, Near Phoenix Mall",
// //     rent: 40000,
// //     deposit: 120000,
// //     builtup: 1200,
// //     furnishing: "Semi Furnished",
// //     apartmentType: "2 BHK",
// //     preferredTenants: ["Family", "Male"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent5.avif"),
// //     ownerDetails: {
// //       ownerName: "Vikram Jadhav",
// //       ownerContact: "9001122334",
// //       ownerEmail: "vikram@example.com",
// //       ownerAddress: "Wakad, Pune"
// //     }
// //   },
// //   {
// //     title: "3 BHK House For Rent In Hinjewadi Phase 1",
// //     location: "Independent House, Near Wipro Company",
// //     rent: 50000,
// //     deposit: 150000,
// //     builtup: 1500,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "3 BHK",
// //     preferredTenants: ["Family", "Female"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent1.avif"),
// //     ownerDetails: {
// //       ownerName: "Rajesh Sharma",
// //       ownerContact: "9876543210",
// //       ownerEmail: "rajesh@example.com",
// //       ownerAddress: "Hinjewadi, Pune"
// //     }
// //   },
// //   {
// //     title: "2 BHK Flat For Rent In Baner",
// //     location: "Apartment, Near Balewadi High Street",
// //     rent: 35000,
// //     deposit: 100000,
// //     builtup: 1100,
// //     furnishing: "Semi Furnished",
// //     apartmentType: "2 BHK",
// //     preferredTenants: ["Family", "Male"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent2.avif"),
// //     ownerDetails: {
// //       ownerName: "Sneha Patil",
// //       ownerContact: "9123456789",
// //       ownerEmail: "sneha@example.com",
// //       ownerAddress: "Baner, Pune"
// //     }
// //   },
// //   {
// //     title: "1 BHK Studio Apartment In Koregaon Park",
// //     location: "Luxury Apartment, Near Osho Garden",
// //     rent: 25000,
// //     deposit: 75000,
// //     builtup: 700,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "1 BHK",
// //     preferredTenants: ["Bachelors", "Female"],
// //     availableFrom: "Next Month",
// //     image: getImageBuffer("rent3.avif"),
// //     ownerDetails: {
// //       ownerName: "Aarav Mehta",
// //       ownerContact: "9988776655",
// //       ownerEmail: "aarav@example.com",
// //       ownerAddress: "Koregaon Park, Pune"
// //     }
// //   },
// //   {
// //     title: "4 BHK Duplex Villa In Kalyani Nagar",
// //     location: "Independent Villa, Near Gold Gym",
// //     rent: 85000,
// //     deposit: 250000,
// //     builtup: 3000,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "4 BHK",
// //     preferredTenants: ["Family"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent4.avif"),
// //     ownerDetails: {
// //       ownerName: "Nisha Kamat",
// //       ownerContact: "9911223344",
// //       ownerEmail: "nisha@example.com",
// //       ownerAddress: "Kalyani Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "2 BHK House For Rent In Wakad",
// //     location: "Apartment, Near Phoenix Mall",
// //     rent: 40000,
// //     deposit: 120000,
// //     builtup: 1200,
// //     furnishing: "Semi Furnished",
// //     apartmentType: "2 BHK",
// //     preferredTenants: ["Family", "Male"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent5.avif"),
// //     ownerDetails: {
// //       ownerName: "Vikram Jadhav",
// //       ownerContact: "9001122334",
// //       ownerEmail: "vikram@example.com",
// //       ownerAddress: "Wakad, Pune"
// //     }
// //   },
// //   {
// //     title: "3 BHK Apartment in Aundh",
// //     location: "Near DAV Public School",
// //     rent: 52000,
// //     deposit: 160000,
// //     builtup: 1450,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "3 BHK",
// //     preferredTenants: ["Family", "Male"],
// //     availableFrom: "Next Week",
// //     image: getImageBuffer("rent6.avif"),
// //     ownerDetails: {
// //       ownerName: "Meena Kulkarni",
// //       ownerContact: "8080808080",
// //       ownerEmail: "meena@example.com",
// //       ownerAddress: "Aundh, Pune"
// //     }
// //   },
// //   {
// //     title: "1 RK For Rent In Shivaji Nagar",
// //     location: "Behind Fergusson College",
// //     rent: 18000,
// //     deposit: 50000,
// //     builtup: 450,
// //     furnishing: "Unfurnished",
// //     apartmentType: "1 RK",
// //     preferredTenants: ["Bachelors"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent7.avif"),
// //     ownerDetails: {
// //       ownerName: "Rohit Deshmukh",
// //       ownerContact: "9990008887",
// //       ownerEmail: "rohit@example.com",
// //       ownerAddress: "Shivaji Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "2 BHK Flat For Rent In Pimple Saudagar",
// //     location: "Near Govind Garden",
// //     rent: 30000,
// //     deposit: 90000,
// //     builtup: 1000,
// //     furnishing: "Semi Furnished",
// //     apartmentType: "2 BHK",
// //     preferredTenants: ["Family"],
// //     availableFrom: "Next Month",
// //     image: getImageBuffer("rent8.avif"),
// //     ownerDetails: {
// //       ownerName: "Ankita Joshi",
// //       ownerContact: "9322114455",
// //       ownerEmail: "ankita@example.com",
// //       ownerAddress: "Pimple Saudagar, Pune"
// //     }
// //   },
// //   {
// //     title: "3 BHK Penthouse In Viman Nagar",
// //     location: "Near Symbiosis College",
// //     rent: 75000,
// //     deposit: 200000,
// //     builtup: 2000,
// //     furnishing: "Fully Furnished",
// //     apartmentType: "3 BHK",
// //     preferredTenants: ["Family", "Female"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent9.avif"),
// //     ownerDetails: {
// //       ownerName: "Siddharth Kale",
// //       ownerContact: "8888999900",
// //       ownerEmail: "sid@example.com",
// //       ownerAddress: "Viman Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "2 BHK House In Hadapsar",
// //     location: "Near Magarpatta City",
// //     rent: 32000,
// //     deposit: 95000,
// //     builtup: 1050,
// //     furnishing: "Semi Furnished",
// //     apartmentType: "2 BHK",
// //     preferredTenants: ["Family", "Male"],
// //     availableFrom: "Ready to Move",
// //     image: getImageBuffer("rent10.avif"),
// //     ownerDetails: {
// //       ownerName: "Priya Rane",
// //       ownerContact: "9766554433",
// //       ownerEmail: "priya@example.com",
// //       ownerAddress: "Hadapsar, Pune"
// //     }
// //   }
// //   // Add more objects similarly (rent6.avif to rent10.avif)
// // ];

// // module.exports = { data };

// // const fs = require('fs');
// // const path = require('path');

// // const getImageBuffer = (filename) => ({
// //   data: fs.readFileSync(path.join(__dirname, '../public/images', filename)),
// //   contentType: 'image/avif'
// // });

// // const data = [
// //   {
// //     title: "Aarav Heights",
// //     location: "Kodoli",
// //     rent: 25000,
// //     apartmentType: "1 BHK",
// //     image: getImageBuffer("rent12.avif"),
// //     ownerDetails: {
// //       ownerName: "Aarav Mehta",
// //       ownerContact: "9988776655",
// //       ownerEmail: "aarav@example.com",
// //       ownerAddress: "Koregaon Park, Pune"
// //     }
// //   },
// //   {
// //     title: "Sanskriti Residency",
// //     location: "Warananagar",
// //     rent: 35000,
// //     apartmentType: "2 BHK",
// //     image: getImageBuffer("rent13.avif"),
// //     ownerDetails: {
// //       ownerName: "Sneha Patil",
// //       ownerContact: "9123456789",
// //       ownerEmail: "sneha@example.com",
// //       ownerAddress: "Baner, Pune"
// //     }
// //   },
// //   {
// //     title: "Tranquil Greens",
// //     location: "Amruthnagar",
// //     rent: 85000,
// //     apartmentType: "2 BHK",
// //     image: getImageBuffer("rent14.avif"),
// //     ownerDetails: {
// //       ownerName: "Nisha Kamat",
// //       ownerContact: "9911223344",
// //       ownerEmail: "nisha@example.com",
// //       ownerAddress: "Kalyani Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "Vaibhav Enclave",
// //     location: "Bahirewadi",
// //     rent: 50000,
// //     apartmentType: "3 BHK",
// //     image: getImageBuffer("rent15.avif"),
// //     ownerDetails: {
// //       ownerName: "Rajesh Sharma",
// //       ownerContact: "9876543210",
// //       ownerEmail: "rajesh@example.com",
// //       ownerAddress: "Hinjewadi, Pune"
// //     }
// //   },
// //   {
// //     title: "Amara Residency",
// //     location: "Pargoan",
// //     rent: 40000,
// //     apartmentType: "2 BHK",
// //     image: getImageBuffer("rent11.avif"),
// //     ownerDetails: {
// //       ownerName: "Vikram Jadhav",
// //       ownerContact: "9001122334",
// //       ownerEmail: "vikram@example.com",
// //       ownerAddress: "Wakad, Pune"
// //     }
// //   },
// //   {
// //     title: "The Lotus Grove",
// //     location: "Kodoli",
// //     rent: 52000,
// //     apartmentType: "3 BHK",
// //     image: getImageBuffer("rent16.avif"),
// //     ownerDetails: {
// //       ownerName: "Meena Kulkarni",
// //       ownerContact: "8080808080",
// //       ownerEmail: "meena@example.com",
// //       ownerAddress: "Aundh, Pune"
// //     }
// //   },
// //   {
// //     title: "Swarna Heights",
// //     location: "Warananagar",
// //     rent: 18000,
// //     apartmentType: "RK",
// //     image: getImageBuffer("rent17.avif"),
// //     ownerDetails: {
// //       ownerName: "Rohit Deshmukh",
// //       ownerContact: "9990008887",
// //       ownerEmail: "rohit@example.com",
// //       ownerAddress: "Shivaji Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "Aranya Towers",
// //     location: "Amruthnagar",
// //     rent: 30000,
// //     apartmentType: "2 BHK",
// //     image: getImageBuffer("rent21.avif"),
// //     ownerDetails: {
// //       ownerName: "Ankita Joshi",
// //       ownerContact: "9322114455",
// //       ownerEmail: "ankita@example.com",
// //       ownerAddress: "Pimple Saudagar, Pune"
// //     }
// //   },
// //   {
// //     title: "Divine Meadows",
// //     location: "Bahirewadi",
// //     rent: 75000,
// //     apartmentType: "3 BHK",
// //     image: getImageBuffer("rent19.avif"),
// //     ownerDetails: {
// //       ownerName: "Siddharth Kale",
// //       ownerContact: "8888999900",
// //       ownerEmail: "sid@example.com",
// //       ownerAddress: "Viman Nagar, Pune"
// //     }
// //   },
// //   {
// //     title: "Gulmohar Grande",
// //     location: "Pargoan",
// //     rent: 32000,
// //     apartmentType: "2 BHK",
// //     image: getImageBuffer("rent11.avif"),
// //     ownerDetails: {
// //       ownerName: "Priya Rane",
// //       ownerContact: "9766554433",
// //       ownerEmail: "priya@example.com",
// //       ownerAddress: "Hadapsar, Pune"
// //     }
// //   }
// // ];


// const fs = require('fs');
// const path = require('path');

// const getImageBuffer = (filename) => ({
//   data: fs.readFileSync(path.join(__dirname, '../public/images', filename)),
//   contentType: 'image/avif'
// });

// const data = [
//   // {
//   //   title: "Aarav Heights",
//   //   city: "Kodoli",
//   //   area: "Near Bank Of India",
//   //   rent: 25000,
//   //   apartmentType: "1 BHK",
//   //   image: getImageBuffer("rent12.avif"),
//   //   ownerDetails: {
//   //     ownerName: "Aarav Mehta",
//   //     ownerContact: "9988776655",
//   //     ownerEmail: "aarav@example.com",
//   //     ownerAddress: "Koregaon Park, Pune"
//   //   }
//   // },
//   {
//     title: "Sanskriti Residency",
//     city: "Warananagar",
//     area: "Nurutti Colony",
//     rent: 35000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent13.avif"),
//     ownerDetails: {
//       ownerName: "Sneha Patil",
//       ownerContact: "9123456789",
//       ownerEmail: "sneha@example.com",
//       ownerAddress: "Baner, Pune"
//     }
//   },
//   {
//     title: "The Lotus Grove",
//     city: "Kodoli",
//     area: "Shendey Colony",
//     rent: 52000,
//     apartmentType: "3 BHK",
//     image: getImageBuffer("rent16.avif"),
//     ownerDetails: {
//       ownerName: "Meena Kulkarni",
//       ownerContact: "8080800080",
//       ownerEmail: "meena@example.com",
//       ownerAddress: "Aundh, Pune"
//     }},
//   {
//     title: "Tranquil Greens",
//     city: "Amruthnagar",
//     area: "Near Ganesh Mandir",
//     rent: 85000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent14.avif"),
//     ownerDetails: {
//       ownerName: "Nisha Kamat",
//       ownerContact: "9911223344",
//       ownerEmail: "nisha@example.com",
//       ownerAddress: "Kalyani Nagar, Pune"
//     }
//   },
//   {
//     title: "Vaibhav Enclave",
//     city: "Bahirewadi",
//     area: "Near Bhairoba Mandir",
//     rent: 50000,
//     apartmentType: "3 BHK",
//     image: getImageBuffer("rent15.avif"),
//     ownerDetails: {
//       ownerName: "Rajesh Sharma",
//       ownerContact: "9876543210",
//       ownerEmail: "rajesh@example.com",
//       ownerAddress: "Hinjewadi, Pune"
//     }
//   },
//   {
//     title: "Amara Residency",
//     city: "Pargoan",
//     area: "Near Bus Stop",
//     rent: 40000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent11.avif"),
//     ownerDetails: {
//       ownerName: "Vikram Jadhav",
//       ownerContact: "9001122334",
//       ownerEmail: "vikram@example.com",
//       ownerAddress: "Wakad, Pune"
//     }
//   },

//   {
//     title: "Swarna Heights",
//     city: "Warananagar",
//     area: "Near SBI Bank",
//     rent: 18000,
//     apartmentType: "RK",
//     image: getImageBuffer("rent17.avif"),
//     ownerDetails: {
//       ownerName: "Rohit Deshmukh",
//       ownerContact: "9990008887",
//       ownerEmail: "rohit@example.com",
//       ownerAddress: "Shivaji Nagar, Pune"
//     }
//   },
//   {
//     title: "Aranya Towers",
//     city: "Amruthnagar",
//     area: "Near Garud Chukk",
//     rent: 30000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent21.avif"),
//     ownerDetails: {
//       ownerName: "Ankita Joshi",
//       ownerContact: "9322114455",
//       ownerEmail: "ankita@example.com",
//       ownerAddress: "Pimple Saudagar, Pune"
//     }
//   },
//   {
//     title: "Divine Meadows",
//     city: "Bahirewadi",
//     area: "Satyvati Colony",
//     rent: 75000,
//     apartmentType: "3 BHK",
//     image: getImageBuffer("rent19.avif"),
//     ownerDetails: {
//       ownerName: "Siddharth Kale",
//       ownerContact: "8888999900",
//       ownerEmail: "sid@example.com",
//       ownerAddress: "Viman Nagar, Pune"
//     }
//   },
//   {
//     title: "Gulmohar Grande",
//     city: "Pargoan",
//     area: "Near Bus Stop",
//     rent: 32000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent11.avif"),
//     ownerDetails: {
//       ownerName: "Priya Rane",
//       ownerContact: "9766554433",
//       ownerEmail: "priya@example.com",
//       ownerAddress: "Hadapsar, Pune"
//     }
//   },
// {
//     title: "Aarav Heights",
//     city: "Kodoli",
//     area: "Near Bank Of India",
//     rent: 25000,
//     apartmentType: "1 BHK",
//     image: getImageBuffer("rent12.avif"),
//     ownerDetails: {
//       ownerName: "Aarav Mehta",
//       ownerContact: "9988776655",
//       ownerEmail: "aarav@example.com",
//       ownerAddress: "Koregaon Park, Pune"
//     }
//   },
//   {
//     title: "Sanskriti Residency",
//     city: "Warananagar",
//     area: "Nurutti Colony",
//     rent: 35000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent13.avif"),
//     ownerDetails: {
//       ownerName: "Sneha Patil",
//       ownerContact: "9123456789",
//       ownerEmail: "sneha@example.com",
//       ownerAddress: "Baner, Pune"
//     }
//   },
//   {
//     title: "Tranquil Greens",
//     city: "Amruthnagar",
//     area: "Near Ganesh Mandir",
//     rent: 85000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent14.avif"),
//     ownerDetails: {
//       ownerName: "Nisha Kamat",
//       ownerContact: "9911223344",
//       ownerEmail: "nisha@example.com",
//       ownerAddress: "Kalyani Nagar, Pune"
//     }
//   },
//   {
//     title: "Vaibhav Enclave",
//     city: "Bahirewadi",
//     area: "Near Bhairoba Mandir",
//     rent: 50000,
//     apartmentType: "3 BHK",
//     image: getImageBuffer("rent15.avif"),
//     ownerDetails: {
//       ownerName: "Rajesh Sharma",
//       ownerContact: "9876543210",
//       ownerEmail: "rajesh@example.com",
//       ownerAddress: "Hinjewadi, Pune"
//     }
//   },
//   {
//     title: "Amara Residency",
//     city: "Pargoan",
//     area: "Near Bus Stop",
//     rent: 40000,
//     apartmentType: "2 BHK",
//     image: getImageBuffer("rent11.avif"),
//     ownerDetails: {
//       ownerName: "Vikram Jadhav",
//       ownerContact: "9001122334",
//       ownerEmail: "vikram@example.com",
//       ownerAddress: "Wakad, Pune"
//     }
//   }
// ];

// module.exports = { data };



const fs = require('fs');
const path = require('path');

const getImageBuffer = (filename) => ({
  data: fs.readFileSync(path.join(__dirname, '../../frontend/public/images', filename)),
  contentType: 'image/avif'
});

const data = [
  {
    title: "Aarav Heights",
    city: "Kodoli",
    area: "Near Bank Of India",
    rent: 25000,
    apartmentType: "1 BHK",
    image: getImageBuffer("rent12.avif"),
    ownerDetails: {
      ownerName: "Aarav Mehta",
      ownerContact: "9988776655",
      ownerEmail: "aarav@example.com",
      ownerAddress: "Koregaon Park, Pune"
    }
  },
  {
    title: "Sanskriti Residency",
    city: "Warananagar",
    area: "Nurutti Colony",
    rent: 35000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent13.avif"),
    ownerDetails: {
      ownerName: "Sneha Patil",
      ownerContact: "9123456789",
      ownerEmail: "sneha@example.com",
      ownerAddress: "Baner, Pune"
    }
  },
  {
    title: "Tranquil Greens",
    city: "Amruthnagar",
    area: "Near Ganesh Mandir",
    rent: 85000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent14.avif"),
    ownerDetails: {
      ownerName: "Nisha Kamat",
      ownerContact: "9911223344",
      ownerEmail: "nisha@example.com",
      ownerAddress: "Kalyani Nagar, Pune"
    }
  },
  {
    title: "Vaibhav Enclave",
    city: "Bahirewadi",
    area: "Near Bhairoba Mandir",
    rent: 50000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent15.avif"),
    ownerDetails: {
      ownerName: "Rajesh Sharma",
      ownerContact: "9876543210",
      ownerEmail: "rajesh@example.com",
      ownerAddress: "Hinjewadi, Pune"
    }
  },
  {
    title: "Amara Residency",
    city: "Pargoan",
    area: "Near Bus Stop",
    rent: 40000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent11.avif"),
    ownerDetails: {
      ownerName: "Vikram Jadhav",
      ownerContact: "9001122334",
      ownerEmail: "vikram@example.com",
      ownerAddress: "Wakad, Pune"
    }
  },
  {
    title: "The Lotus Grove",
    city: "Kodoli",
    area: "Shendey Colony",
    rent: 52000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent16.avif"),
    ownerDetails: {
      ownerName: "Meena Kulkarni",
      ownerContact: "8080808080",
      ownerEmail: "meena@example.com",
      ownerAddress: "Aundh, Pune"
    }
  },
  {
    title: "Swarna Heights",
    city: "Warananagar",
    area: "Near SBI Bank",
    rent: 18000,
    apartmentType: "RK",
    image: getImageBuffer("rent17.avif"),
    ownerDetails: {
      ownerName: "Rohit Deshmukh",
      ownerContact: "9990008887",
      ownerEmail: "rohit@example.com",
      ownerAddress: "Shivaji Nagar, Pune"
    }
  },
  {
    title: "Aranya Towers",
    city: "Amruthnagar",
    area: "Near Garud Chukk",
    rent: 30000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent21.avif"),
    ownerDetails: {
      ownerName: "Ankita Joshi",
      ownerContact: "9322114455",
      ownerEmail: "ankita@example.com",
      ownerAddress: "Pimple Saudagar, Pune"
    }
  },
  {
    title: "Divine Meadows",
    city: "Bahirewadi",
    area: "Satyvati Colony",
    rent: 75000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent19.avif"),
    ownerDetails: {
      ownerName: "Siddharth Kale",
      ownerContact: "8888999900",
      ownerEmail: "sid@example.com",
      ownerAddress: "Viman Nagar, Pune"
    }
  },
  {
    title: "Gulmohar Grande",
    city: "Pargoan",
    area: "Near Bus Stop",
    rent: 32000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent11.avif"),
    ownerDetails: {
      ownerName: "Priya Rane",
      ownerContact: "9766554433",
      ownerEmail: "priya@example.com",
      ownerAddress: "Hadapsar, Pune"
    }
  },
    {
    title: "Sanskriti Residency",
    city: "Warananagar",
    area: "Nurutti Colony",
    rent: 35000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent13.avif"),
    ownerDetails: {
      ownerName: "Sneha Patil",
      ownerContact: "9123456789",
      ownerEmail: "sneha@example.com",
      ownerAddress: "Baner, Pune"
    }
  },
  {
    title: "The Lotus Grove",
    city: "Kodoli",
    area: "Shendey Colony",
    rent: 52000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent16.avif"),
    ownerDetails: {
      ownerName: "Meena Kulkarni",
      ownerContact: "8080800080",
      ownerEmail: "meena@example.com",
      ownerAddress: "Aundh, Pune"
    }},
  {
    title: "Tranquil Greens",
    city: "Amruthnagar",
    area: "Near Ganesh Mandir",
    rent: 85000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent14.avif"),
    ownerDetails: {
      ownerName: "Nisha Kamat",
      ownerContact: "9911223344",
      ownerEmail: "nisha@example.com",
      ownerAddress: "Kalyani Nagar, Pune"
    }
  },
  {
    title: "Vaibhav Enclave",
    city: "Bahirewadi",
    area: "Near Bhairoba Mandir",
    rent: 50000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent15.avif"),
    ownerDetails: {
      ownerName: "Rajesh Sharma",
      ownerContact: "9876543210",
      ownerEmail: "rajesh@example.com",
      ownerAddress: "Hinjewadi, Pune"
    }
  },
  {
    title: "Amara Residency",
    city: "Pargoan",
    area: "Near Bus Stop",
    rent: 40000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent11.avif"),
    ownerDetails: {
      ownerName: "Vikram Jadhav",
      ownerContact: "9001122334",
      ownerEmail: "vikram@example.com",
      ownerAddress: "Wakad, Pune"
    }
  },

  {
    title: "Swarna Heights",
    city: "Warananagar",
    area: "Near SBI Bank",
    rent: 18000,
    apartmentType: "RK",
    image: getImageBuffer("rent17.avif"),
    ownerDetails: {
      ownerName: "Rohit Deshmukh",
      ownerContact: "9990008887",
      ownerEmail: "rohit@example.com",
      ownerAddress: "Shivaji Nagar, Pune"
    }
  },
  {
    title: "Aranya Towers",
    city: "Amruthnagar",
    area: "Near Garud Chukk",
    rent: 30000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent21.avif"),
    ownerDetails: {
      ownerName: "Ankita Joshi",
      ownerContact: "9322114455",
      ownerEmail: "ankita@example.com",
      ownerAddress: "Pimple Saudagar, Pune"
    }
  },
  {
    title: "Divine Meadows",
    city: "Bahirewadi",
    area: "Satyvati Colony",
    rent: 75000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent19.avif"),
    ownerDetails: {
      ownerName: "Siddharth Kale",
      ownerContact: "8888999900",
      ownerEmail: "sid@example.com",
      ownerAddress: "Viman Nagar, Pune"
    }
  },
  {
    title: "Gulmohar Grande",
    city: "Pargoan",
    area: "Near Bus Stop",
    rent: 32000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent11.avif"),
    ownerDetails: {
      ownerName: "Priya Rane",
      ownerContact: "9766554433",
      ownerEmail: "priya@example.com",
      ownerAddress: "Hadapsar, Pune"
    }
  },
{
    title: "Aarav Heights",
    city: "Kodoli",
    area: "Near Bank Of India",
    rent: 25000,
    apartmentType: "1 BHK",
    image: getImageBuffer("rent12.avif"),
    ownerDetails: {
      ownerName: "Aarav Mehta",
      ownerContact: "9988776655",
      ownerEmail: "aarav@example.com",
      ownerAddress: "Koregaon Park, Pune"
    }
  },
  {
    title: "Sanskriti Residency",
    city: "Warananagar",
    area: "Nurutti Colony",
    rent: 35000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent13.avif"),
    ownerDetails: {
      ownerName: "Sneha Patil",
      ownerContact: "9123456789",
      ownerEmail: "sneha@example.com",
      ownerAddress: "Baner, Pune"
    }
  },
  {
    title: "Tranquil Greens",
    city: "Amruthnagar",
    area: "Near Ganesh Mandir",
    rent: 85000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent14.avif"),
    ownerDetails: {
      ownerName: "Nisha Kamat",
      ownerContact: "9911223344",
      ownerEmail: "nisha@example.com",
      ownerAddress: "Kalyani Nagar, Pune"
    }
  },
  {
    title: "Vaibhav Enclave",
    city: "Bahirewadi",
    area: "Near Bhairoba Mandir",
    rent: 50000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent15.avif"),
    ownerDetails: {
      ownerName: "Rajesh Sharma",
      ownerContact: "9876543210",
      ownerEmail: "rajesh@example.com",
      ownerAddress: "Hinjewadi, Pune"
    }
  },
  {
    title: "Amara Residency",
    city: "Pargoan",
    area: "Near Bus Stop",
    rent: 40000,
    apartmentType: "2 BHK",
    image: getImageBuffer("rent11.avif"),
    ownerDetails: {
      ownerName: "Vikram Jadhav",
      ownerContact: "9001122334",
      ownerEmail: "vikram@example.com",
      ownerAddress: "Wakad, Pune"
    }
  },
  {
    title: "The manas",
    city: "pune",
    area: "Shendey Colony",
    rent: 89000,
    apartmentType: "3 BHK",
    image: getImageBuffer("rent16.avif"),
    ownerDetails: {
      ownerName: "Meena Kulkarni",
      ownerContact: "8080808080",
      ownerEmail: "meena@example.com",
      ownerAddress: "Aundh, Pune"
    }
  }
];


module.exports = { data };