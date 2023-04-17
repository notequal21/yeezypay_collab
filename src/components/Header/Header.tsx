import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import LangSelect from '../LangSelect/LangSelect';
import style from './Header.module.scss';

// img imports
import logo from './assets/img/logo.svg';
import PlaneSvg from './assets/img/planeSvg';

const Header = () => {
  const { t }: any = useTranslation();

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <img src={logo} alt='' />
          </div>

          <div className={style.headerBody__btns}>
            <Button
              href='https://t.me/yeezypay'
              className={style.headerBody__btnsConnect}
            >
              {PlaneSvg} {t('connect btn header')}
            </Button>
            <LangSelect className={style.headerBody__btnsLang} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
