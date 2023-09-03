// Team.js

import styles from './TeamDesc.module.scss'
import TeamDesc from './TeamDesc';
import LRButton from './LRButton';
import { useEffect, useState } from 'react';
import { set } from 'immutable';
import { useRouter } from 'next/router'; // Import the useRouter hook


const tech = [
  {
    name: "Ethan Wang",
    role: "President",
    src: "../aa-pictures/default.png"
  },
  {
    name: "Vanshika Y",
    role: "Finance Team Leader",
    src: "../aa-pictures/Vanshika.jpeg"
  },
  {
    name: "Ceiron D",
    role: "Events & Logistics Team Leader",
    src: "../aa-pictures/Ceiron.png"
  },
  {
    name: "Chris Q",
    role: "Events & Logistics Team Leader",
    src: "../aa-pictures/Chris.jpeg"
  },
  {
    name: "Saanvi G",
    role: "Outreach Team Leader",
    src: "../aa-pictures/Saanvi.jpeg"
  },
  {
    name: "Kinshuk G",
    role: "Tech & Design Team Leader",
    src: "../aa-pictures/Kinshuk.jpeg"
  }
];

const finance = [

  {
    name: "Vraj S",
    role: "Finance Team",
    src: "../aa-pictures/Vraj.png"
  },
  {
    name: "Krish",
    role: "Finance Team",
    src: ""
  },
  {
    name: "Nikita K",
    role: "Finance Team",
    src: "../aa-pictures/NikitaK.jpeg"
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
    src: "../aa-pictures/Andrei.jpeg"
  },
  {
    name: "Nikita S",
    role: "Events and Logistics Team",
    src: "../aa-pictures/NikitaS.jpeg"
  },
  {
    name: "Arnav D",
    role: "Events and Logistics Team",
    src: ""
  },
  {
    name: "Aarav N",
    role: "Events and Logistics Team",
    src: "../aa-pictures/AaravN.png"
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
    src: "../aa-pictures/Joon.jpeg"
  },
  {
    name: "Soham C",
    role: "Outreach Team",
    src: "../aa-pictures/Soham.jpeg"
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
    src: "../aa-pictures/Amogh.jpeg"
  },
  {
    name: "Victoria W",
    role: "Social Media Team",
    src: ""
  },
  {
    name: "Afraz A",
    role: "Social Media Team",
    src: "../aa-pictures/Afraz.png"
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
  const router = useRouter(); // Initialize the router

  const toggleUp = () => {
    setCycle((cycle + teams.length - 1) % teams.length);
  }

  const toggleDown = () => {
    setCycle((cycle + 1) % teams.length);
  }

  const handleTeamMemberClick = (teamMemberName) => {
    if (teamMemberName === 'Kinshuk G') {
      router.push('/TeamMembers'); // Replace with your actual path to TeamMembers.js
    }
    if (teamMemberName === 'Saanvi G') {
      router.push('/TeamMembers--Saanvi'); // Replace with your actual path to TeamMembers.js
    }
    if (teamMemberName === 'Ceiron D') {
      router.push('/TeamMembers--Ceiron'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Chris Q') {
      router.push('/TeamMembers--Chris'); // Replace with your actual path to TeamMembers.js
    }


    if (teamMemberName === 'Vanshika Y') {
      router.push('/TeamMembers--Vanshika'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Andrew Z') {
      router.push('/TeamMembers--Andrew'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Amogh J') {
      router.push('/TeamMembers--Amogh'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Afraz A') {
      router.push('/TeamMembers--Afraz'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Andrei C') {
      router.push('/TeamMembers--Andrei'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Nikita S') {
      router.push('/TeamMembers--NikitaS'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Aarav N') {
      router.push('/TeamMembers--AaravN'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Vraj S') {
      router.push('/TeamMembers--Vraj'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Nikita K') {
      router.push('/TeamMembers--NikitaK'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Joon D') {
      router.push('/TeamMembers--Joon'); // Replace with your actual path to TeamMembers.js
    }

    if (teamMemberName === 'Soham C') {
      router.push('/TeamMembers--Soham'); // Replace with your actual path to TeamMembers.js
    }




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
            <div
              className={`${styles.teamMember} ${styles.pointerCursor}`} // Add the pointerCursor class
              key={el.name}
              onClick={() => handleTeamMemberClick(el.name)}
            >
              <TeamDesc name={el.name} desc={el.role} src={el.src} />
            </div>
          ))}
        </div>
        <LRButton onClick={toggleUp} right />
      </div>
    </div>
  );
}

export default Team;