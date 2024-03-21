fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    // Get the current project path
    const currentPath = window.location.pathname;

    // Normalize function to remove leading and trailing slashes
    const normalizeUrl = url => url.replace(/^\/+|\/+$/g, '');

    // Find the current project in the array
    const currentProjectIndex = projects.findIndex(project => normalizeUrl(project.url) === normalizeUrl(currentPath));

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