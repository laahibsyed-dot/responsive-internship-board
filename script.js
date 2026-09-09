"use strict";


/* =========================================
   INTERNSHIP DATA
========================================= */

const internships = [

    {
        id: 1,

        title: "Frontend Developer Intern",

        company: "TechNova Solutions",

        location: "Hyderabad, India",

        domain: "Web Development",

        type: "Remote",

        duration: "3 Months",

        description:
            "Work with HTML, CSS and JavaScript to create responsive web interfaces.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 2,

        title: "Python Developer Intern",

        company: "CodeCraft Labs",

        location: "Bengaluru, India",

        domain: "Programming",

        type: "Hybrid",

        duration: "6 Months",

        description:
            "Build Python applications and work with APIs, databases and automation.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 3,

        title: "Data Science Intern",

        company: "Insight Analytics",

        location: "Pune, India",

        domain: "Data Science",

        type: "Remote",

        duration: "4 Months",

        description:
            "Explore datasets and create data-driven solutions using Python and machine learning.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 4,

        title: "UI/UX Design Intern",

        company: "Creative Pixel Studio",

        location: "Chennai, India",

        domain: "Design",

        type: "On-site",

        duration: "3 Months",

        description:
            "Create user-friendly interfaces, wireframes and prototypes for digital products.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 5,

        title: "Java Developer Intern",

        company: "SoftBridge Technologies",

        location: "Hyderabad, India",

        domain: "Programming",

        type: "Hybrid",

        duration: "5 Months",

        description:
            "Develop Java applications and learn object-oriented programming and backend development.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 6,

        title: "Machine Learning Intern",

        company: "AI Future Labs",

        location: "Bengaluru, India",

        domain: "Artificial Intelligence",

        type: "Remote",

        duration: "6 Months",

        description:
            "Work with machine learning algorithms and help develop intelligent applications.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 7,

        title: "Backend Developer Intern",

        company: "CloudCore Systems",

        location: "Mumbai, India",

        domain: "Web Development",

        type: "On-site",

        duration: "4 Months",

        description:
            "Develop server-side applications and learn about APIs, databases and authentication.",

        applyLink: "https://www.linkedin.com/jobs/"
    },


    {
        id: 8,

        title: "Digital Marketing Intern",

        company: "GrowthSpark Media",

        location: "Delhi, India",

        domain: "Marketing",

        type: "Remote",

        duration: "3 Months",

        description:
            "Assist with social media campaigns, content marketing and digital analytics.",

        applyLink: "https://www.linkedin.com/jobs/"
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const searchInput =
    document.getElementById("searchInput");

const domainFilter =
    document.getElementById("domainFilter");

const clearButton =
    document.getElementById("clearButton");

const retryButton =
    document.getElementById("retryButton");

const internshipList =
    document.getElementById("internshipList");

const resultsCount =
    document.getElementById("resultsCount");

const emptyState =
    document.getElementById("emptyState");

const errorState =
    document.getElementById("errorState");


/* =========================================
   MODAL ELEMENTS
========================================= */

const internshipModal =
    document.getElementById("internshipModal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDomain =
    document.getElementById("modalDomain");

const modalCompany =
    document.getElementById("modalCompany");

const modalLocation =
    document.getElementById("modalLocation");

const modalType =
    document.getElementById("modalType");

const modalDuration =
    document.getElementById("modalDuration");

const modalDescription =
    document.getElementById("modalDescription");

const modalApply =
    document.getElementById("modalApply");


let lastFocusedElement = null;


/* =========================================
   POPULATE DOMAINS
========================================= */

function populateDomains() {

    const domains = [
        ...new Set(
            internships.map(
                internship => internship.domain
            )
        )
    ].sort();


    domains.forEach(domain => {

        const option =
            document.createElement("option");


        option.value = domain;

        option.textContent = domain;


        domainFilter.appendChild(option);

    });

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


/* =========================================
   CREATE CARD
========================================= */

function createInternshipCard(internship) {

    const article =
        document.createElement("article");


    article.className =
        "internship-card";


    article.innerHTML = `

        <div class="card-top">

            <span class="domain-badge">

                ${escapeHTML(internship.domain)}

            </span>

        </div>


        <h3>

            ${escapeHTML(internship.title)}

        </h3>


        <p class="company">

            ${escapeHTML(internship.company)}

        </p>


        <ul class="details">

            <li>
                <strong>Location:</strong>
                ${escapeHTML(internship.location)}
            </li>

            <li>
                <strong>Type:</strong>
                ${escapeHTML(internship.type)}
            </li>

            <li>
                <strong>Duration:</strong>
                ${escapeHTML(internship.duration)}
            </li>

        </ul>


        <p class="description">

            ${escapeHTML(internship.description)}

        </p>


        <div class="card-footer">

            <button
                type="button"
                class="view-details-btn"
                data-id="${internship.id}"
            >
                View Internship
            </button>

        </div>

    `;


    return article;
}


/* =========================================
   RENDER CARDS
========================================= */

function renderInternships(list) {

    internshipList.innerHTML = "";


    if (list.length === 0) {

        emptyState.hidden = false;

        resultsCount.textContent =
            "0 internships found.";

        return;
    }


    emptyState.hidden = true;


    const fragment =
        document.createDocumentFragment();


    list.forEach(internship => {

        const card =
            createInternshipCard(internship);


        fragment.appendChild(card);

    });


    internshipList.appendChild(fragment);


    resultsCount.textContent =
        `${list.length} internship${list.length === 1 ? "" : "s"} found.`;
}


/* =========================================
   FILTER
========================================= */

function filterInternships() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedDomain =
        domainFilter.value;


    const filtered =
        internships.filter(internship => {

            const searchableText = [

                internship.title,

                internship.company,

                internship.location,

                internship.domain,

                internship.description

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            const matchesDomain =
                selectedDomain === "all" ||
                internship.domain === selectedDomain;


            return (
                matchesSearch &&
                matchesDomain
            );

        });


    renderInternships(filtered);
}


/* =========================================
   CLEAR FILTERS
========================================= */

function clearFilters() {

    searchInput.value = "";

    domainFilter.value = "all";


    filterInternships();


    searchInput.focus();
}


/* =========================================
   OPEN MODAL
========================================= */

function openInternshipModal(internship) {

    lastFocusedElement =
        document.activeElement;


    modalTitle.textContent =
        internship.title;


    modalDomain.textContent =
        internship.domain;


    modalCompany.textContent =
        internship.company;


    modalLocation.textContent =
        internship.location;


    modalType.textContent =
        internship.type;


    modalDuration.textContent =
        internship.duration;


    modalDescription.textContent =
        internship.description;


    modalApply.href =
        internship.applyLink;


    internshipModal.hidden = false;


    document.body.style.overflow =
        "hidden";


    closeModal.focus();
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeInternshipModal() {

    internshipModal.hidden = true;


    document.body.style.overflow =
        "";


    if (lastFocusedElement) {

        lastFocusedElement.focus();

    }

}


/* =========================================
   CARD BUTTON EVENT
========================================= */

internshipList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".view-details-btn"
            );


        if (!button) {
            return;
        }


        const internshipId =
            Number(button.dataset.id);


        const internship =
            internships.find(
                item =>
                    item.id === internshipId
            );


        if (internship) {

            openInternshipModal(
                internship
            );

        }

    }
);


/* =========================================
   CLOSE BUTTON
========================================= */

closeModal.addEventListener(
    "click",
    closeInternshipModal
);


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

internshipModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            internshipModal
        ) {

            closeInternshipModal();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !internshipModal.hidden
        ) {

            closeInternshipModal();

        }

    }
);


/* =========================================
   SEARCH EVENTS
========================================= */

searchInput.addEventListener(
    "input",
    filterInternships
);


domainFilter.addEventListener(
    "change",
    filterInternships
);


clearButton.addEventListener(
    "click",
    clearFilters
);


/* =========================================
   ESCAPE SEARCH
========================================= */

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            clearFilters();

        }

    }
);


/* =========================================
   ERROR HANDLING
========================================= */

function showError() {

    internshipList.innerHTML = "";

    emptyState.hidden = true;

    errorState.hidden = false;

    resultsCount.textContent =
        "Unable to load internships.";
}


function hideError() {

    errorState.hidden = true;
}


/* =========================================
   LOAD APPLICATION
========================================= */

function loadInternships() {

    try {

        hideError();


        if (
            !Array.isArray(internships)
        ) {

            throw new Error(
                "Internship data unavailable."
            );

        }


        /*
            Populate domain dropdown.
        */

        populateDomains();


        /*
            Render all internships.
        */

        renderInternships(
            internships
        );

    }

    catch (error) {

        console.error(error);

        showError();

    }

}


/* =========================================
   RETRY
========================================= */

retryButton.addEventListener(
    "click",
    loadInternships
);


/* =========================================
   START
========================================= */

loadInternships();