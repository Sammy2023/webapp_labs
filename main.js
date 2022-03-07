import renderNavBar from './Navbar.js';
import renderMainPage from './MainPage.js';
import renderProjectDetailPage from './ProjectDetailPage.js';

fetch('./assets/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');
        const page = projectId==null?"main":"projectDetail";
        if (page==="main"){
            renderNavBar(page);
            renderMainPage(data);
        }
        else{
            renderNavBar(page);
            const project = data.projects.find(project => project.id === projectId);
            renderProjectDetailPage(project);
        }
        console.log(projectId)
        // render HTML here
    });
