<header class="topbar">
  <h1>Employee Directory</h1>

  <div class="search-wrap">
    <input
        type="search"
        id="searchInput"
        placeholder="Search by name or email"
        value="${searchQuery!}" 
    />

  </div>

  <div class="topbar-actions">
    <button id="filterToggleBtn" class="btn secondary small">Filter</button>
  </div>
</header>

<aside id="filterPanel" class="filter-panel">
  <button class="close-btn">&times;</button>
  <h3>Filter Employees</h3>
  <label>First Name<input id="filterFirstName" value="${filter.firstName!}" /></label>
  <label>Department<input id="filterDepartment" value="${filter.department!}" /></label>
  <label>Role<input id="filterRole" value="${filter.role!}" /></label>

  <div class="filter-actions">
    <button id="applyFilterBtn" class="btn primary small">Apply</button>
    <button id="resetFilterBtn" class="btn neutral small">Reset</button>
  </div>
</aside>

<div class="toolbar">
  <label>Sort:
    <select id="sortSelect">
      <option value="">– Select –</option>
      <option value="firstName" ${sortBy=="firstName"?then("selected","")}>First Name</option>
      <option value="lastName" ${sortBy=="lastName"?then("selected","")}>Last Name</option>
      <option value="department" ${sortBy=="department"?then("selected","")}>Department</option>
      <option value="role" ${sortBy=="role"?then("selected","")}>Role</option>
    </select>
  </label>

  <label>Show:
    <select id="pageSizeSelect">
      <option value="10" ${pageSize==10?then("selected","")}>10</option>
      <option value="25" ${pageSize==25?then("selected","")}>25</option>
      <option value="50" ${pageSize==50?then("selected","")}>50</option>
      <option value="100" ${pageSize==100?then("selected","")}>100</option>
    </select>
  </label>

  <div class="toolbar-spacer"></div>
  <button id="addBtn" class="btn primary">Add Employee</button>
</div>

<div class="card-grid">
  <#list employees as emp>
  <div class="card" data-id="${emp.id}">
    <p class="name">${emp.firstName} ${emp.lastName}</p>
    <p><strong>Email:</strong> ${emp.email}</p>
    <p><strong>Department:</strong> ${emp.department}</p>
    <p><strong>Role:</strong> ${emp.role}</p>
    <div class="actions">
      <button class="btn neutral small editBtn">Edit</button>
      <button class="btn neutral small deleteBtn">Delete</button>
    </div>
  </div>
  </#list>
</div>

<footer class="footer">© 2025 Employee Directory App. All rights reserved.</footer>
