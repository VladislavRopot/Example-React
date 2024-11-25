import classes from './navbar.module.css';


function Welcome(props) {
    return <h2>Welcome {props.message}!</h2>
}
function NavBar(props) {
    //hook, hooks

    const login = () => {
        props.setIsAuthenticated(true);
    };
    const logout = () => {
        props.setIsAuthenticated(false);
    };

    return (
        <nav className={classes.navbar}>
            <Welcome message={props.isAuthentificated === true ? 'User' : 'Anonim'} />

            {props.isAuthentificated === true && (
                <ul>
                    <li>Posts</li>
                    <li>Articles</li>
                </ul>
            )}
            {props.isAuthentificated === true ? <button onClick={() => logout()}>Logout</button> : <button onClick={() => login()}>Login</button>}

        </nav>
    );
}
export default NavBar;