import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import style from './Form.module.scss';
import { useRef, useState } from 'react';

// img imports
import checkSvg from '../../../../assets/img/icons/check.svg';

interface IForm {
  className?: string;
}

interface IFormInputs {
  name: string;
  email: string;
  phone: string | number;
  telegram: string;
  message: string;
}

const Form = ({ className }: IForm) => {
  const { t } = useTranslation();
  const [sendSuccess, setSendSuccess] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
    const form: any = formRef.current;
    let formData: any = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setSendSuccess(true);
          const timer = setTimeout(() => {
            setSendSuccess(false);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    form.reset();
  };

  return (
    <form
      ref={formRef}
      className={`${style.form} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        className={`${style.input} ${errors.name && style._err} ${
          style.form__input
        }`}
      >
        <input
          placeholder={t('form input 1 placeholder')}
          {...register('name', { required: true })}
          type='text'
        />
        {errors.name && (
          <span className={style.input__error}>
            {errors.name && 'Not correct'}
          </span>
        )}
      </label>
      <label
        className={`${style.input} ${errors.email && style._err} ${
          style.form__input
        }`}
      >
        <input
          placeholder={t('form input 2 placeholder')}
          {...register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Not correct',
            },
          })}
          type='text'
        />
        {errors.email && (
          <span className={style.input__error}>
            {errors.email && 'Not correct'}
          </span>
        )}
      </label>
      <label
        className={`${style.input} ${errors.phone && style._err} ${
          style.form__input
        }`}
      >
        <input
          {...register('phone', { required: false })}
          placeholder={t('form input 3 placeholder')}
          type='number'
        />
        {errors.phone && (
          <span className={style.input__error}>
            {errors.phone && 'Not correct'}
          </span>
        )}
      </label>
      <label
        className={`${style.input} ${errors.telegram && style._err} ${
          style.form__input
        }`}
      >
        <input
          {...register('telegram', { required: false })}
          placeholder={t('form input 4 placeholder')}
          type='text'
        />
        {errors.telegram && (
          <span className={style.input__error}>
            {errors.telegram && 'Not correct'}
          </span>
        )}
      </label>

      <textarea
        {...register('message', { required: false })}
        placeholder={t('form textarea placeholder')}
        className={`${style.textarea} ${style.form__textarea}`}
      />

      {sendSuccess ? (
        <div className={style.form__success}>
          <img src={checkSvg} alt='' /> {t('form success')}
        </div>
      ) : (
        <Button fill className={style.form__btn}>
          {t('form btn')}
        </Button>
      )}
    </form>
  );
};

export default Form;
