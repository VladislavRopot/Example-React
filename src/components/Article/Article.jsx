function Article(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            
            <p>{props.description}</p>

            <footer>
                <button>{props.buttonDetails}</button>
                <button>{props.buttonLike}</button>
            </footer>
        
        </div>
    );
}

export default Article;