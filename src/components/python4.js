import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const python4 = () => {
  return (
    <StyledWrapper>
      <Hero text="👨‍💻 Python Course.." />
      <div className="container">
        <h1>Python If...Else</h1>
        
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
# If statement
a = 33
b = 200
if b > a:
  print("b is greater than a")
        </pre>

        <h2>Elif</h2>
        <p>The <code>elif</code> keyword is Python's way of saying "if the previous conditions were not true, then try this condition".</p>
        <pre className="code-block">
# Elif statement
a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
        </pre>

        <h2>Else</h2>
        <p>The <code>else</code> keyword catches anything which isn't caught by the preceding conditions.</p>
        <pre className="code-block">
# Else statement
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")
        </pre>

        <h2>Short Hand If</h2>
        <p>If you have only one statement to execute, you can put it on the same line as the if statement.</p>
        <pre className="code-block">
# Short Hand If
if a > b: print("a is greater than b")
        </pre>

        <h2>Short Hand If...Else</h2>
        <p>If you have only one statement to execute, one for if, and one for else, you can put it all on the same line.</p>
        <pre className="code-block">
# Short Hand If...Else
a = 2
b = 330
print("A") if a > b else print("B")
        </pre>

        <h2>And</h2>
        <p>The <code>and</code> keyword is a logical operator, and is used to combine conditional statements.</p>
        <pre className="code-block">
# And
a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")
        </pre>

        <h2>Or</h2>
        <p>The <code>or</code> keyword is a logical operator, and is used to combine conditional statements.</p>
        <pre className="code-block">
# Or
a = 200
b = 33
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")
        </pre>

        <h2>Nested If</h2>
        <p>You can have <code>if</code> statements inside <code>if</code> statements, this is called nested <code>if</code> statements.</p>
        <pre className="code-block">
# Nested If
x = 41
if x > 10:
  print("Above ten,")
  if x > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")
        </pre>

        <h2>The pass Statement</h2>
        <p><code>if</code> statements cannot be empty, but if you for some reason have an <code>if</code> statement with no content, put in the <code>pass</code> statement to avoid getting an error.</p>
        <pre className="code-block">
# The pass statement
a = 33
b = 200
if b > a:
  pass
        </pre>
      </div>
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

  p {
    font-size: 1rem;
    margin: 10px 0;
  }

  pre.code-block {
    background: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
`

export default python4;