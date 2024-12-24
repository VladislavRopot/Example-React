import { useContext } from "react";
import { UserContext } from "../../App";

function ArticlesHeader() {
    const user = useContext(UserContext);

    return (
        <header>
            <h2>Header</h2>

            <p>Aceasta este descrierea din header!</p>
        </header>
    );
}

export default ArticlesHeader;