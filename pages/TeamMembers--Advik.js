// TeamMembers.js

import { useRouter } from 'next/router';
import styles from './TeamMembers.module.scss'; // Import your SCSS styles here

const TeamMembers = () => {
  const router = useRouter();
  const { name } = router.query; 

  // CLONE THIS FILE AND REPLACE IT WITH YOUR TEAM MEMBERS ---- YES FOR EACH TEAM MEMBER:
  const teamMember = {
    profilePicture: '/aa-pictures/Advik.jpeg',
    name: 'Advik Joshi',
    role: 'Outreach Team Member',

    bio: 'Rising Junior at BRHS',
    bio4: 'Hi! My name is Advik Joshi, an enthusiast in academics, athletics, and music. I enjoy many indoor and outdoor actives including: violin, video games, running, weightlifting, chess, tennis, Rubiks cube, reading, and skiing. I was born in Pennsylvania and shifted many times in my pre-teen years: before settling in New Jersey. I love seeking out new experiences and opportunities. I hope to bring great things to the BRHS Hackathon 2023 and Econ Simple!',


    instagramLink: 'https://www.instagram.com/nakulvr_7/',
    linkedinLink: '',
  };
//          MAKE SURE TO REPLACE THE ICON ---------        VVVVVVVV       ---- LOOK BELOW
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* Profile Picture */}
        <img src={teamMember.profilePicture} alt={teamMember.name} className={styles.profilePicture} />

        {/* Icon representing their role --- MAKE SURE TO DO THIS */}
        <div className={styles.roleIcon}>
            
            {/* Uncomment based on which division they belong in: */}
            
            {/* Tech and Design:  */}
            {/* <img src="/aa-role-icons/techNdesign.png" alt="Role Icon" className={styles.roleIcon} /> */}


            {/* Events and Logistics: */}
            {/* <img src="/aa-role-icons/eventsNlogistics.png" alt="Role Icon" className={styles.roleIcon} /> */}

            {/* Finance */}
            {/* <img src="/aa-role-icons/finance.png" alt="Role Icon" className={styles.roleIcon} /> */}


            {/* Outreach */}
            <img src="/aa-role-icons/outreach.png" alt="Role Icon" className={styles.roleIcon} />

            {/* Social Media */}
            {/* <img src="/aa-role-icons/socialMedia.png" alt="Role Icon" className={styles.roleIcon} /> */}

        </div>
      </div>

      <div className={styles.right}>
        {/* Name */}
        <h1 className={styles.name}>{teamMember.name}</h1>
        {/* Role */}
        <p className={styles.role}>{teamMember.role}</p>
        {/* Short Bio */}
        <p className={styles.bio}>{teamMember.bio}</p>
        <p className={styles.bio2}>{teamMember.bio2}</p>
        <p className={styles.bio3}>{teamMember.bio3}</p>
        <p className={styles.bio4}>{teamMember.bio4}</p>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          {/* Instagram Icon */}
          <a href={teamMember.instagramLink} target="_blank" rel="noopener noreferrer">
            {/* Insert Instagram icon here */}
            Instagram
          </a>

          {/* LinkedIn Icon */}
          <a href={teamMember.linkedinLink} target="_blank" rel="noopener noreferrer">
            {/* Insert LinkedIn icon here */}
            LinkedIn
          </a>

          {/* Back to Home Page */}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
