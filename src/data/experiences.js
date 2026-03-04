/**
 * Add new experiences here. They will automatically be sorted
 * from most recent to oldest based on the `date` field.
 *
 * Each experience:
 *   id          – unique string or number
 *   title       – displayed on the card and in the modal
 *   date        – shown top-right; used for sorting (YYYY-MM format recommended)
 *   dateLabel   – human-readable date shown in the UI  (e.g. "Jun 2025")
 *   headerImage – path to the main card image (put files in /public/images/)
 *   description – paragraph shown in the modal
 *   images      – (optional) array of extra image paths shown below the description
 */

const experiences = [
  {
    id: 1,
    title: "computer engineering @ uwaterloo",
    date: "2026-04",
    dateLabel: "Apr 2026",
    headerImage: '/images/uwaterloo_5.png',
    // headerImage: '/images/uwaterloo_1.jpg',
    description:`relevant courses: Deep Learning, Database Systems, Compilers, Data-Intensive Distributed Computing, Computer Networks, Programming for Performance (rust), operating systems

gpa: 3.9/4.0

activities: Intramural water polo (3 years), Women in Engineering President, Orientation Leader

awards: strobele engineering award ($24,000), Jim Kalbfleisch Award ($1,500),`,
    images: ['/images/uwaterloo_3.png', '/images/uwaterloo_4.png', '/images/uwaterloo_1.jpg', '/images/waterpolo_1.jpeg', '/images/uwaterloo_2.png'],
  },
  {
    id: 2,
    title: "hackNY fellowship",
    date: "2025-05",
    dateLabel: "May 2025",
    headerImage: '/images/hackny_1.jpg',
    description:`hackNY is a NYC-based nonprofit that brings together student technologists through its Fellows Program, building a tight-knit, socially conscious tech community. It’s a summer experience where students live together and plug into a network of founders, engineers, and leaders shaping the city’s tech scene.

https://hackny.org/    

some of the conversations I got to be a part of included intimate chats with representatives from:
- ambrook
- nyc the mesh
- python software foundation (psf)
- apple
- snowfox 
- toko
- 404 media
- coinbase
- major league hacking (MLH)
- partiful
- the browser company (now part of Atlassian)
    `,
    images: ['/images/hackny_3.JPG', '/images/hackny_4.JPG', '/images/hackny_5.jpg', '/images/hackny_6.JPG'],
  },
  {
    id: 3,
    title: "google NYC internship",
    date: "2025-05",
    dateLabel: "May 2025",
    headerImage: '/images/google_4.png',
    description:`team: offline google docs

tech: javascript, sql, a/b testing, canary release

project 1: implemented fallback functionality for users creating google docs with unstable internet connection. this pushed users into offline mode, rather than having them indefinitely wait on the request. I designed metrics to monitor throughout the rollout to ensure results were as expected.

project 2: implemented offline emojis for users within google docs who started out online and then shifted to offline mode.  
    `,
    images: ['/images/google_2.png', '/images/google_8.png', '/images/google_5.JPG', '/images/google_6.png', '/images/google_7.png'],
  },
  {
    id: 4,
    title: "stripe internship (again)",
    date: "2025-01",
    dateLabel: "Jan 2025",
    headerImage: '/images/stripe_sum_2.png',
    description:`team: batch compute

tech: sql, react, spark, airflow

project: I built a monitoring + alerting system that proactively flags Spark jobs at risk of running out of memory by designing incident-informed heuristics (e.g., retries/failures, heap >95%, and consistency over time) and surfacing them in a dashboard with Slack alerts and heatmaps. This gave teams a clear, prioritized view of their most critical jobs and paired with an explanation of why they were marked as risky. I also interviewed numerous teams across Stripe to gather feedback on the tool and incorporated their requests into the final system.`,
    images: ['/images/stripe_win_1.png', '/images/stripe_win_2.png', '/images/stripe_win_3.png', '/images/stripe_win_4.png'],
  },
  {
    id: 5,
    title: "stripe internship",
    date: "2024-05",
    dateLabel: "May 2024",
    headerImage: '/images/seattle_sum_6.png',
    description:`team: large user onboarding

tech: ruby, react, graphql, figma
    
project: I worked with my team to build a new onboarding flow for publicly traded companies to replace a manual verification process that required placeholder data and document uploads. I implemented the system across React, Ruby, and GraphQL, adding API support for stock metadata and executive authorization—while working with designers, account managers, and legal to handle complex edge cases in account approval.`,
    images: ['/images/stripe_sum_3.png', '/images/stripe_sum_5.png', '/images/stripe_sum_4.png'],
  },
  {
    id: 6,
    title: "women in engineering president",
    date: "2026-04",
    dateLabel: "Apr 2026",
    headerImage: '/images/wie_3.JPG',
    description:`    I lead the Women in Engineering (WiE) committee at the University of Waterloo. I’ve acted as the president since 2024, and the Vice President and a General Director before that. Every day I see firsthand how powerful a strong community of women could be, and it has been my goal over the past 5 years within this committee to expand our outreach across UWaterloo. I have led teams of 30 directors, run dozens of events, and made significant progress in uniting gender minority groups across UWaterloo and Canada. 
  
My responsibilities are split across leading the members of the committee, planning initiatives for the student body, and liaising with the university. One way the community has benefited from my work was through an online engagement initiative I lead, where I grew our Discord membership from 300 to over 1700 UWaterloo students by implementing themed challenges, “Questions of the Day”, and channels for newly admitted students to ask upper-years questions, all of which have fostered student engagement and connection. 
    
Event-wise, I pitched and led a Stripe-sponsored workshop, securing over $4,200 in funding for the WiE committee. This partnership marked a WiE milestone: our first student-sourced sponsored event to attract over 100 attendees. Alongside growing WiE’s external reach, I cultivated a bias towards action within the committee by mentoring directors into leadership, and introducing new roles within the club, enabling more students to join and contribute.

Beyond WiE, I have collaborated with UWaterloo leaders to run the first event uniting women across student STEM clubs at UWaterloo, including WiE, Women in Math, WiSTEM and FemPhys, amongst others. Now known as Women of Waterloo, the initiative has become an annual tradition that bridges program boundaries and connects women across diverse STEM disciplines. Additionally, I liaise monthly with UWaterloo faculty to address student concerns, and I regularly volunteer at the WiE booth during the Fall/March open house. I also represented WiE and ECE at numerous recruitment seminars and Engineering Orientation, where I shared WiE’s mission to over 900 newly admitted students. 

Beyond UWaterloo, I collaborated with WiSE at the University of Toronto to bring together women in STEM clubs from across Canada for the annual WiSE Conference. I launched a Discord server to enable ongoing collaboration, allowing over 10 Canadian WiSE clubs to share their learning and opportunities year-round.

I’m extremely grateful for the opportunity to lead this committee, and even more proud of where we have taken it over these years. What started out as a 10 person club in 2021 is now a 30+ member committee, empowering hundreds of students each year and building a community that will continue to grow.
    `,
    images: ['/images/wie_2.JPG', '/images/wie_4.png', '/images/wie_6.png', '/images/wie_1.png', '/images/wie_5.png',],
  },
  {
    id: 7,
    title: "amazon internship",
    date: "2023-12",
    dateLabel: "dec 2023",
    headerImage: '/images/amazon_1.jpg',
    description:`team: amazon robotics

tech: typescript, lambda, amazon cdk

project: I independently designed and built a data transfer pipeline to fix slow frontend dashboards that relied on long-running AWS Athena queries. The pipeline used EventBridge, Lambda, Athena, S3, and RDS to periodically pre-aggregate large datasets, reducing query latency from over a minute to a few seconds. These dashboards were used in the fulfillment centers to monitor metrics for the warehouse robots, and so improving the latency was important for the warehouse's daily workflows.
    `,
    images: ['/images/amazon_2.png', '/images/amazon_3.png', '/images/amazon_4.png'],
  },
  {
    id: 8,
    title: "amsterdam trip",
    date: "2025-05",
    dateLabel: "May 2025",
    headerImage: '/images/ams_2.png',
    description:`no tech here - a short trip to amsterdam and Belgium`,
    images: ['/images/ams_3.png', '/images/ams_1.png'],
  },
];

export default experiences;
