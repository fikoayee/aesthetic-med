import { PageWrapperProps } from "./PageWrapper.types"
import { StyledInnerDiv, StyledMain } from "./styles"

export const PageWrapper = ({children, backgroundName}: PageWrapperProps) => {
    return(
        <StyledMain backgroundName={backgroundName}>
            <StyledInnerDiv>{children}</StyledInnerDiv>
        </StyledMain>
    )
}