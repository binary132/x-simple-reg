xtag.register('x-simple-reg', {
  lifecycle: {
    created: function() {
      this.ready();
    }
    inserted: function() {
      
  },
  methods: {
    ready: function() {
      console.log("loaded x-simple-reg");
    }
  }
});
