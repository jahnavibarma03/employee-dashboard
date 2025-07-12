// assets/js/validation.js
export function validateEmployee(d) {
  const e = {};
  if (!d.firstName?.trim()) e.firstName = "First name required";
  if (!d.lastName?.trim())  e.lastName = "Last name required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email || "")) e.email = "Invalid email";
  if (!d.department?.trim()) e.department = "Department required";
  if (!d.role?.trim())       e.role = "Role required";
  return e;
}
