export enum RoleType {
  KDA = 1,
  User = 2,
  CityCourt = 3,
  DCO = 4,
  RD = 5,
}

export enum SortDirection {
  ASC = 0,
  DESC = 1,
}

export enum Gender {
  Male = 1,
  Female = 2,
  Other = 3,
}

export enum Service {
  Complaint,
  Tracking,
  Inquiry,
}

export enum Complaint {
  Sewerage,
  StreetLight,
  Sanitation,
}

export enum ComplaintStatus {
  Pending,
  InProgress,
  Completed,
  Backlog,
  Archived,
}
