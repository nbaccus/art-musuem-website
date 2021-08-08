import React, { useEffect, useState } from 'react';
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from '../imgs/main-image.jpg';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



function Home() {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        console.log("is loading before is ",isLoading);
        setTimeout(()=> {
            getCarouselData();
            
        },5000)
        // getCarouselData();
        
    }, []);

    const getCarouselData = async () => {
        
        const test = 

        await Promise.all([fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/435844'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437821'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/467594')]);

       try { 
            
           console.log(test);
            for (let i =0 ; i<test.length; i++)
            {
                test[i] = await test[i].json();
            }
            console.log("test  is :" + test[0].objectID);
            setDetails(test);
            setIsLoading(false);
            console.log("is loading right after fetch is ",isLoading);
            console.log(details);
            } 
        catch(error) {
            setIsLoading(false);
            console.log(error)
        }
        finally {
            console.log("is loading after is ",isLoading);
        }
    
        };
    return (
        <div className="Home">
            <title>Home</title>
            <Swiper className = "swiper-container"
                slidesPerView={1}
                navigation
                pagination={{  
                "dynamicBullets": true,
                clickable: true }}>
                 
                        {details.map ((item, index)=> (
                        <SwiperSlide>
                        {isLoading ? <div><h1>Loading...</h1></div> : 
                        <div className="Swiper-image" style={ {backgroundImage: 
                        `linear-gradient(to right, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0) 60%),url(${item.primaryImage})`,  
                        backgroundSize: '2000px', backgroundRepeat: 'no-repeat',
                        backgroundPositionX: "center , center",
                        backgroundPositionY: index == 0 ? "center, 15%": "center, 25%" }}>
                            
                            <div className="Banner-wrapper">
                                <div className="Banner-content">
                                <h1>Explore masterpieces</h1>
                                <h2>{item.title}</h2>
                                <h2>{item.artistDisplayName}, {item.objectDate}</h2> 
                                <Link to="/contact-us">
                                <button id="Contactus">Contact us</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                        }
                        </SwiperSlide>  
                                         
                        ))}         
                                        
            </Swiper>
            <div className = "Home-content1">
            <img src={Image} className="Image" alt="office"/>
                <div className="Text-content">
                    <h2>Morbi eu elementum magna vel posuere. </h2>
                    <p>Praesent rutrum accumsan nulla, nec consectetur nibh convallis sit amet. Aliquam aliquet massa in bibendum consequat. Nulla eu congue sapien, et dapibus felis. Etiam quis urna arcu. Nulla viverra eget libero at scelerisque. Duis semper, est in rutrum porta, dolor orci porta magna, non dapibus dui ante non augue. Vestibulum at viverra dolor, eu fringilla massa. Morbi at dolor sodales, finibus libero in, pulvinar lacus. Pellentesque volutpat augue massa, id faucibus tortor imperdiet ornare. Vestibulum vestibulum velit vel auctor placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis pellentesque hendrerit. </p>
                    <ul className="home-list">
                        <li> Fusce laoreet urna vitae consectetur auctor.</li>
                        <li> Nam placerat nisi ac ex lacinia, vitae viverra risus facilisis.</li>
                        <li> Maecenas consequat enim sed erat laoreet accumsan.</li>
                        <li>  Donec ultrices diam eget justo elementum congue.</li>
                    </ul>
                    <button id="Learnmore">Learn more</button>
                </div>
                
            </div>

            <div className="Image-container">
                <div className="Home-content2-wrapper">
                <div className="Home-content2-text">
                    <h2>Nulla dictum dui nec felis sodales, eget bibendum lacus faucibus.</h2>
                    <p>Fusce erat turpis, scelerisque non rutrum at, eleifend vel arcu. Aliquam ex libero, ullamcorper rhoncus dapibus sed, pellentesque non sem. Nam sagittis arcu vel pharetra molestie. Duis pulvinar dignissim justo in sollicitudin. In pulvinar in leo non posuere. Praesent non metus ac sem tristique eleifend dapibus at felis. Nunc auctor, mauris id posuere dictum, nulla nisi porttitor justo, sit amet dignissim. </p>
                    <button id="Login">Log in</button>
                </div>
                </div>
            </div>

            <div className="Home-content3">
            <div className="three-col-para">
                <h2>Praesent felis ante, dapibus vitae aliquet eu, euismod eget </h2>
                        <h3>interdum et malesuada fames ac ante ipsum primis. </h3>
                        {/* <div className="three-col-para"> */}
                            <p><b>Donec dignissim urna nec ullamcorper fermentum. Morbi facilisis metus congue ultrices pulvinar. Curabitur ut ipsum sit amet ex hendrerit facilisis at et elit. Phasellus eu lectus felis. Sed id malesuada purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed quam quis enim gravida pharetra. Mauris augue urna, lacinia vel blandit id, fringilla ac augue. Proin lectus odio, maximus ut dictum sit amet, tempor dictum purus.</b></p>
                            <p>

Integer egestas porta sapien, non efficitur justo aliquam at. Vestibulum eget dui sit amet dolor convallis viverra ut at diam. Nullam tellus sapien, molestie at ultrices nec, vehicula ut ante. Cras sagittis quam felis, in laoreet nisl fermentum sollicitudin. In condimentum nunc sapien. Nullam dignissim lacinia augue at euismod. Morbi at nibh suscipit, aliquet velit ac, scelerisque sapien. Praesent mauris libero, egestas ac purus sit amet, vehicula commodo lectus. Nam quis aliquet lectus, quis iaculis ipsum.

Vestibulum vulputate sodales eros, et consectetur sapien pulvinar in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tempus maximus sollicitudin. Donec quis viverra urna. Etiam eu finibus nulla. Phasellus ipsum mi, fermentum in varius in, imperdiet auctor dui. Proin finibus pharetra sodales. Nunc nibh risus, dictum quis quam id, gravida porta elit. Quisque at odio quis lorem semper molestie ac in turpis. Phasellus consequat, enim sed dictum viverra, dui nibh congue sem, vel ornare lacus nulla non elit. Vivamus a imperdiet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rutrum accumsan ultricies. Nullam vel elit odio. Ut et diam sed quam iaculis accumsan. </p>
                        </div>
                        <Link to="/contact-us">
                            <button id="Contactus2">Contact us</button>
                        </Link>
            </div>
        </div>

    );
}

export default Home;
