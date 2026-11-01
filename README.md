# LoopLab — C++ Practice Arena

A no-build, browser-based C++ practice question bank.

## Run it
1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. No npm install, server, or API key is required.

## Deploy with GitHub Pages
1. Create a GitHub repository (for example, `looplab`).
2. Upload `index.html`, `style.css`, `app.js`, and `questions.js` to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.

## Current v1 status
- Question browser, search, topic and difficulty filters.
- Question details, sample I/O, progressive hints.
- C++ reference solutions currently authored for the first 16 starter questions.
- Solved-state tracking uses browser localStorage.
- Remaining catalogue entries are present as practice prompts, but their full statements, samples and solutions still need authoring.
- No online compiler or automatic judging is included.

## Files
- `index.html` — page structure
- `style.css` — responsive dark UI
- `app.js` — filters, question rendering, hints, solution reveal, progress
- `questions.js` — question bank data
