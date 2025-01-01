import { PageBackgroundProps } from "./PageBackground"
import { StyledInnerDiv, StyledMain } from "./styles"

export const PageBackground = ({children, backgroundName}: PageBackgroundProps) => {
    return(
        <StyledMain backgroundName={backgroundName}>
            <StyledInnerDiv>{children}</StyledInnerDiv>
        </StyledMain>
    )
}