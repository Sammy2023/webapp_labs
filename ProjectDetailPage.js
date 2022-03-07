export default function renderProjectDetailPage(project){
    const main = document.querySelector("main");
    main.innerHTML = `
        <section id="projects">
            <div>
                <h1>${project.title}</h1>
                <img width="50%" src="${project.photo}" alt="">
                <p>${project.collab}</p>
                <p>${project.description}</p>
                <p>${project.date}</p>
                <p class="projectText">
                    ${project.detail}
                </p>
            </div>
        </section>
    `
}