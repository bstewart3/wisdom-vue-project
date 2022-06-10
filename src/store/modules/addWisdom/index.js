import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
          likes: 0,
            wisdoms: [
                {
                    id: "c1",
                    title: "Just some advice...",
                    category: ["knowledge"],
                    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
                  },
                  {
                    id: "c2",
                    title: "Dont do this EVER!",
                    category: ["learning"],
                    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
                  },
                  {
                    id: "c3",
                    title: "My 5 best tips for young people.",
                    category: ["experience"],
                    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
                  },
                  {
                    id: "c4",
                    title: "The honest truth from an old guy..",
                    category: ["knowledge"],
                    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
                  },
                  {
                    id: "c5",
                    title: "I wish i knew this when I was 23.",
                    category: ["learning"],
                    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
                  },
                  {
                    id: "c6",
                    title: "The bigest life hacks for saving money.",
                    category: ["experience"],
                    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
                  },
                  {
                    id: "c7",
                    title: "My sugestions on traveling and making money at the same time.",
                    category: ["knowledge"],
                    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
                  },
                  {
                    id: "c8",
                    title: "Advice to anyone looking to leverage their income for longterm growth.",
                    category: ["learning"],
                    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
                  },
                  {
                    id: "c9",
                    title: "What I learned at Harvard that mattered the most.",
                    category: ["experience"],
                    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
                  },
                  {
                    id: "c10",
                    title: "How to be yourself.",
                    category: ["knowledge"],
                    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
                  }
            ]
        }
   
    },
    mutations,
    actions,
    getters
}