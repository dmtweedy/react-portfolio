import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/dmtweedy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Damon Tweedy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;