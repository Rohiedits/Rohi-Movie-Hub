import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import Footer from './footer.js'
import Nav from 'react-bootstrap/Nav';
import Codeingbtn from './codingbtn.js';
import Nextbutton from './nextbutton.js';
import Nav3 from './Nav3.js'
import Quiz4 from './quize4.js';
import Aiphoto from './aiphoto.js';
import Mood from './mood.js';

const python4 = () => {
return (
    <StyledWrapper>
        <Hero text="👨‍💻 Python Course.." />
        <div className='container'>
            <center>
        <h2>Python-Course Topics in This Page-4</h2>
        <ul>
        {/* about Python Inheritance,
Python Iterators,
Python Polymorphism,
Python Scope each topic having 5 codes and details using same style in this file */}
            <><a href='#pylist'>Python While Loops</a></><br/>
            <><a href='#pytuples'>Python For Loops</a></><br/>
            <><a href='#pysets'>Python Functions</a></><br/>
            <><a href='#pydist'>Python Lambda</a></><br/>
            <><a href='#pyarrays'>Python Arrays</a></><br/>
        </ul>
        </center>
        <div className="section">
            <h1 id="pylist">Python While Loops</h1>
            <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/HZARImviDxg?si=MK4IaRD3zxvbijUd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>While loops in Python are used to execute a block of code as long as a condition is true.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a while loop
count = 0
while count < 5:
    print(count)
    count += 1`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print the numbers from 0 to 4.</p>
            <h2>More Information on While Loops</h2>
            <p>While loops are useful when the number of iterations is not known beforehand. The loop continues to execute as long as the condition remains true. If the condition is false initially, the loop body will not be executed at all.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a while loop with a break statement
count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print the numbers from 0 to 4 and then exit when the count reaches 5 due to the break statement.</p>
            <h2>Additional Examples</h2>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a while loop with a continue statement
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue
    print(count)`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print the numbers 1, 2, 4, and 5, skipping the number 3 due to the continue statement.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a while loop with an else clause
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("Loop finished")`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print the numbers from 0 to 4 and then print "Loop finished" after the loop ends.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a nested while loop
outer_count = 0
while outer_count < 3:
    inner_count = 0
    while inner_count < 3:
        print(f"outer: {outer_count}, inner: {inner_count}")
        inner_count += 1
    outer_count += 1`}
                    </code>
                </pre>
            </div>
            <p>In this example, the nested loop will print the values of outer_count and inner_count for each iteration.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of an infinite while loop (use with caution)
while True:
    print("This will print forever")`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print "This will print forever" indefinitely. Use with caution and ensure to have a break condition to avoid infinite loops.</p>
        </div>
        <div className="section">
            <h1 id="pytuples">Python For Loops</h1>
            <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/0ZvaDa8eT5s?si=TwNyrTxyj1Dly_Gn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>For loops in Python are used to iterate over a sequence (such as a list, tuple, dictionary, set, or string) and execute a block of code for each item in the sequence.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a for loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print each fruit in the list.</p>
            <h2>More Information on For Loops</h2>
            <p>For loops are useful when you need to iterate over a sequence of items. The loop continues to execute until it has gone through all the items in the sequence.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a for loop with a break statement
for fruit in fruits:
    if fruit == "banana":
        break
    print(fruit)`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print "apple" and then exit when it encounters "banana" due to the break statement.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a for loop with a continue statement
for fruit in fruits:
    if fruit == "banana":
        continue
    print(fruit)`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print "apple" and "cherry", skipping "banana" due to the continue statement.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a for loop with an else clause
for fruit in fruits:
    print(fruit)
else:
    print("Loop finished")`}
                    </code>
                </pre>
            </div>
            <p>In this example, the loop will print each fruit in the list and then print "Loop finished" after the loop ends.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a nested for loop
colors = ["red", "green", "blue"]
for fruit in fruits:
    for color in colors:
        print(f"{fruit} is {color}")`}
                    </code>
                </pre>
            </div>
            <p>In this example, the nested loop will print each combination of fruit and color.</p>
        </div>
        <div className="section">
            <h1 id="pysets">Python Functions</h1>
            <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/BVfCWuca9nw?si=5SZLhREHxLxThPf-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Functions in Python are defined using the <code>def</code> keyword. They allow you to encapsulate reusable code blocks.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a simple function
def greet(name):
    return f"Hello, {name}!"`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>greet</code> function takes a name as an argument and returns a greeting message.</p>
            <h2>More Information on Functions</h2>
            <p>Functions can have default arguments, variable-length arguments, and keyword arguments. They can also return multiple values.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a function with default arguments
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>greet</code> function has a default argument for the greeting message.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a function with variable-length arguments
def sum_all(*args):
    return sum(args)`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>sum_all</code> function takes a variable number of arguments and returns their sum.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a function with keyword arguments
def print_info(name, age):
    print(f"Name: {name}, Age: {age}")`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>print_info</code> function takes keyword arguments for name and age.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a function returning multiple values
def get_person():
    name = "John"
    age = 30
    return name, age`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>get_person</code> function returns multiple values (name and age).</p>
        </div>
        <div className="section">
            <h1 id="pydist">Python Lambda Functions</h1>
            <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/hYzwCsKGRrg?si=gxR3Ephkhb7Q-IyT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Lambda functions in Python are small anonymous functions defined using the <code>lambda</code> keyword. They can have any number of arguments but only one expression.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a simple lambda function
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>add</code> lambda function takes two arguments and returns their sum.</p>
            <h2>More Information on Lambda Functions</h2>
            <p>Lambda functions are often used as arguments to higher-order functions (functions that take other functions as arguments) such as <code>map</code>, <code>filter</code>, and <code>sorted</code>.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of using lambda with map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>map</code> function applies the lambda function to each item in the list, returning a new list of squared numbers.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of using lambda with filter
numbers = [1, 2, 3, 4, 5]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)  # Output: [2, 4]`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>filter</code> function applies the lambda function to each item in the list, returning a new list of even numbers.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of using lambda with sorted
points = [(1, 2), (3, 1), (5, 4), (2, 3)]
sorted_points = sorted(points, key=lambda point: point[1])
print(sorted_points)  # Output: [(3, 1), (1, 2), (2, 3), (5, 4)]`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>sorted</code> function uses the lambda function as a key to sort the list of points by the second value in each tuple.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a lambda function with multiple arguments
full_name = lambda first, last: f"{first} {last}"
print(full_name("John", "Doe"))  # Output: John Doe`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>full_name</code> lambda function takes two arguments and returns a formatted string.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of a lambda function inside another function
def make_incrementor(n):
    return lambda x: x + n

increment_by_2 = make_incrementor(2)
print(increment_by_2(3))  # Output: 5`}
                    </code>
                </pre>
            </div>
            <p>In this example, the <code>make_incrementor</code> function returns a lambda function that increments its argument by a specified value.</p>
        </div>
        <div className="section"></div>
            <h1 id="pyarrays">Python Arrays</h1>
            <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/6a39OjkCN5I?si=e-1qAWsc9mTJkuAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Arrays in Python are used to store multiple values in a single variable. They are similar to lists but can only contain elements of the same data type.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of creating an array

numbers = arr.array('i', [1, 2, 3, 4, 5])
print(numbers)  # Output: array('i', [1, 2, 3, 4, 5])`}
                    </code>
                </pre>
            </div>
            <p>In this example, an array of integers is created using the <code>array</code> module.</p>
            <h2>More Information on Arrays</h2>
            <p>Arrays are useful when you need to perform operations on a collection of elements of the same type. They provide efficient storage and access to elements.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of accessing array elements
print(numbers[0])  # Output: 1
print(numbers[2])  # Output: 3`}
                    </code>
                </pre>
            </div>
            <p>In this example, the elements of the array are accessed using their index.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of modifying array elements
numbers[1] = 10
print(numbers)  # Output: array('i', [1, 10, 3, 4, 5])`}
                    </code>
                </pre>
            </div>
            <p>In this example, an element of the array is modified by assigning a new value to it.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of iterating over an array
for number in numbers:
    print(number)`}
                    </code>
                </pre>
            </div>
            <p>In this example, a for loop is used to iterate over the elements of the array and print each element.</p>
            <div className="code-block">
                <pre>
                    <code>
{`# Example of array operations
numbers.append(6)
print(numbers)  # Output: array('i', [1, 10, 3, 4, 5, 6])

numbers.remove(10)
print(numbers)  # Output: array('i', [1, 3, 4, 5, 6])`}
                    </code>
                </pre>
            </div>
            <p>In this example, elements are added to and removed from the array using the <code>append</code> and <code>remove</code> methods.</p><br/>
            <center>
                <Quiz4/>
                <Nav3/><br/>
                <Nav.Link href="https://www.online-python.com/" ><Mood/></Nav.Link>
            </center>
            <Nav.Link href="/Python5" >   <Nextbutton/>   </Nav.Link>
            <a href="#" >   <Codeingbtn/>   </a>
      <hr/>
      <Footer/>
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

export default python4
