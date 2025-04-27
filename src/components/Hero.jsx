import React from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-img">
                {/* <img src="/images/hero-image.jpg" alt="hero image" /> */}
            </div>

            <div className="hero-content inner-container">
                <h1 className="hero-title">אל תתפשר על איכות הבית שלך!</h1>
                <p className="hero-description">בדיקת דירה מקצועית שתגן על ההשקעה שלך ותבטיח ראש שקט.</p>
                <Link className="btn hero-btn" href="/contact">
                    לתיאום בדיקה <IconArrowLeft className="arrow" stroke={2} />
                </Link>
            </div>
        </div>
    )
}
