const aboutBtn = document.getElementById('about-btn');
const projectsBtn = document.getElementById('projects-btn');
const contactBtn = document.getElementById('contact-btn');
const pageContent = document.getElementById('page-content');
const languageSelect = document.getElementById('language');

fetch('content.json')
    .then(response => response.json())
    .then(data => {
        const content = data;
        languageSelect.addEventListener('change', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].about;

        });

        // Add event listeners to the buttons
        aboutBtn.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].about;
        });

        projectsBtn.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].projects;
        });

        contactBtn.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].contact;
        });

        aboutBtn.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].about;
            [aboutBtn, projectsBtn, contactBtn].forEach(button => button.classList.remove('active'));
            aboutBtn.classList.add('active');
        });

        projectsBtn.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].projects;
            [aboutBtn, projectsBtn, contactBtn].forEach(button => button.classList.remove('active'));
            projectsBtn.classList.add('active');
        });

        contactBtn.addEventListener('click', () => {
            const selectedLanguage = languageSelect.value;
            pageContent.innerHTML = content[selectedLanguage].contact;
            [aboutBtn, projectsBtn, contactBtn].forEach(button => button.classList.remove('active'));
            contactBtn.classList.add('active');
        });
    })
    .catch(error => console.error('Error loading content:', error));
