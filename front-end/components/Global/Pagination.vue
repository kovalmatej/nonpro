<template>
  <div class="pagination-container">
    <div 
      :class="[currentPage !== 0 ? '' : 'disabled']" 
      class="item previous block"
      @click="previousPage"
    >Predošlá</div>

    <div 
      class="item block active"
    >{{ currentPage }}</div>

    <div 
      :class="[currentPage !== numberOfPages - 1 ? '' : 'disabled']" 
      class="item next block"
      @click="nextPage"
    >Ďalšia</div>
  </div>  
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    numberOfPages: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    isEnd() {
      return this.currentPage === this.numberOfPages - 1;
    },
    isStart() {
      return this.currentPage === 0;
    }
  },
  methods: {
    nextPage() {
      if(this.isEnd) return;
      this.currentPage = this.currentPage + 1;
      this.$emit("pagechanged", this.currentPage);
    },
    previousPage() {
      if(this.isStart) return;
      this.currentPage = this.currentPage - 1;
      this.$emit("pagechanged", this.currentPage);
    },
    changeToPage(i) {
      this.currentPage = i;
      this.$emit("pagechanged", this.currentPage);
    }
  }
}
</script>

<style lang="sass" scoped>
.pagination-container
  display: flex
  justify-content: flex-end
  margin-top: 2rem
  gap: 1rem

.item.block
  padding: 1rem
  font-size: 1.1rem
  font-weight: bold
  cursor: pointer
  border-bottom: 4px solid transparent

.item.block.disabled
  cursor: auto
  color: $gray

.item.block.active
  border-bottom: 4px solid $lightPurple

.hidden
  display: none
</style>
