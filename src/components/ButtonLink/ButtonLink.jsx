import React from "react"
import PropTypes from "prop-types"
import styles from "./ButtonLink.module.css"

function ButtonLink({ text, url, icon }) {
    return (
        <a href={url} className={styles.ButtonLink}>
            {text}
            <img src={icon} alt="i" />
        </a>
    )
}

ButtonLink.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ButtonLink
