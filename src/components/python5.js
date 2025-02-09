import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import Footer from './footer.js'
import Nav from 'react-bootstrap/Nav';
import Codeingbtn from './codingbtn.js';
import Nextbutton from './nextbutton.js';
const python3_0 = () => {
  return (
    <StyledWrapper>
      <Hero text="👨‍💻 Python Course.." />
      <div className='container'>
        <h2>Python-Course Topics</h2>
        <ul>
          <li><a href='#pylist'>Python Classes/Objects</a></li>
          <li><a href='#pytuples'>Python Inheritance</a></li>
          <li><a href='#pysets'>Python Iterators</a></li>
          <li><a href='#pydist'>Python Polymorphism</a></li>
          <li><a href='#pyif'>Python Scope</a></li>
        </ul>
        <h1 id='pylist'>Python Classes/Objects</h1>
        <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/8O5kX73OkIY?si=A4mBS2YVlpume0s1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='section'>
          <h2>Introduction</h2>
          <p>Python is an object-oriented programming language. Almost everything in Python is an object, with its properties and methods.</p>
        </div>
        <div className='example-section'>
          <h3>Example 1: Creating a Class</h3>
          <div className='code-block'>
            <pre>
              {`class MyClass:
    x = 5

p1 = MyClass()
print(p1.x)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 2: The __init__() Function</h3>
          <div className='code-block'>
            <pre>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 3: Object Methods</h3>
          <div className='code-block'>
            <pre>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def myfunc(self):
        print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 4: The self Parameter</h3>
          <div className='code-block'>
            <pre>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def myfunc(self):
        print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 5: Modifying Object Properties</h3>
          <div className='code-block'>
            <pre>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)

p1.age = 40

print(p1.age)`}
            </pre>
          </div>
        </div>

        <h1 id='pytuples'>Python Inheritance</h1>
        <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/Cn7AkDb4pIU?si=z5FrxjM2PbEAVg2R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='section'>
          <h2>Introduction</h2>
          <p>Inheritance allows us to define a class that inherits all the methods and properties from another class.</p>
        </div>
        <div className='example-section'>
          <h3>Example 1: Creating a Parent Class</h3>
          <div className='code-block'>
            <pre>
              {`class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

x = Person("John", "Doe")
x.printname()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 2: Creating a Child Class</h3>
          <div className='code-block'>
            <pre>
              {`class Student(Person):
    pass

x = Student("Mike", "Olsen")
x.printname()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 3: Adding the __init__() Function</h3>
          <div className='code-block'>
            <pre>
              {`class Student(Person):
    def __init__(self, fname, lname):
        Person.__init__(self, fname, lname)

x = Student("Mike", "Olsen")
x.printname()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 4: Using the super() Function</h3>
          <div className='code-block'>
            <pre>
              {`class Student(Person):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 5: Adding Properties</h3>
          <div className='code-block'>
            <pre>
              {`class Student(Person):
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year

    def welcome(self):
        print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

x = Student("Mike", "Olsen", 2019)
x.welcome()`}
            </pre>
          </div>
        </div>

        <h1 id='pysets'>Python Iterators</h1>
        <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/Dyu08G2l71c?si=5zXtevW2dT4aFDGF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='section'>
          <h2>Introduction</h2>
          <p>An iterator is an object that contains a countable number of values.</p>
        </div>
        <div className='example-section'>
          <h3>Example 1: Creating an Iterator</h3>
          <div className='code-block'>
            <pre>
              {`mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 2: Looping Through an Iterator</h3>
          <div className='code-block'>
            <pre>
              {`mytuple = ("apple", "banana", "cherry")

for x in mytuple:
    print(x)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 3: Creating an Iterator Class</h3>
          <div className='code-block'>
            <pre>
              {`class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        x = self.a
        self.a += 1
        return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 4: StopIteration</h3>
          <div className='code-block'>
            <pre>
              {`class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        if self.a <= 20:
            x = self.a
            self.a += 1
            return x
        else:
            raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
    print(x)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 5: Using Iterators with Functions</h3>
          <div className='code-block'>
            <pre>
              {`def myfunc():
    mytuple = ("apple", "banana", "cherry")
    myit = iter(mytuple)
    for x in myit:
        print(x)

myfunc()`}
            </pre>
          </div>
        </div>

        <h1 id='pydist'>Python Polymorphism</h1>
        <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/tHN8I_4FIt8?si=Ue_pWSQmmnw3fl9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='section'>
          <h2>Introduction</h2>
          <p>Polymorphism means having many forms. In programming, polymorphism means the same function name being used for different types.</p>
        </div>
        <div className='example-section'>
          <h3>Example 1: Polymorphism in Classes</h3>
          <div className='code-block'>
            <pre>
              {`class Parrot:
    def fly(self):
        print("Parrot can fly")

    def swim(self):
        print("Parrot can't swim")

class Penguin:
    def fly(self):
        print("Penguin can't fly")

    def swim(self):
        print("Penguin can swim")

def flying_test(bird):
    bird.fly()

blu = Parrot()
peggy = Penguin()

flying_test(blu)
flying_test(peggy)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 2: Polymorphism with Inheritance</h3>
          <div className='code-block'>
            <pre>
              {`class Bird:
    def intro(self):
        print("There are many types of birds.")

    def flight(self):
        print("Most of the birds can fly but some cannot.")

class Sparrow(Bird):
    def flight(self):
        print("Sparrows can fly.")

class Ostrich(Bird):
    def flight(self):
        print("Ostriches cannot fly.")

obj_bird = Bird()
obj_spr = Sparrow()
obj_ost = Ostrich()

obj_bird.intro()
obj_bird.flight()

obj_spr.intro()
obj_spr.flight()

obj_ost.intro()
obj_ost.flight()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 3: Polymorphism with Functions</h3>
          <div className='code-block'>
            <pre>
              {`class India:
    def capital(self):
        print("New Delhi is the capital of India.")

    def language(self):
        print("Hindi is the most widely spoken language of India.")

    def type(self):
        print("India is a developing country.")

class USA:
    def capital(self):
        print("Washington, D.C. is the capital of USA.")

    def language(self):
        print("English is the primary language of USA.")

    def type(self):
        print("USA is a developed country.")

def func(obj):
    obj.capital()
    obj.language()
    obj.type()

obj_ind = India()
obj_usa = USA()

func(obj_ind)
func(obj_usa)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 4: Polymorphism with Abstract Classes</h3>
          <div className='code-block'>
            <pre>
              {`from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def move(self):
        pass

class Human(Animal):
    def move(self):
        print("I can walk and run")

class Snake(Animal):
    def move(self):
        print("I can crawl")

class Dog(Animal):
    def move(self):
        print("I can bark")

class Lion(Animal):
    def move(self):
        print("I can roar")

R = Human()
R.move()

K = Snake()
K.move()

R = Dog()
R.move()

K = Lion()
K.move()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 5: Polymorphism with Duck Typing</h3>
          <div className='code-block'>
            <pre>
              {`class Bird:
    def fly(self):
        print("fly with wings")

class Airplane:
    def fly(self):
        print("fly with fuel")

class Fish:
    def swim(self):
        print("swim in water")

for obj in Bird(), Airplane(), Fish():
    if hasattr(obj, 'fly'):
        obj.fly()
    elif hasattr(obj, 'swim'):
        obj.swim()`}
            </pre>
          </div>
        </div>

        <h1 id='pyif'>Python Scope</h1>
        <iframe width="960" height="455" className='youtube' src="https://www.youtube.com/embed/38uGbVYICwg?si=Vt_ZnHha9me4jJcT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='section'>
          <h2>Introduction</h2>
          <p>A variable is only available from inside the region it is created. This is called scope.</p>
        </div>
        <div className='example-section'>
          <h3>Example 1: Local Scope</h3>
          <div className='code-block'>
            <pre>
              {`def myfunc():
    x = 300
    print(x)

myfunc()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 2: Function Inside Function</h3>
          <div className='code-block'>
            <pre>
              {`def myfunc():
    x = 300
    def myinnerfunc():
        print(x)
    myinnerfunc()

myfunc()`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 3: Global Scope</h3>
          <div className='code-block'>
            <pre>
              {`x = 300

def myfunc():
    print(x)

myfunc()

print(x)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 4: Naming Variables</h3>
          <div className='code-block'>
            <pre>
              {`x = 300

def myfunc():
    x = 200
    print(x)

myfunc()

print(x)`}
            </pre>
          </div>
        </div>
        <div className='example-section'>
          <h3>Example 5: Global Keyword</h3>
          <div className='code-block'>
            <pre>
              {`def myfunc():
    global x
    x = 300

myfunc()

print(x)`}
            </pre>
          </div>
        </div>

        <Nav.Link href="/Python6"><Nextbutton /></Nav.Link>
        <a href="#"><Codeingbtn /></a>
        <hr />
        <Footer />
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
