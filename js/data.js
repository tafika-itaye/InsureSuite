window.SUITE_DATA = {
  dashboard: {
    kpis: [
      { label: 'Active Policies', value: '12,480', trend: '+6.4% month-on-month' },
      { label: 'Open Claims', value: '426', trend: '91% within SLA' },
      { label: 'Pending Transfers', value: '17', trend: '3 require escalation' },
      { label: 'Renewal Pipeline', value: 'MK 284M', trend: '73 policies due this week' }
    ],
    priorities: [
      { title: 'Transfer mismatch alerts', meta: '5 files transferred without signed receiving confirmation', badge: 'warning' },
      { title: 'Claims aging review', meta: '12 motor claims above 14 days pending approval', badge: 'danger' },
      { title: 'Renewal opportunity', meta: '34 commercial policies due in the next 10 days', badge: 'success' }
    ],
    activities: [
      { title: 'Branch Lilongwe reassigned Corporate Book A', meta: 'Approved by Operations Manager • 09:12' },
      { title: 'NICO Households dashboard exported', meta: 'Executive report pack • 08:43' },
      { title: 'Claims assessor uploaded 18 photos', meta: 'Claim CLM-24031 • 08:17' },
      { title: 'Renewal reminder batch sent', meta: 'Motor portfolio • 07:50' }
    ]
  },
  policies: [
    { id: 'POL-10442', holder: 'Nkhoma Logistics Ltd', product: 'Motor Fleet', premium: 'MK 18,400,000', branch: 'Lilongwe', status: 'Active', renewal: '12 Apr 2026' },
    { id: 'POL-10398', holder: 'Mwai Family Foods', product: 'Fire & Burglary', premium: 'MK 7,850,000', branch: 'Blantyre', status: 'Renewal Due', renewal: '06 Apr 2026' },
    { id: 'POL-10354', holder: 'Kawale Retail Chain', product: 'Public Liability', premium: 'MK 4,600,000', branch: 'Mzuzu', status: 'Under Review', renewal: '29 Apr 2026' },
    { id: 'POL-10220', holder: 'Tafika Agro Exports', product: 'Goods in Transit', premium: 'MK 9,200,000', branch: 'Lilongwe', status: 'Active', renewal: '18 May 2026' }
  ],
  claims: [
    { id: 'CLM-24031', client: 'Nkhoma Logistics Ltd', type: 'Motor Damage', reserve: 'MK 12,000,000', status: 'Assessment', age: '6 days', branch: 'Lilongwe' },
    { id: 'CLM-24011', client: 'Mwai Family Foods', type: 'Fire Loss', reserve: 'MK 23,500,000', status: 'Awaiting Approval', age: '14 days', branch: 'Blantyre' },
    { id: 'CLM-23992', client: 'Kawale Retail Chain', type: 'Burglary', reserve: 'MK 4,300,000', status: 'Documents Pending', age: '9 days', branch: 'Mzuzu' },
    { id: 'CLM-23975', client: 'Chifundo Traders', type: 'Accident Injury', reserve: 'MK 8,900,000', status: 'Settlement Ready', age: '11 days', branch: 'Lilongwe' }
  ],
  transfers: [
    { id: 'TRF-8804', asset: 'Corporate Portfolio A', from: 'Lilongwe Commercial Desk', to: 'Head Office Corporate', reason: 'Book rebalancing', status: 'Pending Approval', timestamp: '31 Mar 2026 • 09:12' },
    { id: 'TRF-8802', asset: 'Claim File CLM-23992', from: 'Mzuzu Claims', to: 'Blantyre Legal Review', reason: 'Complexity escalation', status: 'Transferred', timestamp: '30 Mar 2026 • 15:41' },
    { id: 'TRF-8798', asset: 'Policy Book Renewals Batch', from: 'Head Office', to: 'Lilongwe SME Unit', reason: 'Renewal campaign', status: 'Mismatch Alert', timestamp: '29 Mar 2026 • 11:23' }
  ],
  documents: [
    { name: 'Fleet schedule signed.pdf', owner: 'POL-10442', category: 'Policy', version: 'v3', status: 'Verified' },
    { name: 'Surveyor report fire-loss.docx', owner: 'CLM-24011', category: 'Claim', version: 'v1', status: 'Pending Review' },
    { name: 'Transfer note book-A.pdf', owner: 'TRF-8804', category: 'Transfer', version: 'v2', status: 'Awaiting Signature' },
    { name: 'KYC board-resolution.pdf', owner: 'CRM-2050', category: 'Client', version: 'v1', status: 'Archived' }
  ],
  crm: [
    { id: 'CRM-2050', client: 'Mwai Family Foods', owner: 'Relationship Manager', segment: 'Commercial', renewal: '06 Apr 2026', value: 'MK 7,850,000', status: 'Warm' },
    { id: 'CRM-2058', client: 'Tafika Agro Exports', owner: 'Broker Desk', segment: 'SME', renewal: '18 May 2026', value: 'MK 9,200,000', status: 'Upsell' },
    { id: 'CRM-2067', client: 'Chikondi Schools', owner: 'Branch Sales', segment: 'Institutional', renewal: '15 Apr 2026', value: 'MK 3,240,000', status: 'Follow-up' }
  ],
  reports: {
    packs: [
      { title: 'Executive daily control pack', summary: 'Claims aging, transfer exceptions, pending approvals, branch service status', completion: 92 },
      { title: 'Renewal opportunity board', summary: 'Renewals due, expected premium, response progress, lapse watchlist', completion: 78 },
      { title: 'Claims turnaround analysis', summary: 'SLA performance, assessor bottlenecks, settlement delay causes', completion: 84 }
    ]
  },
  settings: [
    { title: 'Approval Matrix', description: 'Define transfer, underwriting, and claims approval thresholds by branch and role.' },
    { title: 'Role Permissions', description: 'Control screen access, export rights, deletion rules, and audit-only visibility.' },
    { title: 'Branch Parameters', description: 'Configure branch codes, routing defaults, service targets, and ownership rules.' }
  ]
};
