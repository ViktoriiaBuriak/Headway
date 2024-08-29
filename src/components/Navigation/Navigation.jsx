import css from './Navigation.module.css'
import icons from '../../assets/icons/icons.svg'

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <div className={css.logo}>
        <svg width="122" height="24">
          <use href={`${icons}#icon-logo`} />
        </svg>
      </div>
      <ul className={css.navList}>
        <li className={css.navItems}>
          <svg width="20" height="20">
            <use href={`${icons}#icon-userpic`} />
          </svg>
        </li>
        <li className={css.navItems}>
          <svg width="20" height="20">
            <use href={`${icons}#icon-menu`} />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation