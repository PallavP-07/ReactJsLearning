import { useNavigate } from 'react-router-dom';

// page stylesheet
import style from './HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className={style.el}>
      <div className='container'>
        <div className={style.content}>
          <div className={style.card} onClick={() => navigate('/image-uploader')}>Image Uploader</div>

          <div className={style.card} onClick={() => navigate('/image-selector')}>Image Selector</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
