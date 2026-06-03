'use client';
import Link from 'next/link';
// import '../../components/Navbar.css';
import '../components/Home.css';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
            <section className="home-section" id="home">
                <nav className="home-navbar" >
                  <li><Link href="/home">ATCHAYASRI RAJKUMAR</Link></li>  
                      <ul className="home-navbar-links">
                        <li><Link href="/">Intro</Link></li>
                        <li><Link href="/home">AutoGen Reports</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                      </ul>
                </nav>
                <div className="home-content">
                        <h2> 👋👋👋 </h2>              
                        <h1 className="home-title">
                        HEY, I'M ATCHAYASRI
                        </h1>
                        <h2 className="home-subtitle">
                        Business & Product Analyst
                        </h2>
                        <table className="home-table">
                          <thead>
                            <tr>
                              <th className="table-title"> Business Analysis </th>
                              <th className="table-title"> Product Analysis </th>
                              <th className="table-title"> Data & Reporting </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="table-content"> Business Intelligence</td>
                              <td className="table-content"> Feature Prioritization</td>
                              <td className="table-content"> Data Interpretation</td>
                            </tr>
                            <tr>
                              <td className="table-content"> Requirement Gathering</td>
                              <td className="table-content"> Reporting solution</td>
                              <td className="table-content"> SQL & Reporting Concepts </td>
                            </tr>
                            <tr>
                              <td className="table-content"> Stakeholder Interaction</td>
                              <td className="table-content"> Business Exposure</td>
                              <td className="table-content"> AI Reporting Workflows</td>
                            </tr>
                          </tbody>
                        </table>
                </div>              
            </section>
            <section className="value-section">
              <div className="value-content">
                <h2 className="value-title">"Meaningful Results are born from Meaningful Inputs"</h2>
                <h2 className="value-subtitle">CAREER</h2>
                <p className="value-description">
                  I have over a decade of experience in technology, reporting, analytics, 
                  and product development. I enjoy simplifying complex business problems into
                  actionable insights and building solutions that help people make better decisions.
                  <br/>
                  I have,
                </p>
                    <ul className="value-description">
                      <li>Built an AI-powered reporting platform for Autogen Reports.</li>
                      <li>Supported enterprise documenting solution for BNYM (TCS Consultant).</li>
                      <li>Designed credit risk, loan origination and reporting solutions for Dun & Bradstreet.</li>
                      <li>Digitally transformed financial reporting process through data modernisation and Power BI for CHEP.</li>
                      <li>Enhanced enterprise applications and reporting solutions through data modeling, ETL process as a consultant for Infosys.</li>
                    </ul>
                <h2 className="value-subtitle">EDUCATION</h2>
                <p className="value-description">
                  My engineering education laid the foundation for analytical thinking, 
                  problem-solving, and structured decision-making. It developed my ability to
                  break down complex problems into manageable components, an approach that 
                  continues to shape my work in technology, reporting, analytics, and product development.
                  <br/>
                  <br/>
                  My MBA at IE Business School, Madrid broadened my perspective beyond technology,
                  helping me understand business strategy, innovation, and the role of technology in
                  driving organizational growth. It strengthened my ability to connect business objectives
                  with technology solutions and fostered an entrepreneurial mindset that later influenced 
                  my journey in building products and analytics solutions.
                </p>
                <h2 className="value-subtitle">JOURNALS AND AUTHORING</h2>
                <p className="value-description">
                  I share my thoughts on data analytics, technology, and new projects on{" "}
                  <a
                    href="https://medium.com/@ceo_92763"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>
                  . Follow it for interesting stories.
                  <br></br>
                  I write about my view on analytical solutions and work experiences on{" "}
                  <a
                    href="https://www.linkedin.com/in/atchayasri-rajkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                  . 
                  <br></br>
                  Check out my blog to know more about reporting best practices <Link href="/blog">Blog</Link>
                  </p>
                  
                 </div>
            </section>
                
     
    </main>
  );
}
