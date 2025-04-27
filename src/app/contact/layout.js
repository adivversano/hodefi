'use client'
import { Header } from "@components/Header";
// import styles from './layout.module.scss';

// <div className={styles['contact-layout']}>
export default function ContactLayout({
    children,
}) {
    return (
        <div className="contact-layout">
            <Header />
            {children}
        </div>
    );
}
