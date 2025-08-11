# 🧪 Lab Term Search

**Lab Term Search** is a web application that enables users to quickly search and retrieve standardized lab test names and codes from the **LOINC dataset** using fuzzy search.  
It is designed for healthcare professionals, students, and researchers who need fast, accurate mapping of test names, even if they are misspelled or partially known.

---

# 📌 Key Features

- **Fuzzy Search** – Finds results even with typos or incomplete names.  
- **Confidence Score** – Shows how closely the result matches the query.  
- **LOINC Details** – Displays LOINC code, component, related names, and units.  
- **Fast & Responsive UI** – Clean design for smooth usage.  
- **Secure Backend** – Helmet.js, rate limiting, and optional API key protection.  
- **Deployment Ready** – Frontend on Vercel, Backend on Render.

---

# 📂 Screens & Workflow

## 1️⃣ HOME PAGE (Before Search)  
➡️ The home page where users can start searching for lab terms.  

![WhatsApp Image 2025-08-11 at 22 50 33_e1e27ef9](https://github.com/user-attachments/assets/4e6bcd67-bd67-424f-881b-d34568e8eee7)


---

## 2️⃣ SEARCH RESULTS PAGE  
➡️ Displays the search results with LOINC details and confidence score.  

![WhatsApp Image 2025-08-11 at 22 53 44_5775df02](https://github.com/user-attachments/assets/8d1412c3-fb06-49c5-9726-d6c99060a4c8)


---

## 3️⃣ NO RESULTS FOUND PAGE  
➡️ Displays a message when no matching lab test is found.  

![WhatsApp Image 2025-08-11 at 22 57 36_67b8e185](https://github.com/user-attachments/assets/8b4f564b-fc04-44c8-a0e2-eed75221fc45)


---


# 🛠️ Tech Stack

## **Frontend**
- React (Vite)
- Axios
- CSS + Google Fonts (Inter)

## **Backend**
- Node.js + Express.js
- Fuse.js (fuzzy search)
- Helmet.js (security headers)
- CORS
- express-rate-limit
- dotenv

## **Deployment**
- Backend → Render  
- Frontend → Vercel

---

# ⚙️ How It Works

1. **User enters a lab test name** (even partial or misspelled).  
2. **Frontend sends the query** to the backend API.  
3. **Backend uses Fuse.js** to perform fuzzy search on the LOINC dataset.  
4. **Matches are scored** and returned with details.  
5. **Frontend displays the results** in a clean, readable format.

---

# 🚀 Live Links

- **Frontend:** [https://your-frontend-link.vercel.app](https://your-frontend-link.vercel.app)  
- **Backend API:** [https://your-backend-link.onrender.com](https://your-backend-link.onrender.com)

---

# 📜 Summary

Our project, **Lab Term Search**, solves a common problem in healthcare — inconsistent naming of lab tests.  
By integrating **fuzzy search** with the **LOINC dataset**, we make it easy to find standardized codes quickly and accurately.

- **For Students & Professionals** – Saves time by avoiding manual LOINC code lookups.  
- **For Developers** – Offers a clean API that can be integrated into healthcare software.  

---

# 👨‍💻 Author
**Chandra mouli M**  
📧 Email: chandramouli.m1402@gmail.com
💼 LinkedIn: [[Your LinkedIn](https://www.linkedin.com/in/chandramouli-m1402/)](#)  


