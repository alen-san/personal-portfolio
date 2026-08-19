const getGreeting = () => {
    const currentHour = new Date().getHours(); 
    let greetingText;

    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    return greetingText;
};

const showGreeting = () => {
    const greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        greetingElement.textContent = `${getGreeting()} Thanks for visiting my portfolio.`;
    }
};

showGreeting();



const skills = [
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Beginner" },
    { name: "C Programming", level: "Beginner" },
    { name: "SQL", level: "Intermediate" },
    { name: "HTML5 & CSS3", level: "Intermediate" }
];

const displaySkills = () => {
    const skillsList = document.getElementById("skillsList");

    skillsList.innerHTML = "";

    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];

        const listItem = document.createElement("li");
        listItem.textContent = `${skill.name} — ${skill.level}`;

        skillsList.appendChild(listItem);
    }
};

const skillsBtn = document.getElementById("skillsBtn");

if (skillsBtn) {
    skillsBtn.addEventListener("click", displaySkills);
}




const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault(); 
        const nameValue = document.getElementById("name").value.trim();
        const emailValue = document.getElementById("email").value.trim();
        const messageValue = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const formSuccess = document.getElementById("formSuccess");

        
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";
        formSuccess.classList.remove("success");

        let isValid = true;

        if (nameValue === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (messageValue === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (isValid) {
            formSuccess.textContent = "Thank you! Your message has been sent.";
            formSuccess.classList.add("success");
            contactForm.reset();
        }
    });
}


$(document).ready(() => {

   
    $(".filter-btn").on("click", function () {

       
        const filterValue = $(this).data("filter");

        
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

   
        $(".activity-item").each(function () {

            const itemType = $(this).data("type");

            if (filterValue === "all" || filterValue === itemType) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

});



const loadArticles = () => {
    const articlesList = document.getElementById("articlesList");
    const articlesStatus = document.getElementById("articlesStatus");

    if (!articlesList) {
        return;
    }

    
    fetch("https://dev.to/api/articles?tag=javascript&per_page=5")
        .then((response) => {
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((articles) => {
            
            articlesStatus.textContent = ""; 
            articlesList.innerHTML = ""; 

            for (let i = 0; i < articles.length; i++) {
                const article = articles[i]; 

                const listItem = document.createElement("li");
                const link = document.createElement("a");

                link.href = article.url;
                link.textContent = article.title;
                link.target = "_blank"; 

                listItem.appendChild(link);
                articlesList.appendChild(listItem);
            }
        })
        .catch((error) => {

            articlesStatus.textContent = "Sorry, articles could not be loaded right now.";
            console.log("Fetch error:", error);
        });
};

loadArticles();


const weatherButton = document.getElementById("weather-button");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

if (weatherButton) {

    weatherButton.addEventListener("click", async function () {

        console.log("Weather button clicked!");

        const city = cityInput.value.trim();

        if (city === "") {
            weatherResult.innerHTML =
                '<p class="weather-error">Please enter a city name.</p>';
            return;
        }

        const apiKey = "cb7c004251869bd446753d76b04cf597";

        const apiUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        weatherResult.innerHTML = "<p>Loading weather...</p>";

        try {

            const response = await fetch(apiUrl);

            console.log(response);

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData);
                throw new Error(errorData.message);
            }

            const data = await response.json();

            console.log(data);

            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherResult.innerHTML = `
                <div class="weather-info">
                    <h3>${cityName}</h3>
                    <p><strong>Temperature:</strong> ${temperature} °C</p>
                    <p><strong>Weather:</strong> ${description}</p>
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png"
                         alt="${description}">
                </div>
            `;
        } 
        catch (error) {

            console.error("Weather Error:", error);

            weatherResult.innerHTML =
                `<p class="weather-error">${error.message}</p>`;
        }

    });

}



$(document).ready(function () {

    $(".project-details").hide();

    $(".project-toggle").click(function () {

        $(this).next(".project-details").slideToggle();

    });

});