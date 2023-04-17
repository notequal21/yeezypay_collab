import style from './Button.module.scss';

interface IButton {
  children: any;
  onClick?: () => void;
  className?: string;
  fill?: boolean;
  href?: string;
}

const Button = ({ onClick, href, fill, className, children }: IButton) => {
  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        onClick={onClick}
        className={`${style.btn} ${fill && style.btn_fill} ${className}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${style.btn} ${fill && style.btn_fill} ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
