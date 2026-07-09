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
   *       align: "justify"  → justify text (even left/right edges, like Word)
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
   *   { type: "gif",    src: "assets/images/<id>/demo.gif", caption: "Optional caption" }
   *     Also accepts a video file (src ending in .mp4/.webm/.mov) — it will
   *     autoplay muted on loop with no controls, just like a gif but far
   *     smaller in file size. Use this if your gif is a screen recording
   *     or demo clip; real animated .gif files work fine too.
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
   * the project page (optional), and — if set — also shows as a small
   * static thumbnail on this project's card on the Home page, but only
   * for projects marked feature: true.
   */
  projects: [

    /* ─────────────────────────────────────────────────────
       STARTER PROJECT — example for you to edit/replace.
       Write your first project here, mixing text, images,
       and code however you like. Rename the "id" and title
       once you're done.
    ───────────────────────────────────────────────────── */
    {
      id: "ur10-tcc",
      title: "Robotic Manipulation System Based on Computer Vision",
      year: "2025",
      summary: "Simulated UR10 pick-and-place system combining PID/LQR control with an OpenCV vision pipeline for color-based object classification.",
      tags: ["Python", "OpenCV", "CoppeliaSim", "PID", "LQR", "Computer Vision", "Robotics"],
      github: "https://github.com/Danntav",
      feature: true,
      coverImage: "assets/projects/project_ur10-tcc/cover.png",
      content: [
        { type: "text", value: "My undergraduate capstone project (TCC) at college: a simulated UR10 robotic arm that picks up cubes and sorts them by color," +
        " using a computer vision pipeline for perception and an optimal controller for motion.", align: "justify" },
        { type: "text", value: "Setup", bold: true, size: "large" },
        { type: "text", value: "Everything runs in Python, connected to CoppeliaSim through its ZMQ remote API. There's some LUA scripts inside Coppelia, but they are just for configuration." +
        " The UR10's kinematics were modeled with the Denavit-Hartenberg convention and cross-checked against the simulator's own pose data — errors came out under a millimeter, confirming the model matched reality closely enough to build on.", align: "justify"},
        { type: "image", src: "assets/projects/project_ur10-tcc/ur10-description.png", caption: "UR10 kinematic structure and coordinate frames" },

        { type: "text", value: "Choosing a controller: PID vs. LQR", bold: true, size: "large" },
        { type: "text", value: "I implemented both a classic PID (tuned manually per joint group) and an LQR built on a simplified per-joint model, then compared them head-to-head on two tests: a step response and a 3D sinusoidal trajectory.", align: "justify" },
        { type: "images", srcs: ["assets/projects/project_ur10-tcc/graphs.jpg", "assets/projects/project_ur10-tcc/3d-trajectory.png"] },
        { type: "text", value: "Step response (left) and trajectory tracking (right): PID vs. LQR", align: "center" },
        { type: "list", items: [
            "Step response: LQR cut the ITAE index (penalizes lingering error) by about 45% vs. PID",
            "Trajectory tracking: LQR cut ITAE by about 72% and ITSE by about 78%",
            "LQR stayed consistently smoother and more accurate across every metric tested"
          ] },
        { type: "text", value: "Based on those results, the LQR was the clear choice for the final integrated system." },

        { type: "text", value: "Vision pipeline", bold: true, size: "large" },
        { type: "text", value: "An orthogonal (top-down) virtual camera removes perspective distortion, so pixel coordinates map to real-world coordinates with simple math. Each frame is converted to HSV, thresholded by color, cleaned up with morphological filtering, and reduced down to a centroid and orientation per object." },
        { type: "image", src: "assets/projects/project_ur10-tcc/vision_pipeline.png", caption: "Pipeline: capture → HSV → segmentation → contours → centroid → world coordinates" },
        { type: "code", lang: "python", value: "hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\nmask = cv2.inRange(hsv, lower, upper)\nmask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)\ncontours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)" },

        { type: "text", value: "Putting it together", bold: true, size: "large" },
        { type: "text", value: "With the LQR controller and vision system combined, the arm detects a randomly placed cube, reads its color and position, and sorts it into the matching bin — red, green, or blue — repeating the cycle fully on its own." },
        { type: "video", src: "assets/projects/project_ur10-tcc/final_scene.mp4", caption: "Autonomous pick-and-place cycle" },

        { type: "text", value: "Results", bold: true, size: "large" },
        { type: "list", items: [
            "Kinematic model validated against the simulator with sub-millimeter accuracy",
            "LQR outperformed PID on every tracking metric tested",
            "Reliable color detection across varying object positions and orientations",
            "Fully autonomous pick-and-place cycles, no manual intervention needed"
          ] },
        { type: "text", value: "Built entirely with open-source tools, the goal was to keep this kind of vision-guided manipulation approachable for study and further experimentation — not locked behind expensive proprietary hardware. Next up: testing on a real arm, a fuller dynamic model for the LQR, and swapping color-threshold detection for a YOLO-based detector to handle messier, less controlled scenes." },
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
      id: "machv1",
      title: "MACHv1 - Custom 5-inch FPV Drone Racer",
      year: "2023",
      summary: "Drone built from scratch for High-Speed and (future) ArduPilot",
      tags: ["Drone", "PID", "BetaFlight", "ArduPilot", "QGroundControl"],
      github: "https://github.com/Danntav",
      feature: true,
      coverImage: "assets/projects/project_machv1/closeup.jpg",
      content: [
        { type: "text", value: "Nicknamed 'MACHv1', this is a drone built from scratch with the aim of achieving high speeds while also being highly maneuverable.", align: "justify"},
        { type: "text", value: "Build", bold: true, size: "large" },
        { type: "text", value: "'MACHv1' stands for 'Maneuverable Aerial Craft for High-Speed', and the 'v1' refers to the first version built. Therefore, improvements or a v2 are being considered.", align: "justify"},
        { type: "image", src: "assets/projects/project_machv1/drone_workspace.jpg", caption: "Workspace" },
        { type: "text", value: "The MACHv1 was inspired by a video where I first discovered the world of drones back in 2022. I don't recall exactly which video was, but" +
          " it featured a guy performing various maneuvers and flying at high speeds inside an abandoned factory. I had always liked the concept but didn't think building a drone was actually feasible." +
          " Drones like the DJI Phantom 3 seemed a bit boring—too sluggish and unexciting—which is why speed was a key factor for me.", align: "justify"},
        { type: "text", value: "Initially I bought a super cheap drone on Aliexpress, those 'E99' for a few bucks. Crashed the same day and recycle the pieces for future projects." , align: "justify"},
        { type: "text", value: "Parts List", bold: true, size: "large" },
        { type: "text", value: "The majority of the pieces I bought for this project was from Aliexpress. The list below shows most part of the components used:", align: "justify" },      
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
        { type: "text", value: "The component connections followed the diagrams below (official images of the SpeedyBee FC+ESC stack):", align: "justify" },
        { type: "images", srcs: ["assets/projects/project_machv1/diagram.jpg", "assets/projects/project_machv1/layout.jpg"]},
        { type: "text", value: "If you want to build your drone based on mine, just follow the shopping list and build your own. I encourage you to do so." +
        " Remember, even though the process to build it is 'simple', it requires some experience with solder, since you can damage your Flight Controller. So be careful while doing so." , align: "justify"},
        { type: "image", src: "assets/projects/project_machv1/ESC.jpg", caption: "ESC" },
        { type: "image", src: "assets/projects/project_machv1/FC.jpg", caption: "Drone in construction" },
        { type: "text", value: "This frame didn't come with a GPS mount, so I designed and 3D-printed a support for it. The support includes 2 more spaces, one for the battery connector" +
        " and another for the antenna holder. I will upload the STL and SLDPRT file soon." , align: "justify"},
        { type: "gif",    src: "assets/projects/project_machv1/gif_sldprt.mp4", caption: "3D mount part in SolidWorks" },
        { type: "text", value: "Flight Test", bold: true, size: "large" },
        { type: "text", value: "Since I'm using an analog video transmitter (VTX), the image is not so crispy as a digital VTX, but it fits my budget and my taste this way." +
        " This video shows a flight test I took after the drone being assembled. Also, this VTX doesn't have the pin for SmartAudio, so the video has no audio." },
        { type: "video", src: "assets/projects/project_machv1/test_flight.mp4", caption: "Flight Test" },
        { type: "text", value: "If you pay attention on the bottom left of the screen, those informations were a little wrong, either the direction and the altitude." +
        " I have ajusted that since the last flight.", align: "justify" },
        { type: "text", value: "Results", bold: true, size: "large" },
        { type: "text", value: "I got some issues with the drone's receiver, the antenna plug broke and I had to use an alternative receiver, but the quality isn't that great." +
        " As for the results of this project, the drone's top speed reached so far was around 115kmh (~71.5mph) and distance around 1km. The two main components causing problems are the VTX" +
        " and the receiver. There's some kind of interference making me lose connection over and over that I haven't figured out yet. Soon I'll buy better versions of these two components." , align: "justify"},
        { type: "text", value: "I used BetaFlight to set most of the drone's config. Much has being done, much still needs to be fine-tuned. Next steps Id say to add automation, like waypoints, via ArduPilot or QGroundControl." , align: "justify"},
        { type: "gif",    src: "assets/projects/project_machv1/gif_assembling_drone.mp4", caption: "Assembling process" },
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
   * Available block types: text, list, image, images, gif, table, code, gist, video.
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
