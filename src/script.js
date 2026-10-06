// creating the main container

const body = document.querySelector("body");


// creating the top section

const topSection = document.createElement("section");
topSection.classList.add("top");


// creating the header and nav

const header = document.createElement("header");
header.classList.add("header");

const heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "Mawie";

const nav = document.createElement("nav");
nav.classList.add("nav");


// creating the navigation links

const homeLink = document.createElement("a");
homeLink.classList.add("header-link");
homeLink.textContent = "Home";
homeLink.href = "#";

const menuLink = document.createElement("a");
menuLink.classList.add("header-link");
menuLink.textContent = "Menu";
menuLink.href = "#";

const contactLink = document.createElement("a");
contactLink.classList.add("header-link");
contactLink.textContent = "Contact";
contactLink.href = "#";

const aboutLink = document.createElement("a");
aboutLink.classList.add("header-link");
aboutLink.textContent = "About";
aboutLink.href = "#";


// creating the book now button

const headerButton = document.createElement("button");
headerButton.classList.add("header-btn");
headerButton.textContent = "Book Now";


// putting the navigation links inside the nav

nav.appendChild(homeLink);
nav.appendChild(menuLink);
nav.appendChild(contactLink);
nav.appendChild(aboutLink);
nav.appendChild(headerButton);


// putting the heading and nav inside the header

header.appendChild(heading);
header.appendChild(nav);


// putting the header inside the top section

topSection.appendChild(header);


// creating the hero section

const hero = document.createElement("div");
hero.classList.add("hero");


// creating the hero buttons

const heroMenuButton = document.createElement("button");
heroMenuButton.classList.add("hero-menu-btn");
heroMenuButton.textContent = "View Our Menu";

const heroOrderButton = document.createElement("button");
heroOrderButton.classList.add("hero-order-btn");
heroOrderButton.textContent = "Get a Quick Order";


// creating the hero heading

const heroText = document.createElement("h1");
heroText.classList.add("hero-text");
heroText.textContent = "BURGER";


// putting the hero elements inside the hero section

hero.appendChild(heroMenuButton);
hero.appendChild(heroOrderButton);
hero.appendChild(heroText);


// putting the hero inside the top section

topSection.appendChild(hero);


// putting the top section on the page

body.appendChild(topSection);


// creating the about section

const about = document.createElement("section");
about.classList.add("about");


// creating the about side

const aboutSide = document.createElement("div");
aboutSide.classList.add("side");

const aboutHeading = document.createElement("h2");
aboutHeading.classList.add("about-heading");
aboutHeading.textContent = "A DEVOTION TO THE CRAFT OF BAKING";

const aboutText = document.createElement("p");
aboutText.classList.add("about-text");
aboutText.textContent =
    "We believe great food begins long before it reaches the plate in the relationship with local farmers, the hours of preparation, and a deep respect for classical technique. Every dish is an act of intention.";

const aboutButton = document.createElement("button");
aboutButton.classList.add("about-cta");
aboutButton.textContent = "Book and Order";


// putting the about content inside the side

aboutSide.appendChild(aboutHeading);
aboutSide.appendChild(aboutText);
aboutSide.appendChild(aboutButton);


// creating the about image

const aboutImage = document.createElement("div");
aboutImage.classList.add("about-image");

const image = document.createElement("img");

image.src = "images/pexels-marcia-salido-346903577-14133151.jpg";
image.alt = "Woman eating at a restaurant";

aboutImage.appendChild(image);


// creating the track section

const track = document.createElement("div");
track.classList.add("track");


// creating the first track record

const trackRecordOne = document.createElement("div");
trackRecordOne.classList.add("track-record");

const trackScoreOne = document.createElement("h2");
trackScoreOne.classList.add("track-score");
trackScoreOne.textContent = "2+";

const trackTextOne = document.createElement("p");
trackTextOne.classList.add("track-text");
trackTextOne.textContent = "YEARS OF EXCELLENCE";

trackRecordOne.appendChild(trackScoreOne);
trackRecordOne.appendChild(trackTextOne);


// creating the second track record

const trackRecordTwo = document.createElement("div");
trackRecordTwo.classList.add("track-record");

const trackScoreTwo = document.createElement("h2");
trackScoreTwo.classList.add("track-score");
trackScoreTwo.textContent = "3";

const trackTextTwo = document.createElement("p");
trackTextTwo.classList.add("track-text");
trackTextTwo.textContent = "MICHELIN STARS";

trackRecordTwo.appendChild(trackScoreTwo);
trackRecordTwo.appendChild(trackTextTwo);


// creating the third track record

const trackRecordThree = document.createElement("div");
trackRecordThree.classList.add("track-record");

const trackScoreThree = document.createElement("h2");
trackScoreThree.classList.add("track-score");
trackScoreThree.textContent = "30+";

const trackTextThree = document.createElement("p");
trackTextThree.classList.add("track-text");
trackTextThree.textContent = "SEASONAL PRODUCERS";

trackRecordThree.appendChild(trackScoreThree);
trackRecordThree.appendChild(trackTextThree);


// creating the fourth track record

const trackRecordFour = document.createElement("div");
trackRecordFour.classList.add("track-record");

const trackScoreFour = document.createElement("h2");
trackScoreFour.classList.add("track-score");
trackScoreFour.textContent = "200";

const trackTextFour = document.createElement("p");
trackTextFour.classList.add("track-text");
trackTextFour.textContent = "COVERS PER EVENING";

trackRecordFour.appendChild(trackScoreFour);
trackRecordFour.appendChild(trackTextFour);


// putting all the track records inside the track

track.appendChild(trackRecordOne);
track.appendChild(trackRecordTwo);
track.appendChild(trackRecordThree);
track.appendChild(trackRecordFour);


// putting everything inside the about section

about.appendChild(aboutSide);
about.appendChild(aboutImage);
about.appendChild(track);


// putting the about section on the page

body.appendChild(about);


// creating the menu section

const menu = document.createElement("section");
menu.classList.add("menu");


// creating the menu side

const menuSide = document.createElement("div");
menuSide.classList.add("side");

const menuPara = document.createElement("p");
menuPara.classList.add("menu-para");
menuPara.textContent = "FROM THE KITCHEN";

const menuHead = document.createElement("h2");
menuHead.classList.add("menu-head");
menuHead.textContent = "SIGNATURE PLATES";

const menuText = document.createElement("p");
menuText.classList.add("menu-text");
menuText.textContent =
    "We believe great food begins long before it reaches the plate in the relationships with local farmers, the hours of preparation, and a deep respect for classical technique. Every dish is an act of intention.";

menuSide.appendChild(menuPara);
menuSide.appendChild(menuHead);
menuSide.appendChild(menuText);


// creating the first menu card

const menuCardOne = document.createElement("div");
menuCardOne.classList.add("menu-card");

const mealImageOne = document.createElement("img");
mealImageOne.src = "images/pexels-ali-dashti-506667798-17255928.jpg";
mealImageOne.alt = "Milky donut";

const mealNameOne = document.createElement("h3");
mealNameOne.classList.add("meal-name");
mealNameOne.textContent = "Milky Donut";

const mealTextOne = document.createElement("p");
mealTextOne.classList.add("meal-text");
mealTextOne.textContent = "Slow dripping milky donut";

menuCardOne.appendChild(mealImageOne);
menuCardOne.appendChild(mealNameOne);
menuCardOne.appendChild(mealTextOne);


// creating the second menu card

const menuCardTwo = document.createElement("div");
menuCardTwo.classList.add("menu-card");

const mealImageTwo = document.createElement("img");
mealImageTwo.src = "images/pexels-nadin-sh-78971847-28996252.jpg";
mealImageTwo.alt = "Malapanyan puffy puffs";

const mealNameTwo = document.createElement("h3");
mealNameTwo.classList.add("meal-name");
mealNameTwo.textContent = "Malapanyan Puffy Puffs";

const mealTextTwo = document.createElement("p");
mealTextTwo.classList.add("meal-text");
mealTextTwo.textContent = "Puffy puffed oasis meal";

menuCardTwo.appendChild(mealImageTwo);
menuCardTwo.appendChild(mealNameTwo);
menuCardTwo.appendChild(mealTextTwo);


// putting the menu cards inside the menu section

menu.appendChild(menuSide);
menu.appendChild(menuCardOne);
menu.appendChild(menuCardTwo);


// putting the menu section on the page

body.appendChild(menu);