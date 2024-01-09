import { MdFileDownload } from 'react-icons/md';
import './ResumeDownload.scss';

const ResumeDownload: React.FC = () => {
    return (
        <section className='experiences__resume'>
            <p className='experiences__resume__text'>
                My formal resume is available here.
            </p>

            <a
                href='https://drive.google.com/file/d/1LAIvfkR5SvGLDAgV_MMhfZqtswUchW5o/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
            >
                <div className='experiences__resume__btn'>
                    <span className='btn'>
                        <MdFileDownload />
                        RESUME
                    </span>
                </div>
            </a>
        </section>
    );
};

export default ResumeDownload;
