import { lazy } from 'react';
// const ProductOverview = lazy(() => import('./ProductOverview.jsx'));
// const QnA = lazy(() => import('./QnA.jsx'));
// const RelatedProducts = lazy(() => import('./RelatedProducts.jsx'));
// const Reviews = lazy(() => import('./Reviews.jsx'));
import Reviews from './Reviews.jsx'


let App = (props) => (
  <>
    <div>
      some title and nev bar maybe?
    </div>
    {/* <ProductOverview /> */}
    {/* <RelatedProducts /> */}
    {/* <QnA /> */}
    <Reviews />
  </>
)

export default App;