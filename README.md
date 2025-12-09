CareConnect — Responsive Healthcare Website 🏥

A clean, responsive healthcare website built using HTML + CSS, featuring service listings, doctor profiles, contact forms, and patient login functionality.

This version focuses on pure CSS responsiveness using only @media(max-width) queries, as implemented in responsive.css 

responsive

.

📁 Project Structure
careconnect/
│
├── index.html              (Homepage)
├── about.html              (About Us)
├── contact.html            (Contact Page)
├── find-a-doctor.html      (Doctor search page)
├── patient-portal.html     (Login page)
│
├── style.css               (Main styling)
├── responsive.css          (Media-query-based responsive layout)
├── script.js               (Small UI interactions: button color + forms)
│
└── README.md               (Project documentation)

🎨 Features
✔ Responsive Layout

The site adjusts automatically for:

Desktop: multi-column grids and horizontal navigation

Tablets (max-width:900px): grids become 2 columns

Mobile (max-width:600px): single column layout & stacked header/navigation

These breakpoints are implemented in responsive.css using:

@media(max-width:900px){ ... }  /* Tablets */
@media(max-width:600px){ ... }  /* Mobile */

✔ Clean Multi-Page Structure

Every page includes a consistent header, footer, and layout, such as:

About page with team grid 

about

Contact page with form + location info 

contact

Find a Doctor page with responsive doctor grid 

find-a-doctor

Homepage with hero, service cards, steps, testimonial 

index

Patient Portal login page with centered form 

patient-portal

✔ Simple Interactions (script.js)

Your JavaScript file adds:

Random color change to the “Book Now” button

Hover animations for service cards

Basic contact form validation

All logic is inside script.js 

script

📱 Responsive Behavior (From responsive.css)

Your responsive CSS includes:

Tablet View — two-column grids
@media(max-width:900px){
  .grid{
    grid-template-columns:repeat(2,1fr);
  }
}

Mobile View — stacked header + vertical nav + single-column grid
@media(max-width:600px){
  header{
    flex-direction:column;
    align-items:flex-start;
  }
  nav ul{
    flex-direction:column;
    gap:8px;
  }
  .grid{
    grid-template-columns:1fr;
  }
}


This ensures the website looks clean and readable on all screen sizes.

🚀 How to Run the Project
Option 1 — Direct Open

Download all files

Open index.html in any browser

Option 2 — VS Code (recommended)

Open folder in VS Code

Install “Live Server” extension

Right-click index.html → Open with Live Server

🎨 Modify the Design
Edit colors

Open style.css 

style

 and modify:

Header colors

Buttons

Text styles

Edit responsive rules

Open responsive.css and change:

Breakpoints

Column counts

Mobile layout

🧪 Forms & Validation

Contact form validation is handled in script.js (prevents empty submissions)

Login form is purely frontend and not connected to a backend

📚 Technologies Used

HTML5

CSS3

Responsive media queries

Vanilla JavaScript

No frameworks, libraries, or preprocessors.

✔ Checklist Before Submission

 All pages load correctly

 Navigation links work

 Responsive layout works on 900px & 600px breakpoints

 Contact form shows error messages properly

 Buttons and cards animate correctly

 No missing images or broken links

📝 License

Free to use for learning, school projects, or personal portfolios.
