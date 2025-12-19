# 🚀 Quick Deployment Guide - Qantuslab to Vercel

## Prerequisites Checklist
- ✅ Firebase project set up
- ✅ GitHub account
- ✅ Vercel account (free) - [Sign up here](https://vercel.com/signup)
- ✅ Custom domain access

---

## Step 1: Prepare for GitHub (5 minutes)

### Check Your Environment Variables

Make sure your `.env.local` file has all Firebase credentials:

```bash
cat .env.local
```

You should see all these variables filled in:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_VAPID_KEY`

⚠️ **Important:** These values will NOT be pushed to GitHub (protected by .gitignore)

---

## Step 2: Push to GitHub (10 minutes)

### 2.1 Initialize Git (if not done)

```bash
cd /home/qlanding

# Check if git is initialized
git status

# If not initialized, run:
git init
git add .
git commit -m "Initial commit: Qantuslab website"
```

### 2.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `qantuslab-website` (or your choice)
3. Description: "Qantuslab AI Solutions Platform"
4. **Keep it Private** (recommended for security)
5. **DON'T** check "Add README" (you already have one)
6. Click "Create repository"

### 2.3 Push Code to GitHub

GitHub will show you commands. Run these:

```bash
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/qantuslab-website.git
git branch -M main
git push -u origin main
```

✅ **Checkpoint:** Your code should now be on GitHub!

---

## Step 3: Deploy to Vercel (10 minutes)

### 3.1 Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" (or "Log In")
3. **Choose "Continue with GitHub"** (easiest way)
4. Authorize Vercel to access your GitHub

### 3.2 Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find your repository: `qantuslab-website`
3. Click **"Import"**

### 3.3 Configure Build Settings

Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset:** Next.js ✅ (auto-detected)
- **Root Directory:** `./` ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `.next` ✅
- **Install Command:** `npm install` ✅

**Leave everything as default!**

### 3.4 Add Environment Variables ⚠️ IMPORTANT

Click **"Environment Variables"** section.

**Copy each variable from your `.env.local` file:**

1. Open your `.env.local` file locally
2. For each variable, in Vercel:
   - **Key:** Variable name (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`)
   - **Value:** Your actual value
   - Select **All** environments (Production, Preview, Development)
   - Click "Add"

**Add all 7 variables:**
```
NEXT_PUBLIC_FIREBASE_API_KEY = <your_value>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = <your_value>
NEXT_PUBLIC_FIREBASE_PROJECT_ID = <your_value>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = <your_value>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = <your_value>
NEXT_PUBLIC_FIREBASE_APP_ID = <your_value>
NEXT_PUBLIC_FIREBASE_VAPID_KEY = <your_value>
```

### 3.5 Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build to complete
3. You'll see confetti 🎉 when done!
4. Click "Visit" to see your live site

**Your temporary URL:** `https://your-project-name.vercel.app`

✅ **Checkpoint:** Your site is now live on Vercel!

---

## Step 4: Connect Custom Domain (15 minutes)

### 4.1 Add Domain in Vercel

1. Go to your project in Vercel
2. Click **"Settings"** tab
3. Click **"Domains"** in sidebar
4. Click **"Add"** button
5. Enter your domain: `qantuslab.com`
6. Click **"Add"**

Vercel will show you DNS records to configure.

### 4.2 Configure DNS Records

Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)

**For Root Domain (qantuslab.com):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 |

**For WWW Subdomain (www.qantuslab.com):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `cname.vercel-dns.com` | 3600 |

**Common Registrar Instructions:**

<details>
<summary><b>GoDaddy</b></summary>

1. Log in to GoDaddy
2. Go to "My Products" → "DNS"
3. Click "Manage" next to your domain
4. Click "Add" under DNS Records
5. Add the A and CNAME records above
6. Click "Save"
</details>

<details>
<summary><b>Namecheap</b></summary>

1. Log in to Namecheap
2. Go to "Domain List" → Click "Manage" on your domain
3. Go to "Advanced DNS" tab
4. Click "Add New Record"
5. Add the A and CNAME records above
6. Click save (checkmark icon)
</details>

<details>
<summary><b>Cloudflare</b></summary>

1. Log in to Cloudflare
2. Select your domain
3. Go to "DNS" section
4. Click "Add record"
5. Add the A and CNAME records above
6. **Important:** Set "Proxy status" to "DNS only" (gray cloud)
7. Click "Save"
</details>

### 4.3 Wait for DNS Propagation

- **Time:** 5 minutes to 48 hours (usually 10-30 minutes)
- **Check status:** https://www.whatsmydns.net

**In Vercel:**
- Refresh the Domains page
- You'll see "Valid Configuration" when ready
- SSL certificate will be auto-generated (takes a few minutes)

✅ **Checkpoint:** Your site is live on your custom domain with HTTPS! 🎉

---

## Step 5: Update Firebase Configuration (5 minutes)

### Add Your Domain to Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Authentication** → **Settings** tab
4. Scroll to **"Authorized domains"**
5. Click **"Add domain"**
6. Add your domains:
   - `qantuslab.com`
   - `www.qantuslab.com`
   - `your-project.vercel.app` (Vercel URL)
7. Click **"Add"**

This allows Firebase Auth to work on your custom domain.

---

## Step 6: Test Everything (10 minutes)

### Test Checklist

Visit your website and test:

- ✅ Homepage loads correctly
- ✅ Dark/Light theme toggle works
- ✅ Navigation works (Home, Services, About, Blog, Contact)
- ✅ Contact form submits successfully
- ✅ Blog posts display correctly
- ✅ Notification bell shows up
- ✅ Admin login works at `/mng-sys-k9x2p/login`
- ✅ HTTPS is enabled (🔒 in address bar)

### Admin Dashboard Access

**URL:** `https://yourdomain.com/mng-sys-k9x2p/login`

**Create Admin User (if not done):**
1. Go to Firebase Console → Authentication
2. Click "Add user"
3. Enter email and password
4. Use these credentials to log in

---

## Future Updates

### Making Changes

When you update your code:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push
```

**Vercel will automatically:**
- Detect the push
- Build your site
- Deploy the update
- Takes 2-3 minutes

### Rollback if Needed

In Vercel dashboard:
1. Go to "Deployments"
2. Find a previous working deployment
3. Click "..." → "Promote to Production"

---

## Troubleshooting

### Build Failed in Vercel
- Check build logs in Vercel
- Verify all environment variables are set
- Make sure `npm run build` works locally

### Domain Not Working
- Wait longer (DNS can take up to 48 hours)
- Check DNS records are correct
- Try clearing browser cache
- Use incognito/private window

### Firebase Errors
- Verify domain is added to Firebase Authorized domains
- Check environment variables in Vercel match your Firebase config
- Ensure Firestore security rules are set

### Authentication Not Working
- Add domain to Firebase Authorized domains
- Check Firebase Auth is enabled
- Verify Email/Password provider is enabled

---

## Quick Reference

### Important URLs

- **Live Site:** https://qantuslab.com
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/YOUR_USERNAME/YOUR_REPO
- **Firebase Console:** https://console.firebase.google.com
- **Admin Login:** https://qantuslab.com/mng-sys-k9x2p/login

### Commands

```bash
# Local development
npm run dev

# Build for production (test locally)
npm run build
npm start

# Push updates
git add .
git commit -m "Your message"
git push
```

---

## Success! 🎉

Your Qantuslab website is now:
- ✅ Live on your custom domain
- ✅ Automatically deployed via GitHub
- ✅ Secured with HTTPS
- ✅ Backed by Firebase
- ✅ Hosted on Vercel's global CDN

**Need help?** Check the README.md or Vercel documentation.
