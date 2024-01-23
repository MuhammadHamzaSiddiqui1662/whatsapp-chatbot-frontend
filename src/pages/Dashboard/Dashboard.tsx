import { Box, Grid, Typography } from "@mui/material";
import StatsCard from "../../components/StatsCard/StatsCard";
import { useAppSelector } from "../../config/store";
import { ComplaintStatus } from "../../enums";

export default function Dashboard() {
  const complaints = useAppSelector((state) => state.complaint.complaints);
  return (
    <Box p={4} display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StatsCard
            title="Pending"
            value={complaints
              .filter(
                (complaint) => complaint.status === ComplaintStatus.Pending
              )
              .length.toString()}
            variant="contained"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatsCard
            title="In Progress"
            value={complaints
              .filter(
                (complaint) => complaint.status === ComplaintStatus.InProgress
              )
              .length.toString()}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatsCard
            title="Completed"
            value={complaints
              .filter(
                (complaint) => complaint.status === ComplaintStatus.Completed
              )
              .length.toString()}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatsCard
            title="Archived"
            value={complaints
              .filter(
                (complaint) => complaint.status === ComplaintStatus.Archived
              )
              .length.toString()}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
