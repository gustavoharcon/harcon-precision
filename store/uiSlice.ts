import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  mobileMenuOpen: boolean;
  activeEquipmentTab: 'SHEET_METAL' | 'CNC_MACHINING' | 'SOFTWARE_QC';
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeEquipmentTab: 'SHEET_METAL',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setActiveEquipmentTab: (
      state,
      action: PayloadAction<'SHEET_METAL' | 'CNC_MACHINING' | 'SOFTWARE_QC'>
    ) => {
      state.activeEquipmentTab = action.payload;
    },
  },
});

export const { toggleMobileMenu, setMobileMenuOpen, setActiveEquipmentTab } = uiSlice.actions;
export default uiSlice.reducer;
