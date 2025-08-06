import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TelegramCards.css';

const cards = [
    {
        title: "Ismga Rasm",
        content: (
            <div className="img-info-row">
                <img
                    className="img-portrait"
                    src="/assets/photo_2025-08-06_06-46-34.jpg"
                    alt="Ismga rasm"
                />
                <div className="img-info-text">
                    <h3>Ism uchun rasm</h3>
                    <p>
                        Bu bo‘limda siz ismga mos rasmni yuklab olishingiz mumkin. Rasm 9:16 formatda, yuqori sifatda tayyorlanadi.
                    </p>
                    <button className="button" style={{marginTop: 16}}>Bo'limga o'tish</button>
                </div>
            </div>
        ),
    },
    {
        title: "Ismga Video",
        content: (
            <div className="img-info-row">
                <div className="img-info-text">
                    <h3>Ism uchun video</h3>
                    <p>
                        Bu bo‘limda siz ismga mos videoni yuklab olishingiz mumkin. Video 9:16 formatda, yuqori sifatda tayyorlanadi.
                    </p>
                    <button className="button" style={{marginTop: 16}}>Yuklab olish</button>
                </div>
                <video
                    className="video-portrait"
                    controls
                    poster="https://via.placeholder.com/360x640"
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Brauzeringiz video formatini qo‘llab-quvvatlamaydi.
                </video>
            </div>
        ),
    },
    {
        title: "Ismga Rington",
        content: (
            <audio controls style={{width: "100%"}}>
                <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mp3" />
                Brauzeringiz audio formatini qo‘llab-quvvatlamaydi.
            </audio>
        ),
    },
];

const TelegramCards = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="telegram-cards-vertical">
            {cards.map((card, idx) => (
                <div
                    className={`card-vertical ${idx % 2 === 0 ? 'left' : 'right'}`}
                    data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                    key={card.title}
                >
                    <h2>{card.title}</h2>
                    {card.content}
                </div>
            ))}
            <div className="telegram-link">
                <p>Telegram guruhimiz silka:</p>
                <a
                    href="https://t.me/ismga_video_rasm_musiqa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://t.me/ismga_video_rasm_musiqa
                </a>
            </div>
        </div>
    );
};

export default TelegramCards;