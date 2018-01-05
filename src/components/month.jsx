import React from 'react';
import styled from 'styled-components';

import { Icon } from './icon';

const MonthContainer = styled.div`
    display: flex;
    font-size: 0.75rem;
    color: #7d7d7d;
`;

const PreviousMonth = Icon.extend`
    &::before {
        content: '<';
    }
`;

const NextMonth = Icon.extend`
    &::after {
        content: '>';
    }
`;

export const Month = ({ children }) => (
    <MonthContainer>
        <PreviousMonth />
        {children}
        <NextMonth />
    </MonthContainer>
);
