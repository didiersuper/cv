$( document ).ready(function() {
    copyArticle('article_competence');
    alert("coucou");
});

function copyArticle(articleInputId)
{
    var articleInput = $( '#'+articleInputId );
    var section = $( '#section' );
    var article = $('<article></article>');

    article.append(articleInput.html());
    section.append(article);
}