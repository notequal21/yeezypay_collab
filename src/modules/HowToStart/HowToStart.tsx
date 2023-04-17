import style from './HowToStart.module.scss';

import Button from '../../components/Button/Button';
// img imports
import PlaneSvg from '../../components/Header/assets/img/planeSvg';
import bg from '../../assets/img/getStarted/bg-right.svg';
import bgTable from '../../assets/img/getStarted/bg-right-tablet.svg';
import bgMobile from '../../assets/img/getStarted/bg-right-mobile.svg';
import { useTranslation } from 'react-i18next';

const HowToStart = () => {
  const { t } = useTranslation();

  return (
    <div className={`${style.getstarted} ${style.contactus}`}>
      <div className='container'>
        <div className={style.getstartedBody}>
          <div className={style.getstartedBody__bg}>
            <div className={`${style.getstartedBody__bgItem} ${style.right}`}>
              <img src={bg} alt='' />
              <img className={style._tablet} src={bgTable} alt='' />
              <img className={style._mobile} src={bgMobile} alt='' />
            </div>
          </div>
          <div className={style.getstarted__title}>
            {t('how to start title')}
          </div>
          <div className={style.getstarted__subtitle}>
            {t('how to start subtitle')}
          </div>
          <Button
            href='https://t.me/yeezypay'
            className={style.getstarted__btn}
          >
            {PlaneSvg}
            YeezyPay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
