import React, { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-loading',
            className: '',
            loading: true,
            size: 's',
            effect: 'blur',
            customPosition: false,
            style: {},
            tip: (<div className="r-loading-bounce" ></div>)

        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            size: PropTypes.string,
            effect: PropTypes.string,
            customPosition: PropTypes.bool,
            loading: PropTypes.bool,
            style: PropTypes.object,
            tip: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.string
            ])
        }
    })
}