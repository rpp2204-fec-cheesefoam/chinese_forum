import React, {useState} from 'react';
import OverviewImages from './ProductOverviewComponents/OverviewImages.jsx';
import OverviewReviews from './ProductOverviewComponents/OverviewReviews.jsx';
import OverviewPrice from './ProductOverviewComponents/OverviewPrice.jsx';
import OverviewStyleSelect from './ProductOverviewComponents/OverviewStyleSelect.jsx';
import OverviewAddtoCart from './ProductOverviewComponents/OverviewAddtoCart.jsx';
import OverviewDescription from './ProductOverviewComponents/OverviewDescription.jsx';


class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_id: 444218
    }
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(style_id) {
    console.log('style selected: ', style_id)
  }

  render() {

    var product = {
      id: 71697,
      campus: 'hr-rpp',
      name: 'Some Shoes',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Shoes',
      default_price: '140.00',
      created_at: '2022-05-11T19:38:15.373Z',
      updated_at: '2022-05-11T19:38:15.373Z',
      features: [
        { feature: 'Fabric', value: 'Canvas' },
        { feature: 'Buttons', value: 'Brass' }
      ]
    };



    var styles = [
      {
        style_id: 444218,
        name: 'Forest Green & Black',
        original_price: '140.00',
        sale_price: '100.00',
        'default?': true,
        photos: [
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          },
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          }
        ],
        skus: {
          '2580652': { quantity: 14, size: '7' },
          '2580653': { quantity: 25, size: '7.5' },
        }
      },
      {
        style_id: 444219,
        name: 'Desert Brown & Tan',
        original_price: '140.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          },
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          }
        ],
        skus: {
          '2580654': { quantity: 1, size: '5' },
          '2580655': { quantity: 25, size: '7' },
        }
      }
    ];

    return (
      <div>
        <h2 className="Overview-category">{product.category}</h2>
        <h1 className="Overview-title">{product.name}</h1>
        <OverviewPrice
          original_price={styles[0].original_price}
          sale_price={styles[0].sale_price}/>
        <OverviewStyleSelect styles={styles} changeStyle={this.changeStyle}/>
      </div>
    );
  }
}

export default ProductOverview;