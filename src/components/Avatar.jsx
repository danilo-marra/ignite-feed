import styles from './Avatar.module.css';
// import PropTypes from 'prop-types';

// Avatar.propTypes = {
//   hasBorder: PropTypes.bool,
//   src: PropTypes.string.isRequired,
// };

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
