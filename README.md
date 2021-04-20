# [Hypermedia Applications project](https://lemonpeel.herokuapp.com/)  

*Design, implementation and usability inspection of a website for a no-profit organization for the Hypermedia Applications course of Politecnico di Milano.*

## Authors
  + [Stefano Formicola](https://github.com/ste7en)
  + [Cristian Giannetti](https://github.com/cristiangiann)
  
## Project Description
The project consists in the design and the implementation of a website for a no-profit organization. The requirements contain some constraints about the relationships of the main entities of the website.
The project is divided into four main parts: Design, Backend, Frontend and Usability test.

### Design
Design in-the-large with C-IDM, L-IDM and P-IDM, design in-the-small with wireframes and page samples, use case scenarios and database design.  
The design document is available [here](https://github.com/cristiangiann/hypermedia-application/blob/master/deliverables/FORMICOLA%2CGIANNETTI-DESIGN%20REPORT-24-04-2020.pdf).

### Backend
NodeJS web server serving REST APIs compliant with the third level of HATEOAS principles, using http methods, status codes and hypermedia.  
The APIs specification are described in this [yaml file](https://github.com/cristiangiann/hypermedia-application/blob/master/web/api/swagger.yaml) and are easily readable from this [link](https://lemonpeel.herokuapp.com/backend/swaggerui/).  
A complete report of the Backend part is available [here](https://lemonpeel.herokuapp.com/backend/main.html).

### Frontend
Implementation from scratch of the pages described in the design document, using Bootstrap elements. The structures of the pages are statically served by the server and JQuery is used to call APIs and fill the pages with the requested data.  
The website is available at this [link](https://lemonpeel.herokuapp.com/).

### Usability test
Usability evaluation of the website, carried out with user testing. The method consists on the data collection and observation of how some representatives of the real users actually use the system, giving them some tasks to complete. Its goal is to uncover actual difficulites that users might have when interacting with the website and to obtain a systematic feedback on the effectiveness and efficiency of use of it.  
The Usability Report is available at this [link](https://github.com/cristiangiann/hypermedia-application/blob/master/deliverables/FORMICOLA%2CGIANNETTI-USABILITY-REPORT-16-06-2020.pdf).
