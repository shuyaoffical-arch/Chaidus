# Chaidus — personal website

A small, text-first personal site with a nostalgic blue desktop-window frame, an editable introduction, and a simple weekly blog. It uses plain HTML and CSS and works on GitHub Pages.

## Customize it

1. In `index.html`, replace `Your Name` and edit the intro text, page title, and links.
2. Edit `intro.txt` with your own bio and interests. It is also linked from the navigation so visitors can read it as a plain text file.
3. Replace `profile.svg` with a photo file such as `profile.jpg`, then change `src="profile.svg"` in `index.html` to `src="profile.jpg"` and update its alt text.
4. Change colors and layout in `style.css`. The `--blue`, `--ink`, `--paper`, and `--link` variables near the top control the main palette. The window title bar, controls, border, and beige panel are CSS-drawn to recreate the supplied background's look.
5. For each weekly post, create a new HTML file in `blog/` (copy `blog/hello-world.html`), update its title and date, and add a link to it in `blog/index.html` and the “From the blog” list in `index.html`.

## Publish with GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. GitHub Pages will publish the site at `https://shuyaoffical-arch.github.io/Chaidus/` after the deployment finishes.

The uploaded reference image is recreated with CSS rather than embedded as a separate image file, so you can adjust the design without needing to manage a background image asset.
