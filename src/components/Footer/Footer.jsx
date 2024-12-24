import { useContext } from "react";
import { UserContext } from "../../App";

function Footer() {
    const user = useContext(UserContext);
    return (
        <footer>
            Footer
            <p>{ user ? user.firstName : "Guest"}</p>
        </footer>
    );
}

export default Footer;