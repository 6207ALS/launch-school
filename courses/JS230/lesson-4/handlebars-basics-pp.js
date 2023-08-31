// JS230 DOM and Asynchronous Programming with JavaScript | JavaScript Libraries
// Practice Problems: Handlbars Basics

let posts = [
	{
		title: 'Lorem ipsum dolor sit amet',
		published: 'April 1, 2015',
		body: 'Sed ut <b>perspiciatis</b> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
		tags: ["Handlebars", "Tech", "Front-end"]
	},
	{
		title: 'Morel ipsum dolor sit book',
		published: 'March 2, 2001',
		body: 'Sed ut <b>perspiciatis</b> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
	}
]

$(function() {
	let postsTemplate = Handlebars.compile($("#posts").html());
	
	Handlebars.registerPartial("post", $("#post").html());
	Handlebars.registerPartial("tag", $("#tag").html());

	$("body").html(postsTemplate({ posts }));
})