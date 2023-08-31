// Team.js

import styles from './TeamDesc.module.scss'
import TeamDesc from './TeamDesc';
import LRButton from './LRButton';
import { useEffect, useState } from 'react';
import { set } from 'immutable';

const tech = [
  {
    name: "Ethan Wang",
    role: "President",
    src: ""
  },
  {
    name: "Vanshika Y",
    role: "Finance Team Leader",
    src: ""
  },
  {
    name: "Ceiron D",
    role: "Events & Logistics Team Leader",
    src: ""
  },
  {
    name: "Chris Q",
    role: "Events & Logistics Team Leader",
    src: ""
  },
  {
    name: "Saanvi G",
    role: "Outreach Team Leader",
    src: ""
  },
  {
    name: "Kinshuk G",
    role: "Tech & Design Team Leader",
    src: ""
  }
];

const finance = [

  {
    name: "Vraj S",
    role: "Finance Team",
    src: ""
  },
  {
    name: "Krish",
    role: "Finance Team",
    src: ""
  },
  {
    name: "Nikita K",
    role: "Finance Team",
    src: ""
  },
  {
    name: "Ridhi P",
    role: "Finance Team",
    src: ""
  },
  {
    name: "Divyansha N",
    role: "Finance Team",
    src: ""
  },
  {
    name: "Shreya G",
    role: "Finance Team",
    src: ""
  }
];

const events_logistics = [

  {
    name: "Andrei C",
    role: "Events and Logistics Team",
    src: ""
  },
  {
    name: "Nikita S",
    role: "Events and Logistics Team",
    src: ""
  },
  {
    name: "Arnav D",
    role: "Events and Logistics Team",
    src: ""
  },
  {
    name: "Aarav N",
    role: "Events and Logistics Team",
    src: ""
  },
  {
    name: "Pranav S",
    role: "Events and Logistics Team",
    src: ""
  }
];

const outreach = [

  {
    name: "Joon D",
    role: "Outreach Team",
    src: ""
  },
  {
    name: "Soham C",
    role: "Outreach Team",
    src: ""
  },
  {
    name: "Nakul R",
    role: "Outreach Team",
    src: ""
  },
  {
    name: "Advik J",
    role: "Outreach Team",
    src: ""
  },
  {
    name: "Kevin A",
    role: "Outreach Team",
    src: ""
  }
];

const social_media = [

  {
    name: "Amogh J",
    role: "Social Media Team",
    src: ""
  },
  {
    name: "Victoria W",
    role: "Social Media Team",
    src: ""
  },
  {
    name: "Afraz A",
    role: "Social Media Team",
    src: ""
  },
  {
    name: "Harshini Y",
    role: "Social Media Team",
    src: ""
  }
];

const tech_and_design = [

  {
    name: "Alan J",
    role: "Tech and Design Team",
    src: ""
  },
  {
    name: "Luvya M",
    role: "Tech and Design Team",
    src: ""
  },
  {
    name: "Andrew Z",
    role: "Tech and Design Team",
    src: ""
  }
];

const teams = [
  tech,
  outreach,
  finance,
  events_logistics,
  social_media,
  tech_and_design
];

const Team = () => {

  const [cycle, setCycle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const toggleUp = () => {
    setCycle((cycle + teams.length - 1) % teams.length);
  }

  const toggleDown = () => {
    setCycle((cycle + 1) % teams.length);
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [])

  return (
    <div className={styles.teamTitle} id="team">
      <h1 className={styles.titleText}>Team</h1>
      <div className={styles.container}>
        <LRButton onClick={toggleDown} left />
        <div className={styles.teamWrapperGrid}>
          {teams[cycle].map((el) => (
            <TeamDesc name={el.name} desc={el.role} src={el.src} key={el.name} />
          ))}
        </div>
        <LRButton onClick={toggleUp} right />
      </div>
    </div>
  );
}

export default Team;