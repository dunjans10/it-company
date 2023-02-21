import { Injectable } from "@angular/core";
import { CareerModel } from "./careers.model";

@Injectable()
export class CareersService {
  careers = [
    {
      id:0,
      name: 'Experienced Data Engineer',
      places:['Bosnia and Herzegovina','Bulgaria','North Macedonia','Slovenia','Romania','Hungary','Serbia'],
      description:'We are looking for a savvy Data Engineer to join our growing team of analytics experts. The hire will be responsible for expanding and optimizing our data and data pipeline architecture, as well as optimizing data flow and collection for cross functional teams. The ideal candidate is an experienced data pipeline builder and data wrangler who enjoys optimizing data systems and building them from the ground up. The Data Engineer will support our software developers, database architects, data analysts and data scientists on data initiatives and will ensure optimal data delivery architecture is consistent throughout ongoing projects. They must be self-directed and comfortable supporting the data needs of multiple teams, systems and products. The right candidate will be excited by the prospect of optimizing or even re-designing our company’s data architecture to support our next generation of products and data initiatives. ',
      responsibilities:['Create and maintain optimal data pipeline architecture', 'Assemble large, complex data sets that meet functional / non-functional business requirements','Identify, design, and implement internal process improvements: automating manual processes, optimizing data delivery, re-designing infrastructure for greater scalability, etc.', 'Build the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources using SQL and AWS ‘big data’ technologies.', 'Work with stakeholders including the Executive, Product, Data and Design teams to assist with data-related technical issues and support their data infrastructure needs.'],
      qualifications:['Advanced working SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databases.','Experience building and optimizing ‘big data’ data pipelines, architectures and data sets.','Experience performing root cause analysis on internal and external data and processes to answer specific business questions and identify opportunities for improvement.', 'A successful history of manipulating, processing and extracting value from large disconnected datasets.', 'Experience supporting and working with cross-functional teams in a dynamic environment.', 'We are looking for a candidate with 5+ years of experience in a Data Engineer role, who has attained a Graduate degree in Computer Science, Statistics, Informatics, Information Systems or another quantitative field.']
    },
    {
      id:1,
      name: 'Software Test Engineer',
      places:['Bosnia and Herzegovina','Bulgaria','North Macedonia'],
      description:'We are looking for a skilled software test engineer to join our QA team. As a software test engineer, you will be responsible for evaluating software functions and designing test protocols to ensure that products work as intended. You will also be responsible for completing all testing procedures, suggesting performance changes, and preparing performance reports for the development managers.',
      responsibilities:['Meeting with development managers to discuss software specifications and controls.', 'Using the software as intended to analyze its functional properties.', 'Designing manual and automated test procedures to evaluate each software product.', 'Building, coding, and implementing software evaluation test programs.', 'Running test programs to ensure that testing protocols evaluate the software correctly.'],
      qualifications:['Bachelor’s degree in computer science, software engineering, or similar field.','Proven work experience as a software test engineer.', 'Advanced knowledge of debugging codes and software development languages.', 'Experience working with popular operating systems including Windows and Linux.', 'Excellent software troubleshooting skills.']

    },
    {
      id:2,
      name: 'Experienced Python Engineer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia'],
      description:'We are looking for a Python Software Engineer Contractor with deep object-oriented programming chops and DevOps skills to join us in developing and maintaining various serverless microservices. This is a contract opportunity and an opportunity to work with some state-of-the-art technologies and solutions.',
      responsibilities:['Responsible for the design, development, and testing of python-based data pipelines.', 'Responsible for leveraging Databricks in the design, development, and testing of PySpark data pipelines (batch and streaming).', 'Responsible for the Design, Development, and testing of cloud artifacts in Azure.','Responsible for event-driven microservice development on the cloud.', 'Apply data science techniques to develop solutions to solve for business challenges.'],
      qualifications:['At least 3-years experience with professional Python development','Experience writing and testing code, debugging programs and integrating with Event Hub/Kafka and NoSQL Database.', 'Experience developing server-side logic and able to test and package standalone python modules.', 'Preferred experience with: Azure CLI deployment; Azure DevOps, Azure Bicep, Azure CosmosDB and python virtual environment set-up and interaction.', 'Must be familiar with Unit Testing framework including but not limited to JUnit, .Net equivalent, PySpark framework.', 'Deep object-oriented programing skills (Python) in developing and maintaining various microservices.']
    },
    {
      id:3,
      name: 'Experienced DevOps Engineer',
      places:['Slovenia', 'Romania', 'Hungary', 'Serbia'],
      description:'As a Senior DevOps Engineer, become a part of a cross-functional development team working for Our Client. Senior DevOps Engineer for the project in the automotive business domain (automotive software company in the One the biggest German motor vehicle manufacturer) with experience in Kubernetes and VMware with Tanzu to join our team. In this role, you will work closely with our development and operations teams to design, implement, and maintain complex containerization solutions.',
      responsibilities:['Work with development teams to optimize their applications deployment, build and maintain CI/CD pipelines using GitOps practices', 'Develop and maintain scripts and tools to automate deployment and scaling of infrastructure', 'Troubleshoot and resolve issues related to infrastructure based on containerization ', 'Ensure high availability, scalability, and performance of infrastructure systems','Stay up to date with emerging technologies and industry best practices'],
      qualifications:['5+ years’ experience of best DevOps practices and methodologies ', 'Strong knowledge and hands-on experience with Kubernetes and VMWare (vSphere withTanzu), microservices architecture, application services migration to Kubernetes', 'Experience with IaC (e.g. Terraform or similar),  infrastructure provisioning, deployment, logging and monitoring tools', 'Experience in automation builds and tests for complex solution, code quality tools (e.g. SonarQube or similar)', 'Experience with common software development lifecycle tools (including Jira, Confluence)']
    },
    {
      id:4,
      name: 'Experienced Solution Architect',
      places:['Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia'],
      description:'We are looking for an innovative solution architect to develop and implement systems architecture that will meet business needs. The solution architect’s responsibilities include gathering requirements and functional specifications, assessing the current software systems in place in order to identify areas in need of improvement, and overseeing development teams. You should also be able to regularly update the company on any developments in systems architecture projects.',
      responsibilities:['Building and integrating information systems to meet the company’s needs.', 'Assessing the systems architecture currently in place and working with technical staff to recommend solutions to improve it.', 'Resolving technical problems as they arise.', 'Continually researching current and emerging technologies and proposing changes where needed.', 'Informing various stakeholders about any problems with the current technical solutions being implemented.', 'Assessing the business impact that certain technical choices have.'],
      qualifications:['Bachelor’s degree in information technology, software engineering, computer science, or related field.','Proven experience in engineering and software architecture design.', 'In-depth understanding of coding languages (Java, JavaScript).', 'Sound knowledge of various operating systems and databases.','Strong organizational and leadership skills.']
    },
    {
      id:5,
      name: 'C++ Developer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia'],
      description:'We are seeking an innovative C++ developer to design high-end applications for our clients. You will be determining the scope of software development projects, collaborating on the development of software applications, and obtaining and integrating end-user feedback.',
      responsibilities:['Consulting with internal stakeholders to determine the scope of software development projects.','Collaborating with the software development team on application design and development.', 'Developing software and overseeing the deployment of applications across platforms.', 'Performing diagnostic tests and debugging procedures.','Optimizing software by performing maintenance, updates, and upgrades.', 'Keeping up to date with C++ standards and advancements in application development.'],
      qualifications:['Bachelor degree in computer science, information systems, or similar.', 'C++ certification preferred.','A minimum of 2 years experience as a C++ software developer.', 'Proficiency in C++ compliant languages such as C, Java, and Python.', 'Extensive experience in deploying software across a variety of platforms and operating systems.']
    },
    {
      id:6,
      name: 'Experienced JavaScript Developer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia'],
      description:'We are looking for a passionate JavaScript developer to be responsible for all front-end platform-related duties, from developing designs for complicated applications to analyzing code. The JavaScript developers responsibilities include optimizing applications, ensuring UI/UX feasibility, and implementing API designs and architecture.',
      responsibilities:['Building sustainable coding that may be used in the future.', 'Ensuring the feasibility of UI/UX designs.', 'Enhancing performance of the main front-end website.', 'Analyzing code, requirements, system risks, and software reliability.', 'Collaborating with front-end and back-end web developers.'],
      qualifications:['Degree in computer science, engineering, MIS, or related field.', 'Extensive knowledge and understanding of JavaScript.', 'Experience with JavaScript libraries (e.g. ExtJS, Backbone JS, and Angular JS).', 'Proficiency in browser rendering behavior and performance.','Sound understanding of web markup, such as HTML5.'],
    }
  ];

  constructor(){}

  getCareers():CareerModel[] {
    return this.careers;
  }

  getCareer(id: number) {
   return this.careers[id]
  }

}
