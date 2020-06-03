import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import categoryImage from '../Images/category.png';
import publishedImage from '../Images/published.png';

const article = {
  id: 1,
  title: 'Les fruits et légumes de saison : que manger en été ?',
  meta_description: "Ah, L’été. Les jours rallongent, la chaleur se fait sentir mais avec lui une tonne de fruits et légumes à disposition. Mais alors quels sont donc les fruits et légumes de saison, et surtout quels bienfait apportent-il à l’organisme ?",
  image: require('../Images/photoArticle1.jpg'),
  author_name: 'HealthyMood',
  article_category_id: 'Blog',
  created_at: 'Mai 2020',
  updated_at: 'Juin 2020',
  slug: '/les-fruits-legumes-de-saison-que-manger-en-ete/',
  content : `<h3>Les anti-oxydants</h3>
  <p><img class="size-medium wp-image-3533 alignright" src="https://www.healthymood.fr/wp-content/uploads/Fraises-avec-groseilles-200x300.jpg" alt="" width="200" height="300" srcset="https://www.healthymood.fr/wp-content/uploads/Fraises-avec-groseilles-200x300.jpg 200w, https://www.healthymood.fr/wp-content/uploads/Fraises-avec-groseilles.jpg 667w" sizes="(max-width: 200px) 100vw, 200px" /></p>
  <p>Les anti-oxydants sont essentiels pour le corps. Représentés souvent par la vitamine C ou la vitamine E, ils permettent de lutter contre le vieillissement prématuré des cellules et de se prémunir contre certaines maladies. Voici donc une liste concernant des fruits et légumes qui en contiennent :</p>
  <p><strong><em>La fraise :</em></strong> Riche en anti-oxydant et en vitamine C<br />
  <strong><em>La groseille :</em></strong> Apporte de nombreux minéraux et oligoéléments, ainsi que des vitamines A,B et C<br />
  <strong><em>La poire</em> :</strong> ( Fin août début septembre ) Source de vitamine E ainsi que des flavonoïdes qui aide à lutter contre les maladies cardio-vasculaire<br />
  <strong><em>La framboise</em> </strong>: Haute densité nutritionnelle, riche en fibre et en anti-oxydant<br />
  <strong><em>Le brocoli</em> :</strong> Légume vert. On trouve dedans des vitamines C, K, E et B9</p>
  <p>Nous avons tout une gamme de repas ou de dessert à base de <a href="https://www.healthymood.fr/?s=brocoli">Brocoli</a>, ou encore à la <a href="https://www.healthymood.fr/cheesecake-vegan-a-la-fraise/">fraise </a></p>
  <h3>Pour s&#8217;hydrater</h3>
  <p>En été, il fait chaud, il est donc très important de s&#8217;hydrater.<br />
  <img class="size-medium wp-image-3539 alignleft" src="https://www.healthymood.fr/wp-content/uploads/Pastèque-300x200.jpg" alt="" width="300" height="200" srcset="https://www.healthymood.fr/wp-content/uploads/Pastèque-300x200.jpg 300w, https://www.healthymood.fr/wp-content/uploads/Pastèque-768x512.jpg 768w, https://www.healthymood.fr/wp-content/uploads/Pastèque.jpg 1000w" sizes="(max-width: 300px) 100vw, 300px" />De nombreux fruits et légumes peuvent répondre à ce besoin.</p>
  <p><strong><em>La pêche</em> :</strong> Apporte 50% des besoins de pro-vitamine A, beaucoup de fibre et désaltère<br />
  <strong><em>La pastèque</em> </strong>: Désaltère grandement, est source de citrulline, essentiel pour le corps<br />
  <strong><em>Le concombre</em> </strong>: Composé à 95% d&#8217;eau, le concombre est désaltérant, une source de cuivre ainsi qu&#8217;un anti-oxydant. ( Astuce, pour ceux qui le digère mal, pensez à enlever les pépins !)<br />
  <em><strong>Le melon : </strong></em>Désaltère mais permet aussi de lutter contre la rétention d&#8217;eau grâce à son potassium.</p>
  <h3></h3>
  <h3>Les fruits et légumes riches en fibres</h3>
  <p>Certaines fois, il est nécessaire de consommer beaucoup de fibres, pour des raisons &#8230; euh naturelles ! Quoiqu&#8217;il en soit, voici une liste de légumes et de fruits pouvant vous aider dans la vie de tous les jours.</p>
  <p><em><strong>Les Abricots</strong> :</em> Riche en fibre, anti-oxydant, et vitamine A.<br />
  <strong><em>La blette</em> :</strong> Riche en fibre, mais aussi en vitamine A et C, ainsi qu&#8217;en magnésium et potassium<img class="size-medium wp-image-3538 alignright" src="https://www.healthymood.fr/wp-content/uploads/Abricot-300x200.jpg" alt="" width="300" height="200" srcset="https://www.healthymood.fr/wp-content/uploads/Abricot-300x200.jpg 300w, https://www.healthymood.fr/wp-content/uploads/Abricot-768x511.jpg 768w, https://www.healthymood.fr/wp-content/uploads/Abricot-1024x681.jpg 1024w, https://www.healthymood.fr/wp-content/uploads/Abricot.jpg 1200w" sizes="(max-width: 300px) 100vw, 300px" /><br />
  <strong><em>La prune : </em></strong>Très riche en fibre,c&#8217;est un excellent laxatif<br />
  <strong><em>La figue : </em></strong>Riche en glucides, fibres et protéine<strong><em><br />
  La betterave</em> :</strong> Source de calcium, de fer mais aussi de vitamines A et C. Mais c&#8217;est aussi une grande source de fibres</p>
  <h3></h3>
  <h3>Les aliments qui vous veulent du bien</h3>
  <p>Alors oui, tous les légumes et les fruits sont bons pour la santé et &#8220;soignent&#8221; mais certains ont plus de vertus que d&#8217;autres. Par exemple, la noix est connue pour ses vertus contre le cancer, mais quels sont donc les fruits et légumes de cette saison qui nous aident ?</p>
  <p><strong><em>Les asperges</em> </strong>: Contient des acides foliques, ainsi que des vitamiens B9 qui viennent renforcer notre système immunitaire<br />
  <strong><em><img class="size-medium wp-image-3541 alignleft" src="https://www.healthymood.fr/wp-content/uploads/Ail-300x200.jpg" alt="" width="300" height="200" srcset="https://www.healthymood.fr/wp-content/uploads/Ail-300x200.jpg 300w, https://www.healthymood.fr/wp-content/uploads/Ail-768x512.jpg 768w, https://www.healthymood.fr/wp-content/uploads/Ail-1024x683.jpg 1024w, https://www.healthymood.fr/wp-content/uploads/Ail.jpg 1200w" sizes="(max-width: 300px) 100vw, 300px" />Les flageolets</em> :</strong> riche en vitamine et minéraux, permet de lutter contre l&#8217;anémie, contient des protéines végétales.<br />
  <strong><em>Le potiron</em> :</strong> Ce légume est très riche en vitamine C et A, et il contient deux fois plus du carotène que les carottes. ( La carotène permet la photosynthèse, sur le corps humain, cela à des effets anti-cancérigène)<br />
  <strong><em>L&#8217;ail</em> :</strong> cultivé depuis des milliers d&#8217;années, l&#8217;ail est très important. Anti-infectieux, il aide au bon fonctionnement du cœur<br />
  <strong><em>La poire</em> :</strong> ( Fin août début septembre ) Source de vitamine E ainsi que des flavonoïdes qui aide à lutter contre les maladies cardio-vasculaire</p>
  <h3>Pour le tonic</h3>
  <p>Il arrive certaine fois que l&#8217;on puisse être fatigué pour des raisons diverses. Mais pas panique, avant de prendre des compléments alimentaires, faisons le tour des légumes et fruits de saisons vitalisant:<br />
  <strong><em>Les petits pois</em> :</strong> contient beaucoup d&#8217;oligoéléments ainsi que des vitamines B et C, des fibres et des anti-oxydants<br />
  <strong><em>Pommes de terres nouvelles</em> :</strong> Source importante de glucides et de fibres, nécessaire pour le corps<img class="size-medium wp-image-3542 alignright" src="https://www.healthymood.fr/wp-content/uploads/Nouvelles-pommes-de-terres-300x223.jpg" alt="" width="300" height="223" srcset="https://www.healthymood.fr/wp-content/uploads/Nouvelles-pommes-de-terres-300x223.jpg 300w, https://www.healthymood.fr/wp-content/uploads/Nouvelles-pommes-de-terres-768x571.jpg 768w, https://www.healthymood.fr/wp-content/uploads/Nouvelles-pommes-de-terres-1024x761.jpg 1024w, https://www.healthymood.fr/wp-content/uploads/Nouvelles-pommes-de-terres.jpg 1200w" sizes="(max-width: 300px) 100vw, 300px" /><br />
  <strong><em>Les radis</em> :</strong> Contiennent beaucoup de vitamines C et B ainsi que du potassium, du sodium nécessaire pour l&#8217;énergie du corps</p>
  <p>Autrement dit, il existe une quantité inimaginable de combinaison pour vos repas ! Pas besoin d&#8217;acheter des légumes venus d&#8217;ailleurs, la nature est bien faite, tout ce trouve sur notre territoire ! 🙂</p>`
};

function createArticle() {
  return {__html: article.content};
}

function ArticleContent() {
  return (
    <div className='article-container'>
      <h1>{article.title}</h1>
      <img className='banniere' src={article.image} alt={article.title} />
      <div className='article-details'>
        <div className='author-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{article.author_name}</p>
        </div>
        <div className='category-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{article.article_category_id}</p>
        </div>
        <div className='published-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} />{article.updated_at !== '' ?<p>{article.updated_at}</p> : <p>{article.created_at}</p>}
        </div>
      </div>

      <div dangerouslySetInnerHTML={createArticle()}/>
    </div>
    
  )}

export default ArticleContent;
