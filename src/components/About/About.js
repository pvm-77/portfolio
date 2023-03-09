import React from 'react'


const About = () => {
  return (
    <div>

      {/* <div className='container-fluid'>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className='container-fluid'>
            <p>Hi i am sarfaraz </p>
            <p>i am currently designing solution for small business</p>
            <p>Help them them to connect to the world</p>
          </div>
          <div className='skill'>
            <h2>My Area of expertise</h2>
            <p>
              i currently using React To develop UIs and web applications
            </p>
            <p>
              i have experice to develop web applications in codeIgniter
            </p>
            <p>
              i also use nodejs to develop backend applications and expressjs to develop frontend applications
            </p>

          </div>
        </div>

      </div> */}
      <div className="container-fluid">
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">About Me</h1>
            <p>
              Hi, I'm Sarfaraz. I am currently designing solutions for small businesses to help them connect to the world.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">My Skills</h2>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check2-circle me-2 text-success"></i>
                React for developing UIs and web applications
              </li>
              <li>
                <i className="bi bi-check2-circle me-2 text-success"></i>
                CodeIgniter for developing web applications
              </li>
              <li>
                <i className="bi bi-check2-circle me-2 text-success"></i>
                Node.js for developing backend applications
              </li>
              <li>
                <i className="bi bi-check2-circle me-2 text-success"></i>
                Express.js for developing frontend applications
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  )
}

export default About