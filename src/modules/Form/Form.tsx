import { useTranslation } from 'react-i18next';
import style from './Form.module.scss';
import Contacts from './modules/Contacts/Contacts';
import FormModule from './modules/Form/Form';

const Form = () => {
  const { t } = useTranslation();

  return (
    <div className={style.form}>
      <div className='container'>
        <div className={style.form__title}>{t('form title')}</div>
        <div className={style.formBody}>
          <FormModule className={style.formBody__item} />
          <Contacts className={style.formBody__contacts} />
        </div>
      </div>
    </div>
  );
};

export default Form;
