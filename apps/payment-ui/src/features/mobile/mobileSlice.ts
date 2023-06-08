import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const mobileSlice = createSlice({
    name: 'mobile',
    initialState: {
        isMobile: false, // 640 is the breakpoint for sm in tailwind by default
    },
    reducers: {
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
    },
});

export const { setIsMobile } = mobileSlice.actions;

export default mobileSlice.reducer;

export const getIsMobile = (state: RootState): boolean => state.mobile.isMobile;