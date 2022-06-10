export default {
    wisdoms(state) {
        return state.wisdoms;
    },
    hasWisdoms(state) {
        return state.wisdoms && state.wisdoms.length > 0;
    },
    isWisdom(_, getters, _2, rootGetters) {
        const wisdoms = getters.wisdoms;
        const userId = rootGetters.userId;
        return wisdoms.some(wisdom => wisdom.id === userId)
    },
    likes(state) {
        return state.likes
    }
}