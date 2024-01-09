import "./homePage.css"
import Footer from "../components/Footer";
import CommunitySection from "../components/Community";
function Home() {
    return (
        <>
            <div className='top'>
                <div>
                    <img src="https://www.express.com/content/dam/express/2023/projects/web/site-experiences/03-march/0306-digital-23891-icons-lp-update/mm-l-dt.jpg" alt="img" />
                </div>
            
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
                <div className="top2container">
                    <img src="https://images.express.com/is/image/expressfashion/0020_01698312_1837_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon" alt="img" />
                    <p>
                        <span>Linen Shirts</span>
                    </p>

                    <div className='innerdiv'>
                        <span className="innerp">SHOP NOW</span>
                    </div>


                </div>
            </div>
            <div className="home-container">
  <div className="home-item">
    <img src="https://www.express.com/content/dam/express/2023/projects/web/site-experiences/02-february/0213-digital-23077-style-editor-lp/dt/tan-3col-dt.jpg" alt="Product 1" />
    <h3>New in Men's</h3>
    <p>$19.99</p>
    {/* <button>Shop Now</button> */}
  </div>
  <div className="home-item">
    <img src="https://edge.curalate.com/v1/img/v6ejzeKC6n_8e0HIv0cPIwBFFA50oDxyHME6ARC2eh8=/sc/450x450?spatialTags=0.5261205434799194:0.36403822898864746&typ=webp" alt="Product 2" />
    <h3>New in Women's</h3>
    <p>$29.99</p>
    {/* <button>Shop Now</button> */}
  </div>
  <div className="home-item">
    <img src="https://images.express.com/is/image/expressfashion/0378_80154186_3013_a001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon" alt="Product 3" />
    <h3>Stylish wears</h3>
     <p>$39.99</p>
    {/* <button>Shop Now</button> */}
  </div>
  <div className="home-item">
    <img src="https://www.express.com/content/dam/express/2023/projects/web/site-experiences/02-february/0213-digital-23077-style-editor-lp/dt/tan-3col-dt.jpg" alt="Product 1" />
    <h3>New in Men's</h3>
    <p>$19.99</p>
  </div>
  
</div>

            <CommunitySection />
            <Footer />
        </>
    )
}
export default Home;

