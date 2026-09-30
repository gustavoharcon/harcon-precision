import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  imageUrl: string | null;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    fullDesc: {
      type: String,
      required: true,
    },
    bullets: {
      type: [String],
      default: [],
    },
    imageUrl: {
      type: String,
      default: null,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret: Record<string, any>) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
