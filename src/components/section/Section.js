import React, { useEffect } from "react";
import "./Section.css"

export default function Section() {
    useEffect(() => { //он используется для добавления слушателей событий при монтировании компонента.
        const horizontScroll = document.querySelector(".container");
        const leftBtn = document.getElementById("leftBtn");
        const rightBtn = document.getElementById("rightBtn");

        rightBtn.addEventListener('click', () => {
            horizontScroll.style.scrollBehavior = "smooth";
            horizontScroll.scrollLeft += 900;
        });

        leftBtn.addEventListener('click', () => {
            horizontScroll.style.scrollBehavior = "smooth";
            horizontScroll.scrollLeft -= 900;
        });

        return () => { //она удаляет слушатели событий, чтобы избежать утечек памяти и нежелательного поведения после удаления компонента.
            rightBtn.removeEventListener('click', () => {});
            leftBtn.removeEventListener('click', () => {});
        };
}, []);

return (
    <>
        <div className="controls">
            <img src="https://cdn-icons-png.flaticon.com/512/120/120880.png" alt="right" id="rightBtn"/>
            <div className="container">
                <div className="gallery">
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/4ht9iX9pzj37kWnaTkO4rN/9f78ffef066a5b01b51a0d5691643d9e/Books_Discover_Flexible_Carousel_Promo_image_no_next__1_.png" alt=""/></span>
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/4rME4D1BEYvVIJM5jThmG8/a51e7ee68e60a8ef037b30c7fa8b565f/Films_Discover_Flexible_Carousel_Promo_image_no_text__1_.png" alt=""/></span>
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/AznhfDm2bhsnc9UIan7cu/07e5d51d70f791acda0bc4b87dae5344/Portkey_Games_Discover_Flexible_Carousel_imaged_no_text__1_.png" alt=""/></span>
                </div>
                <div className="gallery">
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/6caLuMBQVbLWX08kwfHaAF/a36151aee6ff317221b26ef34b7613b3/On_Stage_Discover_Flexible_Carousel_Promo_image_no_text___1_.png" alt=""/></span>
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/SDbBqWUWBbKEXFcQv4H7C/20f0076c1c0e568354c06e566e71cffe/Experiences_Discover_Flexible_Carousel_Promo_image_no_text__1_.png" alt=""/></span>
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/4cxRyhWP8nmOV1gkqa5Hmy/cf2f36294d0d7ba2201e04f2c2123d4b/Starting_Harry_Potter_Flexible_Carousel_Promo_Image_no_text__1_.png" alt=""/></span>
                </div>
                <div className="gallery">
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/4ht9iX9pzj37kWnaTkO4rN/9f78ffef066a5b01b51a0d5691643d9e/Books_Discover_Flexible_Carousel_Promo_image_no_next__1_.png" alt=""/></span>
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/4rME4D1BEYvVIJM5jThmG8/a51e7ee68e60a8ef037b30c7fa8b565f/Films_Discover_Flexible_Carousel_Promo_image_no_text__1_.png" alt=""/></span>
                    <span><img src="https://images.ctfassets.net/usf1vwtuqyxm/AznhfDm2bhsnc9UIan7cu/07e5d51d70f791acda0bc4b87dae5344/Portkey_Games_Discover_Flexible_Carousel_imaged_no_text__1_.png" alt=""/></span>
                </div>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/60/60934.png" alt="left" id="leftBtn"/>
        </div>
    </>
    )
}