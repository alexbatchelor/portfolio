// Load the projects.json file
fetch('/portfolio/projects.json') // Change the path to include '/portfolio/'
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
      const previousLink = '/portfolio/' + (previousProject.url.startsWith('/') ? previousProject.url : '/' + previousProject.url);
      document.getElementById('previous-link').href = previousLink;
    }
    if (nextProject) {
      const nextLink = '/portfolio/' + (nextProject.url.startsWith('/') ? nextProject.url : '/' + nextProject.url);
      document.getElementById('next-link').href = nextLink;
    }
  });
