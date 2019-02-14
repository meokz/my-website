<template>
  <div class="tag">
    <ul>
      <li v-for="tag in tags" v-bind:key="tag">{{ tag }}</li>
    </ul>
  </div>
</template>

<style scoped>
.tag ul {
    padding: 5px;
}

.tag li {
    font-size: 10px;
    display: inline-block;
    padding: 3px 10px 3px 10px;
    margin: 1px 5px 1px 5px;
    max-width:100%; /* limit width */
    word-break:break-all; /* wrap extended text*/
    color: #FFF;
    background-color: #3BBEFF;
    border-radius: 10px;
}
</style>

<script>
export default {
  props: [
    'tags'
  ]
}
</script>