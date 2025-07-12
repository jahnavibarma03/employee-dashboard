Sure! Here's your complete **`README.md`** content in **one code block** for easy copy-pasting into your project:

---

````markdown
# 📇 Employee Directory Web App

A responsive and interactive **Employee Directory Web Interface** built using **HTML**, **CSS**, **Vanilla JavaScript**, and **Freemarker templates**. This is a frontend-only application built to demonstrate modern UI development principles with clean, modular, and functional code.

---

## 🚀 Setup Instructions

### Prerequisites
- A code editor like **VS Code**
- **Live Server** extension (recommended for local testing)

### Run Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/employee-directory.git
   cd employee-directory
````

2. **Open the folder in VS Code**

3. **Start with Live Server**:

   * Right-click on `index.html` → **Open with Live Server**
   * The app will open in your browser at something like `http://localhost:5500`

---

## 📁 Project Structure

```
employee-directory/
├── index.html                  # Main HTML file to launch the app
├── assets/
│   ├── css/
│   │   └── styles.css          # Responsive styling for the entire app
│   └── js/
│       ├── data.js             # Static employee data + add/edit/delete logic
│       ├── renderer.js         # Custom Freemarker-like template renderer
│       ├── ui.js               # Main UI logic and event handling
│       └── validation.js       # Form validation logic
├── templates/
│   ├── dashboard.ftl           # Freemarker-style dashboard layout
│   └── form.ftl                # Freemarker-style Add/Edit form layout
└── README.md                   # You’re reading it!
```

---

## 🎯 Features

* ✅ Dashboard with employee cards
* ✅ Add / Edit / Delete employees
* ✅ Live Search by name or email
* ✅ Slide-in Filter panel (first name, department, role)
* ✅ Sort by First Name, Last Name, Department, Role
* ✅ Show (pagination): 10, 25, 50, 100 entries
* ✅ Responsive layout (desktop, tablet, mobile)
* ✅ Form validation (required fields + email format)
* ✅ Styled buttons: Add, Edit, Delete, Filter, Apply, Reset, Cancel

---

## 🖼️ Screenshots

![Dashboard](screenshots/dashboard.png)


### 💡 Challenges Faced

* Implementing Freemarker-style template logic manually in JavaScript
* Fixing search input issues (capturing only one character before rerender)
* Ensuring dropdown values appeared correctly in forms
* Maintaining consistent responsive design and button layout

### 🛠 What I’d Improve

* Add local storage for persistent data
* Drag & drop reordering of employees
* CSV import/export
* Advanced filtering (AND/OR conditions)

---

## 🙋 Author

Made by **Jahnavi Barma**


---
