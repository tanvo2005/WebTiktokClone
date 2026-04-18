import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="titolk" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search account and Video" spellCheck={false} className={cx('search-input')} />
                    <button className={cx('clear')}>
                        {/* close */ console.log(faCircleXmark)}

                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* loading */}

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>action</div>
            </div>
        </header>
    );
}

export default Header;
