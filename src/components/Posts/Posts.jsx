import Post from "../Post/Post";

function Posts() {
    const items = [
        {
            id: 1,
            title: 'Postare 1',
            subTitle: 'Subtitle 1',
            description: 'Descriere 1',
            image: './logo512.png',
            footerDescription: 'Descriere footer 1',
        },
        {
            id: 2,
            title: 'Postare 2',
            subTitle: 'Subtitle 2',
            description: 'Descriere 2',
            image: './logo512.png',
            footerDescription: 'Descriere footer 2 ',
        },
        {
            id: 3,
            title: 'Postare 3',
            subTitle: 'Subtitle 3',
            description: 'Descriere 3',
            image: './logo512.png',
            footerDescription: 'Descriere footer 3 ',
        },
    ];
    
    return (
        <section>
            {
                items.map (item => (
                    <Post  key={item.id} 
                    title={item.title} 
                    description={item.description} 
                    image={item.image} 
                    footerDescription={item.footerDescription} 
                    subTitle={item.subTitle}/>
                ))
            }
        </section>
    );
       
}

export default Posts;