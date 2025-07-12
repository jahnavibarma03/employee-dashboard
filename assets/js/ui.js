import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "./data.js";
import { validateEmployee } from "./validation.js";
import { renderTemplate } from "./renderer.js";

const app = document.getElementById("app");
let list = getEmployees(),
    filter = { firstName: "", department: "", role: "" },
    searchQuery = "",
    sortBy = "",
    pageSize = 10,
    filterOpen = false;

function applyPipeline() {
  let out = list;
  if (searchQuery)
    out = out.filter(e =>
      (e.firstName + e.lastName + e.email)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  out = out.filter(e =>
    e.firstName.toLowerCase().includes(filter.firstName.toLowerCase()) &&
    e.department.toLowerCase().includes(filter.department.toLowerCase()) &&
    e.role.toLowerCase().includes(filter.role.toLowerCase())
  );

  if (sortBy)
    out.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return out.slice(0, pageSize);
}

function toggleFilter(open) {
  filterOpen = open === undefined ? !filterOpen : open;
  document.getElementById("filterPanel").classList.toggle("open", filterOpen);
}

async function loadDashboard() {
  const html = await renderTemplate("templates/dashboard.ftl", {
    employees: applyPipeline(),
    filter, searchQuery, sortBy, pageSize
  });
  app.innerHTML = html;
  attachEvents();
}

async function openForm(mode = "add", rec = {}) {
  const blank = { firstName: "", lastName: "", email: "", department: "", role: "" };
  const record = mode === "edit" ? { ...blank, ...rec } : blank;

  const html = await renderTemplate("templates/form.ftl", {
    record,
    formTitle: mode === "edit" ? "Edit Employee" : "Add Employee",
    submitText: mode === "edit" ? "Update" : "Add"
  });
  app.innerHTML = html;
  attachFormEvents(mode, rec);
}

function attachFormEvents(mode, rec) {
  document.getElementById("cancelBtn").onclick = loadDashboard;
  document.getElementById("empForm").onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    if (mode === "edit") data.id = rec.id;
    const errs = validateEmployee(data);
    const box = document.getElementById("formErrors");
    if (Object.keys(errs).length) {
      box.textContent = Object.values(errs).join("\n");
      box.classList.remove("hidden");
      return;
    }
    mode === "edit" ? updateEmployee(data) : addEmployee(data);
    list = getEmployees();
    loadDashboard();
  };
}

function attachEvents() {
  document.getElementById("searchInput").oninput = e => {
    searchQuery = e.target.value;
    loadDashboard();
  };
  document.getElementById("sortSelect").onchange = e => {
    sortBy = e.target.value;
    loadDashboard();
  };
  document.getElementById("pageSizeSelect").onchange = e => {
    pageSize = Number(e.target.value);
    loadDashboard();
  };
  document.getElementById("addBtn").onclick = () => openForm("add");
  document.getElementById("filterToggleBtn").onclick = () => toggleFilter();
  document.querySelector(".close-btn").onclick = () => toggleFilter(false);

  document.querySelectorAll(".editBtn").forEach(b => {
    b.onclick = () => {
      const id = Number(b.closest(".card").dataset.id);
      openForm("edit", list.find(e => e.id === id));
    };
  });

  document.querySelectorAll(".deleteBtn").forEach(b => {
    b.onclick = () => {
      if (!confirm("Delete?")) return;
      deleteEmployee(Number(b.closest(".card").dataset.id));
      list = getEmployees();
      loadDashboard();
    };
  });

  document.getElementById("applyFilterBtn").onclick = () => {
    filter = {
      firstName: document.getElementById("filterFirstName").value,
      department: document.getElementById("filterDepartment").value,
      role: document.getElementById("filterRole").value
    };
    loadDashboard();
  };

  document.getElementById("resetFilterBtn").onclick = () => {
    filter = { firstName: "", department: "", role: "" };
    loadDashboard();
  };
}

loadDashboard();
