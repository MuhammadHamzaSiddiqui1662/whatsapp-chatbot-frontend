import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Complaint } from "../../types/complaint";
import {
  getAllComplaints,
  updateComplaintStatus,
} from "../../services/complaints";
import { ComplaintStatus } from "../../enums";

export interface ComplaintState {
  complaints: Complaint[];
  pendingComplaints: Complaint[];
  inProgressComplaints: Complaint[];
  completedComplaints: Complaint[];
  archivedComplaints: Complaint[];
  isLoading: boolean;
  error: string;
}

const initialState: ComplaintState = {
  complaints: [],
  pendingComplaints: [],
  inProgressComplaints: [],
  completedComplaints: [],
  archivedComplaints: [],
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

export const updateComplaintStatusThunk = createAsyncThunk(
  "complaints/update-status",
  async ({ id, status }: { id: string; status: ComplaintStatus }) => {
    const complaints = await updateComplaintStatus(id, status);
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
      // getComplaints
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
          state.pendingComplaints = action.payload.filter(
            (complaint) => complaint.status === ComplaintStatus.Pending
          );
          state.inProgressComplaints = action.payload.filter(
            (complaint) => complaint.status === ComplaintStatus.InProgress
          );
          state.completedComplaints = action.payload.filter(
            (complaint) => complaint.status === ComplaintStatus.Completed
          );
          state.archivedComplaints = action.payload.filter(
            (complaint) => complaint.status === ComplaintStatus.Archived
          );
          state.isLoading = false;
        }
      );
  },
});

// Action creators are generated for each case reducer function
export const { setComplaints } = complaintSlice.actions;

export default complaintSlice.reducer;
