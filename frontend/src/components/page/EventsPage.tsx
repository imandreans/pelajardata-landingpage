import Navbar from '../navbar';
import Footer from '../footer';
import { Button, } from "@/components/ui/button"
const eventTypes = [
  {
    image: "./src/assets/vectors/Offline.svg",
    title: 'offline events',
    description: 'In-person workshops and meetups for hands-on learning and networking.',
  },
  {
    image: "./src/assets/vectors/Online.svg",
    title: 'online events',
    description: 'Virtual sessions accessible from anywhere, featuring expert talks and Q&As.',
  },
  {
    image: "./src/assets/vectors/Workshop.svg",
    title: 'Workshops',
    description: 'Intensive practical sessions focused on specific tools and techniques.',
  },
  {
    image: "./src/assets/vectors/Competition.svg",
    title: 'Competitions',
    description: 'Challenge yourself with real-world problems and showcase your skills.',
  }
];
const learningPaths = [
  {
    image: "./src/assets/vectors/Data Analyst.svg",
    title: 'data analytics',
    description: 'Master data visualization, statistical analysis, and business intelligence tools.',
  },
  {
    image: "./src/assets/vectors/Data Scientist.svg",
    title: 'data science',
    description: 'Dive deep into machine learning, statistical modeling, and predictive analytics.',
  },
  {
    image: "./src/assets/vectors/Data Engineers.svg",
    title: 'Data Engineering',
    description: 'Build robust data pipelines, design databases, and manage data infrastructure.',
  },
  {
    image: "./src/assets/vectors/AI.svg",
    title: 'artificial intelligence',
    description: 'Explore neural networks, deep learning, and artificial intelligence applications.',
  }
];

const events = [
  {
  image: "./src/assets/images/event-online5.jpg",  
  title: "Hack for Running AI in Distributed Ecosystem",
  date: "2 Februari 2025",
  price: "Free",
  type: "Online Events",},
    {
      image: "./src/assets/images/event-online1.jpg",
      title: "Ngobrol Virtual Pelajar Data",
    date: "7 Februari 2025",
    price: "Free",
    type: "Online Events",},
    {
    image: "./src/assets/images/event-online6.jpg",
    title: "Menulis CV dengan Metode Star",
    date: "22 Februari 2025",
    price: "Free",
    type: "Online Events",},
]
function EventsPage() {
    return <>
      <Navbar />
        <main id="events-page">
            <section className="hero-section">
                <section className='hero-content'>
                    <h1>connecting with fellow enthusiasts and industry pioneers</h1>
                    <Button variant={'default'}><a href='#upcoming-events'>Explore Events</a></Button>
                </section>
            </section>
            <section className="event-types-section">
                    <h1>Diverse Learning Experiences</h1>
                    <div className="events-grid">
                    {eventTypes.map((type)=>(
                        <div className="events-card">
                            <img src={type.image} alt="None" />
                            <section>
                            <h3>{type.title}</h3>
                            <p>{type.description}</p>
                            </section>
                        </div>
                    ))}
                    </div>
    
            </section>
            <section className="learning-paths-section">
                    <h1>choose your learning path</h1>
                    <div className="events-grid">
                    {learningPaths.map((type)=>(
                        <div className="events-card">
                            <img src={type.image} alt="None" />
                            <section>
                            <h3>{type.title}</h3>
                            <p>{type.description}</p>
                            </section>
                        </div>
                    ))}
                    </div>
    
            </section>

            <section className="events">
                    <h1>Upcoming and Latest Events</h1>

                <div className="upcoming-events">
                    {events.map((e)=>(
                      <div className='event'>
                        <img src={e.image} alt="" />
                        <section>
                        <h2 id='title'>{e.title}</h2>
                        <h3 id='date'>{e.date}</h3>
                        <h3 id='price'>{e.price}</h3>
                        <h3 id='type'>{e.type}</h3>
                        </section>
                      </div>
                    ))}
                      </div>
                    <Button >
                    <a
                        href="https://lu.ma/pelajardata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        >
Find More Events
                    </a>
                      </Button>
            </section>
        </main>
        <Footer/>
    </>
}

export default EventsPage;