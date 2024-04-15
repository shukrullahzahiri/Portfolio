// Example JavaScript to enhance the portfolio

// Data for projects (could be fetched from an API or a JSON file)
const projects = [
    { title: 'Project 1', description: 'PYTHON PROJECTS', link: 'https://github.com/shukrullahzahiri/PYTHON-QAP.git' },
    { title: 'Project 2', description: 'WEB PROJECTS', link: 'https://github.com/shukrullahzahiri/Web-QAP.git' },
    { title: 'Project 3', description: 'JAVA SCRIPT', link: ' https://github.com/shukrullahzahiri/JavaFinalSprint.git' },
    { title: 'Project 4', description: 'ESSENTIAL OF SD', link: ' https://github.com/shukrullahzahiri/ES-QAP.git' },
    { title: 'Project 5', description: 'SPRINT1 SECOND SEMESTER', link: 'https://github.com/shukrullahzahiri/SPRINTONE-SECONDSEMESTER.git'},
    { title: 'Project 6', description: 'SECOND SEMESTER', link: 'https://github.com/shukrullahzahiri/SECSEMESTER.git'},

   
];

// Function to render projects
function renderProjects() {
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3 class="project__title">${project.title}</h3>
            <p class="project__description">${project.description}</p>
            <button class="project__button" onclick="openModal('${project.title}', '${project.description}', '${project.link}')">Learn More</button>
        `;

        projectContainer.appendChild(projectElement);
    });
}

// Function to open a modal with project details
function openModal(title, description, link) {
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modal-text');
    modal.style.display = "block";
    modalText.innerHTML = `<h3>${title}</h3><p>${description}</p><a href="${link}" target="_blank">Visit GitHub Project</a>`;
}

// Event listener for closing the modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    if (event.target == modal || event.target == closeBtn) {
        modal.style.display = "none";
    }
});

// Handling the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation example
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you'd typically send the form data to a server
    console.log('Form submitted:', { name, email, message });

    // Clear the form
    this.reset();

    alert('Thank you for your message!');
});

// Render the projects on the page load
document.addEventListener('DOMContentLoaded', renderProjects);
