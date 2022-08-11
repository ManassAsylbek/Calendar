import {Badge, Calendar, DatePicker} from 'antd';
import React from 'react';

import "./Calendar.css"
import 'moment/locale/ru';
import locale from 'antd/es/calendar/locale/ru_RU';
import ContainerNewEventModal from "../../../../Components/newEventModal/ContainerNewEventModal";
import moment from "moment";

const getListData = (value) => {
    let listData;

    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event.',
                },
                {
                    type: 'success',
                    content: 'This is usual event.',
                },
            ];
            break;

        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event.',
                },
                {
                    type: 'success',
                    content: 'This is usual event.',
                },
                {
                    type: 'error',
                    content: 'This is error event.',
                },
            ];
            break;

        case 15:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event',
                },
                {
                    type: 'success',
                    content: 'This is very long usual event。。....',
                },
                {
                    type: 'error',
                    content: 'This is error event 1.',
                },
                {
                    type: 'error',
                    content: 'This is error event 2.',
                },
                {
                    type: 'error',
                    content: 'This is error event 3.',
                },
                {
                    type: 'error',
                    content: 'This is error event 4.',
                },
            ];
            break;

        default:
    }

    return listData || [];
};

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const App = (props) => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content}/>
                    </li>
                ))}
            </ul>
        );
    };

    let onDate = (date) => {
        props.onSetDate(date)
        console.log(moment('08.2022').format('YYYY-MMMM'))
    };

    return (
        <div>
            <Calendar
                className="calendar_table"
                value={props.date}
                locale={locale}
                onChange={onDate}
                onSelect={() => props.setActive(true)}
                mode="month"
                fullscreen={true}
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}/>
            {
                props.newEventActive && <ContainerNewEventModal/>
            }
        </div>
    )
};

export default App;
