import React from "react";
import "../styles/HomePage.css";


function HomePage() {

  
  return (
    <div className="home-page">
      <h2>Welcome to Pet Piggies Home</h2>
      <main id="main-content">
      <div className="card-area">
        <div className="card">
          <img src="/images/Kunekune pigs.jpg" alt="Kunekune pigs" />
          <p>Originating from New Zealand, Kunekune pigs are small, with long, curly hair and are very friendly, making them suitable for family interactions. They are primarily grazers, so a large grassy area is necessary.</p>
        </div>

        <div className="card">
          <img src="/images/Miniature Pigs.jpg" alt="Miniature Pigs" />
          <p>Miniature pigs are delightful pets, known for their intelligence and affability. They require specialized diets and enough space to root around to stay healthy and active.</p>
        </div>

        <div className="card">
          <img src="/images/American Mini Pigs.jpg" alt="American Mini Pigs" />
          <p>Specially bred for domestic environments, American Mini Pigs are very sociable towards humans, making them ideal indoor pets.However, they also require regular physical and mental stimulation.</p>
        </div>

        <div className="card">
          <img src="/images/Vietnamese Potbellied Pigs.jpg" alt="Vietnamese Potbellied Pigs" />
          <p>Vietnamese Potbellied pigs are popular for their pronounced belly and adorable appearance. They are smart and trainable but may require special attention to their diet to avoid excessive weight gain.</p>
        </div>

        <div className="card">
          <img src="/images/Juliana Pigs.jpg" alt="Juliana Pigs" />
          <p>Known for their spotted skin and petite frame, Juliana pigs are lively and friendly and need to live with companions to maintain optimal socialization.</p>
        </div>

        <div className="card">
          <img src="/images/Gottingen Minipigs.jpg" alt="Gottingen Minipigs" />
          <p>Gottingen Minipigs from Germany, commonly used in laboratory research, are increasingly popular among pet enthusiasts. They are small and suitable for families needing a smaller pet.</p>
        </div>
      </div>
      </main>
    </div>
  );
}

export default HomePage;