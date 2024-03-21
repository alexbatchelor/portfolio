// Load the projects.json file
fetch('projects.json')
  .then(response => {
    console.log('Fetch response:', response);
    return response.json();
  })
  .then(projects => {
    console.log('Projects:', projects);
    // Get the current project path
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);

    // Normalize function to remove leading and trailing slashes
    const normalizeUrl = url => url.replace(/^\/+|\/+$/g, '');

    // Find the current project in the array
    const currentProjectIndex = projects.findIndex(project => normalizeUrl(project.url) === normalizeUrl(currentPath));
    console.log('Current project index:', currentProjectIndex);

    // Set up the previous and next project links
    const previousProject = projects[currentProjectIndex - 1];
    const nextProject = projects[currentProjectIndex + 1];

    // Update the previous and next project links
    if (previousProject) {
      console.log('Previous project:', previousProject);
      document.getElementById('previous-link').href = previousProject.url;
    }
    if (nextProject) {
      console.log('Next project:', nextProject);
      document.getElementById('next-link').href = nextProject.url;
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });