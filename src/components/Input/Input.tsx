import style from './Input.module.scss';

interface IInput {
  name?: string;
  placeholder?: string;
  className?: string;
  register?: any;
  validate?: any;
  errors?: any;
}

const Input = ({ name, validate, errors, placeholder, className }: IInput) => {
  return (
    <label className={`${style.input} ${errors && style._err} ${className}`}>
      <input {...validate} name={name} placeholder={placeholder} type='text' />
      {errors && <span className={style.input__error}>{errors}</span>}
    </label>
  );
};

export default Input;
