import renderAbout from './About.js';
import renderProjects from './Projects.js';
import renderNews from './News.js';
import addInteractions from './Interactions.js';

export default function renderMainPage(data) {
    const main = document.querySelector("main");
    main.innerHTML = `
        ${renderAbout(data.about)}
        ${renderProjects(data.projects)}
        ${renderNews(data.news)}
    `
    addInteractions(data);
}