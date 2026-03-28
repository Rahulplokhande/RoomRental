// const mongoose = require('mongoose');

// const propertySchema = new mongoose.Schema({
//     title: { type: String, required: true },  // Property Title
//     location: { type: String, required: true }, // Location Details
//     rent: { type: Number, required: true },  // Monthly Rent
//     deposit: { type: Number, required: true },  // Security Deposit
//     furnishing: { type: String, enum: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'], required: true }, // Furnishing Type
//     apartmentType: {
//         type: String,
//         enum: ['1 BHK', '1 RK','2 BHK', '3 BHK','4 BHK', 'Studio', 'Penthouse'], // Add '1 RK' here
//         required: true
//       },
//     preferredTenants: { type: [String], enum: ['Family', 'Bachelors', 'Female', 'Male'], required: true }, // Preferred Tenants
//     // image: { type: String }, // Image URL (optional)
//     image: {
//         data: Buffer,
//         contentType: String
//     },
//     ownerDetails: {
//         ownerName: { type: String, required: true },
//         ownerContact: { type: String, required: true },
//         ownerEmail: { type: String, required: true },
//         ownerAddress: { type: String, required: true }
//     }
// }, { timestamps: true });

// const Property = mongoose.model('Property', propertySchema);

// module.exports = Property;

// const mongoose = require('mongoose');

// const propertySchema = new mongoose.Schema({
//     title: { type: String, required: true },       // Property Title
//     location: { type: String, required: true },    // Location
//     rent: { type: Number, required: true },        // Monthly Rent

//     apartmentType: {
//         type: String,
//         enum: ['RK', '1 BHK', '2 BHK', '3 BHK'],
//         required: true
//     },

//     image: {
//         data: Buffer,
//         contentType: String
//     },

//     ownerDetails: {
//         ownerName: { type: String, required: true },
//         ownerContact: { type: String, required: true },
//         ownerEmail: { type: String, required: true },
//         ownerAddress: { type: String, required: true }
//     }
// }, { timestamps: true });

// const Property = mongoose.model('Property', propertySchema);

// module.exports = Property;

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },        // Property Title
    city: { type: String, required: true },         // City
    area: { type: String, required: true },     // Location (e.g., area/locality)
    rent: { type: Number, required: true },         // Monthly Rent

    apartmentType: {
        type: String,
        enum: ['RK', '1 BHK', '2 BHK', '3 BHK'],
        required: true
    },

    image: {
        data: Buffer,
        contentType: String
    },

    ownerDetails: {
        ownerName: { type: String, required: true },
        ownerContact: { type: String, required: true },
        ownerEmail: { type: String, required: true },
        ownerAddress: { type: String, required: true }
    }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
