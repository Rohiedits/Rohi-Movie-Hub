import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import Footer from './footer.js'
import Nav from 'react-bootstrap/Nav';
import Codeingbtn from './codingbtn.js';
import Nextbutton from './nextbutton.js';
import Nav3 from './Nav3.js'
import Quize6 from './quize6.js'
import Aiphoto from './aiphoto.js';
import Mood from './mood.js'
// import datetime
// import datetime
// import math
// import random
// import json
// import json
// import re
// import re
// import math
// import numpy as np
// import mymodule
// import datetime
const python3_0 = () => {
  return (
    <StyledWrapper>
     
      <div className='container'>
        <center>
        <h2>Python-Course Topics in This Page-6</h2>
        <ul>
          <><a href='#pylist'>Python Modules</a></><br/>
          <><a href='#pytuples'>Python Dates</a></><br/>
          <><a href='#pysets'>Python Maths</a></><br/>
          <><a href='#pydist'>Python JSON</a></><br/>
          <><a href='#pyarrays'>Python RegEx</a></><br/>
        </ul>
        </center>
        <div id='pylist' className='section'>
          <h1>Python Modules</h1>
          <iframe width="960" height="455" className='youtube' src=" https://www.youtube.com/embed/WfcozEiBIJU?si=CDWEF6kW997X3Lcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         
          <div className='example-section'>
            <h3>Example 1</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Importing a module

print(math.sqrt(16))`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 2</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Using alias for a module

arr = np.array([1, 2, 3, 4])
print(arr)`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 3</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Importing specific functions
from math import pi, e

print(pi)
print(e)`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 4</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Custom module
# mymodule.py
def greeting(name):
    print(f"Hello, {name}")

# main.py

mymodule.greeting("Alice")`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 5</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Built-in modules

now = datetime.datetime.now()
print(now)`}
                </code>
              </pre>
            </div>
          </div>
       

        <div id='pytuples' className='section'>
          <h1>Python Dates</h1>
          <iframe width="960" height="455" className='youtube' src=" https://www.youtube.com/embed/zY02utxcauo?si=VwDQxvyvv-zq7f3D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
          <div className='example-section'>
            <h3>Example 1</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`import datetime
                  # Getting current date and time

                    now = datetime.datetime.now()
                    print(now)`}
                </code>
              </pre>
              </div>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 2</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`import datetime
                  # Creating a date object

d = datetime.date(2020, 5, 17)
print(d)`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div id='pysets' className='section'>
          <h1>Python Maths</h1>
          <div className='example-section'>
            <h3>Example 1</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`import math
                  # Using math module

print(math.pi)`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 2</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Using random module

print(random.randint(1, 10))`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div id='pydist' className='section'>
          <h1>Python JSON</h1>
          <iframe width="960" height="455" className='youtube' src=" https://www.youtube.com/embed/-51jxlQaxyA?si=NYCXrj8RBjRnm__G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className='example-section'>
            <h3>Example 1</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {
                  ` import json
                  # Parsing JSON

x = '{"name": "John", "age": 30, "city": "New York"}'
y = json.loads(x)
print(y["age"])`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 2</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`
                   import json
                   # Converting to JSON

x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
y = json.dumps(x)
print(y)`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div id='pyarrays' className='section'>
          <h1>Python RegEx</h1>
          <iframe width="960" height="455" className='youtube' src=" https://www.youtube.com/embed/wnuBwl2ekmo?si=fsfiDQd-qarqtOIq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className='example-section'>
            <h3>Example 1</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Using re module

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)
print(x)`}
                </code>
              </pre>
            </div>
          </div>
          <div className='example-section'>
            <h3>Example 2</h3>
            <div className='code-block'>
              <pre>
                <code>
                  {`# Finding all matches

txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <center><Quize6/>
          <Nav3/><br/>
          <Nav.Link href="https://www.online-python.com/" ><Mood/></Nav.Link>
          </center>
        <Nav.Link href="/Python7"><Nextbutton /></Nav.Link>
        <a href="#"><Codeingbtn /></a>
        <hr />
        <Footer />
        <Aiphoto/>
        </div>
        
      
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`

.container {
    max-width: 1500px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 20px;
        }

        h3 {
            font-size: 1.25rem;
            margin-bottom: 10px;
        }

        ul {
            list-style: disc inside;
            margin: 10px 0;
            padding: 0;
        }

        .btn {
            display: inline-block;
            margin: 10px 0;
            padding: 10px 20px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .section {
            margin-bottom: 20px;
        }

        .example-section {
            margin-bottom: 20px;
        }

        .code-block {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: monospace;
            overflow-x: auto;
        }

        .exercise {
            background: #f9f9f9;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
        }

        .options {
            list-style: none;
            padding: 0;
        }
        .youtube{
   
   max-width: 100%;
   height:315;
   display: block;
   position: relative;
   justify-content: center;
   align-items: center;
    margin-left: auto;
    margin-right: auto;
   

     border-radius: 0.5rem;
     padding: 0.25rem;
     background-color: rgb(172, 250, 233);
     background-size: cover;
    background-image: linear-gradient(
      135deg,
      rgba(172, 250, 233, 1) 0%,
      rgba(213, 143, 235, 1) 50%,
      rgba(242, 126, 241, 1) 100%
    );
    transform-origin: center;
    transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
    transition: transform 0.3s ease-in-out;
  }


`;

export default python3_0
