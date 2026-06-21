# 📓 The Digital Vellum (ITOL Vault)

A minimalist, privacy-focused digital diary application engineered for personal reflection. Crafted with a clean, typography-first editorial aesthetic ("The Digital Vellum"), your thoughts stay entirely secured within your local machine.

## ✨ Features

- **Asymmetric Grid Layout**: Uses custom CSS Grid layouts with alternating `direction: rtl` rules across dashboard rows to present a unique, alternating masonry display for recent thoughts.
- **Full Chronicle Archive**: Implements clean reverse-chronological entry streams (`.toReversed()`) inside the historical Vault view to render all logs in order of your newest thoughts.
- **Dynamic Meta Tagging**: Features a specialized pop-up dialog (`#mood-dialog`) to attach, manage, and clear custom pill-shaped emoji tags for your diary logs.
- **Privacy Engine**: Powered exclusively by the browser's native `localStorage` API. Features zero tracking, zero background server calls, and zero cloud vulnerabilities.

## 📁 Project Architecture & Scripts

The application leverages a unified styling layer (`style.css`) mapped to modern semantic components:

### 🗂️ Core Views
- `index.html` — The dashboard interface sorting recent reflections across dynamic grid slots (`.line-one`, `.line-two`, `.line-three`).
- `new-entry.html` — The authoring platform providing contextual insight sidebars and active modal dialog panels.
- `vault.html` — The historical ledger listing your entire entry timeline inside a single column stack (`#display-thoughts`).

### ⚙️ Script Registry
- `app.js` — Shared Core. Initializes the `savedEntries` global data array from `localStorage` and contains shared string utilities (`getCleanDate`, `getNewCard`).
- `home.js` — Coordinates dashboard slice offsets (`-2`, `-4`, `-5`) to load preview cards.
- `entry.js` — Governs new reflection structures, validates input bounds, and captures target entry structures.
- `archive.js` — Inverts the entry log collection natively to append historical cards down the timeline.

## 🛠️ Tech Stack

- **Interface Blueprint**: Semantic HTML5 structures with customizable SVG visual iconography layers.
- **Visual Framework**: Pure CSS3 Grid & Flexbox (Zero external styling overhead).
- **Storage Profile**: Native Browser `localStorage` parsing persistent data trees via JSON objects.

## 🚀 Running Your Environment Locally

Because this codebase compiles natively directly inside your web browser, **there are no installation packages, runtimes, or compilation steps to configure.**

1. **Clone the repository** via SSH to your workspace:
   ```bash
   git clone git@github.com:jongreenspan37-create/myItolVault.git
   ```
2. **Access the directory**:
   ```bash
   cd myItolVault
   ```
3. **Launch the application**:
   Simply open the project folder on your local machine and **double-click the `index.html` file** to open and run the vault instantly in any browser.


## 🔒 Session Security & Persistence

- **Data Integrity**: All written logs are locked strictly within your unique local browser cache profile. 
- **Storage Warning**: Wiping your application session history, running heavy cookie cleaners, or purging site storage parameters will permanently drop your data. Regular source code migrations or manual exports are recommended.


