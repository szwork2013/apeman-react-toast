/**
 * apeman react package for toast components.
 * @module apeman-react-toast
 */

"use strict";

module.exports = {
    /**
     * @name ApErrorToast
     */
    get ApErrorToast() { return require('./ap_error_toast'); },
    /**
     * @name ApInfoToast
     */
    get ApInfoToast() { return require('./ap_info_toast'); },
    /**
     * @name ApToastGroup
     */
    get ApToastGroup() { return require('./ap_toast_group'); },
    /**
     * @name ApToastStyle
     */
    get ApToastStyle() { return require('./ap_toast_style'); },
    /**
     * @name ApToast
     */
    get ApToast() { return require('./ap_toast'); },
    /**
     * @name ApWarnToast
     */
    get ApWarnToast() { return require('./ap_warn_toast'); }
};