// page stylesheet
import style from './ImageSelector.module.scss';

// page components
import BulkSelector from '../../components/BulkSelector';

const ImageSelector = () => {
  return (
    <section className={style.el}>
      <div className='container'>
        <a href='/'>Go back to homepage</a>

        <div className={style.content}>
            <BulkSelector />
        </div>
      </div>
    </section>
  );
};

export default ImageSelector;
