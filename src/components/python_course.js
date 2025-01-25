import React from 'react';
import styled from 'styled-components';
// import Hero from 'C:/Users/rohit/react_router/src/components/Hero.js';
 import Nextbutton from './nextbutton.js';
 import Mood from './mood.js'
 import Moodhead from './codemoodheading.js';
 import Footer from './footer.js'


const Card = () => {
  return (
    <StyledWrapper>
      
                  {/* <Hero  text="👨‍💻Welcome to Python Course.."/> */}
      <div className="card_container">
        <div className="card_hover">
          <div className="part part-1" />
          <div className="part part-2" />
          <div className="part part-3" />
          <div className="part part-4" />
          <div className="part part-5" />
          <div className="part part-6" />
          <div className="part part-7" />
          <div className="part part-8" />
          <div className="part part-9" />
          <div className="part part-10" />
          <div className="part part-11" />
          <div className="part part-12" />
          <div className="part part-13" />
          <div className="part part-14" />
          <div className="part part-15" />
        </div>
        <div className="card">
          <div className="say-hi">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 74" className="icon_say-hi">
              <path fill="black" d="M43.6574 32.6925C46.2318 27.3745 42.4638 8.00882 50.0978 4.62384C53.3046 3.19858 56.1818 5.55916 57.0637 8.98869C58.7918 15.723 56.7074 24.034 54.9793 30.5011C54.712 31.5166 53.8925 33.7525 54.0261 34.7413C58.5781 27.5437 59.4243 18.9209 63.0587 16.3644C65.9894 14.2978 68.9201 15.4647 70.372 18.7339C72.8573 24.3369 65.6776 37.2266 62.4084 41.7963C67.0227 52.1917 65.9538 64.93 54.9347 70.4083C51.7814 71.21 49.0734 71.2813 45.9556 70.2569C45.9378 70.2569 45.6973 70.1767 45.6706 70.1678C41.0741 73.2588 30.358 73.7309 27.4362 72.3502C20.6395 68.8138 18.2522 61.8479 6.11974 55.3273C4.40052 54.4098 1.96868 53.2518 0.721583 51.0159C-2.53869 45.1902 6.16428 41.0748 14.3773 44.5666C16.7023 45.5554 20.5772 48.1565 22.2251 50.624C23.7395 49.7688 22.9556 47.9071 22.047 44.4954C19.3479 34.4206 8.0082 21.9763 9.7096 14.7699C10.8676 9.85275 16.0965 7.11804 20.0338 10.984C25.5923 16.4535 29.0574 27.9624 31.7031 35.2045C32.8166 34.4117 32.7453 35.2668 31.5873 30.9554C30.2689 26.0472 28.6388 21.1657 27.6322 16.3377C26.492 10.8415 24.746 2.69084 31.4091 0.321349C40.1744 -2.80531 42.2232 18.4132 42.8201 23.6421L43.6841 32.7014L43.6574 32.6925ZM46.5881 69.5888H46.8197C47.5769 69.5977 48.3608 69.6155 49.0823 69.66C51.8615 69.8293 52.8859 69.2146 55.2109 68.1813C63.9584 64.2975 64.6087 52.2452 61.0455 43.5155C60.3685 41.8497 60.6447 41.3509 61.3128 40.2285C64.4661 34.9016 71.343 24.8714 68.6439 18.8051C67.7442 16.792 64.8314 16.2129 63.032 18.333C60.9297 20.8094 59.3976 28.4702 57.0815 32.2916C56.5114 33.2358 55.7275 34.1444 55.2554 34.9818C56.0839 35.5163 55.9859 35.3114 56.4134 36.3981C55.1396 36.3001 51.6299 35.828 50.9886 35.0352C53.1086 34.0821 53.2423 31.8195 54.0885 27.9891C54.6764 25.3079 55.2554 22.9918 55.6385 20.0879C55.9859 17.46 56.3333 14.5116 56.0126 11.7412C55.6117 8.29387 53.9905 4.63275 50.1512 6.34305C44.6105 8.80162 47.7728 25.9314 44.8689 33.6456C45.8131 34.2068 45.8398 33.9039 46.5792 35.2312L39.9696 34.67C41.9738 32.9063 42.152 35.1332 41.083 26.3768C40.602 22.4574 39.3906 11.0019 38.1969 7.79503C36.2728 2.62848 34.4467 0.704387 30.5629 2.43251C27.2135 3.92012 28.9862 13.9414 29.4939 16.8098C29.9571 19.402 30.7856 22.4039 31.5427 25.1208L34.0013 33.8238C34.3754 34.6611 34.8119 34.2603 35.774 35.1421C33.4134 36.1933 31.0973 36.3269 28.8347 37.1731C28.8169 35.8904 29.6365 36.1487 30.3045 35.1154C28.4517 30.51 20.5415 8.29387 15.0009 10.7524C2.31609 16.3822 24.8975 35.7122 24.4165 49.3056C31.9347 45.8048 38.1078 49.4927 42.2678 54.9532C39.542 54.971 36.3708 48.3792 28.2736 49.9559C25.8417 50.428 24.5501 51.4257 22.3142 52.2096C19.7398 50.9357 16.5776 46.8203 12.088 45.3951C10.44 44.8695 -0.391898 43.8985 2.18247 49.7065C3.58991 52.8777 8.96134 54.6681 11.3576 56.1112C15.179 58.4094 17.0497 60.4048 20.2743 63.7898C34.028 78.2294 44.9669 67.54 47.6036 67.8339C47.3898 68.4842 46.9711 69.0721 46.3743 69.5977L46.5703 69.5888H46.5881ZM53.6698 46.5798L43.31 44.914C37.5644 44.3617 35.6938 45.1724 33.7608 45.1545C32.291 45.1456 33.1907 45.3951 32.5048 44.6379C34.0102 42.9454 41.6531 43.1948 43.693 43.2839C47.2295 43.4353 50.9708 44.2994 53.6698 46.5798Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>
          <div className="title1">
            <span>Hi, I'm Rohi Welcome To Python Course</span>
          </div>
          <div className="paragraph">
            <span>Passionate about learning, beautiful and functional websites For Learning</span>
          </div>
        </div>
      </div>
                                  {/* ///////
                                  ///////  Script 
                                    //////////////// */}
 <div class="container3">
        <h1 ><a id='whatispy'>What is Python?</a></h1>
        <iframe width="760"  height="315" className='youtube' src="https://www.youtube.com/embed/hEgO047GxaQ?si=F9saf0FVvf1sbnN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
        <p>It is used for:</p>
        <ul>
            <li>Web development (server-side)</li>
            <li>Software development</li>
            <li>Mathematics</li>
            <li>System scripting</li>
        </ul>

        <h2>What can Python do?</h2>
        <ul>
            <li>Python can be used on a server to create web applications.</li>
            <li>Python can be used alongside software to create workflows.</li>
            <li>Python can connect to database systems. It can also read and modify files.</li>
            <li>Python can be used to handle big data and perform complex mathematics.</li>
            <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
        </ul>

        <h2>Why Python?</h2>
        <ul>
            <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
            <li>Python has a simple syntax similar to the English language.</li>
            <li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages.</li>
            <li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
            <li>Python can be treated in a procedural way, an object-oriented way or a functional way.</li>
        </ul>

        <h2>Good to know</h2>
        <ul>
            <li>The most recent major version of Python is Python 3, which we shall be using in this tutorial. However, Python 2, although not being updated with anything other than security updates, is still quite popular.</li>
            <li>In this tutorial, Python will be written in a text editor. It is possible to write Python in an Integrated Development Environment, such as Thonny, PyCharm, Netbeans or Eclipse which are particularly useful when managing larger collections of Python files.</li>
        </ul>

        <h2>Python Syntax compared to other programming languages</h2>
        <ul>
            <li>Python was designed for readability, and has some similarities to the English language with influence from mathematics.</li>
            <li>Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.</li>
            <li>Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions, and classes. Other programming languages often use curly brackets for this purpose.</li>
        </ul>
        
        <h2>Python-Course Topics</h2>
        <ul>
            <li><a href='#whatispy'>What is Python</a></li>
            <li><a href='#pyvariable'>Python Variables</a></li>
            <li><a href='#pydatatypes'>Python Data Types</a></li>
            <li><a href='#pynumbers'>Python Numbers</a></li>
            <li>Python Casting</li>
            <li>Python Strings</li>
            <li>Python Booleans</li>
            <li>Python Python Operators</li>
            <li>Python Python Lists</li>
            <li>Python Python Tuples</li>
            <li>Python Python Sets
            </li>
            <li>Python Dictionaries</li>
            <li>Python If...Else</li>
            <li>Python While Loops</li>
            <li>Python For Loops</li>
            <li>Python Functions</li>
            <li>Python Lambda</li>
            <li>Python Arrays</li>
            <li>Python Classes/Objects</li>
            <li>Python Inheritance</li>
            <li>Python Iterators</li>
            <li>Python Polymorphism</li>
            <li>Python Scope</li>
            <li>Python Modules</li>
            <li>Python Dates</li>
            <li>Python Math</li>
            <li>Python JSON</li>
            <li>Python RegEx</li>
            <li>Python PIP</li>
            <li>Python Try...Except</li>
            <li>Python User Input</li>
            <li>Python String Formatting</li>
        </ul>
        <h2>Example</h2>
        
        <div class="example">
            print("Hello, World!")
        </div>

        <a href="https://www.w3schools.com/python/trypython.asp?filename=demo_default" class="button3">Try it Yourself</a>
<div>
         {/* //Variables */}
         <div class="container_vari">
             <h1><a id='pyvariable'>Python Variables</a></h1>
             {/* https://www.youtube.com/embed/TqPzwenhMj0?si=e_cl2NSDNMVJ7Lbz */}
             <iframe width="760" height="315" className='youtube' src="https://www.youtube.com/embed/TqPzwenhMj0?si=e_cl2NSDNMVJ7Lbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             <p>Variables are containers for storing data values.</p>
     
             <h2>Creating Variables</h2>
             <p>Python has no command for declaring a variable.</p>
             <p>A variable is created the moment you first assign a value to it.</p>
     
             <h3>Example</h3>
             <div class="example1">
                 x = 5<br/>
                 y = "John"<br/>
                 print(x)<br/>
                 print(y)
             </div>
             <a href="#" class="button1">Try it Yourself</a>
     
             <p class="note">Variables do not need to be declared with any particular type, and can even change type after they have been set.</p>
     
             <h3>Example</h3>
             <div class="example1">
                 x = 4  # x is of type int<br/>
                 x = "Sally"  # x is now of type str<br/>
                 print(x)
             </div>
             <a href="#" class="button1">Try it Yourself</a>
     
             <h2>Casting</h2>
             <p>If you want to specify the data type of a variable, this can be done with casting.</p>
     
             <h3>Example</h3>
             <div class="example1">
                 x = str(3)    # x will be '3'<br/>
                 y = int(3)    # y will be 3<br/>
                 z = float(3)  # z will be 3.0
             </div>
             <a href="#" class="button1">Try it Yourself</a>
         </div>
</div>
<h1 ><a id='pydatatypes'>Python Data Types</a></h1>
{/* https://www.youtube.com/embed/gCCVsvgR2KU?si=3UAAQIk3diNvrjyr */}
<iframe width="760" height="315" className='youtube' src="https://www.youtube.com/embed/gCCVsvgR2KU?si=3UAAQIk3diNvrjyr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="section">
    <h2>Built-in Data Types</h2>
    <p>In programming, data type is an important concept. Variables can store data of different types, and different types can do different things.</p>
    <p>Python has the following built-in data types, divided into these categories:</p>
    <ul>
        <li>Text Type: <code class="code">str</code></li>
        <li>Numeric Types: <code class="code">int</code>, <code class="code">float</code>, <code class="code">complex</code></li>
        <li>Sequence Types: <code class="code">list</code>, <code class="code">tuple</code>, <code class="code">range</code></li>
        <li>Mapping Type: <code class="code">dict</code></li>
        <li>Set Types: <code class="code">set</code>, <code class="code">frozenset</code></li>
        <li>Boolean Type: <code class="code">bool</code></li>
        <li>Binary Types: <code class="code">bytes</code>, <code class="code">bytearray</code>, <code class="code">memoryview</code></li>
    </ul>
</div>

<div class="section">
    <h2>Getting the Data Type</h2>
    <p>You can get the type of any object by using the <code class="code">type()</code> function.</p>
    <p><strong>Example:</strong></p>
    <div class="code">x = 5
print(type(x))</div>
</div>

<div class="section">
    <h2>Setting the Data Type</h2>
    <p>In Python, the data type is set when you assign a value to a variable.</p>
    <p><strong>Example:</strong></p>
    <table>
        <thead>
            <tr>
                <th>Code</th>
                <th>Data Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code class="code">x = "Hello World"</code></td>
                <td>str</td>
            </tr>
            <tr>
                <td><code class="code">x = 20</code></td>
                <td>int</td>
            </tr>
            <tr>
                <td><code class="code">x = 20.5</code></td>
                <td>float</td>
            </tr>
            <tr>
                <td><code class="code">x = 1j</code></td>
                <td>complex</td>
            </tr>
            <tr>
                <td><code class="code">x = ["apple", "banana", "cherry"]</code></td>
                <td>list</td>
            </tr>
            <tr>
                <td><code class="code">x = ("apple", "banana", "cherry")</code></td>
                <td>tuple</td>
            </tr>
            <tr>
                <td><code class="code">x = range(6)</code></td>
                <td>range</td>
            </tr>
            <tr>
                <td><code class="code">x = ("name": "John", "age": 36)</code></td>
                <td>dict</td>
            </tr>
            <tr>
                <td><code class="code">x = ("apple", "banana", "cherry")</code></td>
                <td>set</td>
            </tr>
            <tr>
                <td><code class="code">x = frozenset("apple", "banana", "cherry")</code></td>
                <td>frozenset</td>
            </tr>
            <tr>
                <td><code class="code">x = True</code></td>
                <td>bool</td>
            </tr>
            <tr>
                <td><code class="code">x = b"Hello"</code></td>
                <td>bytes</td>
            </tr>
            <tr>
                <td><code class="code">x = bytearray(5)</code></td>
                <td>bytearray</td>
            </tr>
            <tr>
                <td><code class="code">x = memoryview(bytes(5))</code></td>
                <td>memoryview</td>
            </tr>
        </tbody>
    </table>
</div>


{/* ///python numbers  */}

<h1><a id='pynumbers'>Python Numbers</a></h1>
<iframe width="760" height="315" className='youtube' src="https://www.youtube.com/embed/AWAjbtWBzGs?si=mY4MKSoXuDkGceJr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="section">
    <h2>Introduction</h2>
    <p>There are three numeric types in Python:</p>
    <ul>
        <li><code class="code">int</code></li>
        <li><code class="code">float</code></li>
        <li><code class="code">complex</code></li>
    </ul>
    <p>Variables of numeric types are created when you assign a value to them:</p>
    <div class="code">x = 1    # int
y = 2.8  # float
z = 1j   # complex</div>
</div>

<div class="section">
    <h2>Verifying the Type</h2>
    <p>To verify the type of any object in Python, use the <code class="code">type()</code> function:</p>
    <div class="example">
        <strong>Example:</strong>
        <div class="code">print(type(x))
print(type(y))
print(type(z))</div>
        <a href="#" class="button1">Try it Yourself &gt;</a>
    </div>
</div>

<div class="section">
    <h2>Int</h2>
    <p><code class="code">int</code>, or integer, is a whole number, positive or negative, without decimals, of unlimited length.</p>
    <div class="example">
        <strong>Example:</strong>
        <div class="code">x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))</div>
        <a href="#" class="button1">Try it Yourself &gt;</a>
    </div>
</div>

<div class="section">
    <h2>Float</h2>
    <p><code class="code">float</code>, or "floating point number," is a number, positive or negative, containing one or more decimals.</p>
    <div class="example">
        <strong>Example:</strong>
        <div class="code">x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))</div>
        <a href="#" class="button1">Try it Yourself &gt;</a>
    </div>

    <p>Float can also be scientific numbers with an "e" to indicate the power of 10.</p>
    <div class="example">
        <strong>Example:</strong>
        <div class="code">x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))</div>
        <a href="#" class="button1">Try it Yourself &gt;</a>
    </div>
    

<div class="section">
    <h2>Complex</h2>
    <p>Complex numbers are written with a "j" as the imaginary part:</p>
    <p><strong>Example:</strong></p>
    <div class="code"># Complex:
x = 1 + 2j
y = 3 + 4j
print(x)
print(y)
print(type(x))
print(type(y))</div>
    <a href="#" class="button1">Try it Yourself &raquo;</a>
</div>

<div class="section">
    <h2>Type Conversion</h2>
    <p>You can convert from one type to another with the <code class="code">int()</code>, <code class="code">float()</code>, and <code class="code">complex()</code> methods:</p>
    <p><strong>Example:</strong></p>
    <div class="code"># Convert from one type to another:
x = 1   # int
y = float(x)
z = complex(x)

print(x)
print(y)
print(z)
print(type(x))
print(type(y))
print(type(z))</div>
    <p><strong>Note:</strong> You cannot convert complex numbers into another number type.</p>
    <a href="#" class="button1">Try it Yourself &raquo;</a>
</div>

<div class="section">
    <h2>Random Number</h2>
    <p>Python does not have a <code class="code">random()</code> function to make a random number, but Python has a built-in module called <code class="code">random</code> that can be used to make random numbers:</p>
    <p><strong>Example:</strong></p>
    <div class="code"># Import the random module, and display a random number between 1 and 9:
import random

print(random.randrange(1, 10))</div>
    <a href="#" class="button1">Try it Yourself &raquo;</a>
</div>

<div class="note">
    <p><strong>Note:</strong> In our <em>Random Module Reference</em> you will learn more about the Random module.</p>
</div>

<div class="exercise1">
    <h3>Exercise</h3>
    <p>Which is NOT a legal numeric data type in Python:</p>
    <ul>
        <li><input type="radio" name="answer"/> <label for="int">int</label></li>
        <li><input type="radio" name="answer"/> <label for="long">long</label></li>
        <li><input type="radio" name="answer"/> <label for="float">float</label></li>
    </ul>
    <button>Submit Answer</button>
</div>
</div>

<h1 className='coding mood'>CODING MOOD </h1> 
  <Moodhead/> 
    <Mood/>
    </div>

    



    <Nextbutton/> 


         
     




                    {/* Download Source */}
                    <hr/>
      <div className="card1">
        <div className="image_container">
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg> */}
          {/* <img src='pythonimage.jpg'className='container'/> */}
          <img src='https://tse1.mm.bing.net/th?id=OIP.Jl2AWryzVJ0fIag0lgzfugHaKe&pid=Api&P=0&h=180'className='container'/>

        </div>
        <div className="title">
          <span>Python Notes</span>
        </div>
        <div className="size">
          <span>Hand-Written</span>
          {/* <ul className="list-size">
            <li className="item-list"><button className="item-list-button">1.8.9</button></li>
            <li className="item-list">
              <button className="item-list-button">1.21.1</button>
            </li>
          </ul> */}
        </div>
        <div className="action">
          <button className="download-button">
            <span className="button-text">DOWNLOAD</span>
            <span className="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="download-svg">
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
              </svg>
            </span>
          </button>
          
        </div>
        
      </div>

      <br/>
      <hr/>
      <Footer/>

      
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

         /* script css */
         /* .container_vari {
            max-width: 900px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        } */

            .exercise1 {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 15px;
            margin-top: 20px;
        }

        .exercise1 h3 {
            margin-top: 0;
        }

        .exercise1 button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }


        .section {
            margin-bottom: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        table, th, td {
            border: 1px solid #ccc;
        }

        th, td {
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f4f4f4;
        }

        .code {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            padding: 10px;
            font-family: 'Courier New', Courier, monospace;
            display: inline-block;
            white-space: pre-wrap;
        }

        .button {
            background-color: #4CAF50;
            color: white;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            display: inline-block;
        }
        h1, h2 {
            color: #444;
        }
        .example {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            color: #222;
            margin: 10px 0;
        }
        p {
            margin: 10px 0;
        }
        .button1 {
            display: inline-block;
            margin-top: 10px;
            background: #007BFF;
            color: #fff;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 5px;
        }
        .button1:hover {
            background: #0056b3;
        }
        .note {
            color: #555;
            font-style: italic;
            margin: 10px 0;
        }



       .container3 {
            max-width: 800px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #444;
        }
        h2 {
            color: #555;
            margin-top: 20px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .example {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            color: #222;
            margin-top: 20px;
        }
        .button3 {
            display: inline-block;
            margin-top: 10px;
            background: #007BFF;
            color: #fff;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 5px;
        }
        .button3:hover {
            background: #0056b3;
        }








  .card_container {
    --X: 0deg;
    --Y: 0deg;
    --Z: 0deg;
    --angleX: 15deg;
    --angleY: 20deg;

    cursor: pointer;

    position: relative;
    margin-top: 10px;
    
  }

  .card_hover {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;

    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
  }

  .card_hover .part {
    width: 20%;
    height: calc(100% / 3);
    background-color: transparent;
  }

  .card_container:has(.part-1:hover) {
    --X: var(--angleX);
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-2:hover) {
    --X: var(--angleX);
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-3:hover) {
    --X: var(--angleX);
  }
  .card_container:has(.part-4:hover) {
    --X: var(--angleX);
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-5:hover) {
    --X: var(--angleX);
    --Y: var(--angleY);
  }
  .card_container:has(.part-6:hover) {
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-7:hover) {
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-9:hover) {
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-10:hover) {
    --Y: var(--angleY);
  }
  .card_container:has(.part-11:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-12:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-13:hover) {
    --X: calc(var(--angleX) * -1);
  }
  .card_container:has(.part-14:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-15:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: var(--angleY);
  }
  .youtube{
   
   max-width: 100%;
   height:315;
   display: block;
   position: relative;









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

  }

  .card {
    --light: #d9d9d9;
    --dark: #1f1f1f;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
 

    padding: 1.5rem;

    width: auto;
    background-color: rgb(172, 250, 233);
    background-image: linear-gradient(
      135deg,
      rgba(172, 250, 233, 1) 0%,
      rgba(213, 143, 235, 1) 50%,
      rgba(242, 126, 241, 1) 100%
    );

    border-radius: 0.5rem;

    transform-origin: center;
    transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
    transition: transform 0.3s ease-in-out;
  }

  .say-hi {
    position: relative;

    width: 100%;
    height: 2rem;
    background-color: transparent;
  }

  .icon_say-hi {
    position: absolute;
    bottom: 0;
    left: -0.5rem;

    width: 3rem;

    opacity: 0;
    transform-origin: 60% 90%;
    transform: translate(-15deg);
    filter: drop-shadow(0 0 0.5rem #2b2b2b);
    transition: all 0.2s ease-in-out;
  }

  .card_container:hover .card .icon_say-hi {
    width: 3.5rem;

    opacity: 1;
    animation: say-hi 0.35s linear infinite alternate;
  }

  @keyframes say-hi {
    to {
      transform: rotate(25deg);
    }
  }

  .title1 {
    overflow: clip;

    width: 100%;

    font-size: 1.5rem;
    font-weight: 600;
    color: var(--dark);
    text-transform: capitalize;
    text-wrap: nowrap; 
    text-overflow: ellipsis;
  }

  .paragraph {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--dark);
  };
  .card1 {
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    width: 14rem;
    background-color: var(--bg-card);
    border-radius: 1rem;
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 5;
    width: 100%;
    height: 8rem;
    background-color: var(--primary-800);
    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;
    padding: 0.5rem;
    background-color: var(--zinc-800);
    font-size: 0.75rem;
    color: var(--light);
    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }

  .item-list-button:focus {
    background-color: var(--primary);
    border: 2px solid var(--primary-shadow);
    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }


  /* New Download Button Styles */
  .download-button {
    position: relative;
    width: 100%;
    height: 2.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: var(--bg-linear);
    border: 2px solid hsla(262, 18%, 57%, 0.5);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .button-text {
    color: var(--light);
    font-weight: 750;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .button-icon {
    position: absolute;
    height: 100%;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-800);
    right: -2.5rem;
    transition: all 0.3s ease;
  }

  .download-svg {
    width: 1.25rem;
    fill: var(--light);
  }

  .download-button:hover {
    background: var(--primary-800);
  }

  .download-button:hover .button-text {
    transform: translateX(-1.25rem);
    opacity: 0;
  }

  .download-button:hover .button-icon {
    right: 0;
    width: 100%;
  }

  .download-button:active {
    transform: scale(0.95);
  }

  .download-button:active .button-icon {
    background-color: var(--primary-shadow);
  }`;


export default Card;
