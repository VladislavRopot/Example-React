import Article from "../../../components/Article/Article";
import ArticlesHeader from "../../../components/ArticlesHeader/ArticlesHeader";
function Articles() {
    const items = [
        {
            id: 1,
            title: 'Article tile 1',
            description: 'Descriere 1',
            buttonLike: 'Like',
            buttonDetails: 'Detalii'
        },
        {
            id: 2,
            title: 'Article tile 2',
            description: 'Descriere 2',
            buttonLike: 'Like',
            buttonDetails: 'Detalii'
        },
        {
            id: 3,
            title: 'Article tile 3',
            description: 'Descriere 3',
            buttonLike: 'Like',
            buttonDetails: 'Detalii'
        },
    ];
    return (
        <section>
            <ArticlesHeader />
            {
                items.map(item => (
                    <Article key={item.id}
                        title={item.title}
                        description={item.description}
                        buttonLike={item.buttonLike}
                        buttonDetails={item.buttonDetails}
                    />
                ))
            }
        </section>
    );
}

export default Articles;