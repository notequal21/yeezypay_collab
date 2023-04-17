import { useTranslation } from 'react-i18next';
import style from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.footerBody}>
          <div className={style.footerBody__cr}>{t('footer copyrights')}</div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://yeezypay.io/agree.html'
            className={style.footerBody__link}
          >
            {t('footer agreement')}
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://yeezypay.io/privacy.html'
            className={style.footerBody__link}
          >
            {t('footer privacy')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
