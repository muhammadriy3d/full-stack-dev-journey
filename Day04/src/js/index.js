const dayjs = require("dayjs");
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc)
dayjs.extend(timezone)

const zone = document.querySelector(".hero-timezone");
const time = document.querySelector(".hero-title");
const date = document.querySelector(".hero-description");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const getTime = () => {
  const year = dayjs().$y;
  const month = monthNames[dayjs().$M];
  const day = dayjs().$W;
  const dayName = days[day];
  const hour = dayjs().$H;
  const minute = dayjs().$m;
  const second = dayjs().$s;

  zone.innerHTML = dayjs.tz.guess()
  time.innerHTML = `${hour}:${minute}:${second}`
  date.innerHTML = `${dayName}, ${day} ${month}, ${year}`
  
};

const timer = setInterval(getTime, 1000);
