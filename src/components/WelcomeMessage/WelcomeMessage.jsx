import { useContext } from "react";
import { UserContext } from "../../App";

function WelcomeMessage(props) {
    const user = useContext(UserContext);

    return (
        <div>
            <h3>Welcome {user.firstName}!</h3>
            <h4>Enjoy my app!</h4>
        </div>
    );
}

export default WelcomeMessage;