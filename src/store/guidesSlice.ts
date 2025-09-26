import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guide, GuideStatus } from '../Interfaces/types';

interface GuidesState {
  guides: Guide[];
  selectedHistory: Guide | null;
}

const initialState: GuidesState = {
  guides: [],
  selectedHistory: null,
};

export const guidesSlice = createSlice({
  name: 'guides',
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<Guide>) => {
      state.guides.push(action.payload);
    },
    updateGuideStatus: (state, action: PayloadAction<{ index: number; newStatus: GuideStatus }>) => {
      const { index, newStatus } = action.payload;
      const guide = state.guides[index];
      if (guide.status !== newStatus) {
        guide.status = newStatus;
        guide.history.push({
          status: newStatus,
          timestamp: new Date().toLocaleString(),
        });
      }
    },
    updateAllStatuses: (state, action: PayloadAction<GuideStatus[]>) => {
      state.guides.forEach((guide, i) => {
        if (guide.status !== action.payload[i]) {
          guide.status = action.payload[i];
          guide.history.push({
            status: action.payload[i],
            timestamp: new Date().toLocaleString(),
          });
        }
      });
    },
    setSelectedHistory: (state, action: PayloadAction<Guide | null>) => {
      state.selectedHistory = action.payload;
    },
  },
});

export const { addGuide, updateGuideStatus, updateAllStatuses, setSelectedHistory } = guidesSlice.actions;

export default guidesSlice.reducer;