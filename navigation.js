// Load the projects.json file
fetch('/portfolio/projects.json')
  .then(response => response.json())
  .then(projects => {
    // Get the current project path
    const currentPath = window.location.pathname;

    // Log the current page URL
    console.log("Current path:", currentPath);

    // Log URLs from the JSON data for debugging
    console.log("URLs from JSON data:");
    projects.forEach(project => console.log(project.url));

    // Normalize function to remove leading and trailing slashes
    const normalizeUrl = url => url.replace(/^\/+|\/+$/g, '');

    // Find the index of the current project
    const currentProjectIndex = projects.findIndex(project => normalizeUrl(project.url) === normalizeUrl(currentPath));

    // Log the normalized current page URL for debugging
    console.log("Normalized current path:", normalizeUrl(currentPath));

    // Log the index of the current project
    console.log("Current project index:", currentProjectIndex);

    // If the current project is found
    if (currentProjectIndex !== -1) {
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
    } else {
      console.log("Current project not found in JSON file.");
    }
  })
  .catch(error => console.error("Error fetching projects.json:", error));
