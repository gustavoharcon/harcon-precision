import Link from "next/link"
import Image from "next/image"

const PrecisionCapabilities = () => {
    return (
        <section className="precision-capabilities">
            <div className="container">
                <div className="row">
                    <div className="col image-side">
                        <Image src="https://res.cloudinary.com/irwujctd/image/upload/v1791409552/Worker_inspecting_digital_caliper_20261007144155_ovpg8u.jpg" alt="" width={768} height={0} />
                        <div className="text-box">
                            <p>Advanced sheet metal fabrication from prototype to production.</p>
                        </div>
                    </div>
                    <div className="col text-side">
                        <div className="text-container">
                            <div className="badge-tag">
                                <span>Core Capabilities</span>
                            </div>
                            <h2 className="title">Comprehensive fabrication services tailored to your exact specifications.</h2>
                            <p>From high-precision CNC punching and laser cutting to custom sheet metal forming, our in-house capabilities cover the entire production cycle. We provide expert welding and assembly to deliver complete, ready-to-install components. Whether you need a single prototype or a full-scale production run, our advanced CAD/CAM systems and direct machinery link ensure tight tolerances and consistent quality on every job.</p>
                        </div>
                        <div className="stats">
                            <div className="stat-item">
                                <p className="stat-number">30</p>
                                <p className="stat-label">Years in Business</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-number">66k</p>
                                <p className="stat-label">Square Feet Facility</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-number">3</p>
                                <p className="stat-label">Key Industries Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrecisionCapabilities