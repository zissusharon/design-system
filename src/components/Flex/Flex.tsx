import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexWrap,
} from 'src/components/Flex/Flex.types';
import styled, { css } from 'styled-components';

interface Props {
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  fullWidth?: boolean;
}

export const Flex = styled.div<Props>`
  ${({
    theme,
    direction = 'row',
    wrap = 'nowrap',
    justify = 'flex-start',
    align = 'stretch',
    gap = 0,
    fullWidth,
  }) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${theme.spacing(gap)};
    width: ${fullWidth ? '100%' : 'auto'};
  `}
`;
