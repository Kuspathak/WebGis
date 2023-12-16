import 'bootstrap/dist/css/bootstrap.min.css';

const TeamMember = ({ name, photo, position, contactInfo }) => {
  return (
    <div className="col-md-8 col-lg-3 col-sm-6 mb-4">
      <div className="card h-100 shadow">
        <div></div>
        <img src={photo} className="card-img-top rounded-circle p-3 mx-auto" alt={name} style={{ width: '300px', height: '300px' }}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{position}</p>
          <p className="card-text">{contactInfo}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: 'Sagar Patak',
      photo: 'images/sagarPP.jpg',
      position: 'React Developer',
      contactInfo: 'sgrpathak2001@gmail.com',
    },
    {
        name: 'Dinesh Chaudhary',
        photo: 'images/dineshPP.jpg',
        position: 'Ux/Ui Designer',
        contactInfo: 'dineshchaudhary@gmail.com',
    },
    {
        name: 'Jeshan Pokharel',
        photo: 'images/jeshanPP.jpg',
        position: 'FullStack Developer',
        contactInfo: 'jeshanpokharel123@gmail.com',
    },
    {
        name: 'Nishcal Acharya',
        photo: 'images/nischalPP.jpg',
        position: 'Ux/Ui Designer',
        contactInfo: 'nischalacharya642@gmail.com',
    },
    {
        name: 'DipKiran Tiwari',
        photo: 'images/dipPP.jpg',
        position: 'Ux/Ui Designer',
        contactInfo: 'tiwaridipkiran@gmail.com',
    }
    // Add more team members as needed
  ];

  return (
    <section id="about-us" className="mt-5">
      <div className="container">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
