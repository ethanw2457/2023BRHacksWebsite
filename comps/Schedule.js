// Schedule.js

import styles from './Schedule.module.scss';

// Note that you do not need to add any space between the commas. 
// Format of timestamp:
//      Time,Event,Location
//  ie. 9:00AM,Check In,Cafeteria


const csvData = `Time,Event,Location
9:00 AM,Check In Opens,
9:30 AM,,
10:00 AM,Opening Ceremony,Auditorium
10:30 AM,Team Bonding During Opening Ceremony,Large Cafetria
11:15 AM,Intro Python,171
11:15 AM,Intro to C++,172
12:00 PM,Lunch - Chess Tournament Sign ups,Large Cafeteria
12:30 PM,Lunch/Chess Tournament,
1:00 PM,3D Printing Workshop,Small Cafeteria - 2hrs
1:00 PM,AI/Machine Learning Workshop,173
1:45 PM,General CS Knowledge Competition,Large Cafeteria
2:30 PM,Intro to Java,103
2:30 PM,Will AI Be Able To Model Human Emotion?,173
3:15 PM,Cybersecurity Workshop,171
3:15 PM,Intro to Data Structures and Algorithms,172
4:00 PM,Engineering Workshop,173
4:00 PM,Neuroscience Workshop,103
4:45 PM,Competitive Programming Competition,Small Cafetria
5:45 PM,Game Dev Workshop,173
5:45 PM,Women In STEM,103
6:30 PM,Data Visualization,172
6:30 PM,Web Development and Github,171
7:00 PM,Hacking Ends,
7:15 PM,Dinner,
7:15 PM,Judging Begins,
7:30 PM,Cup Stacking,
8:30 PM,Judging Finishes,
9:00 PM,Closing Ceremony,Auditorium
`;

const parseCSVData = (csvData) => {
  const lines = csvData.split('\n');
  const headers = lines[0].split(',');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');

    if (currentLine.length === headers.length) {
      const entry = {};
      for (let j = 0; j < headers.length; j++) {
        entry[headers[j].trim()] = currentLine[j].trim();
      }
      data.push(entry);
    }
  }

  return data;
};

const scheduleData = parseCSVData(csvData);

const Schedule = () => {
  return (
    <div className={styles.title} id="schedule">
      <table className={styles.table} rules="rows">
        <tbody>
          <tr>
            <th className={styles.infoBox}> Time </th>
            <th className={styles.infoBox}> Event </th>
            <th className={styles.infoBox}> Location </th>
          </tr>
          {scheduleData.map((el) => {
            return (
              <tr key={el.Event}>
                <td className={styles.time}> {el.Time} </td>
                <td className={styles.box}> {el.Event === "Hacking Starts" ? "Hacking Begins" : el.Event} </td>
                <td className={styles.box}> {el.Location} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
