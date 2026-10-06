import Link from "next/link"

const FabricationServices = () => {
    return (
        <section className="fabrication-services">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-container">
                            <div className="badge-tag">
                                <span>Services</span>
                            </div>
                            <h2 className="title">Core fabrication services built for high-tech demands</h2>
                            <p className="description">We work with steel, aluminum, and exotic alloys. Every part leaves our floor ready for the strictest applications.</p>
                        </div>
                    </div>
                </div>
                <div className="row columns-and-center-image">
                    <div className="col">
                        <div className="text-container"></div>
                        <div className="text-container"></div>
                    </div>
                    <div className="col">
                        {/* <Image src="" alt="" width={100} height={100} /> */}
                    </div>
                    <div className="col">
                        <div className="text-container"></div>
                        <div className="text-container"></div>
                    </div>
                    <div className="buttons-container">
                        <Link href="/request-quote" className="btn-primary">
                            Request a Quote
                        </Link>
                        <Link href="/services" className="btn-secondary">
                            View Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FabricationServices