const SITE_CONFIG = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  name: "Daniel O. Tavares",
  role: "Master Computer Engineering student",
  subrole: "Embedded Software || Hardware || FPGA || Robotics",
  bio: `Master Computer Engineering student who loves to do projects.`,

  /* Header background image path. */
  headerImage: "assets/images/general/header-bg.jpg",

  /* ── SOCIAL LINKS (shown in header and Contact tab) ──────── */
  social: [
    { label: "GitHub",   url: "https://github.com/Danntav",                   icon: "github"   },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-otavares/", icon: "linkedin" },
    { label: "Email",    url: "mailto:danieloftavares@gmail.com",             icon: "email"    },
  ],

  /* Resume PDF path */
  cvFile: "assets/pdfs/cv.pdf",


  /* ── PROJECTS ───────────────────────────────────────────── */
  /*
   * Each project has a "content" field: a list of blocks, in the ORDER
   * you want them to appear. Available block types:
   *
   *   { type: "text",   value: "A paragraph of text." }
   *
   *     Optional text modifiers (mix any of these):
   *       align: "center"   → center the paragraph
   *       bold: true        → bold weight, darker color
   *       size: "large"     → bigger text (great for a title/emphasis line)
   *     e.g. a section title:
   *       { type: "text", value: "Design Overview", bold: true, size: "large" }
   *     e.g. a centered pull-quote:
   *       { type: "text", value: "Built in 3 weeks.", align: "center", bold: true }
   *
   *   { type: "list",   items: ["First point", "Second point"], ordered: false }
   *     Renders as bullet points. Set ordered: true for a numbered list.
   *
   *   { type: "image",  src: "assets/images/<id>/photo.jpg", caption: "Optional caption" }
   *   { type: "images", srcs: ["assets/images/<id>/a.jpg", "assets/images/<id>/b.jpg"] }  // side by side
   *     Note: side-by-side images now keep their original proportions
   *     (no more forced square crop). If the two images have very
   *     different shapes/aspect ratios, they may look uneven sitting
   *     next to each other — in that case, prefer two separate "image"
   *     blocks stacked instead of one "images" block.
   *   { type: "table",  headers: ["Col A", "Col B"], rows: [["a1","b1"], ["a2","b2"]], caption: "Optional caption" }
   *   { type: "code",   lang: "python", value: "print('hi')" }
   *   { type: "gist",   url: "https://gist.github.com/username/gist-id" }
   *   { type: "video",  src: "assets/videos/demo.mp4", caption: "Optional caption" }
   *
   * This same block system also powers the "about.content" field below —
   * so you can mix text, photos, and tables on the About page too.
   *
   * Mix as many blocks as liked, in whatever order tells the story
   * of the project best. coverImage is the large image at the top of
   * the project page (optional).
   */
  projects: [

    /* ─────────────────────────────────────────────────────
       STARTER PROJECT — example for you to edit/replace.
       Write your first project here, mixing text, images,
       and code however you like. Rename the "id" and title
       once you're done.
    ───────────────────────────────────────────────────── */
    {
      id: "robotic-arm",
      title: "Robotic Arm",
      year: "2024",
      summary: "4-DOF manipulator with computer vision for object classification.",
      tags: ["ROS", "OpenCV", "Python", "C++", "SolidWorks", "Arduino"],
      github: "https://github.com/Danntav",
      feature: true,
      coverImage: "",
      content: [
        { type: "text", value: "Built during an undergraduate research project at UFSJ's Automation Lab. The goal was to create an automated manipulation system to sort parts on a simulated assembly line." },
        { type: "image", src: "", caption: "Overview of the manipulator" },
        { type: "text", value: "Mechanical design in SolidWorks, 3D-printed parts, servo motor drive electronics, inverse kinematics control in Python, and OpenCV integration for object detection via camera." },
        { type: "code", lang: "python", value: "# simplified color detection snippet\nmask = cv2.inRange(hsv, lower, upper)\ncontours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)" },
        { type: "images", srcs: ["", ""] },
        { type: "text", value: "Result: 94% accuracy classifying objects by color and shape, at 8 parts per minute. Presented at UFSJ's Undergraduate Research Symposium." },
      ],
    },
    {
      id: "line-follower",
      title: "Line Follower Robot",
      year: "2023",
      summary: "Competition robot with PID control and an STM32 microcontroller.",
      tags: ["C", "STM32", "PID", "Electronics", "IR Sensors"],
      github: "https://github.com/Danntav",
      coverImage: "",
      content: [
        { type: "text", value: "Built for university robotics competitions. The challenge: build the fastest robot that can follow a line in the shortest time." },
        { type: "image", src: "", caption: "Robot on the test track" },
        { type: "text", value: "Compact mechanical design, STM32F4, 8 analog IR sensors, DC motors with encoders, and PID control tuned empirically. Firmware written in plain C." },
        { type: "text", value: "Result: 2nd place at the regional championship. Top speed of 2.3 m/s through tight corners with stable PID control." },
      ],
    },
    {
      id: "object-detection",
      title: "Object Detection (CV)",
      year: "2025",
      summary: "YOLOv8 pipeline for real-time industrial quality inspection.",
      tags: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Jetson Nano"],
      github: "https://github.com/Danntav",
      coverImage: "",
      content: [
        { type: "text", value: "Research project in partnership with a local company to automate visual quality inspection on the production line." },
        { type: "text", value: "Custom dataset with 2,000+ labeled images, YOLOv8 fine-tuning on Roboflow, deployed on an industrial camera with inference running on a Jetson Nano." },
        { type: "image", src: "", caption: "Example of real-time detection" },
        { type: "text", value: "91% mAP on defect detection. 60% reduction in manual inspection time. System currently in testing at the partner company." },
      ],
    },
    {
      id: "drone",
      title: "DIY Racing Quadcopter",
      year: "2023",
      summary: "Drone built from scratch with PX4 firmware and autonomous MAVLink missions.",
      tags: ["Drone", "PID", "BetaFlight", "QGroundControl"],
      github: "https://github.com/Danntav",
      coverImage: "",
      content: [
        { type: "text", value: "Capstone project for an embedded systems course. Learned the full stack: power electronics, ESCs, flight control, telemetry, and autonomous waypoint missions." },
        { type: "image", src: "assets/projects/project_001_drone/ESC.jpg", caption: "ESC" },
        { type: "image", src: "assets/projects/project_001_drone/drone_workspace.jpg", caption: "" },
        { type: "images", srcs: ["assets/projects/project_001_drone/diagram.jpg", "assets/projects/project_001_drone/layout.jpg"]},
        { type: "table",  headers: ["Part", "Model"], rows: 
            [["Frame","PhiSital Mark5 MK5 DC DeadCat"],
            ["Motor","Rcinpower EX2306 Plus 1800kv"],
            ["Battery","CNHL Lipo Battery 4S 1500mah 100C"],
            ["Stack ESC+FC","SpeedyBee F405 V3 50A"],
            ["Camera","Foxeer Razer Nano"],
            ["VTX","Jhemcu VTX20-600 5.8G 40ch"],
            ["Receiver","ELRS MINI Receiver EPW5 2.4G"],
            ["Props","iFlight Nazgul F5 5,1 inches"],
            ["Antenna","5.8G Lollipop 4 RHCP"],
            ["GPS","M80 Pro"],
            ["Radio","T-Pro v2 ELRS 1000mW"],
            ["Googles","Eachine EV800D 5.8G 40ch"],
            ["Finder Buzzer","IFlight YR50B_S"],
            ["Smart Smoke Stopper","iFlight XT60 Smart Smoke"],
            ["Antenna Cable adapter","SMA-F to MMCX M90"]],
            caption: "Used parts in my drone"},

        { type: "image", src: "assets/projects/project_001_drone/FC.jpg", caption: "Assembled drone" },
        { type: "video", src: "assets/projects/project_001_drone/test_flight.mp4", caption: "Flight Test" },
        { type: "text", value: "I used BetaFlight to set most of the drone's config." },
        { type: "text", value: "Stable flights of up to 10 minutes. Functional autonomous waypoint missions." },
      ],
    },
  ],


  /* ── STANDALONE SNIPPET / GIST ──────────────────────────── */
  /*
   * Shown as a card on the Home page, not tied to any project.
   * Leave url: "" to hide this section.
   */
  snippet: {
    title: "Win 10 / 11 debloat script",
    description: "Created this snippet to automate removing all win10/11 garbage that comes pre-installed. Just have to run it on privillege powershell.",
    url: "https://gist.github.com/Danntav/89c987fa4f38316d2ad1c35134075970",   /* e.g. "https://gist.github.com/Danntav/abcd1234efgh" */
  },


  /* ── RESUME ─────────────────────────────────────────────── */
  education: [
      {
      period: "2026 — 2028",
      degree: "M.Sc. Computer Science",
      institution: "Federal University of Viçosa",
      description: "",
    },
    {
      period: "2021 — 2026",
      degree: "B.S. Computer Engineering",
      institution: "Viçosa University Center",
      description: "Focus on embedded systems, IoT and Low Level development (Assembly, FPGA, C).",
    },
    {
      period: "2016 — 2018",
      degree: "Federal High School Diploma",
      institution: "Coluni — Federal University College of Viçosa",
      description: "Brazil's top 1 HighSchool between 2005-2018",
    },
  ],

  experience: [
    {
      period: "2026 — present",
      role: "Member — Research Team",
      company: "FPGA Research Group / UFV",
      description: "Development of embedded projects for academic research.",
    },
    {
      period: "2026 — present",
      role: "Software Engineer",
      company: "RobotichTech",
      description: "Software developer for computer vision solutions.",
    },
    {
      period: "2025 — 2026",
      role: "Embedded System Engineering Intern",
      company: "J2S Solutions",
      description: "Embedded Engineer intern responsible for the entire product pipeline (hardware, firmware, communication, tests)",
    },
    {
      period: "2025",
      role: "Automation Engineer Intern",
      company: "testRigot",
      description: "Automated self-tests for Chrome & Android/iOS apps using TestRigor’s framework.",
    },
    {
      period: "2025",
      role: "Robotics Assistant",
      company: "NERo - UFV's Robotics Specialization Center.",
      description: "Hardware and firmware optimizations for educational robot used in public schools competition.",
    },
    {
      period: "2022 — 2024",
      role: "Network Engineer Intern",
      company: "PadTec S.A",
      description: "Configured, monitored, and validated networking equipment (Cisco, Juniper, Arista, Cumulus).",
    },
  ],

  skills: [
    "Python", "C", "ROS / ROS2", "ESP32",
    "OpenCV", "Linux", "Git / GitHub", "SolidWorks",
    "Electronics", "MQTT / IoT",
  ],

  languages: [
    { lang: "Portuguese", level: "Native" },
    { lang: "English",    level: "Advanced/Professional" },
    { lang: "German",     level: "Basic"},
  ],


  /* ── BOOKS ──────────────────────────────────────────────── */
  /*
   * status: "rec"     → ★ Recommend  (green badge)
   *         "read"    → Already read (gray badge)
   *         "reading" → Reading now  (blue badge)
   *
   * cover: path to the book cover image
   *        (e.g. "assets/images/books/clean-code.jpg").
   *        Leave "" if you don't have the image yet — a placeholder
   *        will show instead.
   */
  books: [
    {
      title: "The Pragmatic Programmer",
      author: "Almeida et. al",
      status: "read",
      stars: 3,
      cover: "/assets/books/Prog_Sistemas_Embarcados_Almeida_etal.jpg",
      note: "Introduction to the topic, with glances of hard concepts. Many typos either in code and text, so I couldn't really trust on it.",
    },
    {
      title: "Low Level Programming",
      author: "Igor Zhirkov",
      status: "reading",
      stars: 5,
      cover: "/assets/books/Low_level_Zhirkov.jpg",
      note: "",
    },
    {
      title: "C Programming Language",
      author: "Brian W. Kernighan, Dennis M. Ritchie",
      status: "read",
      stars: 5,
      cover: "/assets/books/C_Programming_Language_Kernighan.jpg",
      note: "Top1 must read book for low level programmer.",
    },


  ],


  /* ── ABOUT ──────────────────────────────────────────────── */
  /*
   * Same flexible block system as Projects (see the comment above
   * "projects:"). Mix text, photos, tables, etc. in any order —
   * e.g. paragraph → photo → paragraph → table → paragraph.
   *
   * Available block types: text, image, images, table, code, gist, video.
   * See the "PROJECTS" comment above for the exact syntax of each.
   */
  about: {
    content: [
      { type: "text", value: "Hi! I'm Daniel, a Computer Engineering student, from Minas Gerais, Brazil." },
      { type: "image", src: "", caption: "" },   /* e.g. src: "assets/images/general/me.jpg" */
      { type: "text", value: "For me, understanding the low level world and how everything comes together as a whole, is the real magic." },
      { type: "text", value: "Outside of engineering, I really enjoy camping and music. On my free time, sometimes I read philosophy/theology." },
    ],
    currentlyExploring: [
      "FPGA",
      "RF & HAM Radio",
      "ROS2 Navigation Stack",
      "SLAM & Mapping",
      "Computer Vision",
    ],
    tableData: [
      { label: "Location",      value: "Minas Gerais, Brazil" },
      { label: "Major",         value: "Computer Engineering" },
      { label: "University",    value: "Univicosa" },
      { label: "Interests",     value: "FPGA, Low-Level, Robotics, IoT, Hardware, RF" },
    ],
  },

};
