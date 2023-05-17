const Simpson = ({simpson}) => {
    const {id, name, surname, age, info, photo} = simpson;
    return (
        <div>
            <div>id: {id}</div>
            <h2>name: {name}</h2>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <p>{info}</p>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};