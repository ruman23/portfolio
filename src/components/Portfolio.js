import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const publications = [
    {
      citation: (
        <>
          Islam, M. R., Anwar, R. H., Mastorakis, S., & Raza, M. T. (2024). <em>Characterizing Encrypted Application Traffic through Cellular Radio Interface Protocol.</em> arXiv preprint arXiv:2407.07361.
        </>
      ),
      link: "https://arxiv.org/abs/2407.07361",
      note: (
        <>
          This paper has been accepted for publication by the 21st IEEE International Conference on Mobile Ad-Hoc and Smart Systems (MASS 2024). See the <a href="https://sites.google.com/view/ieee-mass-2024/program/accepted-papers" target="_blank" rel="noopener noreferrer">accepted paper list</a>.
        </>
      )
    },
    {
      citation: (
        <>
          Islam, M. R., Subramaniam, M., & Huang, P. C. (2024). <em>Image-based Deep Learning for Smart Digital Twins: a Review.</em> arXiv preprint arXiv:2401.02523.
        </>
      ),
      link: "https://arxiv.org/abs/2401.02523",
      note: (
        <>
          This paper has been accepted by the <a href="https://link.springer.com/journal/10462" target="_blank" rel="noopener noreferrer">Artificial Intelligence Review</a> journal in October 2024.
        </>
      )
    },
    {
      citation: (
        <>
          Zhang, D., Islam, M. R., Huang, P. C., & Ho, C. H. (2024). <em>Overcoming Autoware-Ubuntu Incompatibility in Autonomous Driving Systems-Equipped Vehicles: Lessons Learned.</em> arXiv preprint arXiv:2410.06492.
        </>
      ),
      link: "https://arxiv.org/abs/2410.06492"
    },
    {
      citation: (
        <>
          Islam, M. R., Kashem, M. A., & Mia, L. (2021, November). <em>AllerHybrid: A Hybrid System to Predict the Allergen Using K-mer and Physicochemical Properties.</em> In 2021 5th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT) (pp. 1-6). IEEE.
        </>
      ),
      link: "https://ieeexplore.ieee.org/document/9667943"
    }
  ];



  return (
    <section id="portfolio" style={{ padding: '30px' }}>
      <h1>My Projects</h1>
      <div>
        <h3>Project 1: Web App</h3>
        <p>Description of your first project.</p>
      </div>
      <div>
        <h3>Project 2: Mobile App</h3>
        <p>Description of your second project.</p>
      </div>

      <h2>Publications</h2>
      <div className="publications">
        {publications.map((pub, index) => (
          <div key={index} className="publication">
            <p>{pub.citation}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              Access Paper
            </a>
            {pub.note && <p className="note"><strong>Note:</strong> {pub.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
