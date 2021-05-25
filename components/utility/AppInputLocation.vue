<template>
<div>

  <input 
        type="text"
        :name="name"
        @input="$emit('input', $event.target.value)" 
        class="w-full px-3 py-2 border border-blue-900 outline-none shadow-sm focus:border-4 focus:border-indigo-600 focus:border-blue-900"
        >
    <ul>
        <li v-for="(result,i) in searchResults" :key="i"> {{result }}</li>
    </ul>
</div>
</template>

<script>
export default {
props:['name'],
data(){
    return{
        location: '',
        searchResults: [],
        service: null
    }
},
metaInfo () {
      return {
        script: [{
          src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyC5f08Rf2Bg0o76itVqzYegaIFoGC7g2Fo&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.MapsInit() // will declare it in methods
        }]
      }
    },
methods: {
      MapsInit () {
        this.service = new window.google.maps.places.AutocompleteService()
      },
      displaySuggestions (predictions, status) {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
          this.searchResults = []
          return
        }
        this.searchResults = predictions.map(prediction => prediction.description) 
      }
    },
    watch: {
      location (newValue) {
        if (newValue) {
          this.service.getPlacePredictions({
            input: this.location,
            types: ['(cities)']
          }, this.displaySuggestions)
        }
      }
    }
}

</script>

<style>

</style>