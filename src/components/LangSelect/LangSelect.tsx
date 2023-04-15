import { useState } from 'react';
import style from './LangSelect.module.scss';
import i18next from '../../i18n';
import useLocalStorage from '../../hooks/use-localstorage';
import { LangList } from './LangList';

// img imports
import arrowSvg from './assets/arrowSvg';

interface ILangSelect {
  className?: string;
}

const LangSelect = ({ className }: ILangSelect) => {
  const [isOpen, setIsOpen] = useState(false);

  const [language, setLanguage] = useLocalStorage('language', 'en');

  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
    setIsOpen(false);
  };

  const selectedLang = LangList.filter(
    (item): any => item.index === language ?? item
  );

  const filteredLang = LangList.filter(
    (item): any => item.index !== language ?? item
  );

  return (
    <div
      className={`${style.select} ${isOpen && style.open} ${className}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={style.select__selected}
      >
        <span className={style.icon}>
          <img src={selectedLang[0].ico} alt='' />
        </span>
        {selectedLang[0].title}
        <span className={style.arrow}>{arrowSvg}</span>
      </div>
      <div className={style.selectDropdown}>
        {filteredLang.map((item, index): any => (
          <div
            key={index}
            onClick={() => {
              setIsOpen(false);
              handleLanguageChange(item.index);
            }}
            className={style.selectDropdown__item}
          >
            <span className={style.icon}>
              <img src={item.ico} alt='' />
            </span>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LangSelect;
