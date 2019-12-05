const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 100.00,
        count: 1
      },
      {
        id: 2,
        name: '《JavaScript编程》',
        date: '2002-2',
        price: 50.00,
        count: 1
      },
      {
        id: 3,
        name: '《Linux系统》',
        date: '2106-10',
        price: 70,
        count: 1
      },
      {
        id: 4,
        name: '《HTML》',
        date: '2006-2',
        price: 120,
        count: 1
      }
    ]
  },
  computed: {
    //1、for循环
    // totalPrices() {
    //   let totalPrices = 0
    //   for (let i = 0; i < this.books.length; i++) {
    //     totalPrices += this.books[i].price * this.books[i].count
    //   }
    //   return totalPrices
    // }

    //2、for in
    // totalPrices() {
    //   let totalPrices = 0
    //   for (let i in this.books) {
    //     totalPrices += this.books[i].price * this.books[i].count
    //   }
    //   return totalPrices
    // }

    // 3、for of
    // totalPrices() {
    //   let totalPrices = 0
    //   for (let item of this.books) {
    //     console.log(item)
    //     totalPrices += item.price * item.count
    //   }
    //   return totalPrices
    // }

    // 4、reduce
    totalPrices() {
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)
    }
  },
  methods: {
    reduceCount(index) {
      this.books[index].count--
    },
    addCount(index) {
      this.books[index].count++
    },
    remove(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})