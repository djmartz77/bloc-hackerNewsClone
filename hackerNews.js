let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=bc7e862b3f5a47a4a3a9fc3fea6a41b8";

fetch(url)
  .then(r => {
  	return r.json();
  })
  .then( data => {
  	let articles = data.articles;
    console.log(articles);
  	let body = document.querySelector("body");
  	let head = document.querySelector("head");
  	let title = document.createElement("title");
  	title.innerHTML = "Top News"
  	head.appendChild(title);
  	let mainHead = document.createElement('h1');
  	mainHead.innerHTML = 'Top 10 Trending Stories'
    body.appendChild(mainHead);
  	let articlesList = document.createElement('ol');
    body.appendChild(articlesList);
    articles.map( article => {
      let articlesItem = document.createElement('li');
      articlesItem.innerHTML = `<a href="${article.url}">${article.title}</a>`;
      articlesList.appendChild(articlesItem);
  	});
  	let footer = document.createElement('footer');
  	footer.innerHTML = `<p>Special thanks to <a href="https://newsapi.org">newsapi.org</a> for the list of articles</p>`;
  	body.appendChild(footer);
  })
  .catch(e => {
    console.log(e);
  });