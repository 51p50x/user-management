import './Input.css'

const Inputs = ({label, ...rest}) =>{
    return(
        <div className='field'>
            <label>{label}</label>
            <input {...rest} /> 
        </div>
        
    )
}

export default Inputs