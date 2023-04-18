import style from './Contacts.module.scss';

// img imports
import mailSvg from '../../../../assets/img/icons/mail.svg';
import tgSvg from '../../../../assets/img/icons/tg.svg';
import { useTranslation } from 'react-i18next';

interface IContacts {
  className?: string;
}

const Contacts = ({ className }: IContacts) => {
  const { t } = useTranslation();

  return (
    <div className={`${style.contacts} ${className}`}>
      <div className={style.contacts__title}>{t('contacts title')}</div>
      <div className={style.contactsBody}>
        <div className={style.contactsBody__item}>
          <span>{t('contacts support')}</span>
          <a href='mailto:support@yeezypay.io'>
            <img src={mailSvg} alt='' /> support@yeezypay.io
          </a>
        </div>
        <div className={style.contactsBody__item}>
          <span>{t('contacts collabaration')}</span>
          <a href='mailto:biz@yeezypay.io'>
            <img src={mailSvg} alt='' /> biz@yeezypay.io
          </a>
        </div>
        <div className={style.contactsBody__item}>
          <span>{t('contacts telegram')}</span>
          <a target='_blank' rel='noreferrer' href='https://t.me/yeezypay'>
            <img src={tgSvg} alt='' /> @yeezypay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
