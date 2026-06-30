const SITE_CONFIG = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  name: "Daniel O. Tavares",
  role: "Computer Engineering",
  subrole: "Embedded Software || Hardware || Robotics || FPGA",
  bio: `Computer Engineering`,

  /* Header background image path. */
  headerImage: "assets/images/header-bg.jpg",

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
   *   { type: "image",  src: "assets/images/<id>/photo.jpg", caption: "Optional caption" }
   *   { type: "images", srcs: ["assets/images/<id>/a.jpg", "assets/images/<id>/b.jpg"] }  // side by side
   *   { type: "table",  headers: ["Col A", "Col B"], rows: [["a1","b1"], ["a2","b2"]], caption: "Optional caption" }
   *   { type: "code",   lang: "python", value: "print('hi')" }
   *   { type: "gist",   url: "https://gist.github.com/username/gist-id" }
   *   { type: "video",  src: "assets/videos/demo.mp4", caption: "Optional caption" }
   *
   * This same block system also powers the "about.content" field below —
   * so you can mix text, photos, and tables on the About page too.
   *
   * Mix as many blocks as you want, in whatever order tells the story
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
      id: "starter-project",
      title: "My First Project",
      year: "2022",
      summary: "One-line summary — shows up in the project list and on the Home page.",
      tags: ["Arduino", "C"],
      github: "https://github.com/Danntav",
      feature: true,
      coverImage: "",   /* e.g. "assets/images/starter-project/cover.jpg" */
      content: [
        { type: "text", value: "Write the first part here: what motivated you to build this, the context it came from." },
        { type: "image", src: "", caption: "Caption for the first image" },
        { type: "text", value: "Keep telling the process: the decisions you made, the problems you ran into along the way." },
        { type: "code", lang: "cpp", value: "void loop() {\n  int value = analogRead(A0);\n  Serial.println(value);\n}" },
        { type: "images", srcs: ["", ""] },
        { type: "text", value: "Wrap up with the results: what worked, what you learned, what you'd do differently." },
      ],
    },

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
      id: "home-automation",
      title: "Home Automation",
      year: "2024",
      summary: "IoT system with ESP32, a local MQTT broker, and a React Native app.",
      tags: ["ESP32", "MQTT", "Arduino", "React Native", "Raspberry Pi", "Node-RED"],
      github: "https://github.com/Danntav",
      coverImage: "",
      content: [
        { type: "text", value: "Personal project to automate my own house and learn IoT hands-on." },
        { type: "image", src: "", caption: "System control panel" },
        { type: "text", value: "ESP32 boards as WiFi network nodes. MQTT broker running on a local Raspberry Pi. React Native app for remote control of lighting, temperature, and security." },
        { type: "text", value: "The system has been running for over a year with no critical failures, with a noticeable drop in energy use thanks to schedule- and presence-based automations." },
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
      title: "DIY Quadcopter",
      year: "2023",
      summary: "Drone built from scratch with PX4 firmware and autonomous MAVLink missions.",
      tags: ["PX4", "MAVLink", "Python", "QGroundControl", "PID"],
      github: "https://github.com/Danntav",
      coverImage: "",
      content: [
        { type: "text", value: "Capstone project for an embedded systems course. Learned the full stack: power electronics, ESCs, flight control, telemetry, and autonomous waypoint missions." },
        { type: "image", src: "", caption: "Assembled drone" },
        { type: "text", value: "450 mm carbon fiber frame, 2212 motors, 30A ESCs, Pixhawk flight controller, u-blox GPS, 433 MHz telemetry radio. Custom PX4 firmware." },
        { type: "text", value: "Stable flights of up to 15 minutes. Functional autonomous waypoint missions." },
      ],
    },
  ],


  /* ── STANDALONE SNIPPET / GIST ──────────────────────────── */
  /*
   * Shown as a card on the Home page, not tied to any project.
   * Leave url: "" to hide this section.
   */
  snippet: {
    title: "Useful snippet",
    description: "A piece of code I use often.",
    url: "",   /* e.g. "https://gist.github.com/Danntav/abcd1234efgh" */
  },


  /* ── RESUME ─────────────────────────────────────────────── */
  education: [
    {
      period: "2022 — present",
      degree: "Computer Engineering",
      institution: "Federal University of São João del-Rei (UFSJ)",
      description: "Focus on robotics, embedded systems, and industrial automation.",
    },
    {
      period: "2019 — 2021",
      degree: "Technical High School Diploma in Electronics",
      institution: "IFMG — Federal Institute of Minas Gerais",
      description: "Electronics technician program integrated with high school.",
    },
  ],

  experience: [
    {
      period: "2023 — present",
      role: "Member — Robotics Team",
      company: "Robotics Research Group / UFSJ",
      description: "Development of robotics projects for competitions and academic research.",
    },
    {
      period: "2024",
      role: "Undergraduate Research Assistant",
      company: "UFSJ — Automation Lab",
      description: "Research on robotic system control using computer vision.",
    },
  ],

  skills: [
    "Python", "C / C++", "ROS / ROS2", "Arduino", "ESP32",
    "OpenCV", "Linux", "Git / GitHub", "SolidWorks", "MATLAB",
    "Electronics", "MQTT / IoT",
  ],

  languages: [
    { lang: "Portuguese", level: "Native" },
    { lang: "English",    level: "Intermediate" },
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
      note: "Introduction to the topic, with intersting glances of hard concepts. Many typos either in code and text, so I couldn't really trust on it.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "rec",
      stars: 5,
      cover: "",
      note: "Changed the way I write code. Required reading for any serious developer.",
    },
    {
      title: "Automate the Boring Stuff with Python",
      author: "Al Sweigart",
      status: "rec",
      stars: 5,
      cover: "",
      note: "Practical Python for automating everything. Free online. Was my first serious programming book.",
    },
    {
      title: "Introduction to AI Robotics",
      author: "Robin Murphy",
      status: "read",
      stars: 4,
      cover: "",
      note: "Good introduction to autonomous robotics. Covers the fundamentals of AI for robots well.",
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
      { type: "text", value: "Hi! I'm Daniel, a Computer Engineering student, from Minas Gerais, Brazil. I'm passionate about robotics, embedded systems, and automation." },
      { type: "image", src: "", caption: "" },   /* e.g. src: "assets/images/general/me.jpg" */
      { type: "text", value: "I like the edge between the physical and digital worlds." },
      { type: "text", value: "Outside of engineering, I enjoy reading philosophy and theology, listening to music and camping." },
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
      { label: "Interests",     value: "FPGA, Low-Level, Robotics, Automation, RF" },
    ],
  },

};
