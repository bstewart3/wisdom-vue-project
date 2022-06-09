export default {
    wisdoms(state) {
        return state.wisdoms;
    },
    hasWisdoms(state) {
        return state.wisdoms && state.wisdoms.length > 0;
    }
}