import {renderProject} from './Projects.js';
import {renderNewsItem} from './News.js';
export default function addInteractions(data) {
    const input = document.querySelector('.search input[name="news"]');
    console.log("input", input);
    input.addEventListener("input", (event) => {
        const userInput = event.target.value.toLowerCase();
        const filteredNews = data.news.filter(newsItem => newsItem.title.toLowerCase().includes(userInput) ||  newsItem.date.toLowerCase().includes(userInput));
        document.querySelector('.news-list').innerHTML = renderNewsItem(filteredNews);
    });
    
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    
    buttons.forEach(cond => cond.addEventListener('change', event => {
        console.log("event", event);
        console.log("tag value", event.target.value);
        const tagValue = event.target.value.toLowerCase();
        var filteredProjects = data.projects;
        if (tagValue != "all"){
            filteredProjects = data.projects.filter(project => project.category.toLowerCase() === tagValue);
        }
        document.querySelector('.project-list').innerHTML = renderProject(filteredProjects);
    }));

    //loop through all the elements and see which one contains the character that we want.
}