import React from 'react';
import RecipeCategories from '../RecipeCategories.json';
import { Link } from 'react-router-dom';
import '../Styles/CategoriesList.css';

function CategoriesList() {
    return (
        <div className='categories-list-section'>
            <h2>Par catégories</h2>
            <div className='categories-list-container'>
                {RecipeCategories.category.map(category => {
                    return (
                        <Link to={`/recettes/categorie/${category.id}`} key={category.id}>
                            <div className='recipe-category' style={{ backgroundImage: `url(${require(`../Images/` + category.img)})` }}>
                                <div className='category-title-container'>
                                    <h3>{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoriesList;