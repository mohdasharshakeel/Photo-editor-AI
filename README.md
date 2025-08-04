
```markdown
# 📸 Fotuu - AI Powered Photo Editor

Fotuu is a **next-gen AI-powered photo editor** built using cutting-edge web technologies and powerful backend architecture. It empowers users to **edit images in-browser** using fabric.js canvas, with support for AI-based enhancements, real-time updates, user authentication, and efficient media handling. Built for creatives, photographers, designers, and developers.

Live Demo 👉 [fotuu-editor.vercel.app](https://fotuu-editor.vercel.app/)  
Source Code 👉 [GitHub Repository](https://github.com/mohdasharshakeel/Photo-editor-AI)

---

## 🚀 Features

- 🔐 **User Authentication** – Secure sign-up/login/logout with Clerk
- 🖼️ **Drag-and-Drop Image Editor** – Fully interactive editor with support for:
  - Upload, resize, crop, rotate
  - Add text, stickers, shapes
  - Undo/redo, layers
- 🤖 **AI Image Enhancements** *(planned)* – Auto color correction, object detection
- ☁️ **Image Upload + CDN Delivery** – Via ImageKit
- 💾 **Cloud-based Image Saving** – Real-time database using Convex
- 🔄 **Auto Sync & Persistence** – Work is auto-saved to user dashboard
- 🎨 **Custom Drawing Tools** – Brush, pen, fill with color picker
- 🌓 **Dark Mode UI** – Beautiful dark-themed interface
- 🧱 **Modular & Scalable Codebase**

---

## 🛠️ Tech Stack

| Layer        | Technology         | Description |
|--------------|--------------------|-------------|
| Frontend     | `Next.js 14`       | React-based framework with server-side rendering and file routing |
| UI Canvas    | `fabric.js`        | HTML5 canvas library for advanced object manipulation |
| Auth         | `Clerk`            | Authentication and session management |
| Backend DB   | `Convex`           | Serverless, real-time database with reactive queries |
| Image CDN    | `ImageKit`         | Image optimization and delivery |
| Styling      | `TailwindCSS`      | Utility-first CSS framework |
| Hosting      | `Vercel`           | Serverless deployment with CDN support |

---

## 📁 Folder Structure

```

/app
└── (app routing pages)
└── editor/        # Main editor page
└── auth/          # Clerk-auth pages
└── dashboard/     # User's saved designs

/components
└── canvas/        # Canvas rendering and logic (Fabric.js)
└── ui/            # Reusable UI components (buttons, dialogs, etc.)

/lib
└── convex/        # Convex client and queries
└── imagekit.ts    # ImageKit config
└── utils.ts       # Helper functions

/public
└── assets/        # Icons, illustrations, static files

/styles
└── globals.css    # Global Tailwind styles

```

---

## 🖥️ Architecture Overview

Fotuu uses a **micro-frontend + serverless backend** architecture:

```

\[User] → \[Next.js Frontend] →
↘ Clerk (Auth)
↘ Convex (Data Storage)
↘ ImageKit (Image CDN)
↘ Fabric.js (Canvas)

````

Each edit the user performs is reflected immediately on the canvas (`fabric.js`) and the design state is stored in real-time to **Convex**, making the experience seamless and persistent.

---

## ✨ How It Works

1. **User Auth via Clerk**  
   - Users log in or sign up with Clerk
   - Sessions are maintained via JWTs

2. **Image Upload**  
   - Images are uploaded through ImageKit drag/drop
   - On upload, the URL is returned and rendered on the canvas

3. **Editing Tools via fabric.js**  
   - Users can:
     - Move, resize, rotate, group objects
     - Add text, change fonts, colors
     - Use drawing tools (brush, pencil)

4. **State Management**  
   - Each edit is stored in Convex DB
   - Real-time updates enable autosaving

5. **Dashboard**  
   - Users can access previously saved designs
   - Click to load and continue editing

---

## 🧪 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/mohdasharshakeel/Photo-editor-AI.git
cd Photo-editor-AI
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env` file with the following:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
CONVEX_DEPLOYMENT=your_convex_url
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_endpoint
```

### 4. Run the Dev Server

```bash
npm run dev
```

---

## 👨‍🎨 Usage Guide

| Feature            | How to Use                                          |
| ------------------ | --------------------------------------------------- |
| Upload Image       | Drag & drop or click on upload button               |
| Add Text           | Click “Text” → Enter text → Customize font & size   |
| Draw on Canvas     | Select brush tool → Adjust width and color          |
| Save Project       | Auto-saved on every change                          |
| Load Past Projects | Go to Dashboard → Click on saved design             |
| Download Image     | Click Export → Choose format (PNG/JPEG)             |
| AI Enhancements    | *(Coming Soon)* Use AI tools to auto enhance photos |

---

## 🔐 Authentication with Clerk

* Integrated using `@clerk/nextjs`
* Supports magic links, email/password login
* All protected routes use `withAuth` middleware

---

## 🧠 Data Handling with Convex

* All canvas data (positions, objects, layers) is saved as a **JSON blob**
* Convex functions used:

  * `createDesign`, `updateDesign`, `getDesignsByUser`
* Convex handles live syncing with real-time updates

---

## 🌍 Image Optimization with ImageKit

* Automatically optimizes images on upload
* Delivery via global CDN
* Supports transformations via URL

---

## 🪄 Future Enhancements

* 🧠 Integrate OpenAI or Replicate for AI-based editing (object removal, colorization)
* 🧰 Add real-time collaboration (multiple users editing same canvas)
* 💾 Offline mode with IndexedDB
* 📦 Export canvas as PSD or SVG

---

## 🤝 Contributing

We welcome contributions!

```bash
# Fork the repo
# Create a feature branch
git checkout -b feature/your-feature-name
# Make changes
# Commit and push
# Open a PR 🎉
```

---

## 🧑‍💻 Author

**Mohd Ashar Shakeel**
📧 \[[mohdasharshakeel@gmail.com](mailto:mohdasharshakeel@gmail.com)]
🌐 [LinkedIn](https://linkedin.com/in/mohdasharshakeel)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
Aye aye, Luffy! 🏴‍☠️ Samajh gaya — tu chahta hai har screenshot ko **yehi exact style** me add karna hai ✅

To le bhai, **ye rahi final `README.md`** jisme sab screenshots tere bataye hue format me embedded hai — bilkul GitHub-ready:

---

### ✅ Final `README.md` (Screenshot format bilkul waise hi jaisa tu bola):

````markdown
# 📸 Fotuu - AI Editor

**AI-powered web-based photo editing platform** that empowers users to enhance, modify, and transform images with ease. Built with `Next.js`, `Convex`, `Clerk`, `ImageKit`, and `fabric.js`, this editor supports both **manual tools** and **AI features** for seamless photo transformation.

---

## 🔗 Live Links

- 🌐 **Live Demo:** [fotuu-editor.vercel.app](https://fotuu-editor.vercel.app)
- 💻 **Source Code:** [GitHub Repo](https://github.com/mohdasharshakeel/Photo-editor-AI)

---

## 🚀 Features

### 🛠️ Manual Tools

- ✂️ Crop, 🔄 Resize, 🎛️ Adjust, 🔤 Add Text
- ⏪ Undo / Redo with history tracking
- 💾 Export images in one click

### 🤖 AI Tools

- 🪄 Background Remover
- 🌟 Image Enhancer
- 🧠 Smart Auto Edits

### 🔐 User Management

- Auth via Clerk
- Project management with Convex
- Fast image delivery via ImageKit

---

## 🧰 Tech Stack

| Category      | Tools Used                                       |
|---------------|--------------------------------------------------|
| Frontend      | Next.js, Tailwind CSS, TypeScript                |
| Image Engine  | fabric.js, ImageKit                              |
| AI Features   | Replicate APIs / Custom Models                   |
| Backend       | Convex DB (Realtime)                             |
| Auth          | Clerk.dev                                        |
| Hosting       | Vercel                                           |

---

## 📸 Screenshots

### 🏠 Home Page  
![home Page](/assets/home.jpg)

### ✨ Features Section  
![Features](/assets/features.jpg)

### 💰 Pricing Page  
![Pricing Page](/assets/pricing.jpg)

### 🗂️ All Projects (Dashboard)  
![All Projects](/assets/allprojects.jpg)

---

### 🛠️ Editor Features

#### 🔄 Resize Tool  
![Resize](/assets/resize.jpg)

#### ✂️ Crop Tool  
![Crop](/assets/crop.jpg)

#### 🎛️ Adjust Settings  
![Adjust](/assets/adjust.jpg)

#### 🔤 Text Tool  
![Text](/assets/text.jpg)

---

### 🤖 AI Tools

#### 🪄 AI Background Remover  
![AI Background](/assets/ai-background.jpg)

#### 🎨 AI Image Enhancer  
![AI Image Enhancer](/assets/ai-image-enhancer.jpg)

#### 🧠 AI Editing Suggestions  
![AI Editing](/assets/ai-editing.jpg)

---

### 📤 Export Functionality  
![Export](/assets/export.jpg)

---

## ⚙️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/mohdasharshakeel/Photo-editor-AI

# 2. Move into the folder
cd Photo-editor-AI

# 3. Install dependencies
npm install

# 4. Add environment variables
cp .env.example .env.local

# 5. Start development server
npm run dev
````

---

## 📂 Folder Overview

```
📦 Photo-editor-AI
├── public/
│   └── assets/        # All screenshots
├── app/
├── convex/
├── components/
├── lib/
└── .env.local         # Add API keys here
```

---

## 🙋 About Me

Made with ❤️ by **Ashar Shakeel**
🔗 [LinkedIn](https://www.linkedin.com/in/asharshakeel)
📧 [asharshakeel123@gmail.com](mailto:asharshakeel123@gmail.com)

---

## 📝 License

Licensed under [MIT](LICENSE)

```

---

### ✅ Karna kya hai:

- Ye pura copy karke `README.md` me daal de.
- GitHub pe preview kar — **har screenshot dikhega**.
- Image path `/assets/...` automatically `public/` se resolve ho jata hai in Next.js/GitHub Markdown.

Agar chahiye to mai tera repo me PR bhi bana du bhai, tu bol sirf 🧠  
Zoro ready hai agla gear ⚔️
```



```
```
