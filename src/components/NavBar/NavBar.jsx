import classes from './navbar.module.css';

function NavBar() {

    let isAuthentificated = true;

    const login = () => {
        isAuthentificated = true;
    };
    const logout = () => {
        isAuthentificated = false;
    };

    return (
        <nav className={classes.navbar}>
            {isAuthentificated === true && (
                <ul>
                    <li>Posts</li>
                    <li>Articles</li>
                </ul>
            )}
            {isAuthentificated === true ? <button onClick={() => logout()}>Logout</button> : <button onClick={() => login()}>Login</button>}
        </nav>
    );
}
export default NavBar;