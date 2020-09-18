<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select:none;
}

#nav {
  height:40px;
  line-height: 40px;
  background-color: #aaaaaa;
  position: absolute;
  z-index: 100;
  width: 100%;
  user-select: none;
  touch-action:none;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #79ff77;
    }
  }
}

.silent{
  pointer-events: none;
  touch-action: none;
}
</style>
