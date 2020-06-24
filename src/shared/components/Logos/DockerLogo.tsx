import React, {FunctionComponent} from "react";

const DockerLogo: FunctionComponent<LogoProps> = ({LogoPrimaryColor, LogoSecondaryColor}) => {
    return (
        <svg version="1.1" width="100%" height="100%" viewBox="0 0 512 512">
            <path
                fill={LogoPrimaryColor}
                d="M512,256c0,141.385-114.615,256-256,256S0,397.385,0,256S114.615,0,256,0
            c130.497,0,238.184,97.646,253.994,223.859c1.149,9.122,1.818,18.39,1.964,27.784C511.99,253.095,512,254.548,512,256z"
            />
            <path
                fill={LogoSecondaryColor}
                d="M511.958,251.643c-21.859,26.624-64.69,24.545-64.69,24.545
                c-26.415,113.8-185.94,171.719-296.699,143.266C39.821,391.011,55.056,258.915,55.056,258.915h324.138
                c26.749,0,28.787-8.129,28.787-8.129c-23.709-56.226,12.873-86.371,12.873-86.371c28.453,5.089,35.558,53.854,35.558,53.854
                c23.353-4.19,42.109,0.794,53.582,5.59C511.143,232.981,511.812,242.249,511.958,251.643z"
            />
            <rect x="89.6" y="207.433" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="146.641" y="207.433" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="317.743" y="207.433" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="260.712" y="207.433" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="260.712" y="101.763" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="203.671" y="207.433" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="146.641" y="154.593" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="260.712" y="154.593" fill={LogoSecondaryColor} width="45.39" height="41.32" />
            <rect x="203.671" y="154.593" fill={LogoSecondaryColor} width="45.39" height="41.32" />
        </svg>
    );
};

DockerLogo.defaultProps = {
    LogoSecondaryColor: "#F2F2F2"
};

export default DockerLogo;
