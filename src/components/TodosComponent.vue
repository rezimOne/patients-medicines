<!--
<template>
  <div>
    <div class="todo-wrapper">
      <button @click="myFun"></button>
      <button @click="addTodo"></button>
      <div v-for="todo in visibleTodos"
        :key="todo.id"
        :visibleTodos="visibleTodos"
        :currentPage="currentPage"
        >{{ todo.text }}
        <button @click="removeTodo(todo.id)"></button>
      </div>
      <PaginationComponent
        :currentPage="currentPage"
        :todos="todos"
        :recordsPerPage="recordsPerPage"
        v-on:page:update="updatePage"
      />
    </div>
  </div>
</template>
<script>
import PaginationComponent from './PaginationComponent.vue'
export default {
  name: 'TodosComponent',
  components: { PaginationComponent },
  data(){
    return {
      currentPage: 0,
      recordsPerPage: 6,
      todos: [
        {id: 1, text: "Finish todo id1"},
        {id: 2, text: "Finish todo id2"},
        {id: 3, text: "Finish todo id3"},
        {id: 4, text: "Finish todo id4"},
        {id: 5, text: "Finish todo id5"},
        {id: 6, text: "Finish todo id6"},
        {id: 7, text: "Finish todo id7"},
        {id: 8, text: "Finish todo id8"},
        {id: 9, text: "Finish todo id9"},
        {id: 10, text: "Finish todo id10"},
        {id: 11, text: "Finish todo id11"},
        {id: 12, text: "Finish todo id12"},
      ],
      nextId: 13,
      visibleTodos: []
    }
  },
  beforeMount() {
    this.updateVisibleTodos();
  },
  methods: {
    addTodo() {
      this.todos.push(
        {
          id: this.nextId,
          text: 'Hey'
        }
      )
      this.nextId++;
      this.updateVisibleTodos();
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter(todo => todo.id !== id);
      this.updateVisibleTodos();
    },
    myFun() {
      console.log(this.visibleTodos)
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos() {
      this.visibleTodos = this.todos.slice(this.currentPage * this.recordsPerPage, (this.currentPage * this.recordsPerPage) + this.recordsPerPage);
      if(this.visibleTodos.length === 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  }
}
</script>
<style>
</style>

PaginationComponent.vue
<template>
  <div v-if="totalPages() > 0" class="wrapper-pagination">
    <span class="pagination-button"
      v-if="showPrevoiusLink()"
      @click="updatePage(currentPage -1)"
    >p</span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span class="pagination-button"
      v-if="showNextLink()"
      @click="updatePage(currentPage +1)"
    >n</span>
    </div>
</template>
<script lang="js">
  export default {
    name: 'PaginationComponent',
    props: ['todos', 'currentPage', 'recordsPerPage'],
    methods : {
      updatePage(pageNumber) {
        this.$emit('page:update', pageNumber)
      },
      totalPages() {
        return Math.ceil(this.todos.length / this.recordsPerPage);
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
-->