import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesCard.module.css';

const categories = [
  { id: 1, name: 'General', count: 983, icon: 'https://i.ibb.co/8Bvvz0w/1-1.png' },
  { id: 2, name: 'Gynecology', count: 142, icon: 'https://i.ibb.co/h7kZqfr/1-2.png' },
  { id: 3, name: 'Beauty', count: 476, icon: 'https://i.ibb.co/6Fs7Ywj/1-5.png' },
  { id: 4, name: 'Eyes', count: 849, icon: 'https://i.ibb.co/WcChkDY/1-6.png' },
  { id: 5, name: 'Orthopedic', count: 253, icon: 'https://i.ibb.co/HY4CTmp/1-7.png' },
  { id: 6, name: 'Neurology', count: 94, icon: 'https://i.ibb.co/J27Yzzk/1-8.png' },
  { id: 7, name: 'Pediatrician', count: 84, icon: 'https://i.ibb.co/b6jDwp9/1-10.png' },
  { id: 8, name: 'Cardiology', count: 34, icon: 'https://i.ibb.co/vHZQRXz/1-11.png' },
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
