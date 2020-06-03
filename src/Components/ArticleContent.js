import React from 'react';
import '../Styles/ArticleContent.css';

const article = {
  id: 1,
  title: 'Les fruits et légumes de saison : que manger en été ?',
  meta_description: "Ah, L’été. Les jours rallongent, la chaleur se fait sentir mais avec lui une tonne de fruits et légumes à disposition. Mais alors quels sont donc les fruits et légumes de saison, et surtout quels bienfait apportent-il à l’organisme ?",
  image: require('../Images/photoArticle1.jpg'),
  author_name: 'HealthyMood',
  article_category_id: 'Blog',
  created_at: '',
  updated_at: '',
  slug: '/les-fruits-legumes-de-saison-que-manger-en-ete/',
  content :[
    {
    title: 'Les anti-oxydants',
    image: require('../Images/paragraphe1.jpg'),
    text: 'Les anti-oxydants sont essentiels pour le corps. Représentés souvent par la vitamine C ou la vitamine E, ils permettent de lutter contre le vieillissement prématuré des cellules et de se prémunir contre certaines maladies. Voici donc une liste concernant des fruits et légumes qui en contiennent : La fraise : Riche en anti-oxydant et en vitamine C. La groseille : Apporte de nombreux minéraux et oligoéléments, ainsi que des vitamines A,B et C.    La poire : ( Fin août début septembre ) Source de vitamine E ainsi que des flavonoïdes qui aide à lutter contre les maladies cardio-vasculaire. La framboise : Haute densité nutritionnelle, riche en fibre et en anti-oxydant.  Le brocoli : Légume vert. On trouve dedans des vitamines C, K, E et B9. Nous avons tout une gamme de repas ou de dessert à base de Brocoli, ou encore à la fraise'
  },
  {
    title: "Pour s'hydrater",
    image: require('../Images/paragraphe2.jpg'),
    text: 'En été, il fait chaud, il est donc très important de s’hydrater. De nombreux fruits et légumes peuvent répondre à ce besoin. La pêche : Apporte 50% des besoins de pro-vitamine A, beaucoup de fibre et désaltère La pastèque : Désaltère grandement, est source de citrulline, essentiel pour le corps Le concombre : Composé à 95% d’eau, le concombre est désaltérant, une source de cuivre ainsi qu’un anti-oxydant. ( Astuce, pour ceux qui le digère mal, pensez à enlever les pépins !)Le concombre : Composé à 95% d’eau, le concombre est désaltérant, une source de cuivre ainsi qu’un anti-oxydant. ( Astuce, pour ceux qui le digère mal, pensez à enlever les pépins ! ) Le melon : Désaltère mais permet aussi de lutter contre la rétention d’eau grâce à son potassium. '
  },
  {
    title: 'Les fruits et légumes riches en fibres',
    image: require('../Images/paragraphe3.jpg'),
    text: 'Certaines fois, il est nécessaire de consommer beaucoup de fibres, pour des raisons … euh naturelles ! Quoiqu’il en soit, voici une liste de légumes et de fruits pouvant vous aider dans la vie de tous les jours. Les Abricots : Riche en fibre, anti-oxydant, et vitamine A. La blette : Riche en fibre, mais aussi en vitamine A et C, ainsi qu’en magnésium et potassium La prune : Très riche en fibre,c’est un excellent laxatif La figue : Riche en glucides, fibres et protéine La betterave : Source de calcium, de fer mais aussi de vitamines A et C. Mais c’est aussi une grande source de fibres'
  },
  {
    title: 'Les aliments qui vous veulent du bien',
    image: require('../Images/paragraphe4.jpg'),
    text: 'Alors oui, tous les légumes et les fruits sont bons pour la santé et “soignent” mais certains ont plus de vertus que d’autres. Par exemple, la noix est connue pour ses vertus contre le cancer, mais quels sont donc les fruits et légumes de cette saison qui nous aident ? Les asperges : Contient des acides foliques, ainsi que des vitamiens B9 qui viennent renforcer notre système immunitaire Les flageolets : riche en vitamine et minéraux, permet de lutter contre l’anémie, contient des protéines végétales. Le potiron : Ce légume est très riche en vitamine C et A, et il contient deux fois plus du carotène que les carottes. ( La carotène permet la photosynthèse, sur le corps humain, cela à des effets anti-cancérigène) L’ail : cultivé depuis des milliers d’années, l’ail est très important. Anti-infectieux, il aide au bon fonctionnement du cœur La poire : ( Fin août début septembre ) Source de vitamine E ainsi que des flavonoïdes qui aide à lutter contre les maladies cardio-vasculaire'
  },
  {
    title: 'Pour le tonic',
    image: require('../Images/paragraphe5.jpg'),
    text: 'Il arrive certaine fois que l’on puisse être fatigué pour des raisons diverses. Mais pas panique, avant de prendre des compléments alimentaires, faisons le tour des légumes et fruits de saisons vitalisant: Les petits pois : contient beaucoup d’oligoéléments ainsi que des vitamines B et C, des fibres et des anti-oxydants Pommes de terres nouvelles : Source importante de glucides et de fibres, nécessaire pour le corps Les radis : Contiennent beaucoup de vitamines C et B ainsi que du potassium, du sodium nécessaire pour l’énergie du corps Autrement dit, il existe une quantité inimaginable de combinaison pour vos repas ! Pas besoin d’acheter des légumes venus d’ailleurs, la nature est bien faite, tout ce trouve sur notre territoire ! 🙂'
  }
]};

function ArticleContent() {
  return (
    <div className='article-container'>
      <h1>{article.title}</h1>
      <img className='banniere' src={article.image} alt={article.title} />
      {article.content.map(a => {
        return (
          <div className='paragraphe-container' key={a.title} >
            <h2>{a.title}</h2>
            <div className='body-paragraphe'>
              <img className='image-paragraphe' src={a.image} alt={a.title} />
              <p>{a.text}</p>
            </div>
          </div>
        )
      })}
    </div>
    
  )}

export default ArticleContent;
