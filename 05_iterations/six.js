//const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } )

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter( (num) => num > 5 )

// const newNum = myNum.filter( (num) => {
//     return num > 5
// } )

// const newNums = []

// myNum.forEach ( (num) => {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title: 'Book one', genre: 'fiction', publish: 1976, edition: 2004
    },
    {
        title: 'Book two', genre: 'Non-fiction', publish: 1966, edition: 2000
    },
    {
        title: 'Book three', genre: 'History', publish: 2001, edition: 2006
    },
    {
        title: 'Book four', genre: 'Science', publish: 1999, edition: 2004
    },
    {
        title: 'Book five', genre: 'fiction', publish: 1988, edition: 2010
    },
    {
        title: 'Book six', genre: 'fiction', publish: 2011, edition: 2016
    },
    {
        title: 'Book seven', genre: 'Non-fiction', publish: 1999, edition: 2004
    },
    {
        title: 'Book eight', genre: 'History', publish: 2008, edition: 2014
    },
    {
        title: 'Book nine', genre: 'Science', publish: 1999, edition: 2004
    },
    {
        title: 'Book ten', genre: 'fiction', publish: 2009, edition: 2014
    }
];

//const userBooks  = books.filter( (book) => book.publish > 2000 )

const userBooks = books.filter((book) => book.genre === 'fiction' && book.publish > 2000);
console.log(userBooks);
