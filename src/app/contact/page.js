
import Image from 'next/image';
import styles from './page.module.scss';
import ContactForm from '@components/ContactForm';

export async function generateMetadata() {
    return {
        title: `קונטור הנדסה | צור קשר`,
    };
}

async function ContactPage() {

    return (
        <div className={styles['contact-container'] + ' inner-container'}>
            <div className={styles['contact-content']}>
                <h2 className={styles['sub-title']}></h2>
                <h1 className={styles.title}>בואו נדבר</h1>
                <ContactForm />
            </div>

            <div className={styles['bg-img-container']}>

                <Image className={styles['bg-img']} src="/assets/aviv-contact.png" fill alt="a" />
            </div>
        </div>
    )
}

export default ContactPage;