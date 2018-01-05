import styled, { css} from 'styled-components';

const inCurrentMonth = css`
    color: ${props => props.inCurrentMonth ? '#FFF' : 'rgba(0,0,0,.2)' };
`

export const Day = styled.li`
    ${inCurrentMonth};

    display: inline-block;
    padding: 5px 0;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 60px;
        height: 60px;
    }
`;
