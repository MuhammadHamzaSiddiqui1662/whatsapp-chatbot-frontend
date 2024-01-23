import { Box, Typography } from "@mui/material";
import StickyHeadTable from "../../components/StickyHeaderTable/StickyHeaderTable";
import { useNavigate } from "react-router-dom";
import { COLUMNS, ROUTES, SEARCH_PARAMS } from "../../config/constants";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { Data } from "../../types/complaint";
import { formatRows } from "../../utils";
import { useEffect } from "react";
import { getComplaintsThunk } from "../../features/complaint/complaintSlice";

export default function Complaints() {
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.complaint.complaints);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComplaintsThunk());
  }, []);

  const handleRowClick = (row: Data) => {
    // navigate(`../${row.id}?${SEARCH_PARAMS.status}=${ROUTES.inProgress}`);
  };

  return (
    <Box p={4}>
      <Typography variant="h4">Complaints</Typography>
      <StickyHeadTable
        columns={COLUMNS}
        rows={formatRows(data || [])}
        onRowClick={handleRowClick}
        sx={{
          mt: 5,
        }}
      />
    </Box>
  );
}
