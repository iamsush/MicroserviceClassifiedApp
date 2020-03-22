import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListingSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

const Listing = mongoose.model('Listing', ListingSchema);

export default Listing;