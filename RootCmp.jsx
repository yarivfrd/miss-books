const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"
import { BookAdd } from "./pages/BookAdd.jsx"
import { NotFound } from "./cmps/NotFound.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { AboutTeam } from "./cmps/AboutTeam.jsx"
import { AboutGoal } from "./cmps/AboutGoal.jsx"


export function App() {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/about-us/team" element={<AboutTeam />} />
                        <Route path="/about-us/goal" element={<AboutGoal />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book/add" element={<BookAdd />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <UserMsg />
            </div>
        </Router>
    )
} 