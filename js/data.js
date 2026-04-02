// Dummy data for InsureSuite
window.data = {
  branches: [
    { id: 1, name: "Head Office – Blantyre", code: "BO" },
    { id: 2, name: "Lilongwe Branch",        code: "LW" },
    { id: 3, name: "Mzuzu Branch",           code: "MZ" },
  ],

  users: [
    { id: 1, name: "Chris Kanyuka Jr", role: "SuperAdmin",  branch: 1 },
    { id: 2, name: "Jane Moyo",         role: "BranchManager", branch: 2 },
    { id: 3, name: "Tom Chilima",       role: "Underwriter",  branch: 1 },
    { id: 4, name: "Grace Banda",       role: "ClaimsHandler", branch: 1 },
    { id: 5, name: "Paul Mwale",        role: "FrontDesk",    branch: 3 },
    { id: 6, name: "Linda Phiri",       role: "ReadOnly",     branch: 2 },
  ],

  policies: [
    { id: 101, policyNo: "POL-2025-001", class: "Motor", branch: 1, status: "Active",  customer: "Nyasa Insurance Agency" },
    { id: 102, policyNo: "POL-2025-002", class: "Fire",  branch: 2, status: "Active",  customer: "City Mall Ltd" },
    { id: 103, policyNo: "POL-2025-003", class: "Motor", branch: 1, status: "Lapsed",  customer: "AutoPlus Ltd" },
    { id: 104, policyNo: "POL-2025-004", class: "Motor", branch: 3, status: "Active",  customer: "Rural Transport Co-op" },
    { id: 105, policyNo: "POL-2025-005", class: "Fire",  branch: 2, status: "Active",  customer: "GreenGrocers Ltd" },
  ],

  claims: [
    { id: 201, claimNo: "CLM-2025-001", policy: 101, lossDate: "2025-03-15", status: "Registered" },
    { id: 202, claimNo: "CLM-2025-002", policy: 102, lossDate: "2025-03-20", status: "Assessing" },
    { id: 203, claimNo: "CLM-2025-003", policy: 104, lossDate: "2025-03-25", status: "Approved" },
    { id: 204, claimNo: "CLM-2025-004", policy: 105, lossDate: "2025-03-28", status: "Closed" },
    { id: 205, claimNo: "CLM-2025-005", policy: 101, lossDate: "2025-04-01", status: "Registered" },
  ],

  renewalsDue30Days: 12,

  pendingApprovals: 5,

  slaBreaches: 2,

  pendingTransfers: 3,

  openClaims: 3,

};
