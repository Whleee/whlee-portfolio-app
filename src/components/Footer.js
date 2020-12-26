import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Quick links to some of my pages are here
        </p>
        <div className='input-areas'>
          {/*
          Form commented out for now
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
          */}
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Instagram</h2>
            <a
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
              href='https://www.instagram.com/whlee_/'
              rel='noopener norefferer'
              target='_blank'
            >
              <i class='fab fa-instagram' />
            </a>
          </div>
          <div class='footer-link-items'>
            <h2>LinkedIn</h2>
            <a
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/lee-wei-heng-60b61717b/'
              rel='noopener norefferer'
              target='_blank'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>FaceBook</h2>
            <a
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              href='https://www.facebook.com/lee.w.heng.1'
              rel='noopener norefferer'
              target='_blank'
            >
              <i class='fab fa-facebook-f' />
            </a>
          </div>
          <div class='footer-link-items'>
            <h2>GitHub</h2>
            <a
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
              href='https://github.com/Whleee'
              rel='noopener norefferer'
              target='_blank'
            >
              <i class='fab fa-github' />
            </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Whleee
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Done during 2020 Winter Break</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;