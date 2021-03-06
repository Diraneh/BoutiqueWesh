new Vue({
    el: '#apperrssw',
      data() {
        return {
          info: null,
          loading: true,
          errored: false
        }
      },
      created() {
        axios
          .get('https://fakestoreapi.com/products')
          .then(response => {
            this.info = response.data
    
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    })