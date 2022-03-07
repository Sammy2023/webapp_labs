export default function renderNews(news) {
    return `
    <section id="news">
    <h1>News</h1>
    <div class="search">
        <input id="search" type="search" name='news' placeholder="Search News...">
    </div>
    <div class="news-list">
        ${renderNewsItem(news)}
    </div>
    </section>
    `
}

function renderNewsItem(news) {
    return `
    <div class="row">
        <div class="col-12">
            ${news.map(newsItem => `
            <div class="newsItem">
                <div>${newsItem.title}</div>
                <div>${newsItem.date}</div>
            </div>
            `).join('')}
        </div>
    </div>
    `
}
