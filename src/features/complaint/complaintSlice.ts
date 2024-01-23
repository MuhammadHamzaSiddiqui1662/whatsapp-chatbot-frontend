import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Complaint } from "../../types/complaint";
import { getAllComplaints } from "../../services/complaints";

export interface ComplaintState {
  complaints: Complaint[];
  isLoading: boolean;
  error: string;
}

const initialState: ComplaintState = {
  complaints: [],
  isLoading: true,
  error: "",
};

export const getComplaintsThunk = createAsyncThunk(
  "complaints/get-all",
  async () => {
    const complaints = await getAllComplaints();
    return complaints;
  }
);

export const complaintSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    setComplaints: (state, action: PayloadAction<Complaint[]>) => {
      state.complaints = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // getSaleDeeds
      .addCase(getComplaintsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComplaintsThunk.rejected, (state) => {
        state.error = "Error while loading saledeeds";
        state.isLoading = false;
      })
      .addCase(
        getComplaintsThunk.fulfilled,
        (state, action: PayloadAction<Complaint[]>) => {
          state.complaints = action.payload;
          state.isLoading = false;
        }
      );
  },
});

// Action creators are generated for each case reducer function
export const { setComplaints } = complaintSlice.actions;

export default complaintSlice.reducer;
