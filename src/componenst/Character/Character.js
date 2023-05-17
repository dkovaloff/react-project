const Character = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div>
            <div> id:{id}</div>
            <h2>name:{name}</h2>
            <div> status:{status}</div>
            <div> species:{species}</div>
            <div> gender:{gender}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};