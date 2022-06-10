export default {
    registerWisdom(state, payload) {
        state.wisdoms.push(payload)
        
    },
    setWisdoms(state, payload) {
        state.wisdoms = payload
    }, 
    setLikeCounter(state) {
        state.likes = state.likes + 1;
    }
    

}; 