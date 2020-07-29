import React from "react";
import TechnologiesUsed from "../about/components/TechnologiesUsed";

export function generateTechnologiesUsedSUT(): JSX.Element {
    return (
        <TechnologiesUsed
            style="testStyle"
            iconsBackground="testBg"
            iconsColor="testColor"
            iconsSecondaryColor="testSecondaryColor"
            fadeInClass="fade-in-test"
        />
    );
}
