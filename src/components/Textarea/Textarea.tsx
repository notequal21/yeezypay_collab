import style from './Textarea.module.scss';

interface ITextarea {
  name?: string;
  placeholder?: string;
  className?: string;
}

const Textarea = ({ name, placeholder, className }: ITextarea) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`${style.textarea} ${className}`}
    />
  );
};

export default Textarea;
