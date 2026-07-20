# danntav.github.io — Portfolio

## File structure

```
danntav.github.io/
├── index.html              ← page structure & styling (don't edit this)
├── config.js               ← content (edit this!)
├── README.md              
└── assets/
    ├── images/		        → general images
    ├── books/              → book cover images
    ├── pdfs/               → cv.pdf, datasheets, reports
    └── projects/
	 ├── project_01_name/          → media for project XX
     ├── project_02_name/   
		.
		.
		.


```

Each project gets its own folder under `assets/images/<project-id>/`.
Anything generic (header background, avatar, etc.) goes in `assets/`.

---

## How to update the site

Only ever need to edit `config.js`. Do not need to touch `index.html`.

### Add a new project (with mixed text, images, code…)

Each project has a `content` field: a **list of blocks**, in whatever order liked.
want. Mix them to tell the story of the project.

Available block types:

```js
{ type: "text",   value: "A paragraph of text.", align: "justify", bold: false, size: "normal" }
  // align: "center" | "justify"   bold: true   size: "large"  → all optional
 
{ type: "list",   items: ["First point", "Second point"], ordered: false }
{ type: "image",  src: "assets/projects/<id>/photo.jpg", caption: "Optional caption" }
{ type: "images", srcs: ["assets/projects/<id>/a.jpg", "assets/projects/<id>/b.jpg"] }  // side by side
{ type: "gif",    src: "assets/projects/<id>/demo.gif", caption: "Optional caption" }
  // also accepts .mp4/.webm — autoplays muted on loop, same look as a gif but smaller file size
 
{ type: "table",  headers: ["Col A", "Col B"], rows: [["a1","b1"], ["a2","b2"]], caption: "Optional caption" }
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

There's already an example project called **"My First Project"** (`id: "starter-project"`)

### Add a book (with a cover)

Inside `books: [ ... ]`:

```js
{
  title:  "Book Title",
  author: "Author Name",
  status: "rec",    // "rec" = recommend | "read" = already read | "reading" = reading now
  stars:  5,         // 1 to 5
  cover:  "assets/images/books/book-title.jpg",
  note:   "Opnion...",
},
```

Books are shown in a **grid** (like a bookshelf), cover on top. If `cover` is
left empty (`""`), a gray placeholder shows instead — the site won't break.

Drop the books cover into `assets/images/books/`.

### Add a GitHub Gist

Two possible ways to use Gist:

**1. Standalone, on the Home page** (not tied to any project) — edit the
`snippet` object near the top of `config.js`:

```js
snippet: {
  title: "Useful snippet",
  description: "A piece of code I use often.",
  url: "https://gist.github.com/Danntav/GIST_ID",
},
```

Leave `url: ""` to hide this section.

**2. Inside a project's page**, as another block in `content`:

```js
{ type: "gist", url: "https://gist.github.com/Danntav/GIST_ID" }
```

In both cases, just paste the full Gist URL (the same one shown the browser's address bar).

### Resume
 
```js
education: [  { period: "2021 — 2026", degree: "Degree name", institution: "School", description: "" },],
 
experience: [  { period: "2025 — present", role: "Role", company: "Company", description: "" },],
 
skills: ["Python", "C", "Firmware"],
 
languages: [  { lang: "Portuguese", level: "Native" },],
```
 
The **Download CV** button uses `cvFile` (set above).
 
### About page
 
Same block system as Projects (`about.content`), plus two extra fields:
 
```js
about: {
  content: [
    { type: "text", value: "Hi, I'm..." },
    { type: "image", src: "assets/images/general/profile.jpg", caption: "" },
  ],
  currentlyExploring: ["FPGA", "Embedded Systems"],   // shown as a small list
  tableData: [
    { label: "Location", value: "Minas Gerais, Brazil" },
  ],
},
```


### Change the header background image

Replace the file at `assets/images/general/header-bg.jpg` with any image preferred.

### Change the accent color

In `index.html`, near line 15, change `--accent: #c0392b;` to any color preferred.
