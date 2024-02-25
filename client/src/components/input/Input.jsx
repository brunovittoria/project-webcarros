import PropTypes from 'prop-types';

const Input = ({ type, placeholder, name, register, rules, error }) => {
    return (
        <div>
            <input
                className="w-full border-2 rounded-md h-11 px-2"
                name={name}
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className='my-1 text-red-500'>{error}</p>}
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired, // Alterado para PropTypes.func
    error: PropTypes.any, // Ajuste conforme necessário
    rules: PropTypes.any
};

export default Input;
