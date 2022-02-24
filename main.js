

fetch('./assets/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderMainPage(data);
        renderProjectPage(data.projects);
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');
        console.log(urlParams);
        
        // render HTML here
    });

function renderNavBar() {
    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>
                <a href="projects">Projects</a>
            </li>
        </ul>
    `
}

function renderMainPage(data) {
    renderNavBar();
    const main = document.querySelector("main");
    main.innerHTML = `
        ${renderAbout(data.about)}
        ${renderProjects(data.projects)}
        ${renderNews(data.news)}
    `
    // const search = document.querySelector("#search");
    // search.addEventListener("input", function(event){
    //     const value = event.target.value;
    //     // returns a list of the filtered projects
    //     const filtered = data.projects.filter(d=>d.title.includes(value));
    //     const projectList = document.querySelector(".projectList");

    //     // map 
    //     projectList = filtered.map(project => renderProject(project)).join("");
    // }
    // );
    // console.log("search", search);
}

function renderAbout(about) {
    return `
        <h1>Profile</h1>
        <div class="row">
            <div class="box col-4">
                <h3>${about.name}</h3>
                <div class="imgBox">
                    <img class="profileImg" src="${about.photo}" alt="">
                </div>
                <h3>${about.title}</h3>
                <p>${about.email}
                    <br>${about.address}
                    <br><a href="#resume">Resume</a> | <a href="https://linkedin.com/in/sammy-lee2022">LinkedIn</a> | <a href="https://github.com/Sammy2023">Github</a>
                </p>
            </div>
            <div class="box textBox col-4">
                <p>
                    ${about.intro}
                </p>
            </div>
        </div>`
}

function renderProjects(projects) {
    return `
    <section id="projects">
        <h1>Projects</h1>
        <input id="search" type="text" size="20"/>
        <select>
            <option value="course">Course</option>
            <option value="personal">Personal</option>
        </select>
        <div class="projectList">
            ${projects.map(project => renderProject(project)).join("")}
        </div>
    </section>
    `;

    // projects.map(project=>renderProjects(project)).join("")
}

function renderProject(project) {
    return `
    <div class="row">
        <div class="col -4 projText"> 
            <a href="${project.link}">${project.title}</a>
            <div>${project.collab}</div>
            <div>${project.date}</div>
        </div>
        <div class="col-4 projImg">
            <img width="443" style="object-fit: cover;" src="${project.photo}" alt="">
        </div>
    </div>
    `
}

function renderNews(news) {
    return `
    <section id="news">
        <h1>News</h1>
        ${news.map(newsItem => renderNewsItem(newsItem)).join("")}
    </section>
    `
}

function renderNewsItem(newsItem) {
    return `
    <div class="row">
        <div class="col-12">
            <div>${newsItem.title}</div>
            <div>${newsItem.date}</div>
        </div>
    </div>
    `
}

function renderProjectPage(projects) {
    // Project Page html code
    renderNavBar();

    return 
}
