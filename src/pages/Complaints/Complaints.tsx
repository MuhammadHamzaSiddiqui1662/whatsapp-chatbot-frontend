import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { useCallback, useEffect } from "react";
import {
  getComplaintsThunk,
  updateComplaintStatusThunk,
} from "../../features/complaint/complaintSlice";
import { Complaint, ComplaintStatus } from "../../enums";

export default function Complaints() {
  const { complaintId } = useParams();
  const complaint = useAppSelector((state) =>
    state.complaint.complaints.find(
      (complaint) => complaint._id.toString() === complaintId
    )
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComplaintsThunk());
  }, []);

  const handleClick = useCallback(() => {
    dispatch(
      updateComplaintStatusThunk({
        id: complaint?._id!,
        status:
          complaint?.status === ComplaintStatus.Pending
            ? ComplaintStatus.InProgress
            : complaint?.status === ComplaintStatus.InProgress
            ? ComplaintStatus.Completed
            : complaint?.status === ComplaintStatus.Completed
            ? ComplaintStatus.Archived
            : ComplaintStatus.Archived,
      })
    );
  }, [complaint]);

  return (
    <Box p={4} display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant="h4">Complaint Details</Typography>
      <Box
        border={2}
        borderColor={"primary.main"}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        p={2}
        borderRadius={2}
      >
        <Box display={"flex"} gap={1}>
          <Typography>Complaint no:</Typography>
          <Typography fontWeight={600}>{complaint?._id}</Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Type:</Typography>
          <Typography fontWeight={600}>
            {Complaint[complaint?.type!]}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Status:</Typography>
          <Typography fontWeight={600}>
            {ComplaintStatus[complaint?.status!]}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Block:</Typography>
          <Typography fontWeight={600}>{complaint?.block}</Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Address:</Typography>
          <Typography fontWeight={600}>{complaint?.house}</Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Date:</Typography>
          <Typography fontWeight={600}>
            {new Date(complaint?.date!).toLocaleString()}
          </Typography>
        </Box>
        <Button variant="contained" onClick={handleClick}>
          Mark as{" "}
          {complaint?.status === ComplaintStatus.Pending
            ? "In Progress"
            : complaint?.status === ComplaintStatus.InProgress
            ? "Completed"
            : complaint?.status === ComplaintStatus.Completed
            ? "Archived"
            : ""}
        </Button>
      </Box>
    </Box>
  );
}
