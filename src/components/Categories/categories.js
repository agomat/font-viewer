import Vue from 'vue';
import template from './categories.html';

import { categoriesResource } from 'src/helpers/resources';

export default Vue.extend({
  template,

  data() {
    return {
      data: {}
    };
  },

  route: {
    data(){
      return categoriesResource.get().then((response) => {
        return this.$set('data', response.data);
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status);
      });
    }
  }
});
