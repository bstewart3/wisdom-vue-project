export default {
  registerWisdom(context, data) {
    const wisdomData = {
        id: 'c3',
        title: data.title,
        category: data.category,
        desc: data.desc
    };
    context.commit('registerWisdom', wisdomData);
    console.log(wisdomData)
  } 
};