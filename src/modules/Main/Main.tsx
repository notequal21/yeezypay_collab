import Button from '../../components/Button/Button';
import PlaneSvg from '../../components/Header/assets/img/planeSvg';
import style from './Main.module.scss';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import { useMediaQuery } from 'usehooks-ts';
import { useTranslation } from 'react-i18next';

// img imports
import phone from '../../assets/img/main/phone.png';
import money from '../../assets/img/main/money.png';
import img from '../../assets/img/main/img.png';

const Main = () => {
  const isMobile = useMediaQuery('(max-width:991px)');
  const { t }: any = useTranslation();

  return (
    <main className={style.main}>
      <div className='container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__img}>
            {isMobile ? (
              <img src={img} alt='' />
            ) : (
              <MouseParallaxContainer
                className={style.mainBody__imgParallax}
                useWindowMouseEvents
                globalFactorX={0.1}
                globalFactorY={0.1}
              >
                <MouseParallaxChild
                  className={style.mainBody__imgItem}
                  factorX={0.3}
                  factorY={0.4}
                >
                  <img src={money} alt='' />
                </MouseParallaxChild>
                <MouseParallaxChild
                  className={style.mainBody__imgItem}
                  factorX={0.2}
                  factorY={0}
                >
                  <img src={phone} alt='' />
                </MouseParallaxChild>
              </MouseParallaxContainer>
            )}
          </div>

          <div
            className={style.mainBody__title}
            dangerouslySetInnerHTML={{ __html: t('main title') }}
          ></div>
          <div className={style.mainBody__subtitle}>{t('main subtitle')}</div>
          <div className={style.mainBody__text}>
            <p>{t('main question')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('main text') }}></p>
          </div>
          <ul className={style.mainBody__list}>
            <li>{t('main list 1')}</li>
            <li>{t('main list 2')}</li>
            <li>{t('main list 3')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('main list 4') }}></li>
          </ul>
          <Button
            href='https://t.me/yeezypay'
            fill
            className={style.mainBody__btn}
          >
            {PlaneSvg}
            {t('main btn')}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Main;
