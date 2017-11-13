<template>
  <div class="page">
    <header>hello</header>
    <nav>world</nav>
    <main>main</main>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.page {
  header {
    height: 90px;
    background: lightblue;
  }

  nav {
    display: inline-block;
    font-size: 16px; /*no*/
    color: red;
    height: 90px; 
    width: 100%;
    background:#ddd;
  }

  main {
    height: 100px;
    background: lightgray;
  }
}
</style>


