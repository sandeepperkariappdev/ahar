# AHAR — Theme Files

7 ready-to-use `globals.css` files. Every file uses your exact
variable names — just swap the file to switch the whole site.

---

## Files

| File                                | Theme               | Accent colour         |
|-------------------------------------|---------------------|-----------------------|
| `globals.original-black-gold.css`   | Original (default)  | Gold `#d4af37`        |
| `globals.ivory-sage.css`            | Ivory & Sage        | Sage `#3d5a40`        |
| `globals.stone-terracotta.css`      | Stone & Terracotta  | Terracotta `#b5522a`  |
| `globals.navy-champagne.css`        | Navy & Champagne    | Champagne `#c9a96e`   |
| `globals.forest-cream.css`          | Forest & Cream      | Antique gold `#c4a86a`|
| `globals.blush-bronze.css`          | Blush & Bronze      | Copper `#9b6b4a`      |
| `globals.slate-warm-white.css`      | Slate & Warm White  | Brass `#b89c6e`       |

---

## How to switch themes

### Option A — Simplest: swap the import line

Put all 7 files in `src/app/themes/`.
In `src/app/layout.jsx`, change one line:

```js
// Original (current):
import './globals.css'

// Switch to Navy & Champagne:
import './themes/globals.navy-champagne.css'

// Switch to Ivory & Sage:
import './themes/globals.ivory-sage.css'
```

Restart `next dev` and the whole site switches instantly.

---

### Option B — Environment variable (no code changes to commit)

1. Move all theme files into `src/app/themes/`
2. In `.env.local` set:
   ```
   NEXT_PUBLIC_THEME=navy-champagne
   ```
3. In `src/app/layout.jsx`:
   ```js
   const theme = process.env.NEXT_PUBLIC_THEME || 'original-black-gold'
   
   // Dynamic import at the top of the file:
   import(`./themes/globals.${theme}.css`)
   ```
   Change `.env.local` and restart `next dev` to switch.

---

### Option C — Live runtime switching (no rebuild needed)

Use a single `globals.css` with all palettes defined under
`[data-theme]` attribute selectors, then toggle via JS.

**Step 1 — In globals.css**, define each theme as a block:
```css
[data-theme="original"]       { --black: #0a0a0a; --gold: #d4af37; --cream: #f5f0e8; /* ... */ }
[data-theme="ivory-sage"]     { --black: #f8f4ee; --gold: #3d5a40; --cream: #2c3e2d; /* ... */ }
[data-theme="navy-champagne"] { --black: #f4f2ee; --gold: #c9a96e; --cream: #1b2a4a; /* ... */ }
/* repeat for all 7 */
```

**Step 2 — Set on `<html>` in layout.jsx**:
```js
'use client'
import { useEffect } from 'react'

export default function RootLayout({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem('ahar-theme') || 'original'
    document.documentElement.setAttribute('data-theme', saved)
  }, [])
  return <html lang="en">{children}</html>
}
```

**Step 3 — Switch from any component**:
```js
function setTheme(name) {
  document.documentElement.setAttribute('data-theme', name)
  localStorage.setItem('ahar-theme', name)
}

// Example usage:
<button onClick={() => setTheme('navy-champagne')}>Navy</button>
<button onClick={() => setTheme('ivory-sage')}>Sage</button>
```

---

## Variable mapping — what changes between themes

| Variable     | Original       | Ivory/Sage     | Terracotta     | Navy           | Forest         | Blush          | Slate          |
|--------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|
| `--black`    | `#0a0a0a` (bg) | `#f8f4ee` (bg) | `#f5f0eb` (bg) | `#f4f2ee` (bg) | `#f6f3ed` (bg) | `#faf4f0` (bg) | `#f8f6f3` (bg) |
| `--charcoal` | `#1a1a1a`      | `#ffffff`      | `#ffffff`      | `#ffffff`      | `#ffffff`      | `#ffffff`      | `#ffffff`      |
| `--charcoal2`| `#222222`      | `#f3ede4`      | `#ede8e0`      | `#ede9e2`      | `#eae6de`      | `#f5ece6`      | `#eeebe6`      |
| `--gold`     | `#d4af37`      | `#3d5a40`      | `#b5522a`      | `#c9a96e`      | `#c4a86a`      | `#9b6b4a`      | `#b89c6e`      |
| `--gold-light`| `#e8c547`     | `#4e7252`      | `#d4622e`      | `#dfc080`      | `#d9bf80`      | `#b8804e`      | `#ccb07e`      |
| `--gold-dim` | `#b8960c`      | `#8a7355`      | `#d4c5b0`      | `#a88848`      | `#8a6e35`      | `#c9a882`      | `#8a7050`      |
| `--cream`    | `#f5f0e8` (txt)| `#2c3e2d` (txt)| `#3a2e26` (txt)| `#1b2a4a` (txt)| `#1a2e1f` (txt)| `#4a2828` (txt)| `#1e2c34` (txt)|
| `--muted`    | `#888888`      | `#9a8878`      | `#9a8070`      | `#8c9cb8`      | `#7a9e7e`      | `#b09090`      | `#7a8a92`      |
| `--border`   | `#2a2a2a`      | `#e0d8cc`      | `#ddd0c0`      | `#ddd9d0`      | `#e0dbd0`      | `#f0e4dc`      | `#e4e0d8`      |
| `--border2`  | `#333333`      | `#d4c8b8`      | `#cfc0ae`      | `#d0ccc2`      | `#d4cec0`      | `#e8d8ce`      | `#d8d4cc`      |

### Why --black becomes the background and --cream becomes text

In the original theme, components use `var(--black)` as their
background colour and `var(--cream)` as their text colour.
In the light themes, `--black` is remapped to the light
background colour (e.g. ivory), and `--cream` is remapped to
the dark text colour (e.g. deep sage). This means every
component flips automatically with zero code changes.
