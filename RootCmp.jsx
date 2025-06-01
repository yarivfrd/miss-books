const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"
import { NotFound } from "./cmps/NotFound.jsx"


export function App() {

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        {/* <Route path="/book" element={<BookIndex />} /> */}
                        {/* <Route path="/book/edit" element={<BookEdit />} /> */}
                        {/* <Route path="/book/:bookId" element={<BookDetails />} /> */}
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </main>
            </section>
        </Router>
    )
} 