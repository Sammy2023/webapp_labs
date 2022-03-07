export default function renderAbout(about) {
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
