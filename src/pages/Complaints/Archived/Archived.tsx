import { Box, Typography } from "@mui/material";
import StickyHeadTable from "../../../components/StickyHeaderTable/StickyHeaderTable";
import { useNavigate } from "react-router-dom";
import { COLUMNS, ROUTES, SEARCH_PARAMS } from "../../../config/constants";
import { useAppDispatch, useAppSelector } from "../../../config/store";
import { Data } from "../../../types/complaint";
import { formatRows } from "../../../utils";
import { useEffect } from "react";
import { getComplaintsThunk } from "../../../features/complaint/complaintSlice";

export default function ArchivedComplaints() {
  const navigate = useNavigate();
  const complaints = useAppSelector(
    (state) => state.complaint.archivedComplaints
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComplaintsThunk());
  }, []);

  const handleRowClick = (row: Data) => {
    navigate(`../${row.id}?${SEARCH_PARAMS.status}=${ROUTES.archived}`);
  };

  return (
    <Box p={4}>
      <Typography variant="h4">Archived Complaints</Typography>
      <StickyHeadTable
        columns={COLUMNS}
        rows={formatRows(complaints || [])}
        onRowClick={handleRowClick}
        sx={{
          mt: 5,
        }}
      />
    </Box>
  );
}
