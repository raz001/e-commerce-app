import "./Home.css"
import Footer from "../components/Footer";
import '../components/Footer.css'
import CommunitySection from "./Community";
function Home() {
    return (
        <>
            <div className='top'>
                <div>
                    <img src="https://www.express.com/content/dam/express/2023/projects/web/site-experiences/03-march/0306-digital-23891-icons-lp-update/mm-l-dt.jpg" alt="img" />
                </div>
                {/* <div id="topmid">
                    <div>
                        <p>
                            <span>WOMEN</span>
                        </p>

                        <p>PORTOFINO SHIRTS</p>
                        <p>DRESS PANTS</p>
                        <p>BODY CONTOUR</p>
                        <p>24/7 TOPS</p>
                    </div>
                </div> */}
                <div>
                    <img src="https://www.express.com/content/dam/express/2023/projects/web/site-experiences/02-february/0130-digital-21831-icons-lp/dt/mm-r-dt.jpg" alt="img" />
                </div>

            </div>
            <div id="top2">
            <div className="top2container">
                    <img src="https://images.express.com/is/image/expressfashion/0020_01698312_1837_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon" alt="img" />
                    <p>
                        <span>Linen Shirts</span>
                    </p>

                    <div className='innerdiv'>
                        <span className="innerp">SHOP NOW</span>
                    </div>


                </div>
                <div className="top2container">
                    <img src="https://images.express.com/is/image/expressfashion/0024_02847517_2731_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon" alt="img" />
                    <p>
                        <span>Jeans</span>
                    </p>

                    <div className='innerdiv'>
                        <span className="innerp">SHOP NOW</span>
                    </div>


                </div>
                <div className="top2container">
                    <img src="https://images.express.com/is/image/expressfashion/0020_01690319_2066?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon" alt="img" />
                    <p>
                        <span>Swim + Shorts Sets</span>
                    </p>

                    <div className='innerdiv'>
                        <span className="innerp">SHOP NOW</span>
                    </div>


                </div>
            </div>
            <CommunitySection />
            <Footer />
        </>
    )
}
export default Home;

