// Load the projects.json file
fetch('/portfolio/projects.json')
  .then(response => response.json())
  .then(projects => {
    // Get the current project path
    const currentPath = window.location.pathname;

    // Find the index of the current project
    let currentProjectIndex = projects.findIndex(project => project.url === currentPath);

    // If the current project is not found, try finding it without trailing slash
    if (currentProjectIndex === -1) {
      const currentPathWithoutTrailingSlash = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
      currentProjectIndex = projects.findIndex(project => project.url === currentPathWithoutTrailingSlash);
    }

    // Set up the previous and next project links
    const previousProject = projects[currentProjectIndex - 1];
    const nextProject = projects[currentProjectIndex + 1];

    // Update the previous and next project links
    if (previousProject) {
      document.getElementById('previous-link').href = previousProject.url;
    }
    if (nextProject) {
      document.getElementById('next-link').href = nextProject.url;
    }
  });
