import { DatePicker, Space } from 'antd';
import  "./MiniCalendar.modul.css"
import React from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';



const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const MiniCalendar = () => {
    return (
        <Space direction="vertical" type={locale}>
            <DatePicker

                locale={locale}
                open={true}
                onChange={onChange} />
        </Space>
    );
};

export default MiniCalendar;
