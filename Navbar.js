export default function renderNavBar() {
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
};