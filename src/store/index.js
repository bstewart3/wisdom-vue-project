import { createStore } from 'vuex';

import addWisdomModule from './modules/addWisdom/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
      wisdoms: addWisdomModule,
      auth: authModule  
    },
});

export default store;