import Image from "next/image"
import Link from "next/link"

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="row">
                    <div className="col left-side-col">
                        <div className="row-1">
                            <div className="col left-side-col">
                                <div className="text-container">
                                    <div className="badge-tag">
                                        <span>Why Choose Harcon Precision Metals?</span>
                                    </div>
                                    <h2>Precision, Quality, and Experience Since 1969</h2>
                                    <ul>
                                        <li><strong>Over 50 Years of Expertise:</strong> A solid reputation for quality in the sheet metal fabrication industry.</li>
                                        <li><strong>Advanced Technology:</strong> State-of-the-art equipment and CAD/CAM systems directly linked to our machinery.</li>
                                        <li><strong>In-House Manufacturing:</strong> Extensive capabilities built on a foundation of talent and equipment, utilizing tools like SolidWorks and AMADA software.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col right-side-col">
                                <div className="text-box">
                                    <h3>We are committed to strengthening the broader community.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="col left-side-col">
                                <Image unoptimized src="https://res.cloudinary.com/irwujctd/image/upload/v1791920860/pexels-dilankusanc-39067318_pyx1zc.jpg" alt="" width={0} height={0} />
                            </div>
                            <div className="col right-side-col">
                                <Image unoptimized src="https://res.cloudinary.com/irwujctd/image/upload/v1791920860/pexels-dilankusanc-39067318_pyx1zc.jpg" alt="" width={0} height={0} />
                            </div>
                        </div>
                    </div>
                    <div className="col right-side-col">
                        <Image unoptimized src="https://res.cloudinary.com/irwujctd/image/upload/v1791920860/pexels-dilankusanc-39067318_pyx1zc.jpg" alt="" width={0} height={0} />
                        <div className="text-box">
                            <h3>We are committed to strengthening the broader community.</h3>
                            <div className="buttons-container">
                                <Link href="#" className="btn-fifth">
                                    <span>Request a Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs