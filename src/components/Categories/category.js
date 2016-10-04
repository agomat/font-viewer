import Vue from 'vue';
import { categoriesResource } from 'src/helpers/resources';

import template from './category.html';

export default Vue.extend({
  template,

  data() {
    return {
      fonts: {},
    };
  },

  route: {
    data() {
      const id = this.$route.params.id;
      return categoriesResource.get({ id }).then((response) => {
        return this.$set('fonts', response.data);
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status);
      });
    }
  }
});
