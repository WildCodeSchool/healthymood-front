import React from 'react';
import SendFormRecipe from '../Components/SendFormRecipe';
import '../Styles/SendRecipe.css';

class SendRecipe extends React.Component {
  render () {
    return (
      <div className='send-form-recipe'>
        <SendFormRecipe />
      </div>
    );
  }
}

export default SendRecipe;
