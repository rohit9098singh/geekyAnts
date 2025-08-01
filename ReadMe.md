# 🏗 Engineering Portal Management System

A **full-stack MERN application** to manage engineers, projects, and assignments efficiently. This tool allows **managers** to assign engineers to projects, track capacity allocation, and monitor team workload, while **engineers** can view their own assignments and availability.

---

## 🚀 Features

✅ **Authentication & Roles**
- Secure JWT-based login system
- Roles: **Manager** and **Engineer**
- Managers can create & manage projects, engineers, and assignments
- Engineers can view their assignments & workload

✅ **Engineer Management**
- Create engineer profiles with skills, seniority, and department
- Track availability based on max capacity (Full-time 100% / Part-time 50%)

✅ **Project Management**
- Create & edit projects with required skills and statuses (`planning`, `active`, `completed`)

✅ **Assignment System**
- Assign engineers to projects with an allocation percentage
- Track when engineers are available for new projects

✅ **Dashboards**
- Manager dashboard: team overview & workload
- Engineer dashboard: personal projects & assignments

✅ **Search & Analytics**
- Search engineers by skill or project by status
- Simple analytics on capacity & workload

---

## 🛠 Tech Stack

### **Frontend**
- ⚛️ React (TypeScript)
- 🎨 Tailwind CSS + ShadCN UI Components
- 📝 React Hook Form for form handling


### **Backend**
- 🟢 Node.js + Express
- 🗄 MongoDB (Mongoose)
- 🔑 JWT Authentication
- 📡 RESTful API

---

🔐 AUTH ROUTES
js
Copy
Edit
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/profile", authMiddleware, getProfile);
authRouter.put("/profile", authMiddleware, updateProfile);

👨‍💻 ENGINEER ROUTES
router.get("/", authMiddleware, getEngineers);
router.get("/:id/capacity", authMiddleware, getEngineerCapacity);

📁 PROJECT ROUTES
router.get("/", authMiddleware, getProjects);
router.post("/", authMiddleware, createProject);
router.get("/:id", authMiddleware, getProjectById);

📌 ASSIGNMENT ROUTES
router.get("/", authMiddleware, getAssignments);
router.get("/:id", authMiddleware, getAssignmentById);
router.post("/", authMiddleware, createAssignment);
router.patch("/:id", authMiddleware, updateAssignment);
router.delete("/:id", authMiddleware, deleteAssignment);
