import Link from 'next/link';
import Image from 'next/image';
import harconLogo from '@/public/images/logo/harcon-precision-logo-c-348px.png';
import { getIcon } from '@/utils/helperFunctions';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="logo-container">
                <Image
                  src={harconLogo}
                  alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'Harcon Precision Metals'}
                  width={0}
                  height={0}
                />
              </div>
              <div className="text-container">
                <p>High Precision Sheet Metal Fabrication and Machining</p>
              </div>
            </div>
            <div className="col right-col">
              <p className="top-text">We build the critical components for computers, electronics, medical, and biomedical industries. Trusted by industry leaders since 1979, our San Diego facility delivers exact tolerances and reliable production runs.</p>
              <div className="company-info">
                <div className="column">
                  <h3 className="title">Company Address</h3>
                  <div className="description">
                    <Link href="https://maps.app.goo.gl/YkrapprEuUW2u3Xf6" target="_blank">{process.env.COMPANY_ADDRESS}</Link>
                  </div>
                </div>
                <div className="column">
                  <h3 className="title">Contact Us</h3>
                  <div className="description">
                    <Link href={`mailto:${process.env.COMPANY_SALES_EMAIL}`}>{process.env.COMPANY_SALES_EMAIL}</Link>

                  </div>
                </div>
                <div className="column">
                  <h3 className="title">Social Media</h3>
                  <ul>
                    <li className="instagram">
                      <Link className="instagram" href={process.env.COMPANY_INSTAGRAM_LINK || '#'} aria-label="Instagram" target="_blank">
                        {getIcon('instagram')}
                      </Link>
                    </li>
                    <li className="linkedin">
                      <Link className="linkedin" href={process.env.COMPANY_LINKEDIN_LINK || '#'} aria-label="LinkedIn" target="_blank">
                        {getIcon('linkedin')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="terms">
                <div className="column">

                </div>
                <div className="column">

                </div>
                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
