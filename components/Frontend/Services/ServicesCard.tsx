import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesCard.module.css'; 

const categories = [
    { id: 1, name: 'General', count: 983, icon: 'https://i.ibb.co/LzQtSDH/doctor-icon.png' },
    { id: 2, name: 'Gynecology', count: 142, icon: 'https://i.ibb.co/xyz456/ladies-bag.png' },
    { id: 3, name: 'Beauty', count: 476, icon: 'https://i.ibb.co/def789/shoes.png' },
    { id: 4, name: 'Eyes', count: 849, icon: 'https://i.ibb.co/ghi012/ornaments.png' },
    { id: 5, name: 'Orthopedic', count: 253, icon: 'https://i.ibb.co/jkl345/watches.png' },
    { id: 6, name: 'Neurology', count: 94, icon: 'https://i.ibb.co/mno678/smartphones.png' },
    { id: 7, name: 'Pediatrician', count: 84, icon: 'https://i.ibb.co/mno678/smartphones.png' },
    { id: 8, name: 'Cardiology', count: 34, icon: 'https://i.ibb.co/mno678/smartphones.png' },
  ];
  

function ServicesCard() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link href={`/category/${category.name.toLowerCase()}`} key={category.id} className={styles.card}>
            <div className={styles.cardContent}>
              <Image src={category.icon} alt={category.name} width={50} height={50} />
              <h3>{category.name}</h3>
              <p>{category.count} Available Doctors</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
