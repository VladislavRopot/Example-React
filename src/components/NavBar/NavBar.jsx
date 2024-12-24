import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import classes from './navbar.module.css';

function NavBar(props) {

    const logout = () => {
        console.log('Apeleaza acel API cand se face logout');
        props.setUser(null);
    };

    return (
        <nav className={classes.navbar}>
            <WelcomeMessage user={props.user}/>
            <ul>
                <li>Posts</li>
                <li>Articles</li>
            </ul>
            <button onClick={() => logout()}>Logout</button>
        </nav>
    );
}
export default NavBar;
