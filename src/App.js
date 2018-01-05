import React from 'react';
import { injectGlobal } from 'styled-components';

import { Calendar } from './components/calendar';
import { Header } from './components/header';
import { DayOfWeek } from './components/day-of-week';
import { Month } from './components/month';
import { Days } from './components/days';
import { Day } from './components/day';

injectGlobal`
    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      background: #EBEBEB;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
`;

const days = [
    { day: 30, month: 11 },
    { day: 31, month: 11 },
    { day: 1, month: 0 },
    { day: 2, month: 0 },
    { day: 3, month: 0 },
    { day: 4, month: 0 },
    { day: 5, month: 0 },
    { day: 6, month: 0 },
    { day: 7, month: 0 },
    { day: 8, month: 0 },
    { day: 9, month: 0 },
    { day: 10, month: 0 },
    { day: 11, month: 0 },
    { day: 12, month: 0 },
    { day: 13, month: 0 },
    { day: 14, month: 0 },
    { day: 15, month: 0 },
    { day: 16, month: 0 },
    { day: 17, month: 0 },
    { day: 18, month: 0 },
    { day: 19, month: 0 },
    { day: 20, month: 0 },
    { day: 21, month: 0 },
    { day: 22, month: 0 },
    { day: 23, month: 0 },
    { day: 24, month: 0 },
    { day: 25, month: 0 },
    { day: 26, month: 0 },
    { day: 27, month: 0 },
    { day: 28, month: 0 },
    { day: 29, month: 0 },
    { day: 30, month: 0 },
    { day: 31, month: 0 },
    { day: 1, month: 1 },
    { day: 2, month: 1 },
    { day: 3, month: 1 },
];

const currentMonth = 0;

const App = () => (
    <Calendar>
        <Header>
            <DayOfWeek>Saturday</DayOfWeek>
            <Month>January</Month>
        </Header>
        <Days>
            {days.map(({ day, month }) => (
                <Day
                    key={`${day}-${month}`}
                    inCurrentMonth={month === currentMonth}
                >
                    {day}
                </Day>
            ))}
        </Days>
    </Calendar>
);

export default App;
