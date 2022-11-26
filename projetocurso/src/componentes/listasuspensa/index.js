import './listasuspensa.css';

const Listasuspensa = (props) => {
    return (
        <div className="listasuspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
} 

export default Listasuspensa;