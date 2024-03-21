// Check if the script is running on GitHub Pages
const isGitHubPages = window.location.hostname === 'alexbatchelor.github.io';

// Load the projects.json file
fetch(isGitHubPages ? '/portfolio/projects.json' : 'projects.json')
  .then(response => response.json())
  .then(projects => {
    // Get the current project path
    const currentPath = window.location.pathname;

    // Find the index of the current project
    const currentProjectIndex = projects.findIndex(project => project.url === currentPath);

    // If the current project is found
    if (currentProjectIndex !== -1) {
      // Set up the previous and next project links
      const previousProject = projects[currentProjectIndex - 1];
      const nextProject = projects[currentProjectIndex + 1];

      // Update the previous and next project links
      if (previousProject) {
        document.getElementById('previous-link').href = isGitHubPages ? previousProject.absolute_url : previousProject.url;
      }
      if (nextProject) {
        document.getElementById('next-link').href = isGitHubPages ? nextProject.absolute_url : nextProject.url;
      }
    } else {
      console.log("Current project not found in JSON file.");
    }
  })
  .catch(error => console.error("Error fetching projects.json:", error));
// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the current-year element
document.getElementById('current-year').textContent = currentYear;