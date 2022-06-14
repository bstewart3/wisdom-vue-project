export default {
  async registerWisdom(context, data) {
    const userId = context.rootGetters.userId;
    const wisdomId = userId + new Date().getTime();
    const wisdomData = {
        
        title: data.title,
        category: data.category,
        desc: data.desc,
        timePosted: new Date().toTimeString(),
        dayPosted: new Date().toDateString()

        
    };

    const token = context.rootGetters.token;
    
    const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms/${wisdomId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(wisdomData)
    });
     

      if (!response.ok) {
        //error..
      }


    context.commit('registerWisdom', {
      ...wisdomData,
      id: userId
    });
    // console.log(wisdomData)
  },
  

  async loadWisdoms(context) {
   
   const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms.json`);
   const responseData = await response.json();
   
  //  console.log(responseData)

   if(!response.ok) {
     const error = new Error(responseData.message || 'Failed to fetch');
     throw error;
     
   }

    const wisdoms = [];

    for (const key in responseData) {
      const wisdom = {
        id: key,
        title: responseData[key].title,
        category: responseData[key].category,
        desc: responseData[key].desc,
        posted: responseData[key].dayPosted

      };
      wisdoms.push(wisdom);
      // console.log(key)

      
    }

    context.commit('setWisdoms', wisdoms)
  },
  // async loadRandomWisdom(context) {
    
  //   const response = await fetch(`https://wisdom-vue-project-default-rtdb.firebaseio.com/wisdoms.json`);
  //   const responseData = await response.json();
  //   const responseEntries = await Object.entries(responseData);
  //   const randomResponseEntries = responseEntries[Math.floor(Math.random() * responseEntries.length)];
  //   const wisdoms = [];

  //   console.log(randomResponseEntries);

     
    

  //   for (const key in randomResponseEntries) {
  //     const wisdom = {
  //       id: key,
  //       title: randomResponseEntries[key].title,
  //       category: randomResponseEntries[key].category,
  //       desc: randomResponseEntries[key].desc

  //     };
  //     wisdoms.push(wisdom);
  //     // console.log(key)

      
  //   }

    
  //   context.commit('setRandomWisdom', wisdoms)
  //  },
};