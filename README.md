# Qantuslab - AI Solutions Platform

A modern, professional landing page and content platform built with Next.js 14, Firebase, and TailwindCSS.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 🔥 Firebase integration (Firestore, Authentication, Cloud Messaging)
- 📝 Blog system with Markdown support
- 📧 Contact form with Firebase storage
- 🔔 Real-time notification system for users and admins
- 🎯 Admin dashboard for content management
- 🌐 SEO optimized
- ⚡ Built with Next.js 14 App Router
- 💨 Styled with TailwindCSS and Shadcn/ui

## Tech Stack

- **Framework:** Next.js 14.2.35
- **Styling:** TailwindCSS + Shadcn/ui
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Hosting:** Vercel (recommended)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project created
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd qlanding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your Firebase configuration values in `.env.local`:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Select your project
   - Go to Project Settings > General > Your apps > Web app
   - Copy the configuration values

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Follow the setup wizard

### 2. Enable Services

**Firestore Database:**
1. Go to Firestore Database
2. Click "Create database"
3. Start in production mode
4. Choose your region

**Authentication:**
1. Go to Authentication
2. Click "Get started"
3. Enable "Email/Password" sign-in method

**Cloud Messaging (Optional):**
1. Go to Project Settings > Cloud Messaging
2. Generate a new Web Push certificate
3. Copy the VAPID key to your `.env.local`

### 3. Firestore Security Rules

Add these rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read blog posts
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Allow anyone to submit contacts
    match /contacts/{contactId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Notifications: Read by anyone, write by admins only
    match /notifications/{notificationId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Deployment to Vercel

### Step 1: Push to GitHub

1. **Initialize Git (if not done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it (e.g., "qantuslab-website")
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

5. **Add Environment Variables**

   Click "Environment Variables" and add all variables from `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID
   NEXT_PUBLIC_FIREBASE_VAPID_KEY
   ```

6. **Click "Deploy"**

   Vercel will build and deploy your site automatically!

### Step 3: Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" > "Domains"
   - Click "Add Domain"
   - Enter your custom domain (e.g., `qantuslab.com`)

2. **Update DNS Records:**

   In your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:

   **For root domain (qantuslab.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5-30 minutes)

4. **Enable HTTPS** (automatic in Vercel)

## Project Structure

```
qlanding/
├── app/                      # Next.js App Router
│   ├── (public pages)/
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── blog/            # Blog pages
│   │   └── contact/         # Contact page
│   └── mng-sys-k9x2p/       # Admin dashboard (secured route)
│       ├── dashboard/
│       ├── blog/
│       ├── contacts/
│       └── notifications/
├── components/              # React components
│   ├── ui/                  # Shadcn/ui components
│   ├── layout/              # Layout components
│   ├── home/                # Homepage components
│   └── auth/                # Authentication components
├── lib/                     # Utility functions
│   ├── firebase.ts          # Firebase configuration
│   ├── auth-context.tsx     # Auth context
│   └── utils.ts             # Helper functions
└── public/                  # Static files
    ├── logo-icon.svg        # Logo files
    └── logo-with-text.svg
```

## Admin Access

**Admin Dashboard URL:** `/mng-sys-k9x2p/login`

⚠️ **Security Note:** The admin route is intentionally obscured. Keep this URL private.

**Creating Admin User:**
1. Go to Firebase Console > Authentication
2. Click "Add user"
3. Enter email and password
4. Use these credentials to log in to the admin dashboard

## Environment Variables Reference

| Variable | Description | Where to Find |
|----------|-------------|---------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key | Firebase Console > Project Settings |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | Firebase Console > Project Settings |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID | Firebase Console > Project Settings |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | Firebase Console > Project Settings |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Messaging Sender ID | Firebase Console > Project Settings |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID | Firebase Console > Project Settings |
| `NEXT_PUBLIC_FIREBASE_VAPID_KEY` | Web Push VAPID Key | Firebase Console > Cloud Messaging |

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Key Features Explained

### User-Facing Notifications
- Admins create announcements in the dashboard
- Users see notifications via bell icon in navbar
- Browser push notifications support
- Dismissible with localStorage tracking
- Auto-expiry based on configured hours

### Blog System
- Markdown support for rich content
- SEO optimized with metadata
- Admin dashboard for creating/editing posts
- Published/draft status
- Slug-based URLs

### Contact Form
- Firebase Firestore storage
- Email validation
- Status tracking (new/contacted/resolved)
- Admin notifications for new submissions

## Troubleshooting

### Build Errors
- Ensure all environment variables are set in Vercel
- Check Firebase configuration is correct
- Verify Firestore security rules are applied

### Authentication Issues
- Check Firebase Auth is enabled
- Verify email/password provider is enabled
- Clear browser cache and cookies

### Deployment Issues
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## Support

For issues or questions:
- Check Firebase Console for service status
- Review Vercel deployment logs
- Verify environment variables are set correctly

## License

Private project - All rights reserved

---

**Built with ❤️ using Next.js, Firebase, and TailwindCSS**
