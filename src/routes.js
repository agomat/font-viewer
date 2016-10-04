import Home from 'components/Home/home';
import Categories from 'components/Categories/categories';
import Category from 'components/Categories/category';
//import NotFound from 'components/NotFound/notFound';

const routes = {
  '/': {
    component: Home
  },
  '/categories': {
    component: Categories
  },
  '/categories/:id': {
    name: 'category',
    component: Category
  },
  '*': {
    //component: NotFound
  }
};

export default routes;
