import styled from 'styled-components';

import colors from '../utils/colors';
import { DayOfWeek } from './day-of-week';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px 0;

    ${DayOfWeek} {
        color: ${colors.primary};
        font-size: 0.875rem;
    }
`;
