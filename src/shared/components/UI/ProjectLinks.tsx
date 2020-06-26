import React, {FunctionComponent} from "react";
import GithubLogo from "../Logos/GithubLogo";
import DockerLogo from "../Logos/DockerLogo";

type ProjectLinksType = {
    PrimaryLogoColor: string;
    SecondaryLogoColor: string;
    style: string;
};

const ProjectLinks: FunctionComponent<ProjectLinksType> = (props) => {
    return (
        <div className={props.style}>
            <GithubLogo LogoPrimaryColor={props.PrimaryLogoColor} />
            <DockerLogo
                LogoPrimaryColor={props.PrimaryLogoColor}
                LogoSecondaryColor={props.SecondaryLogoColor}
            />
        </div>
    );
};

export default ProjectLinks;
