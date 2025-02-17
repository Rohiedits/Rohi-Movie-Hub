import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="page">
        <div className="margin" />
        <p><h2 style={{textDecoration:"underline"}}>SQL-Full-Course Topics In Rohi-Learning-Hub</h2></p><br/>
    

1.SQL Course for Beginners<br/>
2.Databases<br/>
3.Database Management System (DBMS)<br/>
4.Relational and Non-Relational Databases<br/>
5.MySQL Installation<br/>
6.MySQL Workbench<br/>
7.SQL Queries<br/>
8.SQL Cheat Sheet<br/>
9.SQL Fundamentals<br/>
10SQL Syntax<br/>
11.SQL Statements<br/>
12.SQL Keywords<br/>
13.SQL Functions<br/>
14.Tables<br/>
15.Views<br/>
16.Stored Procedures<br/>
17.Functions<br/>
18.Columns<br/>
19.Rows<br/>
20.Relationships<br/>
21.Data Retrieval<br/>
22.Data Filtering<br/>
23.Data Sorting<br/>
24.Subqueries<br/>
25.Joins<br/>
26.Indexes<br/>
27.Data Types<br/>
28.Data Definition Language (DDL)<br/>
29.Data Manipulation Language (DML)<br/>
30.Data Control Language (DCL)<br/>
31ACID Properties<br/>
32.Normalization<br/>
33.Database Design<br/>
34Security<br/>
35.Transactions<br/>
36.Events<br/>
37.User-Defined Functions<br/>
38.Triggers<br/>
39.Cursors<br/>
40.Error Handling<br/>
41.Performance Optimization<br/>
42.Backup and Recovery<br/>
43.Import and Export<br/>
44.Cloud Databases<br/>
45.Database Administration<br/>
46.Relational Databases<br/>
47.Non-relational databases<br/>
48.Create databases<br/>
49.Administration<br/>
50.Schemas<br/>
51.Navigator panel<br/>
52.Query editor window<br/>
53.Output window<br/>
54.Tool bar<br/>
55.Contacts held<br/>
56.Snippets



      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .page {
    position: relative;
    box-sizing: border-box;
    max-width: 3000px;
    font-family: cursive;
    font-size: 20px;
    border-radius: 10px;
    background: #fff;
    background-image: linear-gradient(#f5f5f0 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;
    line-height: 1.2rem;
    padding: 1.4rem 0.5rem 0.3rem 4.5rem;
  }

  .page::before,
  .page::after {
    position: absolute;
    content: "";
    bottom: 10px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease;
  }

  .page::before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  .page::after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  .page:hover::before,
  .page:hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  .margin {
    position: absolute;
    border-left: 1px solid #d88;
    height: 100%;
    left: 3.3rem;
    top: 0;
  }

  .page p {
    margin: 0;
    text-indent: 1rem;
    padding-bottom: 1.2rem;
    color: black;
    line-height: 20px;
  }`;

export default Card;
