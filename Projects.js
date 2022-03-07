export default function renderProjects(projects) {
    return `
    <section id="projects">
        <h1>Projects</h1>
        <div class="filter">
            <label>
                <input type="radio" name="filter" value="all">
                All
            </label>
            <label>
                <input type="radio" name="filter" value="game">
                Game
            </label>
            <label>
                <input type="radio" name="filter" value="portfolio">
                Portfolio
            </label>
        </div>
        <div class="project-list">
            ${renderProject(projects)}
        </div>
    </section>
    `;

    // projects.map(project=>renderProjects(project)).join("")
}

function renderProject(projects) {
    return `
        ${projects.map(project => ` 
        <div class="row">
            <div class="col -4 projText"> 
                <a href="?project=${project.id}">${project.title}</a>
                <div>${project.collab}</div>
                <div>${project.date}</div>
            </div>
            <div class="col-4 projImg">
                <img width="443" style="object-fit: cover;" src="${project.photo}" alt="">
            </div> 
        </div>
        `).join('')}
    `
}
