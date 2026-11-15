# Goldenfyre GDPS Gacha

Fan-made card collecting game for the Goldenfyre GDPS Demonlist. Plain HTML, CSS and JavaScript. No build step.

## Edit things
Everything you will want to change is in **data.js**:
- Title, tagline, intro, links, rules, privacy and terms text (`SITE`)
- Embers, pull costs and daily reward (`SITE`)
- Rarities, rank cutoffs and drop rates (`RARITIES`)
- Cards: name, creator, description, image and video (`CARDS`). Order = list rank.

## Images and verification videos
- Put images in an `images/` folder and set `image: "images/level1.png"`.
- For a video, use a YouTube embed link: `video: "https://www.youtube.com/embed/VIDEO_ID"`.
- Leave either empty to show the placeholder.

## Put it on GitHub Pages
1. Create a repo and upload these files.
2. Repo Settings > Pages > Deploy from a branch > `main` / root.
3. Your site appears at `https://USERNAME.github.io/REPO/`.

Progress (Embers and cards) is saved in each player's browser only.
