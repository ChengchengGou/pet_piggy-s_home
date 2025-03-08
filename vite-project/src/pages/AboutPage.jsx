import React, { useState } from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [subAccordionOpen, setSubAccordionOpen] = useState(null); 

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const toggleSubAccordion = (index) => {
    setSubAccordionOpen(subAccordionOpen === index ? null : index); 
  };

  return (
    <div className="about-page">
      <main id="main-content">
      <h2 onClick={toggleAccordion} className="accordion-header">
        About Pet Piggies 
        <span className="accordion-icon">{accordionOpen ? "▼" : "▲"}</span>
      </h2>

      {accordionOpen && (
        <div className="accordion-content">
          <h3
            onClick={() => toggleSubAccordion(1)}
            >
            Pet Piggies Care
            <span className="accordion-icon">
              {subAccordionOpen === 1 ? "▼" : "▲"}
            </span>
          </h3>
          {subAccordionOpen === 1 && (
            <div className="panel">
              <img src="/images/pig1.jpg" alt="pig1" />
              <div className="panel-content">
              <h4>Diet Management</h4>
              <p>A pet pig’s diet is the cornerstone of its overall health. Feeding your pig a well-balanced diet that is low in fat and high in fiber is crucial to prevent obesity and related health problems. Here are some specific guidelines:</p>
              <p>1.Main Diet: Use pig-specific feed designed for pet pigs, as it is tailored to their nutritional needs. Avoid using commercial feeds meant for livestock pigs as they are often formulated for rapid weight gain.</p>
              <p>2.Vegetables and Fruits: Supplement their diet with fresh vegetables such as carrots, cucumbers, and leafy greens. Fruits like apples and melons can be offered occasionally as treats but should be limited due to their sugar content.</p>
              <p>3.Foods to Avoid: Avoid giving your pig sugary snacks, salty foods, dairy products, or highly processed items like chips and candy. Chocolate, in particular, is toxic to pigs.</p>
              <p>4.Portion Control: Monitor portion sizes carefully. Overfeeding can lead to obesity, while underfeeding can result in malnutrition. Portions should be adjusted based on your pig’s age, size, and activity level.</p>
              <p>5.Water Access: Ensure your pig always has access to clean, fresh water to stay hydrated, especially in warm weather.
              </p>
            </div>
            </div>
            )}
            {subAccordionOpen === 1 && (
            <div className="panel">
            <img src="/images/pig3.jpg" alt="pig3" />
            <div className="panel-content">
            <h4>Living Environment</h4>
           <p>Creating a safe and comfortable living space for your pig is critical to their well-being:</p>
          <p>1.Housing: Your pig’s enclosure should be spacious enough for them to move freely. Provide a secure outdoor area for grazing and exercise, and ensure fencing is strong enough to prevent escape.</p>
          <p>2.Bedding: Use soft, dry bedding such as straw, hay, or blankets. Replace bedding regularly to maintain cleanliness and prevent odors.</p>
          <p>3.Climate Control: Pigs are sensitive to extreme temperatures. In cold weather, provide a warm, insulated area with heating if necessary. In hot weather, ensure shade and proper ventilation to prevent overheating.</p>
          <p>4.Cleanliness: Clean your pig’s living area daily. Dirty conditions can attract flies and lead to infections or other health issues.</p>
        </div>
      </div>
      )}
     

          <h3
            onClick={() => toggleSubAccordion(2)}
          >
            Common Health Issues
            <span className="accordion-icon">
              {subAccordionOpen === 2 ? "▼" : "▲"}
            </span>
          </h3>
          {subAccordionOpen === 2 && (
            <div className="panel">
              <div className="panel-content">
              <h4>Health Checkups</h4>
              <p>Regular health checkups and preventive care are essential for keeping your pig healthy and detecting potential issues early:</p>
              <p>1.Veterinary Visits: Schedule annual visits to a veterinarian experienced with pigs. Vaccinations, deworming, and routine physical exams are crucial for overall health.</p>
              <p>2.Hoof Care: Check your pig’s hooves regularly. If they appear overgrown or cracked, they will need to be trimmed. Neglected hooves can lead to discomfort and mobility issues.</p>
              <p>3.Skin and Coat: Examine your pig’s skin for dryness, redness, or signs of infection. Skin problems can result from allergies, parasites, or poor hygiene.</p>
              <p>4.Weight Monitoring: Keep track of your pig’s weight to ensure it remains within a healthy range. Overweight pigs are prone to joint problems, heart disease, and other complications.</p>
              </div>
              <img src="/images/pig2.jpg" alt="pig2" />
            </div>
          
          )}

            {subAccordionOpen === 2 && (
            <div className="panel">
              <div className="panel-content">
              <h4>Exercise and Activity</h4>
              <p>Physical activity is essential for maintaining a healthy weight and preventing boredom:</p>
              <p>1.Outdoor Time: Allow your pig to spend time outdoors every day. They enjoy rooting, grazing, and exploring their surroundings.</p>
              <p>2.Supervised Play: Engage in playtime with your pig using toys or activities that encourage movement.</p>
              <p>3.Weather Precautions: Avoid taking your pig outside in extremely cold or hot weather. Pigs do not sweat and are prone to heatstroke, so always provide shade and water on warm days.</p>
              <p>4.Rooting Opportunities: Provide a designated rooting area with soil or sand where your pig can dig and explore. Rooting is a natural behavior that helps reduce stress.</p>
              </div>
              <img src="/images/pig4.jpg" alt="pig4" />
            </div>
          
          )}
        </div>
      )}
      </main>
    </div>
  );
}

export default AboutPage;