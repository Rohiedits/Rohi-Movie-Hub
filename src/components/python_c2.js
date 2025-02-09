import React from 'react'
import Hero from './Hero'
import styled from 'styled-components';
import Nextbutton from './nextbutton.js';
import Mood from './mood.js'
import Moodhead from './codemoodheading.js';
import Footer from './footer.js'
import Nav from 'react-bootstrap/Nav';
import Codeingbtn from './codingbtn.js';
import Nav3 from './Nav3.js'

// import S1 from './s1.png'

import Quiz from './quize.js';



function python_c2() {
  return (
    
    <StyledWrapper>
      <Hero  text="👨‍💻 Python Course.."/> 
      <div class="container">
<center>
      <h2>Python-Course Topics in This Page-2</h2>
        <ul>
           
            <><a href='#pynumbers'>Python Numbers</a></><br/>
            <><a href='#pycast'>Pythin Casting</a></><br/>
            <><a href='#pystrings'>Python Strings</a></><br/>
            <><a href='#pybool'>Python Booleans</a></><br/>
            <><a href='#pyop'>Python Operaters</a></><br/>
            </ul>
            </center>
        <h1 id='pycast'>Python Casting</h1>
        <iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/Qtq83lAoogM?si=jypEFN-PoVOX225F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        {/* <a href="#" class="btn">&lt; Previous</a> */}

        <section class="section">
            <h2 id='pycast'>Specify a Variable Type</h2>
            <p>
                There may be times when you want to specify a type on to a variable. This
                can be done with casting. Python is an object-orientated language, and
                as such it uses classes to define data types, including its primitive
                types.
            </p>
            <p>Casting in python is therefore done using constructor functions:</p>
            <ul>
                <li><b>int()</b> - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)</li>
                <li><b>float()</b> - constructs a float number from an integer literal, a float literal, or a string literal (providing the string represents a float or an integer)</li>
                <li><b>str()</b> - constructs a string from a wide variety of data types, including strings, integer literals and float literals</li>
            </ul>
        </section>

        <section class="example-section">
            <h3>Example</h3>
            <p>Integers:</p>
            <pre class="code-block">
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3
            </pre>
            <a href="#" class="btn">Try it Yourself</a>
        </section>

        <section class="example-section">
            <h3>Example</h3>
            <p>Floats:</p>
            <pre class="code-block">
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2
            </pre>
            <a href="#" class="btn">Try it Yourself</a>
        </section>

        <section class="example-section">
            <h3>Example</h3>
            <p>Strings:</p>
            <pre class="code-block">
x = str("s1")    # x will be 's1'
y = str(2)      # y will be '2'
z = str(3.0)    # z will be '3.0'
            </pre>
            <a href="#" class="btn">Try it Yourself</a>
        </section>

        <section class="exercise">
            <h3>Exercise</h3>
            <p>What will be the result of the following code:</p>
            <pre class="code-block">print(int(35.88))</pre>
            <ul class="options">
            <li><input type="radio" name="answer"/> <label for="int">35</label></li>
            <li><input type="radio" name="answer"/> <label for="int">35.8</label></li>
            <li><input type="radio" name="answer"/> <label for="int">36</label></li>
            </ul>
            <a href="#" class="btn">Submit Answer</a>
        </section>
    </div>
    <div class="container">
    <h1 id='pystrings'>Strings</h1>
    <iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/IWk44K-6bnQ?si=1kWxFtER6PEBc0sq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>
      Strings in python are surrounded by either single quotation marks, or double quotation marks.
      <br/>
      <code>'hello'</code> is the same as <code>"hello"</code>.
    </p>
    <p>You can display a string literal with the <code>print()</code> function:</p>

    <section class="example-section">
      <h2>Example</h2>
      <pre class="code-block">
print("hello")
print('hello')
      </pre>
      <button class="btn">Try it Yourself</button>
    </section>

    <section class="section">
      <h2>Quotes Inside Quotes</h2>
      <p>
        You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
      </p>
      <section class="example-section">
        <h2>Example</h2>
        <pre class="code-block">
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')
        </pre>
        <button class="btn">Try it Yourself</button>
      </section>
    </section>

    <section class="section">
      <h2>Assign String to a Variable</h2>
      <p>
        Assigning a string to a variable is done with the variable name followed by an equal sign and the string:
      </p>
      <section class="example-section">
        <h2>Example</h2>
        <pre class="code-block">
a = "hello"
print(a)
        </pre>
        <button class="btn">Try it Yourself</button>
      </section>
    </section>

    <section class="section">
      <h2>Multiline Strings</h2>
      <p>You can assign a multiline string to a variable by using three quotes:</p>
      <section class="example-section">
        <h2>Example</h2>
        <p>You can use three double quotes:</p>
        <pre class="code-block">
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
        </pre>
        <button class="btn">Try it Yourself</button>
      </section>
      <section class="example-section">
        <p>Or three single quotes:</p>
        <pre class="code-block">
a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a)
        </pre>
        <button class="btn">Try it Yourself</button>
      </section>
    </section>

    
        <h1 id='pybool'>Python Booleans</h1>
        <p>Booleans represent one of two values: <strong>True</strong> or <strong>False</strong>.</p>

        <h2>Boolean Values</h2>
        <p>In programming, you often need to know if an expression is <strong>True</strong> or <strong>False</strong>. You can evaluate any expression in Python, and it will return one of two answers: <strong>True</strong> or <strong>False</strong>. When you compare two values, the expression is evaluated and Python returns the Boolean answer:</p>

        <div class="code-block">
            print(10 &gt; 9)<br/>
            print(10 == 9)<br/>
            print(10 &lt; 9)
        </div>
        <a href="#" class="btn">Try it Yourself</a>

        <h2>Example</h2>
        <p>When you run a condition in an if statement, Python returns <strong>True</strong> or <strong>False</strong>:</p>

        <div class="code-block">
            a = 200<br/>
            b = 33<br/><br/>
            if b &gt; a:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;print("b is greater than a")<br/>
            else:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;print("b is not greater than a")
        </div>
        <a href="#" class="btn">Try it Yourself</a>

        <h2>Evaluate Values and Variables</h2>
        <p>The <strong>bool()</strong> function allows you to evaluate any value, and give you <strong>True</strong> or <strong>False</strong> in return:</p>

        <h3>Example</h3>
        <p>Evaluate a string and a number:</p>
        <div class="code-block">
            print(bool("Hello"))<br/>
            print(bool(15))
        </div>
        <a href="#" class="btn">Try it Yourself</a>

        <h3>Example</h3>
        <p>Evaluate two variables:</p>
        <div class="code-block">
            x = "Hello"<br/>
            y = 15<br/><br/>
            print(bool(x))<br/>
            print(bool(y))
        </div>
        <a href="#" class="btn">Try it Yourself</a>
        <div class="container">
        <h1 id='pyop'>Python Operators</h1>
        <iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/v5MR5JnKcZI?si=qeHvQop1Olc2zm4_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Operators are used to perform operations on variables and values. In the example below, we use the <code>+</code> operator to add together two values:</p>
         <li>Arithmetic operators</li>
         <li>Assignment operators</li>
         <li>Comparison operators</li>
         <li>Logical operators</li>
         <li>Identity operators</li>
         <li>Membership operators</li>
         <li>Bitwise operators</li>
         <h2>Python Arithmetic Operators</h2>
        <div class="code-block">
            print(10 + 5)
        </div>
        <a href="#" class="btn">Run example</a>

        <h2>Python Arithmetic Operators</h2>
        <p>Arithmetic operators are used with numeric values to perform common mathematical operations:</p>

        <table>
            <thead>
                <tr>
                    <th>Operator</th>
                    <th>Name</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>+</td>
                    <td>Addition</td>
                    <td>x + y</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>Subtraction</td>
                    <td>x - y</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>Multiplication</td>
                    <td>x * y</td>
                </tr>
                <tr>
                    <td>/</td>
                    <td>Division</td>
                    <td>x / y</td>
                </tr>
                <tr>
                    <td>%</td>
                    <td>Modulus</td>
                    <td>x % y</td>
                </tr>
                <tr>
                    <td>**</td>
                    <td>Exponentiation</td>
                    <td>x ** y</td>
                </tr>
                <tr>
                    <td>//</td>
                    <td>Floor division</td>
                    <td>x // y</td>
                </tr>
            </tbody>
        </table>

        <h2>Python Assignment Operators</h2>
        <p>Assignment operators are used to assign values to variables:</p>

        <table>
            <thead>
                <tr>
                    <th>Operator</th>
                    <th>Example</th>
                    <th>Same As</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>=</td>
                    <td>x = 5</td>
                    <td>x = 5</td>
                </tr>
                <tr>
                    <td>+=</td>
                    <td>x += 3</td>
                    <td>x = x + 3</td>
                </tr>
                <tr>
                    <td>-=</td>
                    <td>x -= 3</td>
                    <td>x = x - 3</td>
                </tr>
                <tr>
                    <td>*=</td>
                    <td>x *= 3</td>
                    <td>x = x * 3</td>
                </tr>
                <tr>
                    <td>/=</td>
                    <td>x /= 3</td>
                    <td>x = x / 3</td>
                </tr>
                <tr>
                    <td>%=</td>
                    <td>x %= 3</td>
                    <td>x = x % 3</td>
                </tr>
                <tr>
                    <td>//=</td>
                    <td>x //= 3</td>
                    <td>x = x // 3</td>
                </tr>
                <tr>
                    <td>**=</td>
                    <td>x **= 3</td>
                    <td>x = x ** 3</td>
                </tr>
                <tr>
                    <td>&amp;=</td>
                    <td>x &amp;= 3</td>
                    <td>x = x &amp; 3</td>
                </tr>
                <tr>
                    <td>|=</td>
                    <td>x |= 3</td>
                    <td>x = x | 3</td>
                </tr>
                <tr>
                    <td>^=</td>
                    <td>x ^= 3</td>
                    <td>x = x ^ 3</td>
                </tr>
                <tr>
                    <td>&gt;&gt;=</td>
                    <td>x &gt;&gt;= 3</td>
                    <td>x = x &gt;&gt; 3</td>
                </tr>
                <tr>
                    <td>&lt;&lt;=</td>
                    <td>x &lt;&lt;= 3</td>
                    <td>x = x &lt;&lt; 3</td>
                </tr>
            </tbody>
        </table>
        <h2>Python Comparison Operators</h2>
    <table>
        <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>==</td>
            <td>Equal</td>
            <td>x == y</td>
        </tr>
        <tr>
            <td>!=</td>
            <td>Not equal</td>
            <td>x != y</td>
        </tr>
        <tr>
            <td></td>
            <td>Greater than</td>
            <td>x  y</td>
        </tr>
        <tr>
            <td>  </td>
            <td>Less than</td>
            <td>x  y</td>
        </tr>
        <tr>
            <td></td>
            <td>Greater than or equal to</td>
            <td>x  y</td>
        </tr>
        <tr>
            <td></td>
            <td>Less than or equal to</td>
            <td>x  y</td>
        </tr>
    </table>

    <h2>Python Logical Operators</h2>
    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>and</td>
            <td>Returns True if both statements are true</td>
            <td>x &lt; 5 and x &lt; 10</td>
        </tr>
        <tr>
            <td>or</td>
            <td>Returns True if one of the statements is true</td>
            <td>x &lt; 5 or x &gt; 4</td>
        </tr>
        <tr>
            <td>not</td>
            <td>Reverses the result, returns False if the result is true</td>
            <td>not(x &lt;= 5 and x &lt; 10)</td>
        </tr>
    </table>

    <h2>Python Identity Operators</h2>
    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>is</td>
            <td>Returns True if both variables are the same object</td>
            <td>x is y</td>
        </tr>
        <tr>
            <td>is not</td>
            <td>Returns True if both variables are not the same object</td>
            <td>x is not y</td>
        </tr>
    </table>

    <h2>Python Membership Operators</h2>
    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>in</td>
            <td>Returns True if a sequence with the specified value is present in the object</td>
            <td>x in y</td>
        </tr>
        <tr>
            <td>not in</td>
            <td>Returns True if a sequence with the specified value is not present in the object</td>
            <td>x not in y</td>
        </tr>
    </table>

    <h2>Python Bitwise Operators</h2>
    <table>
        <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>&amp;</td>
            <td>AND</td>
            <td>Sets each bit to 1 if both bits are 1</td>
            <td>x &amp; y</td>
        </tr>
        <tr>
            <td>|</td>
            <td>OR</td>
            <td>Sets each bit to 1 if one of two bits is 1</td>
            <td>x | y</td>
        </tr>
        <tr>
            <td>^</td>
            <td>XOR</td>
            <td>Sets each bit to 1 if only one of two bits is 1</td>
            <td>x ^ y</td>
        </tr>
        <tr>
            <td>~</td>
            <td>NOT</td>
            <td>Inverts all the bits</td>
            <td>~x</td>
        </tr>
        <tr>
            <td>&lt;&lt;</td>
            <td>Zero fill left shift</td>
            <td>Shift left by pushing zeros in from the right and let the leftmost bits fall off</td>
            <td>x &lt;&lt; 2</td>
        </tr>
        <tr>
            <td>&gt;&gt;</td>
            <td>Signed right shift</td>
            <td>Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off</td>
            <td>x &gt;&gt; 2</td>
        </tr>
    </table>
    <Quiz/>
    <br/>

    
    {/* <img src={S1} alt='s1' /> */}

    <h1 className='coding mood'>CODING MOOD </h1> <br/>
  <Moodhead/> <br/>
  <Mood/>
  <center>
    <Nav3/>
  </center>
    
    </div>

    


   
    <Nav.Link href="/Python_p3.0" >   <Nextbutton/>   </Nav.Link>
    <a href="#" >   <Codeingbtn/>   </a>
      <hr/>
      <Footer/>

    </div>
    
    
  
 
  
  
    </StyledWrapper>
  )
};
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

table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table th, table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        table th {
            background-color: #f4f4f4;

        .options li {
            padding: 5px 0;
        }

        
  }`;


export default python_c2;
