# danntav.github.io — Portfolio

## File structure

```
danntav.github.io/
├── index.html              ← page structure & styling (don't edit this)
├── config.js               ← ALL your content (edit this!)
├── README.md              
└── assets/
    ├── images/		    → general images
    ├── books/              → book cover images
    ├── videos/             → video clips (demos, etc.)
    ├── schematics/         → circuit diagrams, wiring, CAD exports
    ├── pdfs/               → cv.pdf, datasheets, reports
    ├── code/               → standalone code files you want to link to
    ├── projects/
	 │
	 ├── project_01_name/          → media for project XX
         ├── project_02_name/   
		.
		.
		.


```

Each project gets its own folder under `assets/images/<project-id>/` — drop all
images for that project in there, no need for further subfolders. Anything
generic (header background, avatar, etc.) goes in `assets/images/`.

---

## How to update the site

You only ever need to edit `config.js`. You should never need to touch `index.html`.

### Add a new project (with mixed text, images, code…)

Each project has a `content` field: a **list of blocks**, in whatever order you
want. Mix as many as you like to tell the story of the project.

Available block types:

```js
{ type: "text",   value: "A paragraph of text." }
{ type: "image",  src: "assets/images/<id>/photo.jpg", caption: "Optional caption" }
{ type: "images", srcs: ["assets/images/<id>/a.jpg", "assets/images/<id>/b.jpg"] }  // side by side
{ type: "code",   lang: "python", value: "print('hi')" }
{ type: "gist",   url: "https://gist.github.com/username/gist-id" }
{ type: "video",  src: "assets/videos/demo.mp4", caption: "Optional caption" }
```

Full example:

```js
{
  id: "my-project",
  title: "Project Name",
  year: "2025",
  summary: "Short summary that shows up in the project list.",
  tags: ["Tag1", "Tag2"],
  github: "https://github.com/Danntav/my-project",
  coverImage: "assets/images/my-project/cover.jpg",   // big image at the top (optional)
  content: [
    { type: "text", value: "How this project started..." },
    { type: "image", src: "assets/images/my-project/1.jpg", caption: "Early prototype" },
    { type: "text", value: "After testing, I realized..." },
    { type: "code", lang: "cpp", value: "void loop() {\n  // ...\n}" },
    { type: "images", srcs: ["assets/images/my-project/2.jpg", "assets/images/my-project/3.jpg"] },
    { type: "text", value: "In the end, the result was..." },
  ],
},
```

There's already an example project called **"My First Project"**
(`id: "starter-project"`) at the top of the list — just fill in the text and
the `src`/`url` fields with your own images, or delete the whole block if you
don't need it.

### Add a book (with a cover)

Inside `books: [ ... ]`:

```js
{
  title:  "Book Title",
  author: "Author Name",
  status: "rec",    // "rec" = recommend | "read" = already read | "reading" = reading now
  stars:  5,         // 1 to 5
  cover:  "assets/images/books/book-title.jpg",
  note:   "Why you recommend it / what you thought.",
},
```

Books are shown in a **grid** (like a bookshelf), cover on top. If `cover` is
left empty (`""`), a gray placeholder shows instead — the site won't break.

You can photograph your physical copy or download the official cover and drop
it into `assets/images/books/`.

### Add a GitHub Gist

You can use a Gist in two ways:

**1. Standalone, on the Home page** (not tied to any project) — edit the
`snippet` object near the top of `config.js`:

```js
snippet: {
  title: "Useful snippet",
  description: "A piece of code I use often.",
  url: "https://gist.github.com/Danntav/YOUR_GIST_ID",
},
```

Leave `url: ""` to hide this section.

**2. Inside a project's page**, as another block in `content`:

```js
{ type: "gist", url: "https://gist.github.com/Danntav/YOUR_GIST_ID" }
```

In both cases, just paste the full Gist URL (the same one shown in your
browser's address bar when viewing the Gist on GitHub).

### Add a video to a project

```js
{ type: "video", src: "assets/videos/my-demo.mp4", caption: "Optional caption" }
```

Drop the video file into `assets/videos/` first.

### Change the header background image

Replace the file at `assets/images/general/header-bg.jpg` with any image you like.
If you want to use a different filename, also update it in `config.js`:

```js
headerImage: "assets/images/general/my-photo.jpg",
```

### Change the accent color

In `index.html`, near line 15, change `--accent: #c0392b;` to any color you prefer.

---

## Publish to GitHub Pages

1. Upload everything in this folder to the `danntav.github.io` repository
2. In Settings → Pages → Source: select the `main` branch / `/ (root)`
3. Your site will be live at `https://danntav.github.io`
