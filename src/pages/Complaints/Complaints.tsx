import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { useCallback, useEffect, useState } from "react";
import {
  getComplaintsThunk,
  updateComplaintStatusThunk,
} from "../../features/complaint/complaintSlice";
import { ComplaintStatus } from "../../enums";
import {
  getBlockTitle,
  getComplaintStatusTitle,
  getComplaintTypeTitle,
} from "../../utils";
import { getComplainant } from "../../services/complaints";
import { Complainant } from "../../types/user";

export default function Complaints() {
  const { complaintId } = useParams();
  const [complainant, setComplainant] = useState<Complainant | null>(null);
  const complaint = useAppSelector((state) =>
    state.complaint.complaints.find(
      (complaint) => complaint.id.toString() === complaintId
    )
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComplaintsThunk());
  }, []);

  useEffect(() => {
    (async () => {
      const temp = await getComplainant(complaint?.complainantId!);
      setComplainant(temp);
      console.log(temp);
    })();
  }, [complaint]);

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
          <Typography fontWeight={600}>{complaint?.id}</Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Type:</Typography>
          <Typography fontWeight={600}>
            {getComplaintTypeTitle(complaint?.type!)}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Status:</Typography>
          <Typography fontWeight={600}>
            {getComplaintStatusTitle(complaint?.status!)}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Phone Number:</Typography>
          <Typography fontWeight={600}>{complainant?.mobile!}</Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>Block:</Typography>
          <Typography fontWeight={600}>
            {getBlockTitle(complaint?.block!)}
          </Typography>
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
        <Box display={"flex"} gap={1}>
          <Typography>Name:</Typography>
          <Typography fontWeight={600}>{complainant?.name!}</Typography>
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
