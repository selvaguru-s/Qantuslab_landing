# Qantuslab Logo Export Guide

This guide explains how to use the exported logo files and convert them to PNG format.

## Available SVG Files

### 1. `logo-icon.svg` (100x100)
- Icon only (atom/molecule symbol)
- No text
- Perfect square (100x100 viewBox)
- Use for: favicons, app icons, social media profile pictures, small spaces

### 2. `logo-with-text.svg` (240x100)
- Icon + "Qantuslab" text
- Horizontal layout
- Use for: headers, footers, email signatures, presentations, documents

## Using SVG Files Directly

SVG files can be used directly in many contexts:

### In HTML
```html
<!-- As an image -->
<img src="/logo-icon.svg" alt="Qantuslab" width="32" height="32">
<img src="/logo-with-text.svg" alt="Qantuslab" width="240" height="100">

<!-- As favicon -->
<link rel="icon" href="/logo-icon.svg" type="image/svg+xml">
```

### In CSS
```css
.logo {
  background-image: url('/logo-icon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

### In Markdown
```markdown
![Qantuslab Logo](logo-with-text.svg)
```

## Converting to PNG (Recommended Sizes)

### Method 1: Online Converters (Easiest)

**Recommended Tools:**
- **svgtopng.com** - Simple, batch conversion
- **cloudconvert.com** - High quality, multiple formats
- **convertio.co** - Fast and reliable
- **svgviewer.dev** - Preview and download

**Steps:**
1. Go to one of the converter websites
2. Upload `logo-icon.svg` or `logo-with-text.svg`
3. Select desired size(s) from the list below
4. Download the PNG file(s)
5. Place them in the `/public` directory

**Recommended PNG Sizes for logo-icon.svg:**
- **16x16** - Small favicon (`logo-icon-16.png`)
- **32x32** - Standard favicon (`logo-icon-32.png`)
- **64x64** - High-res favicon (`logo-icon-64.png`)
- **128x128** - Mobile icons (`logo-icon-128.png`)
- **256x256** - High-res displays (`logo-icon-256.png`)
- **512x512** - PWA icons, social media (`logo-icon-512.png`)

**Recommended PNG Sizes for logo-with-text.svg:**
- **480x200** - Small use (maintain aspect ratio)
- **720x300** - Medium use
- **960x400** - Large use
- **1200x500** - Extra large, presentations

### Method 2: Using Inkscape (Free Desktop App)

1. Download and install [Inkscape](https://inkscape.org/) (free)
2. Open the SVG file in Inkscape
3. Go to: File → Export PNG Image
4. Set desired width/height
5. Click "Export"

### Method 3: Using ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
# Convert icon to various sizes
convert logo-icon.svg -resize 16x16 logo-icon-16.png
convert logo-icon.svg -resize 32x32 logo-icon-32.png
convert logo-icon.svg -resize 64x64 logo-icon-64.png
convert logo-icon.svg -resize 128x128 logo-icon-128.png
convert logo-icon.svg -resize 256x256 logo-icon-256.png
convert logo-icon.svg -resize 512x512 logo-icon-512.png

# Convert logo with text (maintain aspect ratio)
convert logo-with-text.svg -resize 480x logo-with-text-480.png
convert logo-with-text.svg -resize 960x logo-with-text-960.png
```

### Method 4: Using Node.js (sharp library)

If you have Node.js installed, you can use the sharp library:

```bash
npm install sharp sharp-cli -g

# Convert to PNG
sharp -i logo-icon.svg -o logo-icon-512.png --width 512
```

## Creating Favicon Files

### ICO Format (Legacy Browsers)

**Online Generator (Easiest):**
1. Go to https://www.favicon-generator.org
2. Upload `logo-icon-512.png` (convert to PNG first)
3. Download the generated `favicon.ico`
4. Place in `/public` directory

**Or use:**
- https://realfavicongenerator.net (comprehensive, generates all sizes)
- https://favicon.io (simple and fast)

### Modern Favicon Setup

Add to your `app/layout.tsx` (inside `<head>`):

```tsx
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/logo-icon-512.png" />
<link rel="manifest" href="/manifest.json" />
```

## Use Cases

### Icon Only (`logo-icon.svg`)
- Browser favicons
- App icons (iOS, Android)
- Social media profile pictures
- Avatar/thumbnail
- Loading spinners
- Small UI elements

### Icon with Text (`logo-with-text.svg`)
- Website headers
- Email signatures
- Business cards
- Presentations (PowerPoint, Google Slides)
- PDF documents
- Social media cover images
- Print materials

## Color Information

The logo uses the following colors:
- **Primary Orange**: `#ff6b35`
- **Accent Gold**: `#f59e0b`
- **Primary Blue**: `#3b82f6`
- **Gradients**: Orange → Gold → Blue

The text color in `logo-with-text.svg` is:
- **Dark Gray**: `#1f2937`

## Tips

1. **Always use SVG when possible** - It's scalable and looks perfect at any size
2. **PNG for compatibility** - Use when SVG isn't supported (email clients, older software)
3. **Transparent background** - Both SVG and PNG exports have transparent backgrounds
4. **Maintain aspect ratio** - When resizing, keep the proportions to avoid distortion
5. **High resolution for print** - Use at least 300 DPI (dots per inch) for print materials

## File Naming Convention

Suggested naming for PNG exports:
```
logo-icon-16.png
logo-icon-32.png
logo-icon-64.png
logo-icon-128.png
logo-icon-256.png
logo-icon-512.png
logo-with-text-480.png
logo-with-text-960.png
logo-with-text-1200.png
```

## Need Help?

If you encounter any issues:
1. Check that the SVG file opens correctly in your browser
2. Try a different converter tool
3. Ensure you're selecting the correct dimensions
4. For high-quality results, always start from the SVG file (not from a small PNG)
