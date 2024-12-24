export function getPosts() {
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
    return new Promise (resolve => {
        setTimeout(() => {resolve(items)}, 3000);
    });
}