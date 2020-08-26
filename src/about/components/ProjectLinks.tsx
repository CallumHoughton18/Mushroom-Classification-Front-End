import React, {FunctionComponent} from "react";
import GithubLogo from "../../shared/components/Logos/GithubLogo";
import DockerLogo from "../../shared/components/Logos/DockerLogo";

type ProjectLinksType = {
    PrimaryLogoColor: string;
    SecondaryLogoColor: string;
    style: string;
};

const ProjectLinks: FunctionComponent<ProjectLinksType> = (props) => {
    return (
        <div className={props.style}>
            <GithubLogo
                LogoPrimaryColor={props.PrimaryLogoColor}
                Link="https://github.com/CallumHoughton18/Mushroom-Classification-Front-End"
            />
            <DockerLogo
                LogoPrimaryColor={props.PrimaryLogoColor}
                LogoSecondaryColor={props.SecondaryLogoColor}
                Link="https://hub.docker.com/repository/docker/callumhoughton22/mushroom-classification-front-end"
            />
        </div>
    );
};

export default ProjectLinks;
