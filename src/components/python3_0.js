import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import Nextbutton from './nextbutton.js';
import Mood from './mood.js'
import Moodhead from './codemoodheading.js';
import Footer from './footer.js'
import Nav from 'react-bootstrap/Nav';
import Codeingbtn from './codingbtn.js';
import Roadmapbtn1 from './Roadmapbtn1.js';
// import S1 from './s1.png'
import ScribdEmbed from './embedednotes.js';
import Quiz from './quize.js';
import Quiz3 from './quiz3.js';

const python3_0 = () => {
  return (
    <StyledWrapper>

     <Hero  text="👨‍💻 Python Course.."/> 

     <div class="container">
        <h1>Python Lists</h1>
        <iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/Eaz5e6M8tL4?si=Y6mIyb1JXhqh5v5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <h2>List</h2>
        <p>Lists are used to store multiple items in a single variable.</p>
        <pre className='code-block'>mylist = ["apple", "banana", "cherry"]</pre>
        
        <h2>List Items</h2>
        <p>List items are ordered, changeable, and allow duplicate values.</p>

        <h2>Ordered</h2>
        <p>Lists maintain the order of elements, meaning the order of insertion is preserved.</p>

        <h2>Changeable</h2>
        <p>You can modify, add, and remove elements in a list after it has been created.</p>

        <h2>Allow Duplicates</h2>
        <p>Lists allow duplicate values:</p>
        <pre className='code-block'>mylist = ["apple", "banana", "cherry", "apple", "cherry"]</pre>

        <h2>List Length</h2>
        <p>You can determine the number of elements in a list using the <code>len()</code> function:</p>
        <pre className='code-block'>print(len(mylist))</pre>

        <h2>List Items - Data Types</h2>
        <p>List items can be of different data types:</p>
        <pre className='code-block'>
list1 = ["apple", "banana", "cherry"]
list2 = [1, 2, 3]
list3 = [True, False, False]
        </pre>

        <h1>Python Lists</h1>
        
        <h2>Example</h2>
        <p>String, int and boolean data types:</p>
        <pre class="code-block">list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]</pre>
        
        <h2>Example</h2>
        <p>A list with strings, integers and boolean values:</p>
        <pre class="code-block">list1 = ["abc", 34, True, 40, "male"]</pre>

        <h2>type()</h2>
        <p>From Python's perspective, lists are defined as objects with the data type 'list':</p>
        <pre class="code-block">&lt;class 'list'&gt;</pre>
        
        <h2>Example</h2>
        <p>What is the data type of a list?</p>
        <pre class="code-block">mylist = ["apple", "banana", "cherry"]
print(type(mylist))</pre>

        <h2>The list() Constructor</h2>
        <p>It is also possible to use the list() constructor when creating a new list.</p>
        <pre class="code-block">thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)</pre>

        <h2>Python Collections (Arrays)</h2>
        <p>There are four collection data types in the Python programming language:</p>
        <ul>
            <li><strong>List</strong> is a collection which is ordered and changeable. Allows duplicate members.</li>
            <li><strong>Tuple</strong> is a collection which is ordered and unchangeable. Allows duplicate members.</li>
            <li><strong>Set</strong> is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.</li>
            <li><strong>Dictionary</strong> is a collection which is ordered** and changeable. No duplicate members.</li>
        </ul>

<h1>Python Tuples</h1>
<iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/Mf7eFtbVxFM?si=jFMOsU24iI6jkB38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h2>Tuple</h2>
<p>Tuples are used to store multiple items in a single variable.

Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage.

A tuple is a collection which is ordered and unchangeable.

Tuples are written with round brackets.</p>
<p>Create a Tuple:</p>
        <pre class="code-block">thistuple = ("apple", "banana", "cherry")
        print(thistuple) # note the double round-brackets
print(thislist)</pre>
<h2>Tuple items</h2>
<p>Tuple items are ordered, unchangeable, and allow duplicate values.

Tuple items are indexed, the first item has index [0], the second item has index [1] etc.</p>
<h2>Ordered</h2>
<p>When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.</p>
<h2>Unchangeable</h2>
 
<p>Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.</p>
<h2>Allow Duplicates</h2>
<p>Since tuples are indexed, they can have items with the same value:</p>
<pre class="code-block">thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)</pre>
<h2>Tuple Length</h2>
<p>To determine how many items a tuple has, use the len() function:</p>
<pre class="code-block">thistuple = ("apple", "banana", "cherry")
print(len(thistuple))</pre>
<h2>Tuple Items - Data Types</h2>
<p>Tuple items can be of any data type:</p>
<pre class="code-block">tuple1 = ("apple", "banana", "cherry") # string
tuple2 = (1, 5, 7, 9, 3) # int
tuple3 = (True, False, False) # boolean</pre>
<h2>type()</h2>
<p>From Python's perspective, tuples are defined as objects with the data type 'tuple':</p>
<pre class="code-block">&lt;class 'tuple'&gt;</pre>
<h2>The tuple() Constructor</h2>
<p>It is also possible to use the tuple() constructor when creating a new tuple.</p>
<pre class="code-block">thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)</pre>


<h1>Python Sets</h1>

<h2>What is a Set?</h2>
<p>A set is a collection which is unordered, unchangeable*, and unindexed.</p>
<p>*Note: Set items are unchangeable, but you can remove items and add new items.</p>

<h2>Creating a Set</h2>
<p>You can create a set by placing all the items (elements) inside curly braces {}, separated by commas, or by using the built-in set() function.</p>
<pre class="code-block">
# Creating a Set
thisset = {"apple", "banana", "cherry"}
print(thisset)

# Using the set() constructor
thatset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thatset)
</pre>

<h2>Accessing Items</h2>
<p>You cannot access items in a set by referring to an index or a key.</p>
<p>But you can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.</p>
<pre class="code-block">
# Loop through the set, and print the values
for x in thisset:
  print(x)

# Check if "banana" is present in the set
print("banana" in thisset)
</pre>

<h2>Adding Items</h2>
<p>To add one item to a set use the add() method.</p>
<p>To add more than one item to a set, use the update() method.</p>
<pre class="code-block">
# Add an item to a set
thisset.add("orange")
print(thisset)

# Add multiple items to a set
thisset.update(["orange", "mango", "grapes"])
print(thisset)
</pre>

<h2>Removing Items</h2>
<p>To remove an item in a set, use the remove(), or the discard() method.</p>
<pre class="code-block">
# Remove an item from a set
thisset.remove("banana")
print(thisset)

# Remove an item from a set using discard()
thisset.discard("banana")
print(thisset)
</pre>

<h2>Set Methods</h2>
<p>Python has a set of built-in methods that you can use on sets.</p>
<pre class="code-block">
# Method	Description <br/>
# add()	Adds an element to the set<br/>
# clear()	Removes all the elements from the set<br/>
# copy()	Returns a copy of the set<br/>
# difference()	Returns a set containing the difference between two or more sets<br/>
# difference_update()	Removes the items in this set that are also included in another, specified set<br/># difference_update()	Removes the items in this set that are also included in<br/>
# discard()	Remove the specified item<br/>
# intersection()	Returns a set, that is the intersection of two other sets<br/>
# intersection_update()	Removes the items in this set that are not present in other, specified set(s)<br/>
# isdisjoint()	Returns whether two sets have a intersection or not<br/>
# issubset()	Returns whether another set contains this set or not<br/>
# issuperset()	Returns whether this set contains another set or not<br/>
# pop()	Removes an element from the set<br/>
# remove()	Removes the specified element<br/>
# symmetric_difference()	Returns a set with the symmetric differences of two sets<br/>
# symmetric_difference_update()	inserts the symmetric differences from this set and another<br/>
# union()	Return a set containing the union of sets<br/>
# update()	Update the set with the union of this set and others<br/>
</pre>



<h1>Python Dictionaries</h1>
<iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/2IsF7DEtVjg?si=h7WTGKSpS_POhfij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h2>What is a Dictionary?</h2>
<p>A dictionary is a collection which is unordered, changeable, and indexed. In Python, dictionaries are written with curly brackets, and they have keys and values.</p>

<h2>Creating a Dictionary</h2>
<p>You can create a dictionary by placing items inside curly braces {}, separated by commas, with each item being a key-value pair separated by a colon :</p>


<h2>Accessing Items</h2>
<p>You can access the items of a dictionary by referring to its key name, inside square brackets:</p>
<pre class="code-block">
# Accessing an item
x = thisdict["model"]<br/>
print(x)<br/>

# Using the get() method<br/>
x = thisdict.get("model")<br/>
print(x)<br/>
</pre>

<h2>Changing Values</h2>
<p>You can change the value of a specific item by referring to its key name:</p>
<pre class="code-block">
# Changing a value
thisdict["year"] = 2018
print(thisdict)
</pre>

<h2>Looping Through a Dictionary</h2>
<p>You can loop through a dictionary by using a for loop:</p>
<pre class="code-block">
# Loop through the keys
for x in thisdict:<br/>
  print(x)<br/>

# Loop through the values<br/>
for x in thisdict:<br/>
  print(thisdict[x])<br/>

# Loop through both keys and values<br/>
for x, y in thisdict.items():<br/>
  print(x, y)<br/>
</pre>

<h2>Dictionary Methods</h2>
<p>Python has a set of built-in methods that you can use on dictionaries.</p>
<pre class="code-block">
# Method	Description<br/>
# clear()	Removes all the elements from the dictionary<br/>
# copy()	Returns a copy of the dictionary<br/>
# fromkeys()	Returns a dictionary with the specified keys and value<br/>
# get()	Returns the value of the specified key<br/>
# items()	Returns a list containing a tuple for each key value pair<br/>
# keys()	Returns a list containing the dictionary's keys<br/>
# pop()	Removes the element with the specified key<br/>
# popitem()	Removes the last inserted key-value pair<br/>
# setdefault()	Returns the value of the specified key. If the key does not exist: insert the key, with the specified value<br/>
# update()	Updates the dictionary with the specified key-value pairs<br/>
# values()    Returns a list of all the values in the dictionary<br/>
print(thisdict.values())
</pre>

<h1>Python If...Else</h1>
<iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/PqFKRqpHrjw?si=GMLI5arVkbqRvtzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        
        <h2>Conditional Statements</h2>
        <p>Python supports the usual logical conditions from mathematics:</p>
        <ul>
          <li>Equals: <code>a == b</code></li>
          <li>Not Equals: <code>a != b</code></li>
          <li>Less than: <code>a &lt; b</code></li>
          <li>Less than or equal to: <code>a &lt;= b</code></li>
          <li>Greater than: <code>a &gt; b</code></li>
          <li>Greater than or equal to: <code>a &gt;= b</code></li>
        </ul>
        <p>These conditions can be used in several ways, most commonly in "if statements" and loops.</p>

        <h2>If Statement</h2>
        <p>An "if statement" is written by using the <code>if</code> keyword.</p>
        <pre className="code-block">
# If statement<br/>
a = 33<br/>
b = 200<br/>
if b {'>'} a:<br/>
  print("b is greater than a")<br/>
        </pre>

        <h2>Elif</h2>
        <p>The <code>elif</code> keyword is Python's way of saying "if the previous conditions were not true, then try this condition".</p>
        <pre className="code-block">
# Elif statement<br/>
a = 33<br/>
b = 33<br/>
if b {'>'} a:<br/>
  print("b is greater than a")<br/>
elif a == b:<br/>
  print("a and b are equal")<br/>
        </pre>

        <h2>Else</h2>
        <p>The <code>else</code> keyword catches anything which isn't caught by the preceding conditions.</p>
        <pre className="code-block">
# Else statement<br/>
a = 200<br/>
b = 33<br/>
if b {'>'} a:<br/>
  print("b is greater than a")<br/>
elif a == b:<br/>
  print("a and b are equal")<br/>
else:<br/>
  print("a is greater than b")<br/>
        </pre>

        <h2>Short Hand If</h2>
        <p>If you have only one statement to execute, you can put it on the same line as the if statement.</p>
        <pre className="code-block">
# Short Hand If<br/>
if a {'>'} b: print("a is greater than b")<br/>
        </pre>

        <h2>Short Hand If...Else</h2>
        <p>If you have only one statement to execute, one for if, and one for else, you can put it all on the same line.</p>
        <pre className="code-block">
# Short Hand If...Else<br/>
a = 2<br/>
b = 330<br/>
print("A") if a {'>'} b else print("B")<br/>
        </pre>

        <h2>And</h2>
        <p>The <code>and</code> keyword is a logical operator, and is used to combine conditional statements.</p>
        <pre className="code-block">
# And<br/>
a = 200<br/>
b = 33<br/>
c = 500<br/>
if a {'>'} b and c {'>'} a:<br/>
  print("Both conditions are True")<br/>
        </pre>

        <h2>Or</h2>
        <p>The <code>or</code> keyword is a logical operator, and is used to combine conditional statements.</p>
        <pre className="code-block">
# Or<br/>
a = 200<br/>
b = 33<br/>
c = 500<br/>
if a {'>'} b or a {'>'} c:<br/>
  print("At least one of the conditions is True")<br/>
        </pre>

        <h2>Nested If</h2>
        <p>You can have <code>if</code> statements inside <code>if</code> statements, this is called nested <code>if</code> statements.</p>
        <pre className="code-block">
# Nested If<br/>
x = 41<br/>
if x {'>'} 10:<br/>
  print("Above ten,")<br/>
  if x {'>'} 20:<br/>
    print("and also above 20!")<br/>
  else:<br/>
    print("but not above 20.")<br/>
        </pre>

        <h2>The pass Statement</h2>
        <p><code>if</code> statements cannot be empty, but if you for some reason have an <code>if</code> statement with no content, put in the <code>pass</code> statement to avoid getting an error.</p>
        <pre className="code-block">
# The pass statement<br/>
a = 33<br/>
b = 200<br/>
if b {'>'} a:<br/>
  </pre>
  
<Quiz3/>

  <ScribdEmbed/>
    {/* <img src={S1} alt='s1' /> */}

    <h1 className='coding mood'>CODING MOOD </h1> <br/>
  <Moodhead/> 
    <Mood/>
    </div>

    


   <Roadmapbtn1/>
    <Nav.Link href="/Python_p3.0" >   <Nextbutton/>   </Nav.Link>
    <a href="#" >   <Codeingbtn/>   </a>
      <hr/>
      <Footer/>

    

      
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
.container {
            max-width: 900px;
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
