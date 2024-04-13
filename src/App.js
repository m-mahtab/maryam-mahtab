
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const header = {

  logo: 'Maryam Mahtab',
  listItems: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }

  ]
}

const banner = {
  title: 'Maryam Mahtab',
  desc: `I'm a Frontend React Developer and I work remotely from Pakistan`
}
const about = {
  title: 'About me',
  abtdesc: 'Meet Maryam, a talented web developer with a passion for crafting elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, and more, her keen eye for detail, coupled with her commitment to staying abreast of industry trends ,ensures that every project they undertake is not only visually stunning but also optimizedfor peak performance.',
}
const skills = {
  title: 'My Skills',

}
const projects = {
  title: 'My Projects',
  subtitle1: 'Website Design for Telecom Company',
  subtitle2: 'Website Design for a Textile Designer',
  desc: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores'
    }

const contact = {
  title: 'Contact Me'
}
function App() {
  return (
    <div className="App ">
      <Header header={header} />
      <Banner banner={banner} />
      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />

    </div>
  );
}

export default App;
