<template>
  <div class="main">
    <ul>
      <template v-for="(item,index) in $router.options.routes">
        <li v-if="item.path != '/'" @click="$router.push(item.path)">
          {{item.meta.title}}
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {}
}

</script>
<style scoped>
ul,
li {
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  transition: all .2s ease-in;
}

li:hover {
  color: #bc223d;
  text-indent: 12px;
}

</style>
