new Vue({
  el: '#editor',
  data: {
    input: '# Hello Vue'
  },
  filters: {
    marked: marked
  }
})