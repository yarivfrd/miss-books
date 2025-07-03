
const { NavLink } = ReactRouterDOM;

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="info">
        <h2 className="brand-name">Miss Books</h2>
        <div className="subtitle">Uncover your next great read.</div>
      </div>
      <div className="links">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about-us'}>About</NavLink>
        <NavLink to={'/Book'}>Books</NavLink>
      </div>
      <div className="copyright">Copyright © Miss Books | All rights reserved.</div>
    </footer>
  )
}
