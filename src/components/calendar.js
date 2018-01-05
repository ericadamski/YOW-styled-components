import styled from 'styled-components';

import colors from '../utils/colors';

export const Calendar = styled.section`
    text-align: center;
    background: ${colors.background};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    margin: 50px;
    max-width: 220px;

    display: flex;
    flex-direction: column;
`;
