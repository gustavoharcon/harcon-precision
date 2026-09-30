import mongoose, { Schema, Document, Model } from 'mongoose';

export type QuoteStatus = 'PENDING' | 'REVIEWED' | 'QUOTED' | 'ARCHIVED';

export interface IQuoteRequest extends Document {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  filePath: string | null;
  fileName: string | null;
  status: QuoteStatus;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema = new Schema<IQuoteRequest>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    projectDetails: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      default: null,
    },
    fileName: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ['PENDING', 'REVIEWED', 'QUOTED', 'ARCHIVED'],
      default: 'PENDING',
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

export const QuoteRequest: Model<IQuoteRequest> =
  mongoose.models.QuoteRequest || mongoose.model<IQuoteRequest>('QuoteRequest', QuoteRequestSchema);

export default QuoteRequest;
