<template>
  <InfiniteTextLoader
  text="LOAD"
  fillColor="rgba(255, 255, 255, 0.2)"
  outlineColor="rgba(180, 180, 180, 0.3)"
  fontSize="14px"
  fontWeight="1000"
  letterSpacing="0.1em"
  strokeWidth="2px"
  animationDuration="1s"
  animationTimingFunction="ease-in-out"
  animationDirection="alternate"
  fontFamily="Roboto"
  backdropColor="rgba(0, 0, 0, 0.4)"
  backdropBlur="3px"
  textAnimation="translate"
  />
  <div>
    <img alt="Vue logo" src="./assets/test1.png" />
  </div>

</template>

<script>
import InfiniteTextLoader  from 'vue-text-loader';  
import 'vue-text-loader/dist/infinite-text-loader.css'; 
export default {
  name: 'App',
  components: {
    InfiniteTextLoader,  // Déclarer le composant pour l'utiliser dans le template
  },
};
</script>

<style scoped>
/* Tu peux personnaliser les styles ici */
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
