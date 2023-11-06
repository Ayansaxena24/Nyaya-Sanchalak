import React from 'react'

import { ViewsDirective, ViewDirective ,Day,Week,WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../src/assets/data/data.js';

const Test = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl'>
        {/* <Header2 category="App" title="Calendar"/> */}
        <ScheduleComponent
        height={"650px"}
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}
        >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
        </ScheduleComponent>      
    </div>
  )
};

export default Test;
