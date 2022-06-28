export default {
  async registerWisdom(context, data) {
    const userId = context.rootGetters.userId;
    const wisdomId = new Date().getTime() + userId;
    const wisdomData = {
        userId: userId,
        title: data.title,
        category: data.category,
        desc: data.desc,
        date: new Date().toTimeString(),
        dayPosted: new Date().toDateString()
    };
    
    const token = context.rootGetters.token;
    const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms/${wisdomId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(wisdomData)
    });
     
      if (!response.ok) {
          const error = new Error(response.message || 'Failed to post');
          throw error;
      }

    context.commit('registerWisdom', {
      ...wisdomData,
      id: userId
    });
  },

   async editWisdom(context, data) {
    const userId = context.rootGetters.userId;
    const wisdomId = data.id
    const wisdomData = {
        userId: userId,
        title: data.title,
        category: data.category,
        desc: data.desc,
        date: new Date().toTimeString(),
        dayPosted: new Date().toDateString()
    };
    const token = context.rootGetters.token;
    const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms/${wisdomId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(wisdomData)
    });
    
     
      if (!response.ok) {
        
          const error = new Error(response.message || 'Failed to post');
          throw error;
        
      }

    context.commit('registerWisdom', {
      ...wisdomData,
      id: wisdomId
    });
  },
  async deleteWisdom(context, data) {
    const wisdomId = data
    
    
    
    const token = context.rootGetters.token;
    
    const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms/${wisdomId}.json?auth=` + token, {
      method: 'DELETE',
      
    });
      if (!response.ok) {
          const error = new Error(response.message || 'Failed to post');
          throw error;
      }
      

      
  },
  

  async loadWisdoms(context) {
   
   const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms.json`);
   const responseData = await response.json();

   if(!response.ok) {
     const error = new Error(responseData.message || 'Failed to fetch');
     throw error;
   }
    const wisdoms = [];

    for (const key in responseData) {
      const wisdom = {
        id: key,
        userId: responseData[key].userId,
        title: responseData[key].title,
        category: responseData[key].category,
        desc: responseData[key].desc,
        posted: responseData[key].dayPosted

      };
      wisdoms.push(wisdom);
      
    }
    context.commit('setWisdoms', wisdoms)
  },
};