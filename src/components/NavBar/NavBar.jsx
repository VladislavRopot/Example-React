import classes from './navbar.module.css';

function NavBar(props) {

    const logout = () => {
        console.log('Apeleaza acel API cand se face logout');
        props.setUser(null);
    };

    return (
        <nav className={classes.navbar}>
                    <h3>Welcome {props.user.firstName}!</h3>
                    <ul>
                        <li>Posts</li>
                        <li>Articles</li>
                    </ul>
            <button onClick={() => logout()}>Logout</button>
        </nav>
    );
}
export default NavBar;
