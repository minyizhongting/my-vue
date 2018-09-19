<template>
  <div>
    <table>
      <tr>
        <td>name</td>
        <td>price</td>
        <td>count</td>
        <td>delete</td>
      </tr>
      <tr v-for="list in lists">
        <td>{{list.name}}</td>
        <td>{{list.price}}</td>
        <td>
          <button @click="handleReduce(list)" :disabled="list.count <= 1">-</button>
          {{list.count}}
          <button @click="handleAdd(list)">+</button>
        </td>
        <td>
          <button @click="handleDel(list)">delete</button>
        </td>
      </tr>
      <tr>
        <td colspan="4" class="total">{{totalPrice}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  interface Item {
    name: string,
    price: number,
    count: number
  }

  @Component
  export default class compBook extends Vue {
    lists: Item[] = [
      {
        name: 'book 1',
        price: 20,
        count: 1
      },
      {
        name: 'book 2',
        price: 40,
        count: 3
      },
      {
        name: 'book 3',
        price: 50,
        count: 1
      },
      {
        name: 'book 4',
        price: 60,
        count: 3
      }
    ]

    total: number = 0

    mounted() {
      this.$emit('calculate', this.totalPrice);
    }

    handleAdd(list: Item) {
      list.count++;
      this.$emit('calculate', this.totalPrice);
    }

    handleReduce(list: Item) {
      if (list.count <= 1) {
        return;
      }
      list.count--;
      this.$emit('calculate', this.totalPrice);
    }

    handleDel(list: Item) {
      let idx = this.lists.indexOf(list);
      this.lists.splice(idx, 1);
      this.$emit('calculate', this.totalPrice);
    }

    // computed
    get totalPrice(): number {
      let sum = 0;
      for (let i = 0; i < this.lists.length; i++) {
        sum += this.lists[i].price * this.lists[i].count;
      }
      return sum;
    }

  }

</script>

<style>
  table {
    text-align: center;
    border-collapse: collapse;
    border: 1px solid #aaa;
    width: 400px;
  }

  tr {
    border-bottom: 1px solid #aaa;
  }

  td {
    padding: 20px;
    border-right: 1px solid #aaa;
  }

  .total {
    color: red;
  }
</style>

