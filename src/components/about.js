import React from 'react';
import './about.css';
import Image from '../imgs/main-image.jpg';


function About() {
    const textVariable = 'Nulla lobortis vehicula eros eget molestie. Sed sagittis, neque et ultricies viverra, felis quam faucibus arcu, sollicitudin rhoncus tortor nulla sed lectus.';
        
    return (
        <div className="about-us">
             <title>About Us</title>
            <h1>About us</h1>
            <p><b>{textVariable}</b></p>
            <p>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis purus id tempor pulvinar. Vestibulum ante naya ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class reeni aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquet urna eu ante bibendum, sed sollicitudin eros pulvinar. Donec cursus rutrum pellentesque. Curabitur velit neque, sodales a bibendum eget, faucibus sit amet enim. Donec id diam sed ipsum mattis pellentesque sed vel mauris. Praesent maximus fringilla facilisis.
                 Donec tellus lorem, tincidunt a enim at, cursus varius ante. Fusce sit amet volutpat metus.
            </p>
                <img src={Image} className = "image" alt="office"/>
            <p> 
                Integer ac rhoncus ipsum. Curabitur eu sollicitudin purus, nec convallis velit. Proin a nibh non nisl tempus commodo. Ut vehicula lacinia tellus at malesuada. Aliquam vel eleifend arcu. Quisque suscipit aliquet aliquam. Phasellus dictum bibendum tortor efficitur interdum. Suspendisse id libero ut ante consectetur condimentum. Donec pretium quam ipsum, quis congue lacus convallis eget.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed elementum, ipsum nec consectetur bibendum, orci enim malesuada est, sit amet consequat dui arcu laoreet mi. Sed a imperdiet erat, et lobortis orci. Nam et augue arcu. Cras faucibus pharetra aliquet. Suspendisse auctor in justo in pretium.
                Phasellus a diam lobortis, sodales metus quis, euismod est. Donec tincidunt leo vel odio tempor gravida
            </p>
            <h2>Morbi volutpat lectus eget purus commodo aliquet:</h2>
            <ul className="about-list">
                <li>Cras a dui sed ipsum imperdiet hendrerit quis non ex.</li>
                <li>Aenean et risus dignissim lorem hendrerit imperdiet ac eget augue.</li>
                <li>Phasellus volutpat quam non tempor dignissim.</li>
                <li>Nam vel arcu efficitur, suscipit magna vitae, egestas diam</li>
            </ul>
            <p> 
                Ut justo odio, hendrerit a dolor nec, egestas mattis nibh. Aliquam ex ante, imperdiet id urna sed, placerat maximus massa. Fusce at nulla vel sem pulvinar varius. Ut ut est ac magna molestie sollicitudin a in lectus. Nulla at egestas diam. Curabitur fringilla at magna nec porttitor. Nullam facilisis faucibus mi, molestie venenatis quam congue et. Vestibulum ipsum ipsum, congue viverra neque in, convallis rutrum metus. Aenean ut lobortis nibh. Maecenas a condimentum dolor. Vestibulum ut metus eu eros ultricies ornare in at massa. Sed lacus eros, porta id erat ut, pellentesque interdum sapien. Fusce pellentesque, leo sed blandit dignissim, nisl neque sodales diam, a rhoncus libero nisl in ipsum. Donec tortor velit, aliquam ac ex id, congue pretium libero. Suspendisse vitae justo magna.
                Cras ante ex, vulputate id magna at, luctus malesuada orci. Ut in ante odio. Nulla vulputate tempus laoreet. Donec egestas tincidunt est, vitae posuere mauris porta vitae. Duis tincidunt pellentesque tincidunt. Aliquam volutpat arcu molestie libero sollicitudin, ut ullamcorper leo tincidunt. Vivamus quis leo id tortor gravida posuere eu a augue. Aenean lectus ligula, mollis vitae urna non, dignissim vestibulum tellus. Pellentesque purus enim, bibendum hendrerit lectus et, tincidunt facilisis arcu. Curabitur quis massa vel lacus eleifend lacinia. 
            </p>
        </div>
    );
}


export default About;