# EcoScan Project 🌱🔍 For CodeTheChange2023

## Inspiration 💡
In this conscientious landscape, understanding and selecting the appropriate methods for waste disposal becomes crucial, reflecting a collective commitment to nurturing a healthier and more sustainable world. As we embark on this journey toward responsible waste management, our innovative solution leverages the power of artificial intelligence. EcoScan is designed to simplify and enhance your eco-conscious efforts—our AI-driven technology seamlessly scans your items, guiding you toward their proper disposal and helping you earn points in the process. Embrace the future of sustainable living with ease, where every conscientious choice contributes to a cleaner, greener tomorrow.

## What it does 🚀
University students are seamlessly enrolled in our system, requiring only a quick scan of QR codes on various bins scattered across campus to establish a connection between the bin and their mobile app. Once they deposit an item into the bin, our AI steps in to identify the item, guide them to the correct bin, and allocate the corresponding points into the database—visible in real-time on their app.

With accumulated rewards, students enjoy the freedom to redeem points at various campus food vendors, conveniently displayed in the marketplace tab within the app. This streamlined process not only promotes sustainable practices but also enhances the overall campus experience by fostering a rewarding and eco-conscious community.

## How we built it 🔨
We've developed a mobile app using React Native and Tailwind CSS, offering users a comprehensive view of their rewards and progress. The app features distinct tabs for checking their position on the campus leaderboard and utilizing the camera to scan QR codes on bins.

Our cutting-edge system integrates bins equipped with Raspberry Pi-powered cameras. Python scripts, leveraging Google Vision and the OpenAI API, accurately identify objects placed in the bins. Utilizing speech recognition libraries, the system provides verbal feedback on the correct bin for disposal.

For real-time data display, we've incorporated a monitor next to the bin. This display, powered by StreamLit and Matplotlib, showcases live camera footage and pertinent data. The student's points, along with all data, are securely stored in an SQLite database. We've employed SQLAlchemy as the ORM and FastAPI to seamlessly retrieve data within the app, ensuring a streamlined and efficient user experience.

## Challenges we ran into 😱
- Accurate detection with Google Vision API, we had to utilize GPT queries to accurately identify ambiguous object.
- Properly formatting the Streamlit monitor and connecting with the camera.
- API calls between React Native and FastAPI.

## Accomplishments that we're proud of 😎
- Built a functional ecosystem with a mobile application, with a FastAPI backend and a computer vision model that uses webcam and voice output to interact with the user.

## What we learned 📚
- Libraries for backend development : FastAPI, SQLAlchemy.
- Component and styling for React Native using React Native Elements and Tailwind CSS.
- Computer Vision, integration of LLMs into our computer vision workflow using GPT API.

## What's next for EcoScan 🔜
- Integrate the marketplace with more environmentally sustainable businesses.
- Overhaul the styling of the app.
- Add QR Codes with vendors to promote bringing in Tupperware and reusing culinary utensils.
