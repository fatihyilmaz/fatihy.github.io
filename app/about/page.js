import React from 'react';

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="mb-4">
        I am a senior software project manager with a strong technical background, enabling me to understand complex challenges and lead my teams effectively. I have successfully led software projects with around 10 million euros R&D budget in total.
      </p>

      <p className="mb-4">
        My experience spans across software project management, stakeholder management, requirement elicitation, leading offshore teams, software platform development, agile project management, product ownership, and team growth. I am eager to embrace my next leadership role, where I can leverage my expertise in software project management and team development to drive impactful results.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Experience</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Senior Software Project Manager, Siemens AG</strong> (Karlsruhe, Germany) • May 2022–Present  
          Leading a software platform project that provides foundational functionalities (identity access, dashboard, logging, license management) to speed up time-to-market of multiple software products. Industrial 5G is one of the products empowered by this platform. Product owner responsibilities and leading a 12-person offshore team.
        </li>
        <li>
          <strong>Product & Solution Development Team Leader, Siemens Türkiye</strong> (Istanbul) • May 2021–May 2022  
          Project manager of the future software platform of Siemens Industrial Communication. Built, hired, and managed an 18-person team from scratch.
        </li>
        <li>
          <strong>Software Project Manager, Siemens Türkiye</strong> (Istanbul) • Feb 2018–May 2021  
          Created and led a new team to deliver SINEC INS (Infrastructure Network Services) from 0 to V1.0 and V1.0 SP1. Gained deep experience in agile project management.
        </li>
        <li>
          <strong>Software Engineer, Siemens Türkiye</strong> (Istanbul) • Dec 2014–Feb 2018  
          Part of the TIA Portal performance optimization team. Led an internal debugger tool for investigating TIA Portal performance issues.
        </li>
        <li>
          <strong>Software Engineer, Evoline TR</strong> (Consultant to Siemens Auditory Technics) • Nov 2010–Aug 2013  
          Developed iOS apps from scratch, led the team technically. Responsible for an industrial Buggy Floor Management app for P&G.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Education</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Istanbul Technical University, MBA (2016)</li>
        <li>Eindhoven University of Technology, Exchange Student (2014)</li>
        <li>Istanbul Technical University, B.Sc. Computer Engineering (2010)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Skills & Certifications</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Software project management, team growth, stakeholder management, agile methodologies, product ownership</li>
        <li>RDPM@Siemens B-level Certification, ISAQB</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Additional Contributions</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Articles: <a href="https://www.linkedin.com/in/ylmzfth/detail/recent-activity/posts/" className="text-blue-600 hover:underline" target="_blank">LinkedIn Posts</a></li>
        <li>Mentor at Istanbul Technical University Alumni Group</li>
        <li>Technical Consultancy: “Coding for Children” book by CoderDojo</li>
      </ul>
    </section>
  )
}
