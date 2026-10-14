import Image from "next/image"

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
                                    <Image src="https://res.cloudinary.com/irwujctd/image/upload/v1792009687/placeholder-4_e9ktra.jpg" alt="" className="card-img" width={300} height={200} />
                                </div>
                                <div className="text-container">
                                    <h3 className="title">Project Name Here</h3>
                                    <p className="description">Medical Grade Sheet Metal Fabrication</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio