import { saveToStorage, makeId, getRandomIntInclusive, loadFromStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const
    BOOK_KEY = 'bookDB',
    books = [
        {
            "id": "OXeMG8wNskc",
            "title": "metus hendrerit",
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack",
                "Food"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
            "language": "en",
            "listPrice": {
                "amount": 109,
                "currencyCode": "EUR",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "JYOJa2NpSCq",
            "title": "morbi",
            "subtitle": "lorem euismod dictumst inceptos mi",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1978,
            "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
            "pageCount": 129,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
            "language": "sp",
            "listPrice": {
                "amount": 44,
                "currencyCode": "EUR",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "1y0Oqts35DQ",
            "title": "at viverra venenatis",
            "subtitle": "gravida libero facilisis rhoncus urna etiam",
            "authors": [
                "Dr. Seuss"
            ],
            "publishedDate": 1999,
            "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
            "pageCount": 972,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
            "language": "he",
            "listPrice": {
                "amount": 108,
                "currencyCode": "ILS",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "kSnfIJyikTP",
            "title": "dictum",
            "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
            "authors": [
                "Danielle Steel"
            ],
            "publishedDate": 1978,
            "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
            "pageCount": 303,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
            "language": "en",
            "listPrice": {
                "amount": 30,
                "currencyCode": "EUR",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "f4iuVmbuKCC",
            "title": "sem himenaeos aptent",
            "subtitle": "interdum per habitasse luctus purus est",
            "authors": [
                "Dr. Seuss"
            ],
            "publishedDate": 2011,
            "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
            "pageCount": 337,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
            "language": "sp",
            "listPrice": {
                "amount": 19,
                "currencyCode": "USD",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "U2rfZO6oBZf",
            "title": "mi ante posuere",
            "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
            "authors": [
                "Leo Tolstoy"
            ],
            "publishedDate": 1978,
            "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
            "pageCount": 748,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
            "language": "en",
            "listPrice": {
                "amount": 91,
                "currencyCode": "USD",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "xI0wrXaaAcq",
            "title": "non",
            "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
            "authors": [
                "Leo Tolstoy"
            ],
            "publishedDate": 2011,
            "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
            "pageCount": 65,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
            "language": "he",
            "listPrice": {
                "amount": 90,
                "currencyCode": "USD",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "9laHCEdSpFy",
            "title": "tristique",
            "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
            "authors": [
                "Dr. Seuss"
            ],
            "publishedDate": 1999,
            "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
            "pageCount": 299,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
            "language": "he",
            "listPrice": {
                "amount": 176,
                "currencyCode": "EUR",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "nGhVwZvGCGp",
            "title": "urna ornare gravida",
            "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
            "authors": [
                "Jin Yong"
            ],
            "publishedDate": 2011,
            "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
            "pageCount": 803,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
            "language": "sp",
            "listPrice": {
                "amount": 116,
                "currencyCode": "USD",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "Q8Q9Lsd03BD",
            "title": "consequat neque volutpat",
            "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
            "authors": [
                "Dr. Seuss"
            ],
            "publishedDate": 1978,
            "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
            "pageCount": 891,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
            "language": "en",
            "listPrice": {
                "amount": 145,
                "currencyCode": "EUR",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "bd7a76kARao",
            "title": "risus",
            "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
            "authors": [
                "Danielle Steel"
            ],
            "publishedDate": 2018,
            "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
            "pageCount": 86,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
            "language": "sp",
            "listPrice": {
                "amount": 157,
                "currencyCode": "ILS",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "qKyG0vqeO3e",
            "title": "interdum etiam vulputate",
            "subtitle": "velit sapien eget tincidunt nunc tortor",
            "authors": [
                "Danielle Steel"
            ],
            "publishedDate": 2018,
            "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
            "pageCount": 882,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
            "language": "sp",
            "listPrice": {
                "amount": 57,
                "currencyCode": "USD",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "2RvT48ZNInj",
            "title": "sagittis justo",
            "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
            "authors": [
                "Agatha Christie"
            ],
            "publishedDate": 2011,
            "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
            "pageCount": 598,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
            "language": "en",
            "listPrice": {
                "amount": 167,
                "currencyCode": "ILS",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "5z2s9pDXAYj",
            "title": "quam ullamcorper himenaeos",
            "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
            "authors": [
                "Danielle Steel"
            ],
            "publishedDate": 1999,
            "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
            "pageCount": 608,
            "categories": [
                "Computers",
                "Hack",
                "Chess"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
            "language": "he",
            "listPrice": {
                "amount": 150,
                "currencyCode": "USD",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "zBZu5cDEWha",
            "title": "quis",
            "subtitle": "suscipit turpis etiam turpis libero lobortis",
            "authors": [
                "Jin Yong"
            ],
            "publishedDate": 2011,
            "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
            "pageCount": 583,
            "categories": [
                "Computers",
                "Hack",
                "Sports"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
            "language": "en",
            "listPrice": {
                "amount": 58,
                "currencyCode": "ILS",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "aOI7tQuPZ2f",
            "title": "aliquam aliquet dapibus",
            "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
            "authors": [
                "Leo Tolstoy"
            ],
            "publishedDate": 2011,
            "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
            "pageCount": 497,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
            "language": "en",
            "listPrice": {
                "amount": 78,
                "currencyCode": "USD",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "WBooB82Uvwu",
            "title": "class",
            "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
            "authors": [
                "Danielle Steel"
            ],
            "publishedDate": 1999,
            "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
            "pageCount": 804,
            "categories": [
                "Computers",
                "Hack",
                "Lifestyle"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
            "language": "en",
            "listPrice": {
                "amount": 118,
                "currencyCode": "ILS",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "xm1z5bbZjlS",
            "title": "vitae",
            "subtitle": "class habitant at commodo semper ligula a bibendum",
            "authors": [
                "Leo Tolstoy"
            ],
            "publishedDate": 1999,
            "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
            "pageCount": 231,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
            "language": "he",
            "listPrice": {
                "amount": 60,
                "currencyCode": "EUR",
                "isOnSale": false
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "u3j6QIKLlJb",
            "title": "rhoncus vivamus",
            "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
            "authors": [
                "Agatha Christie"
            ],
            "publishedDate": 1978,
            "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
            "pageCount": 652,
            "categories": [
                "Computers",
                "Hack"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
            "language": "he",
            "listPrice": {
                "amount": 110,
                "currencyCode": "USD",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        },
        {
            "id": "vxYYYdVlEH3",
            "title": "donec mi ullamcorper",
            "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
            "authors": [
                "William Shakespeare"
            ],
            "publishedDate": 2011,
            "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
            "pageCount": 904,
            "categories": [
                "Computers",
                "Hack",
                "Food"
            ],
            "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
            "language": "sp",
            "listPrice": {
                "amount": 186,
                "currencyCode": "ILS",
                "isOnSale": true
            },
            "reviews": [
                {
                    "id": "2dpp06xa",
                    "fullName": "Yariv Fruend",
                    "rating": 3,
                    "readAt": 1749534066245
                }
            ]
        }
    ];

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
    resetBooksDb,
    addReview,
    deleteReview,
    addGoogleBook,
    getFilterFromSrcParams,
    getDashboardData
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (!books.length) {
                resetBooksDb();
                return loadFromStorage(BOOK_KEY);
            }
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.maxPrice) {
                books = books.filter(book => book.listPrice.amount <= filterBy.maxPrice)
            }
            if (filterBy.isOnSale) {
                books = books.filter(book => book.listPrice.isOnSale);
            }
            if (filterBy.maxYear) {
                books = books.filter(book => book.publishedDate <= filterBy.maxYear);
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

function getEmptyBook(title = '', desc = '', thumb = '', listPrice = {
    amount: '',
    currencyCode: '',
    isOnSale: ''
}) {
    return { title, desc, thumb, listPrice }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '', maxYear: '', isOnSale: false }
}

function getFilterFromSrcParams(searchParams) {
    const
        txt = searchParams.get('txt') || '',
        maxPrice = searchParams.get('maxPrice') || '',
        maxYear = searchParams.get('maxYear') || '',
        isOnSale = searchParams.get('isOnSale') === 'true' ? true : false;

    return {
        txt,
        maxPrice,
        maxYear,
        isOnSale
    }
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

function resetBooksDb() {
    saveToStorage(BOOK_KEY, books);
}

function addReview(bookId, review) {
    review = { ...review, id: makeId() }
    console.log('addReview()', bookId, review);
    return get(bookId).then(book => {
        book.reviews.push(review);
        return storageService.put(BOOK_KEY, book);
    })
}

function deleteReview(bookId, reviewId) {
    console.log('review to delete', reviewId, 'from', bookId);

    return get(bookId).then(book => {
        book.reviews = book.reviews.filter(review => review.id !== reviewId);
        return storageService.put(BOOK_KEY, book);
    })
}

function addGoogleBook(item) {
    const {
        title,
        description,
        authors,
        publishedDate,
        pageCount,
        categories,
        imageLinks,
        language
    } = item.volumeInfo;

    return save({
        title: title,
        subtitle: description && description.split('.')[0] || '[No subtitle available]',
        authors: authors || 'Unknown author',
        publishedDate: publishedDate && publishedDate.split('-')[0] || '[Published date unknown]',
        description: description || '[No description]',
        pageCount,
        categories: categories || [],
        language,
        thumbnail: imageLinks.thumbnail,
        listPrice: {
            amount: getRandomIntInclusive(10, 100),
            currencyCode: "USD",
            isOnSale: false
        },
        reviews: []
    });
}

function getDashboardData() {
    return query()
        .then(books => {

            const bookData = books.reduce((BookCats, book) => {
                book.categories.forEach(cat => {
                    if (!Object.keys(BookCats).includes(cat)) {
                        BookCats[cat] = 1;
                    } else {
                        BookCats[cat]++;
                    }
                });
                return BookCats;
            }, {});

            for (const [cat, count] of Object.entries(bookData)) {
                bookData[cat] = Math.floor((count / books.length) * 100);
            }

            return bookData;
        })
        .catch(err => {
            console.log('Problems getting books:', err);
        });
}