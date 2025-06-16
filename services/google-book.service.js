

export default { query }

async function query(txt) {
    // const response = await fetch('../assets/data/google-books.json');
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${encodeURI(txt)}`);
    return await response.json();
}