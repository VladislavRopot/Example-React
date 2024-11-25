function Post(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h5>{props.subTitle}</h5>

            <div>
                <p>{props.description}</p>
                <img width={40} src={props.image} alt="" />
                
            </div>
            <footer>{props.footerDescription}</footer>
        </div>
    );
}

export default Post;