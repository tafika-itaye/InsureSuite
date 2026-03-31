const data = window.SUITE_DATA;
const viewRoot = document.getElementById('viewRoot');
const viewTitle = document.getElementById('viewTitle');
const sidebar = document.getElementById('sidebar');
const drawer = document.getElementById('detailDrawer');
const drawerTitle = document.getElementById('drawerTitle');
const drawerBody = document.getElementById('drawerBody');

const titles = {
  dashboard: 'Executive Dashboard',
  policies: 'Policy Administration',
  claims: 'Claims Management',
  transfers: 'Portfolio Transfer Control',
  documents: 'Document & Records',
  crm: 'CRM & Renewals',
  reports: 'Executive Reporting',
  settings: 'Administration Settings'
};

function badgeClass(status=''){
  const s = status.toLowerCase();
  if (s.includes('active') || s.includes('verified') || s.includes('transferred') || s.includes('warm')) return 'success';
  if (s.includes('pending') || s.includes('review') || s.includes('due') || s.includes('upsell')) return 'warning';
  if (s.includes('mismatch') || s.includes('alert')) return 'danger';
  return 'info';
}

function openDrawer(title, blocks){
  drawerTitle.textContent = title;
  drawerBody.innerHTML = blocks.map(block => `
    <div class="detail-block">
      <strong>${block.title}</strong>
      <div>${block.body}</div>
    </div>
  `).join('');
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer(){
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}

document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
drawer.addEventListener('click', (e) => { if(e.target === drawer) closeDrawer(); });
document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.toggle('open'));

function makeTable(headers, rows, detailMapper){
  const table = `
    <div class="table-wrap">
      <table>
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map((row, i) => `
            <tr data-detail-index="${i}" class="click-row">
              ${row.map(cell => `<td>${cell}</td>`).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
  queueMicrotask(() => {
    document.querySelectorAll('.click-row').forEach((tr, idx) => {
      tr.style.cursor = 'pointer';
      tr.onclick = () => detailMapper(Number(tr.dataset.detailIndex));
    });
  });
  return table;
}

function renderDashboard(){
  const { kpis, priorities, activities } = data.dashboard;
  return `
    <div class="grid kpis">
      ${kpis.map(k => `
        <div class="card kpi">
          <span class="label">${k.label}</span>
          <span class="value">${k.value}</span>
          <span class="trend">${k.trend}</span>
        </div>`).join('')}
    </div>

    <div class="two-col">
      <div class="card">
        <div class="panel-title"><div><h3>Priority control issues</h3><p>Immediate attention items across branches.</p></div><button class="ghost-btn">Open queue</button></div>
        <div class="list">
          ${priorities.map(item => `
            <div class="list-item">
              <div><strong>${item.title}</strong><div class="meta">${item.meta}</div></div>
              <span class="badge ${badgeClass(item.badge)}">${item.badge}</span>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="panel-title"><div><h3>Recent activity</h3><p>Live operational events.</p></div><button class="link-btn" onclick="navigate('reports')">See reports</button></div>
        <div class="list">
          ${activities.map(a => `
            <div class="list-item"><div><strong>${a.title}</strong><div class="meta">${a.meta}</div></div><button class="link-btn">View</button></div>`).join('')}
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:18px;">
      <div class="panel-title"><div><h3>Suite overview</h3><p>The mockup combines control, servicing, and reporting workflows.</p></div></div>
      <div class="module-grid">
        ${[
          ['Policy Admin','Quote-to-renewal flow, endorsements, issuance and policy history.',83],
          ['Claims','FNOL, investigation, reserve handling and settlement visibility.',76],
          ['Transfer Control','Source deduction, destination assignment, approvals and audit trail.',94],
          ['Documents','Indexed files, versioning, ownership status and retrieval.',88],
          ['CRM & Renewals','Client profile, renewal pipeline, reminders and growth opportunities.',71],
          ['Reporting','Executive dashboards, branch KPIs, SLA and exception monitoring.',86]
        ].map(m => `<div class="module-card"><div class="eyebrow">Module</div><h4>${m[0]}</h4><p>${m[1]}</p><div class="metric-line"><span style="width:${m[2]}%"></span></div></div>`).join('')}
      </div>
    </div>
  `;
}

function renderPolicies(){
  const rows = data.policies.map(p => [p.id, p.holder, p.product, p.premium, p.branch, `<span class="badge ${badgeClass(p.status)}">${p.status}</span>`, p.renewal]);
  return `
    <div class="card">
      <div class="panel-title"><div><h3>Policy book</h3><p>Quote, issue, renew, endorse and monitor policy lifecycle.</p></div><div class="actions"><button class="ghost-btn">Import</button><button class="primary-btn">New Policy</button></div></div>
      <div class="filters"><button class="chip active">All</button><button class="chip">Motor</button><button class="chip">Property</button><button class="chip">Liability</button><button class="chip">Renewal Due</button></div>
      ${makeTable(['Policy No.','Client','Product','Premium','Branch','Status','Renewal'], rows, i => {
        const p = data.policies[i];
        openDrawer(p.id, [
          { title: 'Policy Summary', body: `Holder: ${p.holder}<br>Product: ${p.product}<br>Premium: ${p.premium}` },
          { title: 'Operational Controls', body: 'Endorsement history, renewal workflow, underwriting approval steps, and full transaction log.' },
          { title: 'Suggested Actions', body: 'Generate schedule, review documents, assign renewal task, export policy pack.' }
        ]);
      })}
    </div>`;
}

function renderClaims(){
  const rows = data.claims.map(c => [c.id, c.client, c.type, c.reserve, c.branch, c.age, `<span class="badge ${badgeClass(c.status)}">${c.status}</span>`]);
  return `
    <div class="card">
      <div class="panel-title"><div><h3>Claims desk</h3><p>Track claims from first notification to closure.</p></div><div class="actions"><button class="ghost-btn">Assign assessor</button><button class="primary-btn">New Claim</button></div></div>
      <div class="filters"><button class="chip active">All</button><button class="chip">Assessment</button><button class="chip">Awaiting Approval</button><button class="chip">Settlement Ready</button></div>
      ${makeTable(['Claim No.','Client','Type','Reserve','Branch','Age','Status'], rows, i => {
        const c = data.claims[i];
        openDrawer(c.id, [
          { title: 'Claim Profile', body: `Client: ${c.client}<br>Type: ${c.type}<br>Reserve: ${c.reserve}<br>Age: ${c.age}` },
          { title: 'Workflow Stages', body: 'FNOL, document capture, assessment, reserve review, approval routing, settlement, closure.' },
          { title: 'Mobile Use Case', body: 'Assessor can upload photos, incident notes, and signed forms from field devices in the final product.' }
        ]);
      })}
    </div>`;
}

function renderTransfers(){
  const rows = data.transfers.map(t => [t.id, t.asset, t.from, t.to, t.reason, `<span class="badge ${badgeClass(t.status)}">${t.status}</span>`, t.timestamp]);
  return `
    <div class="card">
      <div class="panel-title"><div><h3>Transfer control center</h3><p>Prevent lost visibility when files, portfolios or cases move.</p></div><div class="actions"><button class="ghost-btn">Audit trail</button><button class="primary-btn">Create Transfer</button></div></div>
      <div class="empty-note">This module directly addresses the insider pain point: automatic source deduction, destination assignment, approval control, and mismatch alerts.</div>
      <div style="height:16px"></div>
      ${makeTable(['Transfer ID','Asset','From','To','Reason','Status','Time'], rows, i => {
        const t = data.transfers[i];
        openDrawer(t.id, [
          { title: 'Transfer Summary', body: `Asset: ${t.asset}<br>From: ${t.from}<br>To: ${t.to}<br>Reason: ${t.reason}` },
          { title: 'Control Logic', body: 'On approval, the system deducts ownership from the source queue, assigns the destination queue, stamps the movement log, and triggers exception checks.' },
          { title: 'Management Visibility', body: 'Dashboard views show pending approvals, unmatched transfers, overdue receiving confirmations, and branch-level discrepancies.' }
        ]);
      })}
    </div>`;
}

function renderDocuments(){
  const rows = data.documents.map(d => [d.name, d.owner, d.category, d.version, `<span class="badge ${badgeClass(d.status)}">${d.status}</span>`]);
  return `
    <div class="card">
      <div class="panel-title"><div><h3>Document vault</h3><p>Central record indexing and file traceability.</p></div><div class="actions"><button class="ghost-btn">Bulk upload</button><button class="primary-btn">Add Document</button></div></div>
      ${makeTable(['File Name','Owner','Category','Version','Status'], rows, i => {
        const d = data.documents[i];
        openDrawer(d.name, [
          { title: 'File Metadata', body: `Owner: ${d.owner}<br>Category: ${d.category}<br>Version: ${d.version}` },
          { title: 'Version & Access Control', body: 'Track revisions, reviewers, final sign-off, archive state, and linked policy or claim records.' },
          { title: 'Future Enhancement', body: 'The production system can support OCR indexing, mandatory document checklists, and secure export logs.' }
        ]);
      })}
    </div>`;
}

function renderCrm(){
  const rows = data.crm.map(c => [c.id, c.client, c.owner, c.segment, c.renewal, c.value, `<span class="badge ${badgeClass(c.status)}">${c.status}</span>`]);
  return `
    <div class="card">
      <div class="panel-title"><div><h3>Client relationships</h3><p>Retention, renewals and upsell opportunity management.</p></div><div class="actions"><button class="ghost-btn">Campaign</button><button class="primary-btn">Add Lead</button></div></div>
      ${makeTable(['CRM ID','Client','Owner','Segment','Renewal Due','Value','Status'], rows, i => {
        const c = data.crm[i];
        openDrawer(c.id, [
          { title: 'Client Snapshot', body: `Client: ${c.client}<br>Segment: ${c.segment}<br>Renewal: ${c.renewal}<br>Value: ${c.value}` },
          { title: 'Engagement Workflow', body: 'Renewal reminder sequence, follow-up notes, opportunity scoring, cross-sell prompts, and broker/branch ownership.' },
          { title: 'Executive Benefit', body: 'Keeps premium retention visible and reduces policy lapse risk.' }
        ]);
      })}
    </div>`;
}

function renderReports(){
  return `
    <div class="module-grid">
      ${data.reports.packs.map(r => `
        <div class="module-card">
          <div class="eyebrow">Report Pack</div>
          <h4>${r.title}</h4>
          <p>${r.summary}</p>
          <div class="metric-line"><span style="width:${r.completion}%"></span></div>
          <div class="footer-note">Mock data completeness: ${r.completion}%</div>
        </div>`).join('')}
    </div>
    <div class="card" style="margin-top:18px;">
      <div class="panel-title"><div><h3>Recommended executive widgets</h3><p>High-value items for insurers and brokers.</p></div></div>
      <div class="list">
        <div class="list-item"><div><strong>Claims turnaround SLA</strong><div class="meta">Branch comparison, aging buckets, and unresolved bottlenecks.</div></div></div>
        <div class="list-item"><div><strong>Transfer exceptions</strong><div class="meta">Files moved without receiving confirmation or source deduction mismatch.</div></div></div>
        <div class="list-item"><div><strong>Renewal conversion</strong><div class="meta">Due policies, premium value, and lapse watchlist.</div></div></div>
      </div>
    </div>`;
}

function renderSettings(){
  return `
    <div class="module-grid">
      ${data.settings.map(s => `
        <div class="module-card">
          <div class="eyebrow">Administration</div>
          <h4>${s.title}</h4>
          <p>${s.description}</p>
          <div class="actions" style="margin-top:16px;"><button class="ghost-btn">Configure</button><button class="link-btn">Learn more</button></div>
        </div>`).join('')}
    </div>
    <div class="card" style="margin-top:18px;">
      <div class="panel-title"><div><h3>Platform notes</h3><p>Final production deployment would run on local servers with C#, IIS, and SQL Server.</p></div></div>
      <div class="empty-note">This mockup is front-end only for GitHub Pages. It is intentionally structured to map cleanly into a future ASP.NET Core application layout.</div>
    </div>`;
}

const renderers = {
  dashboard: renderDashboard,
  policies: renderPolicies,
  claims: renderClaims,
  transfers: renderTransfers,
  documents: renderDocuments,
  crm: renderCrm,
  reports: renderReports,
  settings: renderSettings
};

function setActive(view){
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
}

function navigate(view){
  const next = renderers[view] ? view : 'dashboard';
  viewTitle.textContent = titles[next];
  viewRoot.innerHTML = renderers[next]();
  setActive(next);
  window.location.hash = next;
  sidebar.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.navigate = navigate;

document.querySelectorAll('[data-view]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.view)));

document.getElementById('globalSearch').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  if (!q) return;
  const haystacks = [
    ...data.policies.map(x => ({ view:'policies', text:Object.values(x).join(' ') })),
    ...data.claims.map(x => ({ view:'claims', text:Object.values(x).join(' ') })),
    ...data.transfers.map(x => ({ view:'transfers', text:Object.values(x).join(' ') })),
    ...data.documents.map(x => ({ view:'documents', text:Object.values(x).join(' ') })),
    ...data.crm.map(x => ({ view:'crm', text:Object.values(x).join(' ') }))
  ];
  const match = haystacks.find(item => item.text.toLowerCase().includes(q));
  if (match) navigate(match.view);
});

navigate((window.location.hash || '#dashboard').replace('#',''));
