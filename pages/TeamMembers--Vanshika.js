// TeamMembers.js

import { useRouter } from 'next/router';
import styles from './TeamMembers.module.scss'; // Import your SCSS styles here
import Link from 'next/link';

const TeamMembers = () => {
  const router = useRouter();
  const { name } = router.query; 

  // CLONE THIS FILE AND REPLACE IT WITH YOUR TEAM MEMBERS ---- YES FOR EACH TEAM MEMBER:
  const teamMember = {
    profilePicture: '/aa-pictures/Vanshika.jpeg/',
    name: 'Vanshika Yadav',
    role: 'Finance Leader',

    bio: 'Rising Senior at BRHS',
    bio4: 'Vanshika Yadav is a senior at Bridgewater Raritan High School with a keen interest in business and computer science. At school, she is the president of the Economics Club at her school, involved in her school’s FBLA chapter, and vice president of the CODE club. In her role as Finance Director of HackBRHS, Vanshika works with her team to contact local businesses, secure sponsorships, and manage the budget of the hackathon. Vanshika’s passion for computer science continues to drive her towards a promising future, and she looks forward to making a positive difference in the world by working with the hackathon organizing team.',


    instagramLink: 'https://www.instagram.com/vanshika.yadav06/?igshid=OGQ5ZDc2ODk2ZA%3D%3D',
    linkedinLink: 'https://www.linkedin.com/in/vanshika-yadav-7bb7b2232/',
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
            <img src="/aa-role-icons/finance.png" alt="Role Icon" className={styles.roleIcon} />


            {/* Outreach */}
            {/* <img src="/aa-role-icons/outreach.png" alt="Role Icon" className={styles.roleIcon} /> */}

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

        {/* Back to Homepage Button */}
        <div className={styles.backToHome}>
          <Link href="/"> {/* Link to the index.js page */}
            <a>Back to Homepage</a>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
