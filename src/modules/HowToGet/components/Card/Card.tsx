import style from './Card.module.scss';

// img imports
import arrowSvg from '../../../../assets/img/how/arrow.svg';
import { useTranslation } from 'react-i18next';

interface ICard {
  num: number;
  ico: string;
  title: string;
  subtitle?: string;
  text?: string;
  list?: string[];
  className?: string;
}

const Card = ({ ico, title, subtitle, list, text, num, className }: ICard) => {
  const { t } = useTranslation();

  return (
    <div className={`${style.card} ${className}`}>
      <div className={`${style.card__wrapper}`}>
        <div className={style.card__arrow}>
          <img src={arrowSvg} alt='' />
        </div>
        <div className={style.cardTop}>
          <div className={style.cardTop__ico}>
            <img src={ico} alt='' />
          </div>
          <div className={style.cardTop__title}>{t(title)}</div>
          <div className={style.cardTop__num}>{num}</div>
        </div>
        <div className={style.cardBody}>
          {subtitle && (
            <div className={style.cardBody__subtitle}>{t(subtitle)}</div>
          )}
          {list && (
            <ul className={style.cardBody__list}>
              {list.map((item, index) => (
                <li key={index}>{t(item)}</li>
              ))}
            </ul>
          )}
          {text && <div className={style.cardBody__text}>{t(text)}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
