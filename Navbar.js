
export default function renderNavBar(page) {
    
    const nav = document.querySelector("nav");
    nav.innerHTML = page === "main" ? `
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
    ` : `<a href=".">Go Back</a>`
}