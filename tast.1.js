class Library{
    constructor(libTitle){
        this.name = libTitle
        this.books = {};
        this.totalBooks = 0;
        this.borowedBooks = 0;

    }

    // Добавляем новую книгу
    addBook(title, author, year, isbn, quantity = 1){
        const newBook = {
            title: title,
            author: author,
            yeat: yeat,
            isbn: isbn,
            totalQuantity: quantity,
            availableQuantity: quantity,
            borrowedBy:[]
        }
        const findBook = this.filter(book => book.isbn === isbn);
        if(findBook.length){
            for (var i = 0; i <= this.books.length; i++){
                if (this.books[i] == findBook[0]) {
                    this.books[i].totalQuantity += quantity;
                    this.books[i].availableQuantity += quantity;
                }
            }
        } else {
                this.books.push(newBook)
        }
            return newBook;
    }
    
    findBook(searchTerm) {
      let foundBooks = this.books.filter(book => book.title.includes(searchTerm));
      if (foundBooks.length) {
          return foundBooks;
        } else {
           foundBooks = this.books.filter(book => book.author.includes(searchTerm));
           if (foundBooks.length) {
               return foundBooks;
            } else {
                foundBooks = this.books.filter(book => book.isbn == searchTerm);
                return foundBooks;
            }
        }
    }


    getBookStat() {
     const totalQuantity = this.books.reduce((accum, val) => accum + val.totalQuantity, 0);
     const availableQuantity = this.books.reduce((accum, val) => accum + val.availableQuantity, 0);
     const statistic = {
           totalQuantity: 
           totalQuantity: totalQuantity, 
           availableQuantity: availableQuantity,
           issued: totalQuantity - availableQuantity,
           mostPopularBooks: this.books.sort((a, b) => b.borrowedBy.length - a.borrowedBy.length).slice(0, 2)
        }
        return statistic;
    }
}




    const library = new Library('Текстовая библиотека');


library.addBook("JavaScript для начинающих", "Иван Петров", 2023, "JS-001", 5);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 3);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 1);
console.log(library.books);

const foundBooks = library.findBook('JavaScript');
    console.log(foundBooks.length);