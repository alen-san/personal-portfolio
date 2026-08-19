# Personal Portfolio Website

This is my personal portfolio website developed as part of my web development coursework. The website presents my profile, education, technical skills, projects, activities, and contact information.

The project was developed in two phases.

## Website Sections

The portfolio website contains the following pages:

- Home
- Profile
- CV
- Education & Technical Expertise
- Projects
- Activities / Gallery
- Contact

##  Technologies Used

### Phase 1

- HTML5
- CSS3
- Flexbox
- Responsive Design
- Media Queries
- GitHub Pages

### Phase 2

- JavaScript
- DOM Manipulation
- Event Handling
- Form Validation
- jQuery
- Fetch API
- DEV.to API
- OpenWeatherMap API
- Async/Await
- Error Handling

##  Features

### Home Page

The home page introduces me and provides navigation to the different sections of my portfolio.

A dynamic greeting feature is implemented using JavaScript.

### Profile

This page contains information about me, my academic background, interests, and career goals.

### CV

The CV page presents my personal and academic information in a structured format using HTML tables.

### Education & Technical Expertise

This page contains information about my educational background and technical skills.

### Projects

The Projects page displays some of my academic and personal projects, including:

- Library Management System
- Ruban AI – Teachers Connect
- Personal Portfolio Website

JavaScript and jQuery are used to provide interactive functionality for the project details.

The page also uses the Fetch API to retrieve and display articles from DEV.to.

### Activities / Gallery

This page displays my activities, certificates, and other achievements.

### Contact

The Contact page contains a form where visitors can enter their name, email address, and message.

JavaScript validation is used to check:

- Empty name field
- Empty email field
- Invalid email address
- Empty message field

A success message is displayed when the form is filled correctly.

###  Live Weather

The website includes a Live Weather feature.

Users can:

1. Enter the name of a city.
2. Click the **Get Weather** button.
3. View the current temperature and weather description.

The weather information is retrieved using the OpenWeatherMap API.

Error handling is included for:

- Empty city input
- Invalid city name
- API or network errors

##  Responsive Design

The website uses CSS media queries to provide a responsive layout.

The website can be viewed on:

- Desktop devices
- Tablets
- Mobile phones

Flexbox and responsive CSS are used to adjust the layout according to different screen sizes.

##  Project Structure

```text
personal-portfolio/
│
├── index.html
├── profile.html
├── cv.html
├── education.html
├── projects.html
├── gallery.html
├── contact.html
│
├── style.css
├── script.js
│
├── images/
│   └── profile.jpg
│
└── README.md
