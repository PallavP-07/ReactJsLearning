// page stylesheet
import style from './ImageUploader.module.scss';

// page components
import BulkUploader from '../../components/BulkUploader';

const ImageUploader = () => {
  return (
    <section className={style.el}>
      <div className='container'>
        <a href='/'>Go back to homepage</a>
        
        <div className={style.content}>
            <BulkUploader />
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
