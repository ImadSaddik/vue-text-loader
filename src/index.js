import InfiniteTextLoader from "./components/InfiniteTextLoader.vue";
export default {
  install: (app) => {
    app.component("InfiniteTextLoader", InfiniteTextLoader);
  },
};

export { InfiniteTextLoader };
