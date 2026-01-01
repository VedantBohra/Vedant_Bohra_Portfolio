# Portfolio Website

A personal portfolio website built with **Next.js**, showcasing projects, experience, and a contact form with EmailJS integration.

---

## 🚀 Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- EmailJS

---

## 📦 Setup & Installation

### Clone the repository
```bash
git clone <your-repository-url>
cd <your-project-folder>
Install dependencies
bash
Copy code
npm install
🔑 Environment Variables
Create a .env.local file in the root directory:

env
Copy code
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_emailjs_autoreply_template_id
🧪 Run Development Server
bash
Copy code
npm run dev
Open http://localhost:3000 to view the app.

🏗 Build for Production
bash
Copy code
npm run build
npm run start
☁️ Deployment
Deploy easily on platforms like Vercel or Netlify.
Make sure to add the environment variables in the deployment dashboard.

✉️ Contact Form
The contact form uses EmailJS to send messages and auto-replies directly from the client.