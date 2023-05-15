import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            info: 'Bartholomew Jojo "Bart" Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            id: 2,
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            info: 'Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons.',
            photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 3,
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            info: 'Margaret Evelyn Lenny "Maggie" Simpson[1][2] is a fictional character in the animated television series The Simpsons and a part of the Simpson family, notably the youngest member.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];
    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};