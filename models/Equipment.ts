import mongoose, { Schema, Document, Model } from 'mongoose';

export type EquipmentCategory = 'SHEET_METAL' | 'CNC_MACHINING' | 'SOFTWARE_QC';

export interface IEquipment extends Document {
  id: string;
  category: EquipmentCategory;
  title: string;
  specifications: string;
  description: string;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const EquipmentSchema = new Schema<IEquipment>(
  {
    category: {
      type: String,
      enum: ['SHEET_METAL', 'CNC_MACHINING', 'SOFTWARE_QC'],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    specifications: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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

export const Equipment: Model<IEquipment> =
  mongoose.models.Equipment || mongoose.model<IEquipment>('Equipment', EquipmentSchema);

export default Equipment;
