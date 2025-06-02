import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const
    BOOK_KEY = 'bookDB',
    demoBookData = [
        {
            title: 'Harry Potter and the Philosopher\'s Stone',
            desc:'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
            thumb: 'https://m.media-amazon.com/images/I/91A6EgLH+2L._AC_UF300,300_QL80_.jpg',
            listPrice: {
                amount: '17.99',
                currencyCode: 'USD',
                isOnSale: 'true'
            }
        },
        {
            title: 'Autocorrect: Stories',
            desc:'These stories speak to our current moment in time: the uncertainty and fragility—full of misunderstandings and miscommunications—while looking for reasons and the strength to find hope.',
            thumb: 'https://m.media-amazon.com/images/I/71N6uWaR7KL._SL300_.jpg',
            listPrice: {
                amount: 13.99,
                currencyCode: 'EUR',
                isOnSale: 'false'
            }
        },
        {
            title: 'Nexus: A Brief History of Information Networks from the Stone Age to AI',
            desc:'For the last 100,000 years, we Sapiens have accumulated enormous power. But despite all our discoveries, inventions, and conquests, we now find ourselves in an existential crisis. The world is on the verge of ecological collapse. Misinformation abounds. And we are rushing headlong into the age of AI—a new information network that threatens to annihilate us. For all that we have accomplished, why are we so self-destructive?',
            thumb: 'https://m.media-amazon.com/images/I/71l4l6o2drL._SL300_.jpg',
            listPrice: {
                amount: 79.99,
                currencyCode: 'ILS',
                isOnSale: 'false'
            }
        },
    ];
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.maxPrice) {
                books = books.filter(book => book.listPrice.amount <= filterBy.maxPrice)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId).then(_setNextPrevBookId)
}

function remove(bookId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', desc = '', thumb = '', listPrice = '') {
    return { title, desc, thumb, listPrice }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

function _setNextPrevBookId(book) {
    return query().then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
        const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
        book.nextBookId = nextBook.id
        book.prevBookId = prevBook.id
        return book
    })
}

// function _createBooks() {
//     let books = loadFromStorage(BOOK_KEY)
//     if (!books || !books.length) {
//         books = demoBookData.map(({
//             title,
//             desc,
//             thumb,
//             listPrice
//         }) => _createBook(title, desc, thumb, listPrice));
//         saveToStorage(BOOK_KEY, books)
//     }
// }

function _createBook(title, desc, thumb, listPrice) {
    const book = getEmptyBook(title, desc, thumb, listPrice)
    book.id = makeId()
    return book
}

function _createBooks() {
    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
    const books = []
    for (let i = 0; i < 20; i++) {
        const book = {
            id: utilService.makeId(),
            title: utilService.makeLorem(2),
            subtitle: utilService.makeLorem(4),
            authors: [
                utilService.makeLorem(1)
            ],
            publishedDate: utilService.getRandomIntInclusive(1950, 2024),
            description: utilService.makeLorem(20),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
            thumbnail: `http://coding-academy.org/books-photos/${i+1}.jpg`,
            language: "en",
            listPrice: {
                amount: utilService.getRandomIntInclusive(80, 500),
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
        books.push(book)
    }
    // console.log('books', books)
    saveToStorage(BOOK_KEY, books);
}