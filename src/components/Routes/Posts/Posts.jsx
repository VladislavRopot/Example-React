import classes from "./posts.module.css"
import { useEffect, useState } from "react";
import Post from "../../../components/Post/Post";
import { getPosts } from "./posts.api";

function Posts() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const items = await getPosts();
            setItems(items);
        }
        fetchPosts();
    }, []);

    return (
        <section className={classes.posts}>
            {
                items.length === 0
                    ? <p>Postarile se incarca...</p>
                    : items.map(item => (
                        <Post key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            footerDescription={item.footerDescription}
                            subTitle={item.subTitle} />
                    ))
            }
        </section>
    );

}

export default Posts;