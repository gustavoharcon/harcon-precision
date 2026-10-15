import Image from "next/image"
import Link from "next/link"

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-container">
                            <div className="badge-tag">
                                <span>Portfolio</span>
                            </div>
                            <h2 className="title">Precision in Practice: From Components to Complete Assemblies</h2>
                            <p className="description">Explore our diverse manufacturing capabilities. Whether you require micro-tolerance CNC machining for a single mission-critical aerospace part or full-scale fabrication and electro-mechanical assembly for medical devices, our San Diego facility delivers flawless execution.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="cards">
                            <div className="card">
                                <div className="image-container">
                                    <div className="image-box">
                                        <Image src="https://res.cloudinary.com/irwujctd/image/upload/v1792009687/placeholder-4_e9ktra.jpg" alt="" className="card-img" width={300} height={200} />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="title-container">
                                        <span className="industry-tag">Medical / Biomedical</span>
                                        <h3 className="title">Project Name Here</h3>
                                    </div>
                                </div>
                                <div className="text-container">
                                    <p className="description">Medical Grade Sheet Metal Fabrication</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <div className="image-box">
                                        <Image src="https://res.cloudinary.com/irwujctd/image/upload/v1792009687/placeholder-4_e9ktra.jpg" alt="" className="card-img" width={300} height={200} />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="title-container">
                                        <span className="industry-tag">Medical / Biomedical</span>
                                        <h3 className="title">Project Name Here</h3>
                                    </div>
                                </div>
                                <div className="text-container">
                                    <p className="description">Medical Grade Sheet Metal Fabrication</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <div className="image-box">
                                        <Image src="https://res.cloudinary.com/irwujctd/image/upload/v1792009687/placeholder-4_e9ktra.jpg" alt="" className="card-img" width={300} height={200} />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="title-container">
                                        <span className="industry-tag">Medical / Biomedical</span>
                                        <h3 className="title">Project Name Here</h3>
                                    </div>
                                </div>
                                <div className="text-container">
                                    <p className="description">Medical Grade Sheet Metal Fabrication</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row buttons-row">
                    <div className="col">
                        <div className="buttons-container">
                            <Link href="/" className="btn-fourth">Request a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio