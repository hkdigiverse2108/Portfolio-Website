import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  videoUrl: string | null;
}

const initialState: VideoState = {
  videoUrl: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    openVideoModal: (state, action: PayloadAction<string>) => {
      state.videoUrl = action.payload;
    },
    closeVideoModal: (state) => {
      state.videoUrl = null;
    },
  },
});

export const { openVideoModal, closeVideoModal } = videoSlice.actions;

export default videoSlice.reducer;
