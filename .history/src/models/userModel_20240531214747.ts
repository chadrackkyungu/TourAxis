import mongoose from 'mongoose';

const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, " The URL is required"],
    trim: true,
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
},
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

export default ShortUrl;
