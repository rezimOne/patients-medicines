<template>
  <div v-if="totalPages() > 0" class="wrapper-pagination">
    <span class="pagination-button"
      v-if="showPrevoiusLink()"
      @click="updatePage(currentPage -1)"
      >
        <img :src="images.paginationIcons.prevPage"/>
    </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span class="pagination-button"
      v-if="showNextLink()"
      @click="updatePage(currentPage +1)"
    >
      <img :src="images.paginationIcons.nextPage"/>
    </span>
    </div>
</template>
<script lang="js">
export default {
  name: 'PaginationComponent',
  props: ['allPatients', 'currentPage', 'recordsPerPage'],
  data() {
    return {
      images: {
        paginationIcons: {
          nextPage: require('../assets/icon-next-page.png'),
          prevPage: require('../assets/icon-prev-page.png')
        }
      }
    }
  },
  methods : {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber)
    },
    totalPages() {
      return Math.ceil(this.allPatients.length / this.recordsPerPage);
    },
    showPrevoiusLink() {
      return this.currentPage === 0 ? false : true
    },
    showNextLink() {
      return this.currentPage === (this.totalPages() -1) ? false : true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 100px;
  height: 20px;
  border-radius: 10px;
  margin: 0 auto;
  font-size: .8rem;
}
img {
  height: 15px;
}
</style>