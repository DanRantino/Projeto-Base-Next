import styled, { css } from 'styled-components'

export const Div = styled.div`
  ${({ color }) => css`
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    span {
      color: ${color};
    }
  `}
`
