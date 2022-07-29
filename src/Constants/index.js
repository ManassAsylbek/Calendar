import moment from "moment";

export const marker=[
    {id:1, color:"#E37DAC", name:"Личный"},
    {id:2, color:"#80DEA0", name:"Рабочий"},
    {id:3, color:"#8A75FA", name:"Мероприятия"},
    {id:4, color:"#FFD480", name:"Проекты"}
]

export const times=[
    {id:1,  time:"09:00" },
    {id:2,  time:"10:00" },
    {id:3,  time:"11:00" },
    {id:4,  time:"12:00" },
    {id:5,  time:"13:00" },
    {id:6,  time:"14:00" },
    {id:7,  time:"15:00" },
    {id:8,  time:"16:00" },
    {id:9,  time:"17:00" },
    {id:10, time:"18:00" }
]
export const day = {
    time:0
}


export const dayDate=(value)=>{

    console.log((moment(value).format('DD dddd YYYY')))
    day.time=moment(value).format('DD dddd YYYY')
    console.log(day.time)
}