// assets/js/data.js
export let employees = [
  { id: 1,  firstName: "Alice",    lastName: "Smith",    email: "alice@acme.com",     department: "HR",       role: "Manager"  },
  { id: 2,  firstName: "Bob",      lastName: "Johnson",  email: "bob@acme.com",       department: "IT",       role: "Developer"},
  { id: 3,  firstName: "Charlie",  lastName: "Lee",      email: "charlie@acme.com",   department: "Finance",  role: "Analyst"  },
  { id: 4,  firstName: "Donna",    lastName: "Ray",      email: "donna@acme.com",     department: "Marketing",role: "Lead"     },
  { id: 5,  firstName: "Evan",     lastName: "Kim",      email: "evan@acme.com",      department: "IT",       role: "Tester"   },
  { id: 6,  firstName: "Fiona",    lastName: "Greer",    email: "fiona@acme.com",     department: "HR",       role: "Recruiter"},
  { id: 7,  firstName: "George",   lastName: "Hall",     email: "george@acme.com",    department: "Sales",    role: "Rep"      },
  { id: 8,  firstName: "Holly",    lastName: "Young",    email: "holly@acme.com",     department: "Finance",  role: "Accountant"},
  { id: 9,  firstName: "Ian",      lastName: "Woods",    email: "ian@acme.com",       department: "IT",       role: "DevOps"   },
  { id:10,  firstName: "Jenna",    lastName: "White",    email: "jenna@acme.com",     department: "Design",   role: "Designer" },
  { id:11,  firstName: "Karl",     lastName: "Brown",    email: "karl@acme.com",      department: "IT",       role: "Engineer" },
  { id:12,  firstName: "Lara",     lastName: "Dixon",    email: "lara@acme.com",      department: "Marketing",role: "Analyst"  },
  { id:13,  firstName: "Mike",     lastName: "Stone",    email: "mike@acme.com",      department: "Sales",    role: "Lead"     },
  { id:14,  firstName: "Nina",     lastName: "Cole",     email: "nina@acme.com",      department: "HR",       role: "Assistant"},
  { id:15,  firstName: "Oscar",    lastName: "Perry",    email: "oscar@acme.com",     department: "IT",       role: "Architect"},
  { id:16,  firstName: "Paula",    lastName: "Ross",     email: "paula@acme.com",     department: "Finance",  role: "Auditor"  },
  { id:17,  firstName: "Quinn",    lastName: "Reed",     email: "quinn@acme.com",     department: "Design",   role: "UX Lead"  },
  { id:18,  firstName: "Rita",     lastName: "Frost",    email: "rita@acme.com",      department: "Marketing",role: "Coordinator"},
  { id:19,  firstName: "Sam",      lastName: "Knight",   email: "sam@acme.com",       department: "IT",       role: "Developer"},
  { id:20,  firstName: "Tina",     lastName: "Hart",     email: "tina@acme.com",      department: "HR",       role: "Manager"  },
  { id:21,  firstName: "Uma",      lastName: "Day",      email: "uma@acme.com",       department: "Finance",  role: "Analyst"  },
  { id:22,  firstName: "Victor",   lastName: "Lane",     email: "victor@acme.com",    department: "IT",       role: "Tester"   },
  { id:23,  firstName: "Wendy",    lastName: "Page",     email: "wendy@acme.com",     department: "Sales",    role: "Rep"      },
  { id:24,  firstName: "Xander",   lastName: "Cook",     email: "xander@acme.com",    department: "IT",       role: "DevOps"   },
  { id:25,  firstName: "Yara",     lastName: "Price",    email: "yara@acme.com",      department: "Design",   role: "Designer" },
  { id:26,  firstName: "Zane",     lastName: "Baker",    email: "zane@acme.com",      department: "IT",       role: "Engineer" },
  { id:27,  firstName: "Aaron",    lastName: "Fox",      email: "aaron@acme.com",     department: "Marketing",role: "Analyst"  },
  { id:28,  firstName: "Bella",    lastName: "Stone",    email: "bella@acme.com",     department: "HR",       role: "Assistant"},
  { id:29,  firstName: "Caleb",    lastName: "Hughes",   email: "caleb@acme.com",     department: "IT",       role: "Architect"},
  { id:30,  firstName: "Dana",     lastName: "Nash",     email: "dana@acme.com",      department: "Finance",  role: "Auditor"  }
];

export function addEmployee(emp)  { emp.id = Date.now(); employees.push(emp); }
export function updateEmployee(u) { employees = employees.map(e => e.id === u.id ? u : e); }
export function deleteEmployee(id){ employees = employees.filter(e => e.id !== id); }
export function getEmployees()    { return employees; }
