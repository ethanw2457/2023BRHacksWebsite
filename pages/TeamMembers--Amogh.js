// TeamMembers.js

import { useRouter } from 'next/router';
import styles from './TeamMembers.module.scss'; // Import your SCSS styles here
import Link from 'next/link';
import Footer from '../comps/Footer';

const TeamMembers = () => {
  const router = useRouter();
  const { name } = router.query; 

  // CLONE THIS FILE AND REPLACE IT WITH YOUR TEAM MEMBERS ---- YES FOR EACH TEAM MEMBER:
  const teamMember = {
    profilePicture: '/aa-pictures/Amogh.jpeg',
    name: 'Amogh Jambekar',
    role: 'Social Media Team Member',

    bio: 'Rising Junior at BRHS',
    bio4: 'Hi! My name is Amogh Jambekar, and I am a member of the Social Media Team. Within and outside of school, I am involved in various CS and Engineering clubs, including BR Engineers, Robotics, CyBR Hacks, Cosmology Club and CODE Club.',


    instagramLink: 'https://www.instagram.com/amoghjambekar/',
    linkedinLink: 'https://www.linkedin.com/in/amoghjambekar/',
  };
//          MAKE SURE TO REPLACE THE ICON ---------        VVVVVVVV       ---- LOOK BELOW
  return (
    <>
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
            {/* <img src="/aa-role-icons/outreach.png" alt="Role Icon" className={styles.roleIcon} /> */}

            {/* Social Media */}
            <img src="/aa-role-icons/socialMedia.png" alt="Role Icon" className={styles.roleIcon} />

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
    <Footer />
    </>
  );
};

export default TeamMembers;
