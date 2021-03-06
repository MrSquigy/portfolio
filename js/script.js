/*  This is my portfolio site. This script stores subject data
    and populates the education page.

    Copyright (C) 2021  Jonathan Vice

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. */


// List of subjects in format [name, distinction, description]
const subjects = [["Advanced Programming", true, "To increase the depth of the student's insight into advanced programming principles and consolidate their competence therein. This module was taught in C++."],
["Advanced Systems Development", true, "To introduce students to advanced topics in the analysis of information systems. Including topics related to the software process, software engineering practice and the application of web engineering."],
["Computer Graphics", false, "To enable a student to understand and apply the basic principles and techniques of modern computer graphics."],
["Computer Networks 1", false, "To introduce the fundamental building blocks that form a modern network, such as protocols, topologies and hardware. This module provides in-depth coverage of the most important concepts in contemporary networking, such as TCP/IP, Ethernet, wireless transmission, and security. Students will also acquire the skills to build a network from scratch and maintain, upgrade, and troubleshoot an existing network."],
["Computer Organisation", false, "To introduce students to the underlying structure of a modern digital computer including digital logic level, machine code level and the software system level. It involves programming in an assembly language."],
["Computer Systems: Fundamental Concepts", true, "To introduce students to the computer as a system. This module covers hardware concepts such as the internal representation of numbers and characters and basic computer architecture and software concepts such as systems software and applications software. It also includes a brief introduction to databases and systems analysis and design."],
["Database Design and Implementation", false, "To enable students to demonstrate their understanding of all the stages of developing a database application, using a Structured Query Language (SQL) and a commercial relational database management system."],
["Databases 1", true, "To equip students with the knowledge and competencies to understand and use databases. This module provides fundamental and required knowledge, skills and values which will support further studies in the field of Database Management design and implementation. These competencies contribute to the development of competitive information technology practitioners who have strong technical skills in designing, implementing and managing database systems. The module contributes to the development of the computing field in South Africa or globally."],
["Databases 2", false, "To introduce students to the fundamentals of databases and database management systems covering both single and distributed database systems, relational and object-oriented databases, and dealing with aspects such as normalisation, entity-relationship modelling, transaction management and concurrency control, data warehousing, and database administration."],
["Formal Logic 2", false, "To introduce students to the syntax of propositional language and the truth functionality of first order logic, enabling them to deal with proofs for validity via deduction and resolution in an interpreted first order language."],
["Formal Logic 3", false, "To enable students to construct many different formal languages (such as opaque or transparent propositional languages, first order languages, sorted languages, modal languages and non-monotonic logics) and to solve problems of validity and truth for these languages."],
["Human-Computer Interaction 1", true, "To introduce the students to the subject of human-computer interaction and the importance of user-centred design. It covers the social, security, and safety aspects of computing and of using computers as a tool, various interaction devices and interface styles, and various aspects relating to the design and evaluation of interactive systems."],
["Human-Computer Interaction 2", true, "To provide students with a basic practical and theoretical introduction to human-computer interaction (HCI) and HCI as a design discipline, extend their technical knowledge of dialogue styles, equip them with a basic set of analysis and evaluation techniques, familiarise them with current software tools for interactive system development, give students experience in the iterative nature of user interface development."],
["Introduction to Business Information Systems", true, "To introduce students to information technology concepts such as hardware, software, database management, telecommunications, and office automation. It also covers the fundamentals of systems and information systems, types of information systems (e.g. transaction-processing systems, management information systems, decision support systems) and the management of business information systems."],
["Introduction to Programming 1", true, "To provide students with an introduction to programming and cover the fundamentals of control structures, problem-solving techniques, and the incremental testing of programs. This module was taught in C++."],
["Introduction to Programming 2", true, "To introduce students to the detailed design and implementation of algorithms as programs, and includes the fundamentals of simple data structures with object orientation. This module was taught in C++."],
["Introduction to Statistics", true, "To ensure that students are introduced to the most important basic statistical concepts. After completion students should have an informed understanding of different visual descriptions of data, including graphical and tabular techniques; measures of central location, dispersion and association. They should be able to use probability as a tool to create discrete and continuous probability distributions, used extensively in statistical inference; determine confidence intervals and perform hypothesis testing involving sample means proportions; apply different forms of Chi-square testing; understand simple linear regression and correlation."],
["Linear Algebra", true, "To enable students to understand and apply the following basic concepts in linear algebra: non-homogeneous and homogeneous systems of linear equations, Gaussian and Jordan-Gauss elimination, matrices and matrix operations, elementary determinants by cofactor expansion, the inverse of a matrix using the adjoint, Cramer's rule, evaluation determinants using row/column reduction, properties of the determinant function, vectors in 2-, 3-, and n-space, dot product, projections, cross product, areas of parallelograms and volumes of parallelepipeds determined by vectors, lines and planes in 3-space, and complex numbers."],
["Object-Oriented Analysis", true, "To enable an intermediate level systems analyst to analyse information systems according to the object-oriented approach using the tools, techniques and methodologies of systems development."],
["Operating Systems and Architecture", true, "To acquaint students with general operating system functionality such as CPU scheduling, process coordination and concurrency, deadlocks, memory management, protection and security. It also covers the case of distributed systems."],
["Programming: Contemporary Concepts", true, "To enable students to understand and apply the principles of object-oriented programming (inheritance, encapsulation, abstraction, and polymorphism). Students are also introduced to the Unified Modelling Language (UML) and required to apply it when designing solutions to problems introduced in the course. Students are also taught the principles of graphical user interface programming, design patterns, and how to apply them when designing and implementing contemporary software systems. This module was taught in C++."],
["Programming: Data Structures", true, "To show learners how abstract data types and data structures can be implemented and used in an object-oriented programming language. The module covers recursion, linked lists, dynamic memory allocation, binary trees, and graphs. This module was taught in C++."],
["Software Project Management", false, "To enable students to demonstrate their understanding of managing all phases of a software development project, which includes project initiation and process analysis, resource planning and allocation, project design, risk management, monitoring and control of a project, managing people and teams, implementation and coordination of projects."],
["Structured Systems Analysis and Design", false, "To enable an intermediate level systems analyst to analyse information systems, and design computerised solutions using structured analysis and design techniques."],
["Techniques of Artificial Intelligence", false, "To equip students with a basic understanding of knowledge representation approaches (logic-based and alternative approaches), search techniques (exhaustive and heuristic), automated reasoning, and basic skills in logic programming."],
["Theoretical Computer Science 1", false, "To introduce students to some concepts from Discrete Mathematics as a theoretical foundation for Computer Science. This background is relevant to relational databases, the development of provably correct programs, and the analysis of algorithms."],
["Theoretical Computer Science 2", true, "This module together with Theoretical Computer Science 3 will acquaint students with the capabilities and limitations of computers from a theoretical viewpoint. This module covers formal languages, recursive definitions, regular expressions, finite automata, Moore and Mealy machines, transition graphs, the pumping lemma, and decision problems."],
["Theoretical Computer Science 3", false, "To enable students to understand the concept of computability. In the process, they are introduced to context-free languages, recursively enumerable languages and the machines that accept them. It includes details of the Chomsky hierarchy, pushdown automata and Turing machines."],
["Visual Programming 1", true, "To introduce students to the concepts of components, conditional execution, iterative execution, event handling, and data structures in the visual programming paradigm. This module was taught in Python."],
["Visual Programming 2", true, "Students will acquire, apply and implement knowledge and skills of advanced visual programming required to develop menu-driven, multi-form, database and reporting applications. It includes object-oriented concepts in the visual programming paradigm. This module was taught in Python."]];

// Add the subjects to the list
const subjectContainer = document.getElementById("subject-list");
let subjectInfoElement = document.getElementById("subject-info")
let row = document.createElement("tr");

subjects.forEach((subject, i) => {
    let col = document.createElement("td");

    if (subject[1] === true) {
        let bold = document.createElement("b");
        bold.appendChild(document.createTextNode(subject[0]));
        col.appendChild(bold);
    } else {
        col.appendChild(document.createTextNode(subject[0]));
    }

    // Create a new row after every 5 subjects
    if (i % 5 == 0) {
        subjectContainer.appendChild(row);
        row = document.createElement("tr");
    }

    col.addEventListener("click", () => { displaySubjectInfo(i) });

    row.appendChild(col);
});

subjectContainer.appendChild(row);

function displaySubjectInfo(idx) {
    // Remove existing info
    while (subjectInfoElement.firstChild) {
        subjectInfoElement.removeChild(subjectInfoElement.firstChild);
    }

    let header = document.createElement("h2");
    header.appendChild(document.createTextNode(subjects[idx][0]));
    subjectInfoElement.appendChild(header);
    subjectInfoElement.appendChild(document.createTextNode(subjects[idx][2]));
}
