import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuoteDraft {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  filesSelected: string[];
}

interface QuoteState {
  draft: QuoteDraft;
  isSubmitting: boolean;
  submitSuccess: boolean;
  error: string | null;
}

const initialState: QuoteState = {
  draft: {
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    filesSelected: [],
  },
  isSubmitting: false,
  submitSuccess: false,
  error: null,
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    updateDraft: (state, action: PayloadAction<Partial<QuoteDraft>>) => {
      state.draft = { ...state.draft, ...action.payload };
    },
    resetDraft: (state) => {
      state.draft = initialState.draft;
      state.submitSuccess = false;
      state.error = null;
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setSubmitSuccess: (state, action: PayloadAction<boolean>) => {
      state.submitSuccess = action.payload;
      state.error = null;
    },
    setSubmitError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.submitSuccess = false;
    },
  },
});

export const { updateDraft, resetDraft, setSubmitting, setSubmitSuccess, setSubmitError } = quoteSlice.actions;
export default quoteSlice.reducer;
