import React from "react";
import ScrollQuotes from "./ScrollQuotes";
const races = [
  {
    year: "2021",
    race: "Natchez Trace 444",
    time: "26:08",
    result: "2nd Place",
  },
  {
    year: "2020",
    race: "Across Florida 200",
    time: "70:21",
    result: "1st Place",
  },
  {
    year: "2020",
    race: "Moab 240",
    time: "62:21:29",
    result: "2nd Place",
  },
  {
    year: "2019",
    race: "Leadville 100",
    time: "22:55:44",
    result: "",
  },
  {
    year: "2016",
    race: "Strolling Jim 40 Miler",
    time: "04:54:15",
    result: "1st place",
  },
  {
    year: "2016",
    race: "Infinitus 88k",
    time: "12:01:00",
    result: "1st place",
  },
  {
    year: "2016",
    race: "Zane Grey 50 Miler",
    time: "11:23:29",
    result: "13th place",
  },
  {
    year: "2016",
    race: "Music City Ultra 50k",
    time: "04:30:43",
    result: "1st place",
  },
  {
    year: "2015",
    race: "Hellgate 100k",
    time: "11:56:02",
    result: "5th place",
  },
  {
    year: "2013",
    race: "Guinness World Record for 24 Hour Pullup",
    time: "4,030 in 17 hrs",
    result: "World Record",
  },
  {
    year: "2009",
    race: "HURT 100 Miler Endurance Run",
    time: "25:28:01",
    result: "4th place",
  },
  {
    year: "2008",
    race: "Kona Ironman World Championship",
    time: "11:24:01",
    result: "",
  },
  {
    year: "2008",
    race: "Ultra-Trail Du Mont-Blanc 103 mile",
    time: "30:19:00",
    result: "",
  },
  {
    year: "2008",
    race: "McNaughton 150 Miler",
    time: "",
    result: "1st place",
  },
  {
    year: "2008",
    race: "MiWok 100k Race",
    time: "09:55:16",
    result: "",
  },
  {
    year: "2007",
    race: "The Grapevine 48 Hour National Championships",
    time: "39:00:00",
    result: "205 miles",
  }, 
];

const Achievements = () => {
  return (
    <div className="bg-black py-20 px-6 md:px-24">
     
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-300">
        David Goggins' Athletic Achievements Timeline
      </h1>
      <div className="relative border-l-4 border-yellow-300 pl-8 space-y-10">
        {races.map((race, index) => (
          <div
            key={index}
            className="relative ml-4 bg-black border-yellow shadow-md p-4 md:p-3 rounded-md w-full max-w-[170px]"

          >
            <span className="absolute left-[-32px] top-1 w-6 h-6 bg-black-500 rounded-full border-4 border-yellow-300"></span>
            <h2 className="text-xl font-semibold text-yellow-300">{race.year}</h2>
            <p className="mt-1 text-lg font-bold text-yellow-300">{race.race}</p>
            <p className="text-yellow-300">
              Time: <span className="font-medium">{race.time || "N/A"}</span>
            </p>
            <p className="text-yellow-300">
              Result: <span className="font-medium">{race.result || "N/A"}</span>
            </p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Achievements;

