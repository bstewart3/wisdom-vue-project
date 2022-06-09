import { createStore } from 'vuex';

import addWisdomModule from './modules/addWisdom/index.js';

const store = createStore({
    modules: {
      wisdoms: addWisdomModule  
    }
});

export default store;