// import React from 'react';
import React, { useState } from 'react';
import './book.css'; // Optional: If you want to add custom CSS



const CLanguagePage = () => {
      // Get all topic descriptions and navbar items
      const [activeIndex, setActiveIndex] = useState(0);
      const handleItemClick = (index) => {
        setActiveIndex(index);
      };
  

    return (
        <div className="clanguage-page">
            <div class="slider-navbar">
<div class="navbar-content">
<div class="navbar-item" onClick={() => handleItemClick(0)}>Keywords & Identifier</div>
<div class="navbar-item" onClick={() => handleItemClick(1)}>Variables & Constants</div>
<div class="navbar-item" onClick={() => handleItemClick(2)}>C Data Types</div>
<div class="navbar-item" onClick={() => handleItemClick(3)}>C Input/Output</div>
<div class="navbar-item" onClick={() => handleItemClick(4)}>C Operators</div>
<div class="navbar-item" onClick={() => handleItemClick(5)}>C Introduction Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(6)}>C if...else</div>
<div class="navbar-item" onClick={() => handleItemClick(7)}>C for Loop</div>
<div class="navbar-item" onClick={() => handleItemClick(8)}>C while Loop</div>
<div class="navbar-item" onClick={() => handleItemClick(9)}>C break and continue</div>
<div class="navbar-item" onClick={() => handleItemClick(10)}>C switch...case</div>
<div class="navbar-item" onClick={() => handleItemClick(11)}>C Programming goto</div>
<div class="navbar-item" onClick={() => handleItemClick(12)}>Control Flow Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(13)}>C Programming Functions</div>
<div class="navbar-item" onClick={() => handleItemClick(14)}>C User-defined Functions</div>
<div class="navbar-item" onClick={() => handleItemClick(15)}>C Function Types</div>
<div class="navbar-item" onClick={() => handleItemClick(16)}>C Recursion</div>
<div class="navbar-item" onClick={() => handleItemClick(17)}>C Storage Class</div>
<div class="navbar-item" onClick={() => handleItemClick(18)}>C Function Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(19)}>C Programming Arrays</div>
<div class="navbar-item" onClick={() => handleItemClick(20)}>C Multi-dimensional Arrays</div>
<div class="navbar-item" onClick={() => handleItemClick(21)}>C Arrays & Function</div>
<div class="navbar-item" onClick={() => handleItemClick(22)}>C Programming Pointers</div>
<div class="navbar-item" onClick={() => handleItemClick(23)}>C Pointers & Arrays</div>
<div class="navbar-item" onClick={() => handleItemClick(24)}>C Pointers And Functions</div>
<div class="navbar-item" onClick={() => handleItemClick(25)}>C Memory Allocation</div>
<div class="navbar-item" onClick={() => handleItemClick(26)}>Array & Pointer Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(27)}>C Programming String</div>
<div class="navbar-item" onClick={() => handleItemClick(28)}>C String Functions</div>
<div class="navbar-item" onClick={() => handleItemClick(29)}>C String Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(30)}>C Structure</div>
<div class="navbar-item" onClick={() => handleItemClick(31)}>C Struct & Pointers</div>
<div class="navbar-item" onClick={() => handleItemClick(32)}>C Struct & Function</div>
<div class="navbar-item" onClick={() => handleItemClick(33)}>C Unions</div>
<div class="navbar-item" onClick={() => handleItemClick(34)}>C struct Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(35)}>C Files Input/Output</div>
<div class="navbar-item" onClick={() => handleItemClick(36)}>C Files Examples</div>
<div class="navbar-item" onClick={() => handleItemClick(37)}>C Enumeration</div>
<div class="navbar-item" onClick={() => handleItemClick(38)}>C Preprocessors</div>
<div class="navbar-item" onClick={() => handleItemClick(39)}>C Standard Library</div>
      </div>
      </div>

      <div class="content1">
      <div className={`topic-description ${activeIndex === 0 ? 'active' : ''}`} id="topic-1">
          <h2 id="character-set">Character set</h2>
    <p>A character set is a set of alphabets, letters and some special characters that are valid in C language.</p>
    
    <h3>Alphabets</h3>
    
    <pre>
    Uppercase: A B C ................................... X Y Z
    Lowercase: a b c ...................................... x y z</pre>
    
    <p>C accepts both lowercase and uppercase alphabets as variables and functions.</p>
    
    <h3>Digits</h3>
    
    <pre>
    0 1 2 3 4 5 6 7 8 9</pre>
    
    <h3>Special Characters</h3>
    
    <table border="1" cellpadding="1" cellspacing="1" summary="Special Characters in C Programming">
      <caption>Special Characters in C Programming</caption>
      <tbody>
        <tr>
          <td>,</td>
          <td>&lt;</td>
          <td>&gt;</td>
          <td>.</td>
          <td>_</td>
        </tr>
        <tr>
          <td>(</td>
          <td>)</td>
          <td>;</td>
          <td>$</td>
          <td>:</td>
        </tr>
        <tr>
          <td>%</td>
          <td>[</td>
          <td>]</td>
          <td>#</td>
          <td>?</td>
        </tr>
        <tr>
          <td>'</td>
          <td>&amp;</td>
          <td></td>
          <td></td>
          <td>"</td>
        </tr>
        <tr>
          <td>^</td>
          <td>!</td>
          <td>*</td>
          <td>/</td>
          <td>|</td>
        </tr>
        <tr>
          <td>-</td>
          <td>\</td>
          <td>~</td>
          <td>+</td>
          <td> </td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>White space Characters</strong></p>
    
    <p>Blank space, newline, horizontal tab, carriage return and form feed.</p>
    
    <hr/>
    <h2 id="keywords">C Keywords</h2>
    
    <p>Keywords are predefined, reserved words used in programming that have special meanings to the compiler. Keywords are part of the syntax and they cannot be used as an identifier. For example:</p>
    
    <pre>
    <code>{`int money;`}</code></pre>
<div class="clearfix"></div><p>Here, <code>{`int`}</code> is a keyword that indicates <var>money</var> is a <a href="/c-programming/c-variables-constants" title="Variables in C programming">variable</a> of type <code>{`int`}</code> (integer).</p>
    
    <p>As C is a case sensitive language, all keywords must be written in lowercase. Here is a list of all keywords allowed in ANSI C.</p>
    
    <table summary="List of keywords used in C language">
      <caption>C Keywords</caption>
      <tbody>
        <tr>
          <td><code>{`auto`}</code></td>
          <td><code>{`double`}</code></td>
          <td><code>{`int`}</code></td>
          <td><code>{`struct`}</code></td>
        </tr>
        <tr>
          <td><code>{`break`}</code></td>
          <td><code>{`else`}</code></td>
          <td><code>{`long`}</code></td>
          <td><code>{`switch`}</code></td>
        </tr>
        <tr>
          <td><code>{`case`}</code></td>
          <td><code>{`enum`}</code></td>
          <td><code>{`register`}</code></td>
          <td><code>{`<tt>typedef</tt>`}</code></td>
        </tr>
        <tr>
          <td><code>{`char`}</code></td>
          <td><code>{`extern`}</code></td>
          <td><code>{`return`}</code></td>
          <td><code>{`union`}</code></td>
        </tr>
        <tr>
          <td><code>{`continue`}</code></td>
          <td><code>{`for`}</code></td>
          <td><code>{`signed`}</code></td>
          <td><code>{`void`}</code></td>
        </tr>
        <tr>
          <td><code>{`do`}</code></td>
          <td><code>{`if`}</code></td>
          <td><code>{`static`}</code></td>
          <td><code>{`while`}</code></td>
        </tr>
        <tr>
          <td><code>{`default`}</code></td>
          <td><code>{`goto`}</code></td>
          <td><code>{`sizeof`}</code></td>
          <td><code>{`volatile`}</code></td>
        </tr>
        <tr>
          <td><code>{`const`}</code></td>
          <td><code>{`float`}</code></td>
          <td><code>{`short`}</code></td>
          <td><code>{`unsigned`}</code></td>
        </tr>
      </tbody>
    </table>
    
    <p>All these keywords, their syntax, and application will be discussed in their respective topics. However, if you want a brief overview of these keywords without going further, visit <a href="/c-programming/list-all-keywords-c-language" title="List of all keywords in C ">List of all keywords in C programming</a>.</p>
    
    <hr/>
    <h2 id="identifiers">C Identifiers</h2>
    
    <p>Identifier refers to name given to entities such as variables, functions, structures etc.</p>
    
    <p>Identifiers must be unique. They are created to give a unique name to an entity to identify it during the execution of the program. For example:</p>
    
    <pre>
    <code>{`int money;
    double accountBalance;`}</code></pre>
    
    <p>Here, <var>money</var> and <var>accountBalance</var> are identifiers.</p>
    
    <p>Also remember, identifier names must be different from keywords. You cannot use <code>{`int`}</code> as an identifier because <code>{`int`}</code> is a keyword.</p>
    
    <hr/>
    <h3 id="identifier-rules">Rules for naming identifiers</h3>
    
    <ol>
      <li>A valid identifier can have letters (both uppercase and lowercase letters), digits and underscores.</li>
      <li>The first letter of an identifier should be either a letter or an underscore.</li>
      <li>You cannot use keywords like <code>{`int`}</code>, <code>{`while`}</code> etc. as identifiers.</li>
      <li>There is no rule on how long an identifier can be. However, you may run into problems in some compilers if the identifier is longer than 31 characters.</li>
    </ol>
    
    <p>You can choose any name as an identifier if you follow the above rule, however, give meaningful names to identifiers that make sense. </p>
      </div>
      <div className={`topic-description ${activeIndex === 1 ? 'active' : ''}`} id="topic-2">
    <h2 id="variables">Variables</h2>

<p>In programming, a variable is a container (storage area) to hold data.</p>

<p>To indicate the storage area, each variable should be given a unique name (<a href="/c-programming/c-keywords-identifier" title="C Identifiers">identifier</a>). Variable names are just the symbolic representation of a memory location. For example:</p>

<pre>
<code>{`int playerScore = 95;`}</code></pre>

<p>Here, <var>playerScore</var> is a variable of <code>{`int`}</code> type. Here, the variable is assigned an integer value <code>{`95`}</code>.</p>

<p>The value of a variable can be changed, hence the name variable.</p>

<pre>
<code>{`char ch = 'a';
// some code
ch = 'l';`}</code></pre>

<hr/>
<h3 id="variable-rule">Rules for naming a variable</h3>

<ol>
<li>A variable name can only have letters (both uppercase and lowercase letters), digits and underscore.</li>
<li>The first letter of a variable should be either a letter or an underscore.</li>
<li>There is no rule on how long a variable name (identifier) can be. However, you may run into problems in some compilers if the variable name is longer than 31 characters.</li>
</ol>

<p class="note-tip"><strong>Note:</strong> You should always try to give meaningful names to variables. For example: <code>{`firstName`}</code> is a better variable name than <code>{`fn`}</code>.</p>

<p>C is a strongly typed language. This means that the variable type cannot be changed once it is declared. For example:</p>

<pre>
<code>{`int number = 5;      // integer variable
number = 5.5;        // error
double number;       // error`}</code></pre>

<p>Here, the type of <var>number</var> variable is <code>{`int`}</code>. You cannot assign a floating-point (decimal) value <samp>5.5</samp> to this variable. Also, you cannot redefine the data type of the variable to <code>{`double`}</code>. By the way, to store the decimal values in C, you need to declare its type to either <code>{`double`}</code> or <code>{`float`}</code>.</p>

<p>Visit this page to learn more about <a href="/c-programming/c-data-types" title="C data types">different types of data a variable can store</a>.</p>

<hr/>
<h2 id="literals">Literals</h2>
<div class="clearfix"></div><p>Literals are data used for representing fixed values. They can be used directly in the code. For example: <var>1</var>, <var>2.5</var>, <var>'c'</var> etc.</p>

<p>Here, <var>1</var>, <code>{`2.5`}</code> and <var>'c'</var> are literals. Why? You cannot assign different values to these terms.</p>

<hr/>
<h3 id="integers">1. Integers</h3>

<p>An integer is a numeric literal(associated with numbers) without any fractional or exponential part. There are three types of integer literals in C programming:</p>

<ul>
<li>decimal (base 10)</li>
<li>octal (base 8)</li>
<li>hexadecimal (base 16)</li>
</ul>

<p>For example:</p>

<pre>
Decimal: 0, -9, 22 etc
Octal: 021, 077, 033 etc
Hexadecimal: 0x7f, 0x2a, 0x521 etc</pre>

<p>In C programming, octal starts with a <var>0</var>, and hexadecimal starts with a <var>0x</var>.</p>

<hr/>
<h3 id="floats">2. Floating-point Literals</h3>

<p>A floating-point literal is a numeric literal that has either a fractional form or an exponent form. For example:</p>

<pre>
-2.0
0.0000234
-0.22E-5</pre>

<p class="note-tip"><strong>Note:</strong> <code>{`E-5 = 10`}</code><code>{`<sup>-5</sup>`}</code></p>

<hr/>
<h3 id="characters">3. Characters</h3>

<p>A character literal is created by enclosing a single character inside single quotation marks. For example: <var>'a'</var>, <var>'m'</var>, <var>'F'</var>, <var>'2'</var>, <var>{`{`}</var> etc.</p>

<hr/>
<h3 id="escape-sequences">4. Escape Sequences</h3>

<p>Sometimes, it is necessary to use characters that cannot be typed or has special meaning in C programming. For example: newline(enter), tab, question mark etc.</p>

<p>In order to use these characters, escape sequences are used.</p>

<table summary="A list of escape sequences used in C programming language">
<caption>Escape Sequences</caption>
<thead>
  <tr>
    <th scope="col">Escape Sequences</th>
    <th scope="col">Character</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>{`\b`}</code></td>
    <td>Backspace</td>
  </tr>
  <tr>
    <td><code>{`\f`}</code></td>
    <td>Form feed</td>
  </tr>
  <tr>
    <td><code>{`\n`}</code></td>
    <td>Newline</td>
  </tr>
  <tr>
    <td><code>{`\r`}</code></td>
    <td>Return</td>
  </tr>
  <tr>
    <td><code>{`\t`}</code></td>
    <td>Horizontal tab</td>
  </tr>
  <tr>
    <td><code>{`\v`}</code></td>
    <td>Vertical tab</td>
  </tr>
  <tr>
    <td><code>{`\\`}</code></td>
    <td>Backslash</td>
  </tr>
  <tr>
    <td><code>{`\'`}</code></td>
    <td>Single quotation mark</td>
  </tr>
  <tr>
    <td><code>{`\"`}</code></td>
    <td>Double quotation mark</td>
  </tr>
  <tr>
    <td><code>{`\?`}</code></td>
    <td>Question mark</td>
  </tr>
  <tr>
    <td><code>{`\0`}</code></td>
    <td>Null character</td>
  </tr>
</tbody>
</table>

<hr/>
<p>For example: <code>{`\n`}</code> is used for a newline. The backslash <code>{`\\`}</code> causes escape from the normal way the characters are handled by the compiler.</p>

<hr/>
<h3>5. String Literals</h3>

<p>A string literal is a sequence of characters enclosed in double-quote marks. For example:</p>

<pre>
"good"                  //string constant
""                     //null string constant
"      "               //string constant of six white space
"x"                    //string constant having a single character.
"Earth is round\n"         //prints string with a newline</pre>

<hr/>
<h2 id="constants">Constants</h2>

<p>If you want to define a variable whose value cannot be changed, you can use the <code>{`const int x=3;`}</code> keyword. This will create a constant. For example,</p>

<pre>
<code>{`const double PI = 3.14;`}</code></pre>

<p>Notice, we have added keyword <code>{`const`}</code>.</p>

<p>Here, <var>PI</var> is a symbolic constant; its value cannot be changed.</p>

<pre>
<code>{`const double PI = 3.14;
PI = 2.9; //Error`}</code></pre>

<hr/>
<p>You can also define a constant using the <code>{`#define`}</code> preprocessor directive. We will learn about it in <a href="/c-programming/c-preprocessor-macros" title="C Macros">C Macros</a> tutorial.</p>
      </div>
      <div className={`topic-description ${activeIndex === 2 ? 'active' : ''}`} id="topic-3">

    <p id="introduction">In C programming, data types are declarations for variables. This determines the type and size of data associated with variables. For example,</p>

<pre>
<code>{`int myVar;`}</code></pre>

<p>Here, <var>myVar</var> is a variable of <code>{`int`}</code> (integer) type. The size of <code>{`int`}</code> is 4 bytes.</p>

<hr/>
<h2 id="basic">Basic types</h2>

<p>Here's a table containing commonly used types in C programming for quick access.</p>

<table border="1" cellpadding="1" cellspacing="1">
<thead>
  <tr>
    <th scope="col">Type</th>
    <th scope="col">Size (bytes)</th>
    <th scope="col">Format Specifier</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>{`int`}</code></td>
    <td>at least 2, usually 4</td>
    <td><code>{`%d`}</code>, <code>{`%i`}</code></td>
  </tr>
  <tr>
    <td><code>{`char`}</code></td>
    <td>1</td>
    <td><code>{`%c`}</code></td>
  </tr>
  <tr>
    <td><code>{`float`}</code></td>
    <td>4</td>
    <td><code>{`%f`}</code></td>
  </tr>
  <tr>
    <td><code>{`double`}</code></td>
    <td>8</td>
    <td><code>{`%lf`}</code></td>
  </tr>
  <tr>
    <td><code>{`short int`}</code></td>
    <td>2 usually</td>
    <td><code>{`%hd`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned int`}</code></td>
    <td>at least 2, usually 4</td>
    <td><code>{`%u`}</code></td>
  </tr>
  <tr>
    <td><code>{`long int`}</code></td>
    <td>at least 4, usually 8</td>
    <td><code>{`%ld`}</code>, <code>{`%li`}</code></td>
  </tr>
  <tr>
    <td><code>{`long long int`}</code></td>
    <td>at least 8</td>
    <td><code>{`%lld`}</code>, <code>{`%lli`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned long int`}</code></td>
    <td>at least 4</td>
    <td><code>{`%lu`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned long long int`}</code></td>
    <td>at least 8</td>
    <td><code>{`%llu`}</code></td>
  </tr>
  <tr>
    <td><code>{`signed char`}</code></td>
    <td>1</td>
    <td><code>{`%c`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned char`}</code></td>
    <td>1</td>
    <td><code>{`%c`}</code></td>
  </tr>
  <tr>
    <td><code>{`long double`}</code></td>
    <td>at least 10, usually 12 or 16</td>
    <td><code>{`%Lf`}</code></td>
  </tr>
</tbody>
</table>

<hr/>
<h3 id="int">int</h3>

<p>Integers are whole numbers that can have both zero, positive and negative values but no decimal values. For example, <code>{`0`}</code>, <code>{`-5`}</code>, <code>{`10`}</code></p>

<p>We can use <code>{`int`}</code> for declaring an integer variable.</p>

<pre>
<code>{`int id;`}</code></pre>

<p>Here, <var>id</var> is a variable of type integer.</p>

<p>You can declare multiple variables at once in C programming. For example,</p>

<pre>
<code>{`int id, age;`}</code></pre>

<p></p><div id="block-inject-1" class="block-inject block-inject-1">
  
  
  

  
  <div id="div-gpt-ad-Programizcom37046" style={{margin:"32px"}}>
  </div>
  
  <div id="div-gpt-ad-Programizcom36796" style={{margin:"32px 0",minHeight:" 250px"}}>
  </div>
  </div><div class="clearfix"></div><p>The size of <code>{`int`}</code> is usually 4 bytes (32 bits). And, it can take <code>{`2<sup>32</sup>`}</code> distinct states from <code>{`-2147483648`}</code> to <code>{`2147483647`}</code>.</p>

<hr/>
<h3 id="float-double">float and double</h3>

<p><code>{`float`}</code> and <code>{`double`}</code> are used to hold real numbers.</p>

<pre>
<code>{`float salary;
double price;`}</code></pre>

<p>In C, floating-point numbers can also be represented in exponential. For example,</p>

<pre>
<code>{`float normalizationFactor = 22.442e2;`}</code></pre>

<p>What's the difference between <code>{`float`}</code> and <code>{`double`}</code>?</p>

<p>The size of <code>{`float`}</code> (single precision float data type) is 4 bytes. And the size of <code>{`double`}</code> (double precision float data type) is 8 bytes.</p>

<hr/>
<h3 id="char">char</h3>

<p>Keyword <code>{`char`}</code> is used for declaring character type variables. For example,</p>

<pre>
<code>{`char test = 'h';`}</code></pre>

<p>The size of the character variable is 1 byte.</p>

<hr/>
<h3 id="void">void</h3>

<p><code>{`void`}</code> is an incomplete type. It means "nothing" or "no type". You can think of void as <strong>absent</strong>.</p>

<p>For example, if a function is not returning anything, its return type should be <code>{`void`}</code>.</p>

<p>Note that, you cannot create variables of <code>{`void`}</code> type.</p>

<hr/>
<h3>short and long</h3>

<p>If you need to use a large number, you can use a type specifier <code>{`long`}</code>. Here's how:</p>

<pre>
<code>{`long a;
long long b;
long double c;`}</code></pre>

<p>Here variables <var>a</var> and <var>b</var> can store integer values. And, <var>c</var> can store a floating-point number.</p>

<p>If you are sure, only a small integer (<code>{`[−32,767, +32,767]`}</code> range) will be used, you can use <code>{`short`}</code>.</p>

<pre>
short d;</pre>

<p>You can always check the size of a variable using the <code>{`sizeof()`}</code> operator.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;      
int main() {
short a;
long b;
long long c;
long double d;

printf("size of short = %d bytes\n", sizeof(a));
printf("size of long = %d bytes\n", sizeof(b));
printf("size of long long = %d bytes\n", sizeof(c));
printf("size of long double= %d bytes\n", sizeof(d));
return 0;
}`}</code></pre>

<hr/>
<h3>signed and unsigned</h3>

<p>In C, <code>{`signed`}</code> and <code>{`unsigned`}</code> are type modifiers. You can alter the data storage of a data type by using them:</p>

<ul>
<li><code>{`signed`}</code> - allows for storage of both positive and negative numbers</li>
<li><code>{`unsigned`}</code> - allows for storage of only positive numbers</li>
</ul>

<p>For example,</p>

<pre>
<code>{`// valid codes
unsigned int x = 35;
int y = -35;  // signed int
int z = 36;  // signed int

// invalid code: unsigned int cannot hold negative integers
unsigned int num = -35;
`}</code></pre>

<p>Here, the variables <var>x</var> and <var>num</var> can hold only zero and positive values because we have used the <code>{`unsigned`}</code> modifier.</p>

<p>Considering the size of <code>{`int`}</code> is 4 bytes, variable <var>y</var> can hold values from <code>{`-2<sup>31</sup>`}</code> to <code>{`2<sup>31</sup>-1`}</code>, whereas variable <var>x</var> can hold values from <code>{`0`}</code> to <code>{`2<sup>32</sup>-1`}</code>.</p>

<hr/>
<h2>Derived Data Types</h2>

<p>Data types that are derived from fundamental data types are derived types. For example: arrays, pointers, function types, structures, etc.</p>

<p>We will learn about these derived data types in later tutorials.</p>

<ul>
<li>bool type</li>
<li>Enumerated type</li>
<li>Complex types</li>
</ul>
      </div>
      <div className={`topic-description ${activeIndex === 3 ? 'active' : ''}`} id="topic-4">
    <h2 id="c-out">C Output</h2>

<p>In C programming, <code>{`printf()`}</code> is one of the main output function. The function sends formatted output to the screen. For example,</p>

<hr/>
<h3>Example 1: C Output</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;    
int main()
{ 
  // Displays the string inside quotations
  printf("C Programming");
  return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>C Programming</samp></pre>

<p>How does this program work?</p>

<ul>
<li>All valid C programs must contain the <code>{`main()`}</code> function. The code execution begins from the start of the <code>{`main()`}</code> function.</li>
<li>The <code>{`printf()`}</code> is a library function to send formatted output to the screen. The function prints the string inside quotations.</li>
<li>To use <code>{`printf()`}</code> in our program, we need to include <code>{`stdio.h`}</code> header file using the <code>{`#include &lt;stdio.h&gt;`}</code> statement.</li>
<li>The <code>{`return 0;`}</code> statement inside the <code>{`main()`}</code> function is the "Exit status" of the program. It's optional.</li>
</ul>

<hr/>
<h3 id="integer-output">Example 2: Integer Output</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  int testInteger = 5;
  printf("Number = %d", testInteger);
  return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Number = 5</samp></pre>

<p>We use <code>{`%d`}</code> format specifier to print <code>{`int`}</code> types. Here, the <code>{`%d`}</code> inside the quotations will be replaced by the value of <var>testInteger</var>.</p>

<hr/>
<h3>Example 3: float and double Output</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  float number1 = 13.5;
  double number2 = 12.4;

  printf("number1 = %f\n", number1);
  printf("number2 = %lf", number2);
  return 0;
}`}</code></pre>

<p></p><div id="block-inject-1" class="block-inject block-inject-1">

  <div id="div-gpt-ad-Programizcom37046" style={{margin: "32px 0"}}>
  </div>
  
  <div id="div-gpt-ad-Programizcom36796" style={{margin: "32px 0", minHeight: "250px"}}>
  </div>
  </div><div class="clearfix"></div><p><strong>Output</strong></p>

<pre>
<samp>number1 = 13.500000
number2 = 12.400000</samp></pre>

<p>To print <code>{`float`}</code>, we use <code>{`%f`}</code> format specifier. Similarly, we use <code>{`%lf`}</code> to print <code>{`double`}</code> values.</p>

<hr/>
<h3>Example 4: Print Characters</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  char chr = 'a';    
  printf("character = %c", chr);  
  return 0;
} `}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>character = a</samp>
</pre>

<p>To print <code>{`char`}</code>, we use <code>{`%c`}</code> format specifier.</p>

<hr/>
<h2 id="c-input">C Input</h2>

<p>In C programming, <code>{`scanf()`}</code> is one of the commonly used function to take input from the user. The <code>{`scanf()`}</code> function reads formatted input from the standard input such as keyboards.</p>

<hr/>
<h3>Example 5: Integer Input/Output</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  int testInteger;
  printf("Enter an integer: ");
  scanf("%d", &amp;testInteger);  
  printf("Number = %d",testInteger);
  return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter an integer: 4
Number = 4</samp></pre>

<p>Here, we have used <code>{`%d`}</code> format specifier inside the <code>{`scanf()`}</code> function to take <code>{`int`}</code> input from the user. When the user enters an integer, it is stored in the <var>testInteger</var> variable.</p>

<p class="note-tip">Notice, that we have used <code>{`&amp;testInteger`}</code> inside <code>{`scanf()`}</code>. It is because <var>&amp;testInteger</var> gets the address of <var>testInteger</var>, and the value entered by the user is stored in that address.</p>

<hr/>
<h3 id="float-io">Example 6: Float and Double Input/Output</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  float num1;
  double num2;

  printf("Enter a number: ");
  scanf("%f", &amp;num1);
  printf("Enter another number: ");
  scanf("%lf", &amp;num2);

  printf("num1 = %f\n", num1);
  printf("num2 = %lf", num2);

  return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter a number: 12.523
Enter another number: 10.2
num1 = 12.523000
num2 = 10.200000</samp></pre>

<p>We use <code>{`%f`}</code> and <code>{`%lf`}</code> format specifier for <code>{`float`}</code> and <code>{`double`}</code> respectively.</p>

<hr/>
<h3 id="character-io">Example 7: C Character I/O</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  char chr;
  printf("Enter a character: ");
  scanf("%c",&amp;chr);     
  printf("You entered %c.", chr);  
  return 0;
}   `}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter a character: g
You entered g</samp>
</pre>

<p>When a character is entered by the user in the above program, the character itself is not stored. Instead, an integer value (ASCII value) is stored.</p>

<p>And when we display that value using <code>{`%c`}</code> text format, the entered character is displayed. If we use <code>{`%d`}</code> to display the character, it's ASCII value is printed.</p>

<hr/>
<h3>Example 8: ASCII Value</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  char chr;
  printf("Enter a character: ");
  scanf("%c", &amp;chr);     

  // When %c is used, a character is displayed
  printf("You entered %c.\n",chr);  

  // When %d is used, ASCII value is displayed
  printf("ASCII value is %d.", chr);  
  return 0;
}`}</code></pre>

<p>Output</p>

<pre>
<samp>Enter a character: g
You entered g.
ASCII value is 103.</samp>
</pre>

<hr/>
<h2 id="multiple-io">I/O Multiple Values</h2>

<p>Here's how you can take multiple inputs from the user and display them.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
  int a;
  float b;

  printf("Enter integer and then a float: ");

  // Taking multiple inputs
  scanf("%d%f", &amp;a, &amp;b);

  printf("You entered %d and %f", a, b);  
  return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter integer and then a float: -3
3.4
You entered -3 and 3.400000</samp>
</pre>

<hr/>
<h2 id="format-specifiers">Format Specifiers for I/O</h2>

<p>As you can see from the above examples, we use</p>

<ul>
<li><code>{`%d`}</code> for <code>{`int`}</code></li>
<li><code>{`%f`}</code> for <code>{`float`}</code></li>
<li><code>{`%lf`}</code> for <code>{`double`}</code></li>
<li><code>{`%c`}</code> for <code>{`char`}</code></li>
</ul>

<p>Here's a list of commonly used C data types and their format specifiers.</p>

<table>
<thead>
  <tr>
    <th>Data Type</th>
    <th>Format Specifier</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>{`int`}</code></td>
    <td><code>{`%d`}</code></td>
  </tr>
  <tr>
    <td><code>{`char`}</code></td>
    <td><code>{`%c`}</code></td>
  </tr>
  <tr>
    <td><code>{`float`}</code></td>
    <td><code>{`%f`}</code></td>
  </tr>
  <tr>
    <td><code>{`double`}</code></td>
    <td><code>{`%lf`}</code></td>
  </tr>
  <tr>
    <td><code>{`short int`}</code></td>
    <td><code>{`%hd`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned int`}</code></td>
    <td><code>{`%u`}</code></td>
  </tr>
  <tr>
    <td><code>{`long int`}</code></td>
    <td><code>{`%li`}</code></td>
  </tr>
  <tr>
    <td><code>{`long long int`}</code></td>
    <td><code>{`%lli`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned long int`}</code></td>
    <td><code>{`%lu`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned long long int`}</code></td>
    <td><code>{`%llu`}</code></td>
  </tr>
  <tr>
    <td><code>{`signed char`}</code></td>
    <td><code>{`%c`}</code></td>
  </tr>
  <tr>
    <td><code>{`unsigned char`}</code></td>
    <td><code>{`%c`}</code></td>
  </tr>
  <tr>
    <td><code>{`long double`}</code></td>
    <td><code>{`%Lf`}</code></td>
  </tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 4 ? 'active' : ''}`} id="topic-5">
          <h2>C Programming Operators</h2>

<div id="node-147" class="node node-c-tutorial clearfix" about="/c-programming/c-operators" typeof="sioc:Item foaf:Document">


<span property="dc:title" content="C Programming Operators" class="rdf-meta element-hidden"></span>


<div id="block-inject-1" class="block-inject block-inject-1">



{/* <style>
#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}
</style> */}

<div id="div-gpt-ad-Programizcom37046"style={{margin:" 32px 0"}}>
</div>

<div id="div-gpt-ad-Programizcom36796" style={{margin:" 32px 0",minHeight:"250px"}}>
</div>
</div><div class="clearfix"></div><p></p><p id="operator">An operator is a symbol that operates on a value or a variable. For example: <var>+</var> is an operator to perform addition.</p>

<p>C has a wide range of operators to perform various operations.</p>

<hr/>
<h2 id="arithmetic">C Arithmetic Operators</h2>

<p>An arithmetic operator performs mathematical operations such as addition, subtraction, multiplication, division etc on numerical values (constants and variables).</p>

<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning of Operator</th>
</tr>
</thead>
<tbody>
<tr>
<td>+</td>
<td>addition or unary plus</td>
</tr>
<tr>
<td>-</td>
<td>subtraction or unary minus</td>
</tr>
<tr>
<td>*</td>
<td>multiplication</td>
</tr>
<tr>
<td>/</td>
<td>division</td>
</tr>
<tr>
<td>%</td>
<td>remainder after division (modulo division)</td>
</tr>
</tbody>
</table>

<h3>Example 1: Arithmetic Operators</h3>

<pre class="c-exec">
<code>{`// Working of arithmetic operators
#include &lt;stdio.h&gt;
int main()
{
int a = 9,b = 4, c;

c = a+b;
printf("a+b = %d \n",c);
c = a-b;
printf("a-b = %d \n",c);
c = a*b;
printf("a*b = %d \n",c);
c = a/b;
printf("a/b = %d \n",c);
c = a%b;
printf("Remainder when a divided by b = %d \n",c);

return 0;
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>a+b = 13
a-b = 5
a*b = 36
a/b = 2
Remainder when a divided by b=1</samp></pre>

<p>The operators <code>{`+`}</code>, <code>{`-`}</code> and <code>{`*`}</code> computes addition, subtraction, and multiplication respectively as you might have expected.</p>

<p>In normal calculation, <code>{`9/4 = 2.25`}</code>. However, the output is <code>{`2`}</code> in the program.</p>

<p>It is because both the variables <var>a</var> and b are integers. Hence, the output is also an integer. The compiler neglects the term after the decimal point and shows answer <code>{`2`}</code> instead of <code>{`2.25`}</code>.</p>

<p>The modulo operator <code>{`%`}</code> computes the remainder. When <code>{`a=9`}</code> is divided by <code>{`b=4`}</code>, the remainder is <code>{`1`}</code>. The <code>{`%`}</code> operator can only be used with integers.</p>

<p>Suppose <code>{`a = 5.0`}</code>, <code>{`b = 2.0`}</code>, <code>{`c = 5`}</code> and <code>{`d = 2`}</code>. Then in C programming,</p>

<pre>
// Either one of the operands is a floating-point number
a/b = 2.5  
a/d = 2.5  
c/b = 2.5  

// Both operands are integers
c/d = 2</pre>

<hr/>
<h2 class="note" id="increment">C Increment and Decrement Operators</h2>

<p>C programming has two operators increment <code>{`++`}</code> and decrement <code>{`--`}</code> to change the value of an operand (constant or variable) by 1.</p>

<p>Increment <code>{`++`}</code> increases the value by 1 whereas decrement <code>{`--`}</code> decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.</p>

<h3>Example 2: Increment and Decrement Operators</h3>
<pre className="c-exec">
  <code>
{`// Working of increment and decrement operators
#include <stdio.h>
int main()
{
int a = 10, b = 100;
float c = 10.5, d = 100.5;

printf("++a = %d \\n", ++a);
printf("--b = %d \\n", --b);
printf("++c = %f \\n", ++c);
printf("--d = %f \\n", --d);

return 0;
}
  `}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<samp>++a = 11
--b = 99
++c = 11.500000
--d = 99.500000</samp></pre>

<p>Here, the operators <code>{`++`}</code> and <code>{`--`}</code> are used as prefixes. These two operators can also be used as postfixes like <code>{`a++`}</code> and <code>{`a--`}</code>. Visit this page to learn more about how <a href="/article/increment-decrement-operator-difference-prefix-postfix" title="Increment Operator as postfix">increment and decrement operators work when used as postfix</a>.</p>

<hr/>
<h2 id="assignment">C Assignment Operators</h2>

<p>An assignment operator is used for assigning a value to a variable. The most common assignment operator is <code>{`=`}</code></p>

<table>
<thead>
<tr>
<th>Operator</th>
<th>Example</th>
<th>Same as</th>
</tr>
</thead>
<tbody>
<tr>
<td>=</td>
<td>a = b</td>
<td>a = b</td>
</tr>
<tr>
<td>+=</td>
<td>a += b</td>
<td>a = a+b</td>
</tr>
<tr>
<td>-=</td>
<td>a -= b</td>
<td>a = a-b</td>
</tr>
<tr>
<td>*=</td>
<td>a *= b</td>
<td>a = a*b</td>
</tr>
<tr>
<td>/=</td>
<td>a /= b</td>
<td>a = a/b</td>
</tr>
<tr>
<td>%=</td>
<td>a %= b</td>
<td>a = a%b</td>
</tr>
</tbody>
</table>

<h3>Example 3: Assignment Operators</h3>

<pre class="c-exec">
<code>
{`// Working of assignment operators
#include &lt;stdio.h&gt;
int main()
{
int a = 5, c;

c = a;      // c is 5
printf("c = %d\n", c);
c += a;     // c is 10 
printf("c = %d\n", c);
c -= a;     // c is 5
printf("c = %d\n", c);
c *= a;     // c is 25
printf("c = %d\n", c);
c /= a;     // c is 5
printf("c = %d\n", c);
c %= a;     // c = 0
printf("c = %d\n", c);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>c = 5 
c = 10 
c = 5 
c = 25 
c = 5 
c = 0</samp></pre>

<hr/>
<h3 id="relational">C Relational Operators</h3>

<p>A relational operator checks the relationship between two operands. If the relation is true, it returns 1; if the relation is false, it returns value 0.</p>

<p>Relational operators are used in <a href="/c-programming/c-if-else-statement" title="C if else">decision making</a> and <a href="/c-programming/c-for-loop" title="C for loop">loops</a>.</p>

<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning of Operator</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>==</td>
<td>Equal to</td>
<td><code>{`5 == 3`}</code> is evaluated to 0</td>
</tr>
<tr>
<td>&gt;</td>
<td>Greater than</td>
<td><code>{`5 &gt; 3`}</code> is evaluated to 1</td>
</tr>
<tr>
<td>&lt;</td>
<td>Less than</td>
<td><code>{`5 &lt; 3`}</code> is evaluated to 0</td>
</tr>
<tr>
<td>!=</td>
<td>Not equal to</td>
<td><code>{`5 != 3`}</code> is evaluated to 1</td>
</tr>
<tr>
<td>&gt;=</td>
<td>Greater than or equal to</td>
<td><code>{`5 &gt;= 3`}</code> is evaluated to 1</td>
</tr>
<tr>
<td>&lt;=</td>
<td>Less than or equal to</td>
<td><code>{`5 &lt;= 3`}</code> is evaluated to 0</td>
</tr>
</tbody>
</table>

<h3>Example 4: Relational Operators</h3>

<pre class="c-exec">
<code>{`// Working of relational operators
#include &lt;stdio.h&gt;
int main()
{
int a = 5, b = 5, c = 10;

printf("%d == %d is %d \n", a, b, a == b);
printf("%d == %d is %d \n", a, c, a == c);
printf("%d &gt; %d is %d \n", a, b, a &gt; b);
printf("%d &gt; %d is %d \n", a, c, a &gt; c);
printf("%d &lt; %d is %d \n", a, b, a &lt; b);
printf("%d &lt; %d is %d \n", a, c, a &lt; c);
printf("%d != %d is %d \n", a, b, a != b);
printf("%d != %d is %d \n", a, c, a != c);
printf("%d &gt;= %d is %d \n", a, b, a &gt;= b);
printf("%d &gt;= %d is %d \n", a, c, a &gt;= c);
printf("%d &lt;= %d is %d \n", a, b, a &lt;= b);
printf("%d &lt;= %d is %d \n", a, c, a &lt;= c);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>5 == 5 is 1
5 == 10 is 0
5 &gt; 5 is 0
5 &gt; 10 is 0
5 &lt; 5 is 0
5 &lt; 10 is 1
5 != 5 is 0
5 != 10 is 1
5 &gt;= 5 is 1
5 &gt;= 10 is 0
5 &lt;= 5 is 1
5 &lt;= 10 is 1 </samp></pre>

<hr/>
<h3 id="logical">C Logical Operators</h3>

<p>An expression containing logical operator returns either 0 or 1 depending upon whether expression results true or false. Logical operators are commonly used in <a href="/c-programming/c-if-else-statement" title="C if else">decision making in C programming</a>.</p>

<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;&amp;</td>
<td>Logical AND. True only if all operands are true</td>
<td>If c = 5 and d = 2 then, expression <code>{`((c==5) &amp;&amp; (d&gt;5))`}</code> equals to 0.</td>
</tr>
<tr>
<td>||</td>
<td>Logical OR. True only if either one operand is true</td>
<td>If c = 5 and d = 2 then, expression <code>{`((c==5) || (d&gt;5))`}</code> equals to 1.</td>
</tr>
<tr>
<td>!</td>
<td>Logical NOT. True only if the operand is 0</td>
<td>If c = 5 then, expression <code>{`!(c==5)`}</code> equals to 0.</td>
</tr>
</tbody>
</table>

<h3>Example 5: Logical Operators</h3>

<pre class="c-exec">
<code>{`// Working of logical operators

#include &lt;stdio.h&gt;
int main()
{
int a = 5, b = 5, c = 10, result;

result = (a == b) &amp;&amp; (c &gt; b);
printf("(a == b) &amp;&amp; (c &gt; b) is %d \n", result);

result = (a == b) &amp;&amp; (c &lt; b);
printf("(a == b) &amp;&amp; (c &lt; b) is %d \n", result);

result = (a == b) || (c &lt; b);
printf("(a == b) || (c &lt; b) is %d \n", result);

result = (a != b) || (c &lt; b);
printf("(a != b) || (c &lt; b) is %d \n", result);

result = !(a != b);
printf("!(a != b) is %d \n", result);

result = !(a == b);
printf("!(a == b) is %d \n", result);

return 0;
}`}
</code></pre>

<p><b>Output</b></p>

<pre>
<samp>(a == b) &amp;&amp; (c &gt; b) is 1 
(a == b) &amp;&amp; (c &lt; b) is 0 
(a == b) || (c &lt; b) is 1 
(a != b) || (c &lt; b) is 0 
!(a != b) is 1 
!(a == b) is 0 </samp></pre>

<p><strong>Explanation of logical operator program</strong></p>

<ul>
<li><code>{`(a == b) &amp;&amp; (c &gt; 5)`}</code> evaluates to 1 because both operands <code>{`(a == b)`}</code> and <code>{`(c &gt; b)`}</code> is 1 (true).</li>
<li><code>{`(a == b) &amp;&amp; (c &lt; b)`}</code> evaluates to 0 because operand <code>{`(c &lt; b)`}</code> is 0 (false).</li>
<li><code>{`(a == b) || (c &lt; b)`}</code> evaluates to 1 because <code>{`(a = b)`}</code> is 1 (true).</li>
<li><code>{`(a != b) || (c &lt; b)`}</code> evaluates to 0 because both operand <code>{`(a != b)`}</code> and <code>{`(c &lt; b)`}</code> are 0 (false).</li>
<li><code>{`!(a != b)`}</code> evaluates to 1 because operand <code>{`(a != b)`}</code> is 0 (false). Hence, !(a != b) is 1 (true).</li>
<li><code>{`!(a == b)`}</code> evaluates to 0 because <code>{`(a == b)`}</code> is 1 (true). Hence, <code>{`!(a == b)`}</code> is 0 (false).</li>
</ul>

<hr/>
<h3>C Bitwise Operators</h3>

<p>During computation, mathematical operations like: addition, subtraction, multiplication, division, etc are converted to bit-level which makes processing faster and saves power.</p>

<p>Bitwise operators are used in C programming to perform bit-level operations.</p>

<table>
<thead>
<tr>
<th>Operators</th>
<th>Meaning of operators</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;</td>
<td>Bitwise AND</td>
</tr>
<tr>
<td>|</td>
<td>Bitwise OR</td>
</tr>
<tr>
<td>^</td>
<td>Bitwise exclusive OR</td>
</tr>
<tr>
<td>~</td>
<td>Bitwise complement</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>Shift left</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>Shift right</td>
</tr>
</tbody>
</table>

<p>Visit <a href="/c-programming/bitwise-operators" title="C bitwise operators">bitwise operator in C</a> to learn more.</p>

<h2 id="other-operators">Other Operators</h2>

<hr/>
<h3 id="comma-operator">Comma Operator</h3>

<p>Comma operators are used to link related expressions together. For example:</p>

<pre>
<code>{`int a, c = 5, d;`}</code></pre>

<hr/>
<h3 id="sizeof">The sizeof operator</h3>

<p>The <code>{`sizeof`}</code> is a unary operator that returns the size of data (constants, variables, array, structure, etc).</p>

<h3>Example 6: sizeof Operator</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{
int a;
float b;
double c;
char d;
printf("Size of int=%lu bytes\n",sizeof(a));
printf("Size of float=%lu bytes\n",sizeof(b));
printf("Size of double=%lu bytes\n",sizeof(c));
printf("Size of char=%lu byte\n",sizeof(d));

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Size of int = 4 bytes
Size of float = 4 bytes
Size of double = 8 bytes
Size of char = 1 byte</samp>
</pre>

<hr/>
<p>Other operators such as ternary operator <code>{`?:`}</code>, reference operator <code>{`&amp;`}</code>, dereference operator <code>{`*`}</code> and member selection operator <code>{`-&gt;`}</code> will be discussed in later tutorials.</p>
</div>



      </div>
      <div className={`topic-description ${activeIndex === 5 ? 'active' : ''}`} id="topic-6">
          <h2>C Introduction Examples</h2>

<p>We have learned about the following topics so far:</p>

<ol>
<li><a href="/c-programming/c-variables-constants" title="Constants and Variables in C programming">Variables and Constants</a></li>
<li><a href="/c-programming/c-data-types" title="Data types in C programming">Data Types</a></li>
<li><a href="/c-programming/c-input-output" title="C Programming Input/Output">Input and Output in C programming</a></li>
<li><a href="/c-programming/c-operators" title="Operators in C programming">Operators</a></li>
</ol>

<p>To understand these topics better, we have created some examples.</p>

<p>Before you go through these examples, we suggest you to try creating these programs on our own.</p>

<p>We understand that programming can by start If you are just a programming newbie. In that case, go through each example below and see if you can understand them. Once you do that, try writing these programs on your own.</p>

<hr/>
<h2>Examples</h2>

<table summary="Source code and Examples on Introductory features of  C programming Language">
<tbody>
<tr>
<td><a href="/c-programming/examples/print-sentence">C program to print a sentence</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/print-integer">C program to print an integer entered by the user</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/add-numbers">C program to add two integers entered by the User</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/product-numbers">C program to multiply two floating-point numbers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/ASCII-value-character">C program to find ASCII value of a character entered by the user</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/remainder-quotient">C program to find quotient and remainder of Two Integers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/sizeof-operator-example">C program to find the size of int, float, double and char</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/keyword-long">C program to demonstrate the working of keyword long</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/swapping">C program to swap two numbers</a></td>
</tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 6 ? 'active' : ''}`} id="topic-7">
          <h2>C if...else Statement</h2>
<h2 id="if-statement">C if Statement</h2>

<p>The syntax of the <code>{`if`}</code> statement in C programming is:</p>

<pre>
<code>{`if (test expression) 
{
// code
}`}</code></pre>

<hr/>
<h3>How if statement works?</h3>

<p>The <code>{`if`}</code> statement evaluates the test expression inside the parenthesis <code>{`()`}</code>.</p>

<ul>
<li>If the test expression is evaluated to true, statements inside the body of <code>{`if`}</code> are executed.</li>
<li>If the test expression is evaluated to false, statements inside the body of <code>{`if`}</code> are not executed.</li>
</ul>

<figure><img alt="How if statement works in C programming?" height="196" src="//cdn.programiz.com/sites/tutorial2program/files/working-c-if-statement.jpg" title="Working of if statement" width="527"></img>
<figcaption>Working of if Statement</figcaption>
</figure>

<p>To learn more about when test expression is evaluated to true (non-zero value) and false (0), check <a href="/c-programming/c-operators#relational" title="C Relational operators">relational</a> and <a href="/c-programming/c-operators#logical" title="C logical operators">logical operators</a>.</p>

<hr/>
<h3 id="example-if">Example 1: if statement</h3>

<pre class="c-exec">
<code>{`// Program to display a number if it is negative

#include &lt;stdio.h&gt;
int main() {
int number;

printf("Enter an integer: ");
scanf("%d", &amp;number);

// true if number is less than 0
if (number &lt; 0) {
printf("You entered %d.\n", number);
}

printf("The if statement is easy.");

return 0;
}`}</code></pre>

<p><strong>Output 1</strong></p>

<pre>
<samp>Enter an integer: -2
Yo entered -2.
The if statement is easy.</samp></pre>

<p>When the user enters -2, the test expression <code>{`number&lt;0`}</code> is evaluated to true. Hence, <samp>You entered -2</samp> is displayed on the screen.</p>

<p><strong>Output 2</strong></p>

<pre>
<samp>Enter an integer: 5
The if statement is easy.</samp></pre>

<p>When the user enters 5, the test expression <code>{`number&lt;0`}</code> is evaluated to false and the statement inside the body of <code>{`if`}</code> is not executed</p>

<hr/>
<h2 id="if-else-statement">C if...else Statement</h2>

<p>The <code>{`if`}</code> statement may have an optional <code>{`else`}</code> block. The syntax of the <code>{`if..else`}</code> statement is:</p>

<pre>
<code>{`if (test expression) {
// run code if test expression is true
}
else {
// run code if test expression is false
}`}</code></pre>

<hr/>
<h3>How if...else statement works?</h3>

/+<div class="clearfix"></div><p>If the test expression is evaluated to true,</p>

<ul>
<li>statements inside the body of <code>{`if`}</code> are executed.</li>
<li>statements inside the body of <code>{`else`}</code> are skipped from execution.</li>
</ul>

<p>If the test expression is evaluated to false,</p>

<ul>
<li>statements inside the body of <code>{`else`}</code> are executed</li>
<li>statements inside the body of <code>{`if`}</code> are skipped from execution.</li>
</ul>

<figure><img alt="How if...else statement works in C programming?" height="267" src="//cdn.programiz.com/sites/tutorial2program/files/how-if-else-works-c-programming.jpg" title="Working of if...else statement" width="547"></img>
<figcaption>Working of if...else Statement</figcaption>
</figure>

<hr/>
<h3 id="if-else-example">Example 2: if...else statement</h3>

<pre class="c-exec">
<code>{`// Check whether an integer is odd or even

#include &lt;stdio.h&gt;
int main() {
int number;
printf("Enter an integer: ");
scanf("%d", &amp;number);

// True if the remainder is 0
if  (number%2 == 0) {
printf("%d is an even integer.",number);
}
else {
printf("%d is an odd integer.",number);
}

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter an integer: 7
7 is an odd integer.</samp></pre>

<p>When the user enters 7, the test expression <code>{`number%2==0`}</code> is evaluated to false. Hence, the statement inside the body of <code>{`else`}</code> is executed.</p>

<hr/>
<h2 id="if-else-ladder">C if...else Ladder</h2>

<p>The <code>{`if...else`}</code> statement executes two different codes depending upon whether the test expression is true or false. Sometimes, a choice has to be made from more than 2 possibilities.</p>

<p>The if...else ladder allows you to check between multiple test expressions and execute different statements.</p>

<hr/>
<h3>Syntax of if...else Ladder</h3>

<pre>
<code>{`if (test expression1) {
// statement(s)
}
else if(test expression2) {
// statement(s)
}
else if (test expression3) {
// statement(s)
}
.
.
else {
// statement(s)
}`}</code></pre>

<hr/>
<h3 id="if-else-ladder-example">Example 3: C if...else Ladder</h3>

<pre class="c-exec">
<code>{`// Program to relate two integers using =, &gt; or &lt; symbol

#include &lt;stdio.h&gt;
int main() {
int number1, number2;
printf("Enter two integers: ");
scanf("%d %d", &amp;number1, &amp;number2);

//checks if the two integers are equal.
if(number1 == number2) {
printf("Result: %d = %d",number1,number2);
}

//checks if number1 is greater than number2.
else if (number1 &gt; number2) {
printf("Result: %d &gt; %d", number1, number2);
}

//checks if both test expressions are false
else {
printf("Result: %d &lt; %d",number1, number2);
}

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter two integers: 12
23
Result: 12 &lt; 23</samp></pre>

<hr/>
<h2 id="nested-if-else">Nested if...else</h2>

<p>It is possible to include an <code>{`if...else`}</code> statement inside the body of another <code>{`if...else`}</code> statement.</p>

<hr/>
<h3 id="example-nested-if-else">Example 4: Nested if...else</h3>

<p>This program given below relates two integers using either <code>{`&lt;`}</code>, <code>{`&gt;`}</code> and <code>{`=`}</code> similar to the <code>{`if...else`}</code> ladder's example. However, we will use a nested <code>{`if...else`}</code> statement to solve this problem.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main() {
int number1, number2;
printf("Enter two integers: ");
scanf("%d %d", &amp;number1, &amp;number2);

if (number1 &gt;= number2) {
if (number1 == number2) {
printf("Result: %d = %d",number1,number2);
}
else {
printf("Result: %d &gt; %d", number1, number2);
}
}
else {
printf("Result: %d &lt; %d",number1, number2);
}

return 0;
}`}</code></pre>

<hr/>
<p class="note-tip">If the body of an <code>{`if...else`}</code> statement has only one statement, you do not need to use brackets <code>{`{}`}</code>.</p>

<p>For example, this code</p>

<pre>
<code>{`if (a &gt; b) {
printf("Hello");
}
printf("Hi");`}</code></pre>

<p>is equivalent to</p>

<pre>
<code>{`if (a &gt; b)
printf("Hello");
printf("Hi");`}</code>
</pre>
      </div>
      <div className={`topic-description ${activeIndex === 7 ? 'active' : ''}`} id="topic-8">
          <h2>C for Loop</h2>
<p>In programming, a loop is used to repeat a block of code until the specified condition is met.</p>

<p>C programming has three types of loops:</p>

<ol>
<li>for loop</li>
<li>while loop</li>
<li>do...while loop</li>
</ol>

<p>We will learn about <code>{`for`}</code> loop in this tutorial. In the next tutorial, we will learn about <code>{`while`}</code> and <code>{`do...while`}</code> loop.</p>

<hr/>
<h2><a id="for-loop" name="for-loop"></a>for Loop</h2>

<p>The syntax of the <code>{`for`}</code> loop is:</p>

<pre>
<code>{`for (initializationStatement; testExpression; updateStatement)
{
// statements inside the body of loop
}`}</code></pre>

<hr/>
<h3 id="for-loop-working">How for loop works?</h3>

<ul>
<li>The initialization statement is executed only once.</li>
<li>Then, the test expression is evaluated. If the test expression is evaluated to false, the <code>{`for`}</code> loop is terminated.</li>
<li>However, if the test expression is evaluated to true, statements inside the body of the <code>{`for`}</code> loop are executed, and the update expression is updated.</li>
<li>Again the test expression is evaluated.</li>
</ul>

<p>This process goes on until the test expression is false. When the test expression is false, the loop terminates.</p>

/+<div class="clearfix"></div><p>To learn more about test expression (when the test expression is evaluated to true and false), check out <a href="/c-programming/c-operators#relational" title="C Relational operators">relational</a> and <a href="/c-programming/c-operators#logical" title="C logical operators">logical operators</a>.</p>

<hr/>
<h3 id="for-flowchart">for loop Flowchart</h3>

<figure><img alt="Flowchart of for loop in C programming" class="figure" height="477" src="//cdn.programiz.com/sites/tutorial2program/files/c-for-loop.jpg" title="for loop Flowchart" width="340"></img>
<figcaption>Working of for loop</figcaption>
</figure>

<hr/>
<h3 id="example-for-loop">Example 1: for loop</h3>

<pre class="c-exec">
<code>{`// Print numbers from 1 to 10
#include &lt;stdio.h&gt;

int main() {
int i;

for (i = 1; i &lt; 11; ++i)
{
printf("%d ", i);
}
return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>1 2 3 4 5 6 7 8 9 10</samp></pre>

<ol>
<li><var>i</var> is initialized to 1.</li>
<li>The test expression <code>{`i &lt; 11`}</code> is evaluated. Since 1 less than 11 is true, the body of <code>{`for`}</code> loop is executed. This will print the <strong>1</strong> (value of <var>i</var>) on the screen.</li>
<li>The update statement <code>{`++i`}</code> is executed. Now, the value of <var>i</var> will be 2. Again, the test expression is evaluated to true, and the body of <code>{`for`}</code> loop is executed. This will print <strong>2</strong> (value of <var>i</var>) on the screen.</li>
<li>Again, the update statement <code>{`++i`}</code> is executed and the test expression <code>{`i &lt; 11`}</code> is evaluated. This process goes on until <var>i</var> becomes 11.</li>
<li>When <var>i</var> becomes 11, <var>i &lt; 11</var> will be false, and the <code>{`for`}</code> loop terminates.</li>
</ol>

<hr/>
<h3>Example 2: for loop</h3>

<pre class="c-exec">
<code>{`// Program to calculate the sum of first n natural numbers
// Positive integers 1,2,3...n are known as natural numbers

#include &lt;stdio.h&gt;
int main()
{
int num, count, sum = 0;

printf("Enter a positive integer: ");
scanf("%d", &amp;num);

// for loop terminates when num is less than count
for(count = 1; count &lt;= num; ++count)
{
sum += count;
}

printf("Sum = %d", sum);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter a positive integer: 10
Sum = 55</samp></pre>

<p>The value entered by the user is stored in the variable <var>num</var>. Suppose, the user entered 10.</p>

<p>The <var>count</var> is initialized to 1 and the test expression is evaluated. Since the test expression <code>{`count&lt;=num`}</code> (1 less than or equal to 10) is true, the body of <code>{`for`}</code> loop is executed and the value of <var>sum</var> will equal to 1.</p>

<p>Then, the update statement <code>{`++count`}</code> is executed and <var>count</var> will equal to 2. Again, the test expression is evaluated. Since 2 is also less than 10, the test expression is evaluated to true and the body of the <code>{`for`}</code> loop is executed. Now, <var>sum</var> will equal 3.</p>

<p>This process goes on and the sum is calculated until the <var>count</var> reaches 11.</p>

<p>When the <var>count</var> is 11, the test expression is evaluated to 0 (false), and the loop terminates.</p>

<p>Then, the value of <code>{`sum`}</code> is printed on the screen.</p>

<hr/>
<p>We will learn about <code>{`while`}</code> loop and <code>{`do...while`}</code> loop in the next tutorial.</p>
      </div>
      <div className={`topic-description ${activeIndex === 8 ? 'active' : ''}`} id="topic-9">
          <h2>C while and do...while Loop</h2>
<p>In programming, loops are used to repeat a block of code until a specified condition is met.</p>

<p>C programming has three types of loops.</p>

<ol>
<li>for loop</li>
<li>while loop</li>
<li>do...while loop</li>
</ol>

<p>In the previous tutorial, we learned about <code>{`for`}</code> loop. In this tutorial, we will learn about <code>{`while`}</code> and <code>{`do..while`}</code> loop.</p>

<hr/>
<h2 id="while-loop">while loop</h2>

<p>The syntax of the <code>{`while`}</code> loop is:</p>

<pre>
<code>{`while (testExpression) {
// the body of the loop 
}`}</code></pre>

<hr/>
<h3 id="while-loop-working">How while loop works?</h3>

<ul>
<li>The <code>{`while`}</code> loop evaluates the <code>{`testExpression`}</code> inside the parentheses <code>{`()`}</code>.</li>
<li>If <code>{`testExpression`}</code> is <strong>true</strong>, statements inside the body of <code>{`while`}</code> loop are executed. Then, <code>{`testExpression`}</code> is evaluated again.</li>
<li>The process goes on until <code>{`testExpression`}</code> is evaluated to <strong>false</strong>.</li>
<li>If <code>{`testExpression`}</code> is <strong>false</strong>, the loop terminates (ends).</li>
</ul>
<div class="clearfix"></div><p>To learn more about test expressions (when <code>{`testExpression`}</code> is evaluated to <strong>true</strong> and <strong>false</strong>), check out <a href="/c-programming/c-operators#relational" title="C Relational operators">relational</a> and <a href="/c-programming/c-operators#logical" title="C logical operators">logical operators</a>.</p>

<hr/>
<h3 id="flowchart-while">Flowchart of while loop</h3>

<figure><img alt="flowchart of while loop in C programming" height="326" src="//cdn.programiz.com/sites/tutorial2program/files/c-while-loop_0.jpg" title="while loop flowchart" width="320"></img>
<figcaption>Working of while loop</figcaption>
</figure>

<hr/>
<h3 id="example-while">Example 1: while loop</h3>

<pre class="c-exec">
<code>{`// Print numbers from 1 to 5

#include &lt;stdio.h&gt;
int main() {
int i = 1;

while (i &lt;= 5) {
printf("%d\n", i);
++i;
}

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>1
2
3
4
5</samp>
</pre>

<p>Here, we have initialized <var>i</var> to 1.</p>

<ol>
<li>When <code>{`i = 1`}</code>, the test expression <code>{`i &lt;= 5`}</code> is <strong>true</strong>. Hence, the body of the <code>{`while`}</code> loop is executed. This prints <code>{`1`}</code> on the screen and the value of <var>i</var> is increased to <code>{`2`}</code>.</li>
<li>Now, <code>{`i = 2`}</code>, the test expression <code>{`i &lt;= 5`}</code> is again <strong>true</strong>. The body of the <code>{`while`}</code> loop is executed again. This prints <code>{`2`}</code> on the screen and the value of <var>i</var> is increased to <code>{`3`}</code>.</li>
<li>This process goes on until <var>i</var> becomes 6. Then, the test expression <code>{`i &lt;= 5`}</code> will be <strong>false</strong> and the loop terminates.</li>
</ol>

<hr/>
<h2 id="do-while-loop">do...while loop</h2>

<p>The <code>{`do..while`}</code> loop is similar to the <code>{`while`}</code> loop with one important difference. The body of <code>{`do...while`}</code> loop is executed at least once. Only then, the test expression is evaluated.</p>

<p>The syntax of the <code>{`do...while`}</code> loop is:</p>

<pre>
<code>{`do {
// the body of the loop
}
while (testExpression);`}</code></pre>

<hr/>
<h3 id="do-while-working">How do...while loop works?</h3>

<ul>
<li>The body of <code>{`do...while`}</code> loop is executed once. Only then, the <code>{`testExpression`}</code> is evaluated.</li>
<li>If <code>{`testExpression`}</code> is <strong>true</strong>, the body of the loop is executed again and <code>{`testExpression`}</code> is evaluated once more.</li>
<li>This process goes on until <code>{`testExpression`}</code> becomes <strong>false</strong>.</li>
<li>If <code>{`testExpression`}</code> is <strong>false</strong>, the loop ends.</li>
</ul>

<hr/>
<h3 id="do-while-flowchart">Flowchart of do...while Loop</h3>

<figure><img alt="do while loop flowchart in C programming" height="272" src="//cdn.programiz.com/sites/tutorial2program/files/c-do-while-loop_0.jpg" title="do while loop flowchart" width="260"></img>
<figcaption>Working of do...while loop</figcaption>
</figure>

<hr/>
<h3 id="example-do-while">Example 2: do...while loop</h3>

<pre class="c-exec">
<code>{`// Program to add numbers until the user enters zero

#include &lt;stdio.h&gt;
int main() {
double number, sum = 0;

// the body of the loop is executed at least once
do {
printf("Enter a number: ");
scanf("%lf", &amp;number);
sum += number;
}
while(number != 0.0);

printf("Sum = %.2lf",sum);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter a number: 1.5
Enter a number: 2.4
Enter a number: -3.4
Enter a number: 4.2
Enter a number: 0
Sum = 4.70</samp>
</pre>

<p>Here, we have used a <code>{`do...while`}</code> loop to prompt the user to enter a number. The loop works as long as the input number is not <code>{`0`}</code>.</p>

<p>The <code>{`do...while`}</code> loop executes at least once i.e. the first iteration runs without checking the condition. The condition is checked only after the first iteration has been executed.</p>

<pre>
<code>{`do {
printf("Enter a number: ");
scanf("%lf", &amp;number);
sum += number;
}
while(number != 0.0);`}</code></pre>

<p>So, if the first input is a non-zero number, that number is added to the <var>sum</var> variable and the loop continues to the next iteration. This process is repeated until the user enters <code>{`0`}</code>.</p>

<p>But if the first input is 0, there will be no second iteration of the loop and <var>sum</var> becomes <code>{`0.0`}</code>.</p>

<p>Outside the loop, we print the value of <var>sum</var>.</p>
      </div>
      <div className={`topic-description ${activeIndex === 9 ? 'active' : ''}`} id="topic-10">
          <h2>C break and continue</h2>
<h2 id="break">C break</h2>

<p>The break statement ends the loop immediately when it is encountered. Its syntax is:</p>

<pre>
<code>{`break;`}</code></pre>

<p>The break statement is almost always used with <code>{`if...else`}</code> statement inside the loop.</p>

<hr/>
<h3>How break statement works?</h3>

<figure><img alt="Working of break statement" height="354" src="//cdn.programiz.com/sites/tutorial2program/files/c-break-statement-works.jpg" width="560"></img>
<figcaption>
Working of break in C</figcaption></figure>

<hr/>
<h3 id="break-example">Example 1: break statement</h3>

<pre class="c-exec">
<code>{`// Program to calculate the sum of numbers (10 numbers max)
// If the user enters a negative number, the loop terminates

#include &lt;stdio.h&gt;

int main() {
int i;
double number, sum = 0.0;

for (i = 1; i &lt;= 10; ++i) {
printf("Enter n%d: ", i);
scanf("%lf", &amp;number);

// if the user enters a negative number, break the loop
if (number &lt; 0.0) {
break;
}

sum += number; // sum = sum + number;
}

printf("Sum = %.2lf", sum);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter n1: 2.4
Enter n2: 4.5
Enter n3: 3.4
Enter n4: -3
Sum = 10.30</samp></pre>

<p>This program calculates the sum of a maximum of 10 numbers. Why a maximum of 10 numbers? It's because if the user enters a negative number, the <code>{`break`}</code> statement is executed. This will end the <code>{`for`}</code> loop, and the <var>sum</var> is displayed.</p>
<div class="clearfix"></div><p>In C, <code>{`break`}</code> is also used with the <code>{`switch`}</code> statement. This will be discussed in the next tutorial.</p>

<hr/>
<h2 id="continue">C continue</h2>

<p>The <code>{`continue`}</code> statement skips the current iteration of the loop and continues with the next iteration. Its syntax is:</p>

<pre>
<code>{`continue;`}</code></pre>

<p>The <code>{`continue`}</code> statement is almost always used with the <code>{`if...else`}</code> statement.</p>

<hr/>
<h3>How continue statement works?</h3>

<figure><img alt="Working of continue statement in C programming" height="339" src="//cdn.programiz.com/sites/tutorial2program/files/c-continue-statement-works.jpg" width="500"></img>
<figcaption>Working of Continue in C</figcaption></figure>

<hr/>
<h3 id="example-continue">Example 2: continue statement</h3>

<pre class="c-exec">
<code>{`// Program to calculate the sum of numbers (10 numbers max)
// If the user enters a negative number, it's not added to the result

#include &lt;stdio.h&gt;
int main() {
int i;
double number, sum = 0.0;

for (i = 1; i &lt;= 10; ++i) {
printf("Enter a n%d: ", i);
scanf("%lf", &amp;number);

if (number &lt; 0.0) {
continue;
}

sum += number; // sum = sum + number;
}

printf("Sum = %.2lf", sum);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter n1: 1.1
Enter n2: 2.2
Enter n3: 5.5
Enter n4: 4.4
Enter n5: -3.4
Enter n6: -45.5
Enter n7: 34.5
Enter n8: -4.2
Enter n9: -1000
Enter n10: 12
Sum = 59.70</samp></pre>

<p>In this program, when the user enters a positive number, the sum is calculated using <code>{`sum += number;`}</code> statement.</p>

<p>When the user enters a negative number, the <code>{`continue`}</code> statement is executed and it skips the negative number from the calculation.</p>
      </div>
      <div className={`topic-description ${activeIndex === 10 ? 'active' : ''}`} id="topic-11">
          <h2>C switch Statement</h2>
<p id="introduction">The switch statement allows us to execute one code block among many alternatives.</p>

<p>You can do the same thing with the <code>{`if...else..if`}</code> ladder. However, the syntax of the <code>{`switch`}</code> statement is much easier to read and write.</p>

<hr/>
<h2 id="switch-syntax">Syntax of switch...case</h2>

<pre>
<code>{`switch (expression)
​{
case constant1:
// statements
break;

case constant2:
// statements
break;
.
.
.
default:
// default statements
}`}</code></pre>

<p><strong>How does the switch statement work?</strong></p>

<p>The <var>expression</var> is evaluated once and compared with the values of each <var>case</var> label.</p>

<ul>
<li>If there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to <var>constant2</var>, statements after <code>{`case constant2:`}</code> are executed until <code>{`break`}</code> is encountered.</li>
<li>If there is no match, the default statements are executed.</li>
</ul>

<div class="note-tip">
<p><strong>Notes:</strong></p>

<ul>
<li>If we do not use the <code>{`break`}</code> statement, all statements after the matching label are also executed.</li>
<li>The <code>{`default`}</code> clause inside the <code>{`switch`}</code> statement is optional.</li>
</ul>
</div>

<hr/>
<h3 id="switch-flowchart" name="switch-flowchart">switch Statement Flowchart</h3>

<figure><img alt="Flowchart of switch statement" height="662" src="//cdn.programiz.com/sites/tutorial2program/files/flowchart-switch-statement.jpg" title="switch Statement Flowchart" width="460"></img>
<figcaption>switch Statement Flowchart</figcaption>
</figure>

<hr/>
<h3 id="example-switch">Example: Simple Calculator</h3>

<pre class="c-exec">
<code>{`// Program to create a simple calculator
#include &lt;stdio.h&gt;

int main() {
char operation;
double n1, n2;

printf("Enter an operator (+, -, *, /): ");
scanf("%c", &amp;operation);
printf("Enter two operands: ");
scanf("%lf %lf",&amp;n1, &amp;n2);

switch(operation)
{
case '+':
printf("%.1lf + %.1lf = %.1lf",n1, n2, n1+n2);
break;

case '-':
printf("%.1lf - %.1lf = %.1lf",n1, n2, n1-n2);
break;

case '*':
printf("%.1lf * %.1lf = %.1lf",n1, n2, n1*n2);
break;

case '/':
printf("%.1lf / %.1lf = %.1lf",n1, n2, n1/n2);
break;

// operator doesn't match any case constant +, -, *, /
default:
printf("Error! operator is not correct");
}

return 0;
}
`}</code></pre>
<div class="clearfix"></div><p><strong>Output</strong></p>

<pre>
<samp>Enter an operator (+, -, *, /): -
Enter two operands: 32.5
12.4
32.5 - 12.4 = 20.1</samp></pre>

<p>The <var>-</var> operator entered by the user is stored in the <var>operation</var> variable. And, two operands <var>32.5</var> and <var>12.4</var> are stored in variables <var>n1</var> and <var>n2</var> respectively.</p>

<p>Since the <var>operation</var> is <code>{`-`}</code>, the control of the program jumps to</p>

<pre>
printf("%.1lf - %.1lf = %.1lf", n1, n2, n1-n2);</pre>

<p>Finally, the <a href="/c-programming/c-break-continue-statement">break statement</a> terminates the <code>{`switch`}</code> statement.</p>
      </div>
      <div className={`topic-description ${activeIndex === 11 ? 'active' : ''}`} id="topic-12">
                              <h2>C goto Statement</h2>
      <p>The <code>{`goto`}</code> statement allows us to transfer control of the program to the specified <var>label</var>.</p>

<hr/>
<h3 id="syntax-goto">Syntax of goto Statement</h3>

<pre>
<code>{`goto label;
... .. ...
... .. ...
label: 
statement;
`}</code></pre>

<p>The <var>label</var> is an identifier. When the <code>{`goto`}</code> statement is encountered, the control of the program jumps to <code>{`label:`}</code> and starts executing the code.</p>

<figure><img alt="How goto statement works?" height="201" src="//cdn.programiz.com/sites/tutorial2program/files/c-goto-statement.jpg" title="goto Statement" width="300"></img>
	<figcaption>Working of goto Statement</figcaption>
</figure>

<hr/>
<h3 id="example-goto">Example: goto Statement</h3>

<pre class="c-exec">
<code>{`// Program to calculate the sum and average of positive numbers
// If the user enters a negative number, the sum and average are displayed.

#include &lt;stdio.h&gt;

int main() {

   const int maxInput = 100;
   int i;
   double number, average, sum = 0.0;

   for (i = 1; i &lt;= maxInput; ++i) {
      printf("%d. Enter a number: ", i);
      scanf("%lf", &amp;number);
      
      // go to jump if the user enters a negative number
      if (number &lt; 0.0) {
         goto jump;
      }
      sum += number;
   }

jump:
   average = sum / (i - 1);
   printf("Sum = %.2f\n", sum);
   printf("Average = %.2f", average);

   return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>1. Enter a number: 3
2. Enter a number: 4.3
3. Enter a number: 9.3
4. Enter a number: -2.9
Sum = 16.60
Average = 5.53</samp></pre>

<hr/>
<h3 id="avoid-goto-reasons">Reasons to avoid goto</h3>

<p></p><div id="block-inject-1" class="block-inject block-inject-1">
    
    

    <div id="div-gpt-ad-Programizcom37046"style={{margin:" 32px 0"}}>
    </div>
    
    <div id="div-gpt-ad-Programizcom36796" style={{margin:" 32px 0",minHeight:"250px"}}>
    </div>
    </div><div class="clearfix"></div><p>The use of <code>{`goto`}</code> statement may lead to code that is buggy and hard to follow. For example,</p>

<pre>
<code>{`one:
for (i = 0; i &lt; number; ++i)
{
    test += i;
    goto two;
}
two: 
if (test &gt; 5) {
  goto three;
}
... .. ...
`}</code></pre>

<p>Also, the <code>{`goto`}</code> statement allows you to do bad stuff such as jump out of the scope.</p>

<p>That being said, <code>{`goto`}</code> can be useful sometimes. For example: to break from nested loops.</p>

<hr/>
<h3 id="use-goto?">Should you use goto?</h3>

<p>If you think the use of <code>{`goto`}</code> statement simplifies your program, you can use it. That being said, <code>{`goto`}</code> is rarely useful and you can create any C program without using <code>{`goto`}</code> altogether.</p>

<p>Here's a quote from Bjarne Stroustrup, creator of C++, <strong>"The fact that 'goto' can do anything is exactly why we don't use it."</strong></p>
      </div>
      <div className={`topic-description ${activeIndex === 12 ? 'active' : ''}`} id="topic-13">
          <h2>C Control Flow Examples</h2>

<p>To understand all the examples on this page, you should know about the following topics:</p>

<ul>
<li><a href="/c-programming/c-if-else-statement" title="if...else Statement in C programming">if...else Statement</a></li>
<li><a href="/c-programming/c-for-loop" title="for Loop in C programming">for Loop </a></li>
<li><a href="/c-programming/c-do-while-loops" title="while loop in C programming">while Loop</a></li>
<li><a href="/c-programming/c-break-continue-statement" title="C  break and continue">break and continue</a></li>
<li><a href="/c-programming/c-switch-case-statement" title="switch Statement in C programming">switch...case</a></li>
</ul>

<hr/>
<h2>C Control Flow Examples</h2>

<table summary="Decision Making and Loops Examples">
<tbody>
<tr>
<td>Check whether a number is even or odd</td>
</tr>
<tr>
<td>Check whether a character is a vowel or consonant</td>
</tr>
<tr>
<td><a href="/c-programming/examples/largest-number-three">Find the largest number among three numbers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/quadratic-roots">Find all roots of a quadratic equation</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/leap-year">Check Whether the Entered Year is Leap Year or not</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/negative-positive-zero">Check Whether a Number is Positive or Negative or Zero.</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/alphabet">Checker whether a character is an alphabet or not</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/sum-natural-numbers">Find the sum of natural numbers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/factorial">Find factorial of a number</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/multiplication-table">Generate multiplication table</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/fibonacci-series">Display Fibonacci series</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/hcf-gcd">Find HCF of two numbers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/lcm">Find LCM of two numbers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/digits-count">Count number of digits of an integer</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/reverse-number">Reverse a number </a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/power-number">Calculate the power of a number</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/palindrome-number">Check whether a number is a palindrome or not</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/prime-number">Check whether an integer is prime or Not</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/prime-number-intervals">Display prime numbers between two intervals</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/check-armstrong-number">Check Armstrong number</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/Armstrong-number-interval">Display Armstrong numbers between two intervals</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/factors-number">Display factors of a number</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/pyramid-pattern">Print pyramids and triangles</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/calculator-switch-case">Create a simple calculator</a></td>
</tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 13 ? 'active' : ''}`} id="topic-14">
          <h2>C Functions</h2>
<p><a id="function" name="function"></a>A function is a block of code that performs a specific task.</p>

<p>Suppose, you need to create a program to create a circle and color it. You can create two functions to solve this problem:</p>

<ul>
<li>create a circle function</li>
<li>create a color function</li>
</ul>

<p>Dividing a complex problem into smaller chunks makes our program easy to understand and reuse.</p>

<hr/>
<h2>Types of function</h2>

<p>There are two types of function in C programming:</p>

<ul>
<li><a href="/c-programming/library-function" title="C Library Functions">Standard library functions</a></li>
<li><a href="/c-programming/c-user-defined-functions" title="C user-defined functions">User-defined functions</a></li>
</ul>

<hr/>
<h3><a id="standard-library-function" name="standard-library-function"></a>Standard library functions</h3>

<p>The standard library functions are built-in functions in C programming.</p>

<p>These functions are defined in header files. For example,</p>

<ul>
<li>The <code>{`printf()`}</code> is a standard library function to send formatted output to the screen (display output on the screen). This function is defined in the <code>{`stdio.h`}</code> header file.<br/>
Hence, to use the <code>{`printf() `}</code>function, we need to include the <code>{`stdio.h`}</code> header file using <code>{`#include &lt;stdio.h&gt;`}</code>.</li>
<li>The <code>{`sqrt()`}</code> function calculates the square root of a number. The function is defined in the <code>{`math.h`}</code> header file.  </li>
</ul>

<p>Visit <a href="/c-programming/library-function" title="C Library Functions">standard library functions in C programming</a> to learn more.</p>

<hr/>
<h3><a id="user-defined-function" name="user-defined-function"></a>User-defined function</h3>

<p>You can also create functions as per your need. Such functions created by the user are known as user-defined functions.</p>

<h2><a id="working-function" name="working-function"></a>How user-defined function works?</h2>

<pre>{`
#include &lt;stdio.h&gt;
void functionName()
{
... .. ...
... .. ...
}

int main()
{
... .. ...
... .. ...

functionName();

... .. ...
... .. ...
}`}
</pre>

<p>The execution of a C program begins from the <code>{`main()`}</code> function.</p>

<p>When the compiler encounters <code>{`functionName();`}</code>, control of the program jumps to</p>

<pre>
void functionName()</pre>

/+<div class="clearfix"></div><p>And, the compiler starts executing the codes inside <code>{`functionName()`}</code>.</p>

<p>The control of the program jumps back to the <code>{`main()`}</code> function once code inside the function definition is executed.</p>

<figure><img alt="How function works in C programming?" height="622" src="//cdn.programiz.com/sites/tutorial2program/files/function-c-programming.jpg" width="700"></img>
<figcaption>Working of C Function</figcaption></figure>

<p>Note, function names are identifiers and should be unique.</p>

<p>This is just an overview of user-defined functions. Visit these pages to learn more on:</p>

<ul>
<li><a href="/c-programming/c-user-defined-functions" title="C user-defined Functions">User-defined Function in C programming</a></li>
<li><a href="/c-programming/types-user-defined-functions" title="User-defined Function Types">Types of user-defined Functions</a></li>
</ul>

<hr/>
<h3><a id="function-advantages" name="function-advantages"></a>Advantages of user-defined function</h3>

<ol>
<li>The program will be easier to understand, maintain and debug.</li>
<li>Reusable codes that can be used in other programs</li>
<li>A large program can be divided into smaller modules. Hence, a large project can be divided among many programmers.</li>
</ol>
      </div>
      <div className={`topic-description ${activeIndex === 14 ? 'active' : ''}`} id="topic-15">
          <h2>C User-defined functions</h2>
<p id="user-defined-function">A function is a block of code that performs a specific task.</p>

<p>C allows you to define functions according to your need. These functions are known as user-defined functions. For example:</p>

<p>Suppose, you need to create a circle and color it depending upon the radius and color. You can create two functions to solve this problem:</p>

<ul>
<li><code>{`createCircle()`}</code> function</li>
<li><code>{`color()`}</code> function</li>
</ul>

<hr/>
<h2 id="example-function">Example: User-defined function</h2>

<p>Here is an example to add two integers. To perform this task, we have created an user-defined <code>{`addNumbers()`}</code>.</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int addNumbers(int a, int b);         // function prototype

int main()
{
int n1,n2,sum;

printf("Enters two numbers: ");
scanf("%d %d",&amp;n1,&amp;n2);

sum = addNumbers(n1, n2);        // function call
printf("sum = %d",sum);

return 0;
}

int addNumbers(int a, int b)         // function definition   
{
int result;
result = a+b;
return result;                  // return statement
}`}</code>
</pre>

<hr/>
<h2 id="function-prototype">Function prototype</h2>

<p>A function prototype is simply the declaration of a function that specifies function's name, parameters and return type. It doesn't contain function body.</p>

<p>A function prototype gives information to the compiler that the function may later be used in the program.</p>

<h3>Syntax of function prototype</h3>

<pre>
returnType functionName(type1 argument1, type2 argument2, ...);</pre>

<p>In the above example, <code>{`int addNumbers(int a, int b);`}</code> is the function prototype which provides the following information to the compiler:</p>

<ol>
<li>name of the function is <code>{`addNumbers()`}</code></li>
<li>return type of the function is <code>{`int`}</code></li>
<li>two arguments of type <code>{`int`}</code> are passed to the function</li>
</ol>

<p>The function prototype is not needed if the user-defined function is defined before the <code>{`main()`}</code> function.</p>

<hr/>
<h2 id="function-call">Calling a function</h2>
<p>Control of the program is transferred to the user-defined function by calling it.</p>

<h3>Syntax of function call</h3>

<pre>
functionName(argument1, argument2, ...);</pre>

<p>In the above example, the function call is made using <code>{`addNumbers(n1, n2);`}</code> statement inside the <code>{`main()`}</code> function.</p>

<hr/>
<h2 id="function-definition">Function definition</h2>

<p>Function definition contains the block of code to perform a specific task. In our example, adding two numbers and returning it.</p>

<h4>Syntax of function definition</h4>

<pre>
returnType functionName(type1 argument1, type2 argument2, ...)
{
//body of the function
}
</pre>

<p>When a function is called, the control of the program is transferred to the function definition. And, the compiler starts executing the codes inside the body of a function.</p>

<hr/>
<h2 id="passing-arguments">Passing arguments to a function</h2>

/+<div class="clearfix"></div><p>In programming, argument refers to the variable passed to the function. In the above example, two variables <var>n1</var> and <var>n2</var> are passed during the function call.</p>

<p>The parameters <var>a</var> and <var>b</var> accepts the passed arguments in the function definition. These arguments are called formal parameters of the function.</p>

<figure><img alt="Passing arguments to a function" height="525" src="//cdn.programiz.com/sites/tutorial2program/files/pass-arguments-c-programming.jpg" title="Passing arguments to a function" width="650"></img>
<figcaption>Passing Argument to Function</figcaption></figure>

<p>The type of arguments passed to a function and the formal parameters must match, otherwise, the compiler will throw an error.</p>

<p>If <var>n1</var> is of char type, <var>a</var> also should be of char type. If <var>n2</var> is of float type, variable <var>b</var> also should be of float type.</p>

<p>A function can also be called without passing an argument.</p>

<hr/>
<h2 id="return-statement">Return Statement</h2>

<p>The return statement terminates the execution of a function and returns a value to the calling function. The program control is transferred to the calling function after the return statement.</p>

<p>In the above example, the value of the <var>result</var> variable is returned to the main function. The <var>sum</var> variable in the <code>{`main()`}</code> function is assigned this value.</p>

<figure><img alt="Return statement of a function" height="544" src="//cdn.programiz.com/sites/tutorial2program/files/c-return-statement.jpg" title="Return statement of a function" width="650"></img>
<figcaption>Return Statement of Function</figcaption></figure>

<h3>Syntax of return statement</h3>

<pre>
return (expression);     
</pre>

<p>For example,</p>

<pre>
return a;
return (a+b);</pre>

<p>The type of value returned from the function and the return type specified in the function prototype and function definition must match.</p>

<p>Visit this page to learn more on <a href="/c-programming/types-user-defined-functions" title="Passing argument and returning value">passing arguments and returning value from a function</a>.</p>
      </div>
      <div className={`topic-description ${activeIndex === 15 ? 'active' : ''}`} id="topic-16">
          <h2>Types of User-defined Functions in C Programming</h2>
<p>These 4 programs below check whether the integer entered by the user is a prime number or not.</p>

<p>The output of all these programs below is the same, and we have created a user-defined function in each example. However, the approach we have taken in each example is different.</p>

<hr/>
<h2 id="no-arg-no-return">Example 1: No Argument Passed and No Return Value</h2>

<pre class="c-exec" title="Source Code of function having no arguments and no return value">
<code>{`#include &lt;stdio.h&gt;

void checkPrimeNumber();

int main() {
checkPrimeNumber();    // argument is not passed
return 0;
}
// return type is void meaning doesn't return any value
void checkPrimeNumber() {
int n, i, flag = 0;

printf("Enter a positive integer: ");
scanf("%d",&amp;n);

// 0 and 1 are not prime numbers    
if (n == 0 || n == 1)
flag = 1;

for(i = 2; i &lt;= n/2; ++i) {
if(n%i == 0) {
flag = 1;
break;
}
}

if (flag == 1)
printf("%d is not a prime number.", n);
else
printf("%d is a prime number.", n);
}
`}</code></pre>

<p>The <code>{`checkPrimeNumber()`}</code> function takes input from the user, checks whether it is a prime number or not, and displays it on the screen.</p>

/+<div class="clearfix"></div><p>The empty parentheses in <code>{`checkPrimeNumber();`}</code> inside the <code>{`main()`}</code> function indicates that no argument is passed to the function.</p>

<p>The return type of the function is <code>{`void`}</code>. Hence, no value is returned from the function.</p>

<hr/>
<h2 id="no-arg-yes-return">Example 2: No Arguments Passed But Returns a Value</h2>

<pre class="c-exec" title="Source code of a function with no argument passed returning a value.">
<code>{`#include &lt;stdio.h&gt;
int getInteger();

int main() {

int n, i, flag = 0;

// no argument is passed
n = getInteger();    

// 0 and 1 are not prime numbers    
if (n == 0 || n == 1)
flag = 1;

for(i = 2; i &lt;= n/2; ++i) {
if(n%i == 0){
flag = 1;
break;
}
}

if (flag == 1)
printf("%d is not a prime number.", n);
else
printf("%d is a prime number.", n);

return 0;
}

// returns integer entered by the user
int getInteger() {
int n;

printf("Enter a positive integer: ");
scanf("%d",&amp;n);

return n;
}
`}</code></pre>

<p>The empty parentheses in the <code>{`n = getInteger();`}</code> statement indicates that no argument is passed to the function. And, the value returned from the function is assigned to <var>n</var>.</p>

<p>Here, the <code>{`getInteger()`}</code> function takes input from the user and returns it. The code to check whether a number is prime or not is inside the <code>{`main()`}</code> function.</p>

<hr/>
<h2 id="yes-arg-no-return">Example 3: Argument Passed But No Return Value</h2>

<pre class="c-exec" title="Source code of a function with arguments passed but no return value">
<code>{`#include &lt;stdio.h&gt;
void checkPrimeAndDisplay(int n);

int main() {

int n;

printf("Enter a positive integer: ");
scanf("%d",&amp;n);

// n is passed to the function
checkPrimeAndDisplay(n);

return 0;
}

// return type is void meaning doesn't return any value
void checkPrimeAndDisplay(int n) {
int i, flag = 0;

// 0 and 1 are not prime numbers    
if (n == 0 || n == 1)
flag = 1;

for(i = 2; i &lt;= n/2; ++i) {
if(n%i == 0){
flag = 1;
break;
}
}

if(flag == 1)
printf("%d is not a prime number.",n);
else
printf("%d is a prime number.", n);
}
`}</code></pre>

<p>The integer value entered by the user is passed to the <code>{`checkPrimeAndDisplay()`}</code> function.</p>

<p>Here, the <code>{`checkPrimeAndDisplay()`}</code> function checks whether the argument passed is a prime number or not and displays the appropriate message.</p>

<hr/>
<h2 id="yes-arg-yes-return">Example 4: Argument Passed and Returns a Value</h2>

<pre class="c-exec" title="Function with argument and a return value">
<code>{`#include &lt;stdio.h&gt;
int checkPrimeNumber(int n);

int main() {

int n, flag;

printf("Enter a positive integer: ");
scanf("%d",&amp;n);

// n is passed to the checkPrimeNumber() function
// the returned value is assigned to the flag variable
flag = checkPrimeNumber(n);

if(flag == 1)
printf("%d is not a prime number",n);
else
printf("%d is a prime number",n);

return 0;
}

// int is returned from the function
int checkPrimeNumber(int n) {

// 0 and 1 are not prime numbers    
if (n == 0 || n == 1)
return 1;

int i;

for(i=2; i &lt;= n/2; ++i) {
if(n%i == 0)
return 1;
}

return 0;
}`}</code>
</pre>

<p>The input from the user is passed to the <code>{`checkPrimeNumber()`}</code> function.</p>

<p>The <code>{`checkPrimeNumber()`}</code> function checks whether the passed argument is prime or not.</p>

<p>If the passed argument is a prime number, the function returns <strong>0</strong>. If the passed argument is a non-prime number, the function returns <strong>1</strong>. The return value is assigned to the <var>flag</var> variable.</p>

<p>Depending on whether <var>flag</var> is <strong>0</strong> or <strong>1</strong>, an appropriate message is printed from the <code>{`main()`}</code> function.</p>

<hr/>
<h2 id="better-approach">Which approach is better?</h2>

<p>Well, it depends on the problem you are trying to solve. In this case, passing an argument and returning a value from the function (example 4) is better.</p>

<p>A function should perform a specific task. The <code>{`checkPrimeNumber()`}</code> function doesn't take input from the user nor it displays the appropriate message. It only checks whether a number is prime or not.</p>
      </div>
      <div className={`topic-description ${activeIndex === 16 ? 'active' : ''}`} id="topic-17">
          <h2>C Recursion </h2>
<p id="recursion">A function that calls itself is known as a recursive function. And, this technique is known as recursion.</p>

<hr/>
<h3 id="recursion-working">How recursion works?</h3>

<pre>{`
void recurse()
{
... .. ...
recurse();
... .. ...
}

int main()
{
... .. ...
recurse();
... .. ...
}`}</pre>

<figure><img alt="How recursion works in C programming?" height="420" src="//cdn.programiz.com/sites/tutorial2program/files/how-recursion-works-c_0.jpg" width="500"></img>
<figcaption>Working of Recursion</figcaption></figure>

/+<div class="clearfix"></div><p>The recursion continues until some condition is met to prevent it.</p>

<p>To prevent infinite recursion, <a href="/c-programming/c-if-else-statement" title="C if...else">if...else statement</a> (or similar approach) can be used where one branch makes the recursive call, and other doesn't.</p>

<hr/>
<h3 id="example">Example: Sum of Natural Numbers Using Recursion</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
int sum(int n);

int main() {
int number, result;

printf("Enter a positive integer: ");
scanf("%d", &amp;number);

result = sum(number);

printf("sum = %d", result);
return 0;
}

int sum(int n) {
if (n != 0)
// sum() function calls itself
return n + sum(n-1); 
else
return n;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter a positive integer:3
sum = 6</samp></pre>

<hr/>
<p>Initially, the <code>{`sum()`}</code> is called from the <code>{`main()`}</code> function with <var>number</var> passed as an argument.</p>

<p>Suppose, the value of <var>n</var> inside <code>{`sum()`}</code> is 3 initially. During the next function call, 2 is passed to the <code>{`sum()`}</code> function. This process continues until <var>n</var> is equal to 0.</p>

<p>When <var>n</var> is equal to 0, the <code>{`if`}</code> condition fails and the <code>{`else`}</code> part is executed returning the sum of integers ultimately to the <code>{`main()`}</code> function.</p>

<figure><img alt="Calculation of sum of natural number using recursion" height="756" src="//cdn.programiz.com/sites/tutorial2program/files/recursion-natural-numbers.png" width="360"></img>
<figcaption>Sum of Natural Numbers</figcaption></figure>

<hr/>
<h3 id="advantages-disadvantages">Advantages and Disadvantages of Recursion</h3>

<p>Recursion makes program elegant. However, if performance is vital, use loops instead as recursion is usually much slower.</p>

<p>That being said, recursion is an important concept. It is frequently used in <a href="/dsa" title="Data Structure and Algorithms">data structure and algorithms</a>. For example, it is common to use recursion in problems such as tree traversal.</p>
      </div>
      <div className={`topic-description ${activeIndex === 17 ? 'active' : ''}`} id="topic-18">
          <h2>C Storage Class</h2>
<p>Every variable in C programming has two properties: type and storage class.</p>

<p>Type refers to the data type of a variable. And, storage class determines the scope, visibility and lifetime of a variable.</p>

<p>There are 4 types of storage class:</p>

<ol>
<li>automatic</li>
<li>external</li>
<li>static</li>
<li>register</li>
</ol>

<hr/>
<h2 id="local">Local Variable</h2>

<p>The variables declared inside a block are automatic or local variables. The local variables exist only inside the block in which it is declared.</p>

<p>Let's take an example.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;

int main(void) {

for (int i = 0; i &lt; 5; ++i) {
printf("C programming");
}

// Error: i is not declared at this point
printf("%d", i);  
return 0;
}`}</code></pre>

<p>When you run the above program, you will get an error <samp>undeclared identifier i</samp>. It's because <var>i</var> is declared inside the <code>{`for`}</code> loop block. Outside of the block, it's undeclared.</p>

/+<div class="clearfix"></div><p>Let's take another example.</p>

<pre>
<code>{`
int main() {
int n1; // n1 is a local variable to main()
}

void func() {
int n2;  // n2 is a local variable to func()
}
`}</code></pre>

<p>In the above example, <var>n1</var> is local to <code>{`main()`}</code> and <var>n2</var> is local to <code>{`func()`}</code>.</p>

<p>This means you cannot access the <var>n1</var> variable inside <code>{`func()`}</code> as it only exists inside <code>{`main()`}</code>. Similarly, you cannot access the <var>n2</var> variable inside <code>{`main()`}</code> as it only exists inside <code>{`func()`}</code>.</p>

<hr/>
<h2 id="global">Global Variable</h2>

<p>Variables that are declared outside of all functions are known as external or global variables. They are accessible from any function inside the program.</p>

<hr/>
<h3>Example 1: Global Variable</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
void display();

int n = 5;  // global variable

int main()
{
++n;     
display();
return 0;
}

void display()
{
++n;   
printf("n = %d", n);
}
`}</code></pre>

<p><b>Output</b></p>

<pre>
<samp>n = 7</samp></pre>

<p>Suppose, a global variable is declared in <code>{`file1`}</code>. If you try to use that variable in a different file <code>{`file2`}</code>, the compiler will complain. To solve this problem, keyword <code>{`extern`}</code> is used in <code>{`file2`}</code> to indicate that the external variable is declared in another file.</p>

<hr/>
<h2 id="register">Register Variable</h2>

<p>The <code>{`register`}</code> keyword is used to declare register variables. Register variables were supposed to be faster than local variables.</p>

<p>However, modern compilers are very good at code optimization, and there is a rare chance that using register variables will make your program faster.</p>

<p>Unless you are working on embedded systems where you know how to optimize code for the given application, there is no use of register variables.</p>

<hr/>
<h2 id="static">Static Variable</h2>

<p>A static variable is declared by using the <code>{`static`}</code> keyword. For example;</p>

<pre>
static int i;</pre>

<p>The value of a static variable persists until the end of the program.</p>

<hr/>
<h3>Example 2: Static Variable</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
void display();

int main()
{
display();
display();
}
void display()
{
static int c = 1;
c += 5;
printf("%d  ",c);
}
`}</code></pre>

<p><b>Output</b></p>

<pre>
<samp>6 11</samp></pre>

<p>During the first function call, the value of <var>c</var> is initialized to 1. Its value is increased by 5. Now, the value of <var>c</var> is 6, which is printed on the screen.</p>

<p>During the second function call, <var>c</var> is not initialized to 1 again. It's because <var>c</var> is a static variable. The value <var>c</var> is increased by 5. Now, its value will be 11, which is printed on the screen.</p>
      </div>
      <div className={`topic-description ${activeIndex === 18 ? 'active' : ''}`} id="topic-19">
          <h2>C Function Examples</h2>
<p>A function is a block of code that performs a specific task.</p>

<p>You will find examples related to functions in this article. To understand examples in this page, you should have the knowledge of the following topics:</p>

<ol>
<li><a href="/c-programming/c-user-defined-functions" title="User-defined Functions in C Programming">User-Defined Function</a></li>
<li><a href="/c-programming/types-user-defined-functions" title="Types of user defined function">Types of User-defined functions</a></li>
<li><a href="/c-programming/c-storage-class" title="Storage class in C programming">Scope of a local variable</a></li>
<li><a href="/c-programming/c-recursion" title="C Programming Recursive Function">Recursion</a></li>
</ol>

<hr/>
<h2>C Function Examples</h2>

<table summary="Source code and examples of user-defined function in C programming">
<tbody>
<tr>
<td><a href="/c-programming/examples/prime-interval-function">Display all prime numbers between two Intervals</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/prime-armstrong-function">Check prime and Armstrong number by making functions</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/sum-prime-numbers">Check whether a number can be expressed as the sum of two prime numbers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/natural-number-sum-recursion">Find the sum of natural numbers using recursion</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/factorial-recursion">Calculate the factorial of a number using recursion</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/hcf-recursion">Find G.C.D using recursion</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/reverse-sentence-recursion">Reverse a sentence using recursion</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/power-recursion">Calculate the power of a number using recursion</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/binary-decimal-convert">Convert a binary number to decimal and vice-versa</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/octal-decimal-convert">Convert an octal Number to decimal and vice-versa</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/octal-binary-convert">Convert a binary number to octal and vice-versa</a></td>
</tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 19 ? 'active' : ''}`} id="topic-20">
          <h2>C Arrays</h2>
<figure><img alt="C arrays" height="400" src="//cdn.programiz.com/sites/tutorial2program/files/c-arrays.jpg" title="C arrays" width="740"></img>
<figcaption>Arrays in C</figcaption>
</figure>

<p id="introduction">An array is a variable that can store multiple values. For example, if you want to store 100 integers, you can create an array for it.</p>

<pre>
<code>{`int data[100];`}</code> 
</pre>

<hr/>
<h2 id="declare">How to declare an array?</h2>

<pre>
dataType arrayName[arraySize];
</pre>

<p><strong>For example,</strong></p>

<pre>
float mark[5];</pre>

<p>Here, we declared an array, <var>mark</var>, of floating-point type. And its size is 5. Meaning, it can hold 5 floating-point values.</p>

<p>It's important to note that the size and type of an array cannot be changed once it is declared.</p>

<hr/>
<h2 id="access">Access Array Elements</h2>

<p>You can access elements of an array by indices.</p>

<p>Suppose you declared an array <var>mark</var> as above. The first element is <var>mark[0]</var>, the second element is <var>mark[1]</var> and so on.</p>

<figure><img alt="C Array declaration " height="111" src="//cdn.programiz.com/sites/tutorial2program/files/c-array-declaration.jpg" width="362"></img>
<figcaption>Declare an Array</figcaption>
</figure>
<h4><strong>Few keynotes</strong>:</h4>

<ul>
<li>Arrays have 0 as the first index, not 1. In this example, <var>mark[0]</var> is the first element.</li>
<li>If the size of an array is <var>n</var>, to access the last element, the <code>{`n-1`}</code> index is used. In this example, <var>mark[4]</var></li>
<li>Suppose the starting address of <code>{`mark[0]`}</code> is <strong>2120d</strong>. Then, the address of the <code>{`mark[1]`}</code> will be <strong>2124d</strong>. Similarly, the address of <code>{`mark[2]`}</code> will be <strong>2128d</strong> and so on.<br/>
This is because the size of a <code>{`float`}</code> is 4 bytes.</li>
</ul>

<hr/>
<h2 id="initialize">How to initialize an array?</h2>

<p>It is possible to initialize an array during declaration. For example,</p>

<pre>
<code>{`int mark[5] = {19, 10, 8, 17, 9};`}</code></pre>

<p>You can also initialize an array like this.</p>

<pre>
<code>{`int mark[] = {19, 10, 8, 17, 9};`}</code></pre>

<p>Here, we haven't specified the size. However, the compiler knows its size is 5 as we are initializing it with 5 elements.</p>

<figure><img alt="Initialize an array in C programming" height="111" src="//cdn.programiz.com/sites/tutorial2program/files/c-array-initialization.jpg" width="362"></img>
<figcaption>Initialize an Array</figcaption>
</figure>

/+<div class="clearfix"></div><p>Here,</p>

<pre>
mark[0] is equal to 19
mark[1] is equal to 10
mark[2] is equal to 8
mark[3] is equal to 17
mark[4] is equal to 9</pre>

<hr/>
<h2 id="insert">Change Value of Array elements</h2>

<pre>
<code>{`int mark[5] = {19, 10, 8, 17, 9}

// make the value of the third element to -1
mark[2] = -1;

// make the value of the fifth element to 0
mark[4] = 0;
`}</code></pre>

<hr/>
<h2 id="input-output">Input and Output Array Elements</h2>

<p>Here's how you can take input from the user and store it in an array element.</p>

<pre>
<code>{`// take input and store it in the 3rd element
​scanf("%d", &amp;mark[2]);

// take input and store it in the ith element
scanf("%d", &amp;mark[i-1]);`}</code>
</pre>

<p>Here's how you can print an individual element of an array.</p>

<pre>
<code>{`// print the first element of the array
printf("%d", mark[0]);

// print the third element of the array
printf("%d", mark[2]);

// print ith element of the array
printf("%d", mark[i-1]);`}</code>
</pre>

<hr/>
<h2>Example 1: Array Input/Output</h2>

<pre class="c-exec">
<code>{`// Program to take 5 values from the user and store them in an array
// Print the elements stored in the array

#include &lt;stdio.h&gt;

int main() {

int values[5];

printf("Enter 5 integers: ");

// taking input and storing it in an array
for(int i = 0; i &lt; 5; ++i) {
scanf("%d", &amp;values[i]);
}

printf("Displaying integers: ");

// printing elements of an array
for(int i = 0; i &lt; 5; ++i) {
printf("%d\n", values[i]);
}
return 0;
}`}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter 5 integers: 1
-3
34
0
3
Displaying integers: 1
-3
34
0
3</samp>
</pre>

<p>Here, we have used a <code>{`for`}</code> loop to take 5 inputs from the user and store them in an array. Then, using another <code>{`for`}</code> loop, these elements are displayed on the screen.</p>

<hr/>
<h2 id="example">Example 2: Calculate Average</h2>

<pre class="c-exec">
<code>{`// Program to find the average of n numbers using arrays

#include &lt;stdio.h&gt;

int main() {

int marks[10], i, n, sum = 0;
double average;

printf("Enter number of elements: ");
scanf("%d", &amp;n);

for(i=0; i &lt; n; ++i) {
printf("Enter number%d: ",i+1);
scanf("%d", &amp;marks[i]);

// adding integers entered by the user to the sum variable
sum += marks[i];
}

// explicitly convert sum to double
// then calculate average
average = (double) sum / n;

printf("Average = %.2lf", average);

return 0;
}`}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter number of elements: 5
Enter number1: 45
Enter number2: 35
Enter number3: 38
Enter number4: 31
Enter number5: 49
Average = 39.60
</samp></pre>

<p>Here, we have computed the average of <var>n</var> numbers entered by the user.</p>

<hr/>
<h3 id="important">Access elements out of its bound!</h3>

<p>Suppose you declared an array of 10 elements. Let's say,</p>

<pre>
int testArray[10];</pre>

<p>You can access the array elements from <code>{`testArray[0]`}</code> to <code>{`testArray[9]`}</code>.</p>

<p>Now let's say if you try to access <code>{`testArray[12]`}</code>. The element is not available. This may cause unexpected output (undefined behavior). Sometimes you might get an error and some other time your program may run correctly.</p>

<p>Hence, you should never access elements of an array outside of its bound.</p>

<hr/>
<h2>Multidimensional arrays</h2>

<p>In this tutorial, you learned about arrays. These arrays are called one-dimensional arrays.</p>

<p>In the next tutorial, you will learn about <a href="/c-programming/c-multi-dimensional-arrays" title="C Multidimensional Array">multidimensional arrays (array of an array)</a>.</p>
      </div>
      <div className={`topic-description ${activeIndex === 20 ? 'active' : ''}`} id="topic-21">
          <h2>C Multidimensional Arrays</h2>
<p id="introduction">In C programming, you can create an array of arrays. These arrays are known as multidimensional arrays. For example,</p>

<pre>
<code>{`float x[3][4];`}</code></pre>

<p>Here, <var>x</var> is a two-dimensional (2d) array. The array can hold 12 elements. You can think the array as a table with 3 rows and each row has 4 columns.</p>

<figure><img alt="Two dimensional array in C programming" height="215" src="//cdn.programiz.com/sites/tutorial2program/files/two-dimensional-array_0.jpg" width="395"></img>
<figcaption>Two dimensional Array</figcaption>
</figure>
<p>Similarly, you can declare a three-dimensional (3d) array. For example,</p>

<pre>
<code>{`float y[2][4][3];`}</code></pre>

<p>Here, the array <var>y</var> can hold 24 elements.</p>

<hr/>
<h2 id="initialize">Initializing a multidimensional array</h2>

<p>Here is how you can initialize two-dimensional and three-dimensional arrays:</p>

<hr/>
<h3>Initialization of a 2d array</h3>

<pre>
 <code>{`//Different ways to initialize two-dimensional array

intger[2][3] = {{1, 3, 0}, {-1, 5, 9}}

int c[][3] = {{1, 3, 0}, {-1, 5, 9}}

int c[2][3] = {1, 3, 0, -1, 5, 9}`}</code> 
</pre>

<hr/>
<h3>Initialization of a 3d array</h3>

/+<div class="clearfix"></div><p>You can initialize a three-dimensional array in a similar way to a two-dimensional array. Here''s an example,</p>

<pre>
<code>{`int test[2][3][4] = {
{{3, 4, 2, 3}, {0, -3, 9, 11}, {23, 12, 23, 2}},
{{13, 4, 56, 3}, {5, 9, 3, 5}, {3, 1, 4, 9}}};`}</code></pre>

<hr/>
<h3 id="example-1">Example 1: Two-dimensional array to store and print values</h3>

<pre class="c-exec">
<code>{`// C program to store temperature of two cities of a week and display it.
#include &lt;stdio.h&gt;
const int CITY = 2;
const int WEEK = 7;
int main()
{
int temperature[CITY][WEEK];

// Using nested loop to store values in a 2d array
for (int i = 0; i &lt; CITY; ++i)
{
for (int j = 0; j &lt; WEEK; ++j)
{
printf("City %d, Day %d: ", i + 1, j + 1);
scanf("%d", &amp;temperature[i][j]);
}
}
printf("\nDisplaying values: \n\n");

// Using nested loop to display vlues of a 2d array
for (int i = 0; i &lt; CITY; ++i)
{
for (int j = 0; j &lt; WEEK; ++j)
{
printf("City %d, Day %d = %d\n", i + 1, j + 1, temperature[i][j]);
}
}
return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>City 1, Day 1: 33
City 1, Day 2: 34
City 1, Day 3: 35
City 1, Day 4: 33
City 1, Day 5: 32
City 1, Day 6: 31
City 1, Day 7: 30
City 2, Day 1: 23
City 2, Day 2: 22
City 2, Day 3: 21
City 2, Day 4: 24
City 2, Day 5: 22
City 2, Day 6: 25
City 2, Day 7: 26

Displaying values: 

City 1, Day 1 = 33
City 1, Day 2 = 34
City 1, Day 3 = 35
City 1, Day 4 = 33
City 1, Day 5 = 32
City 1, Day 6 = 31
City 1, Day 7 = 30
City 2, Day 1 = 23
City 2, Day 2 = 22
City 2, Day 3 = 21
City 2, Day 4 = 24
City 2, Day 5 = 22
City 2, Day 6 = 25
City 2, Day 7 = 26</samp></pre>

<hr/>
<h3 id="example-2">Example 2: Sum of two matrices</h3>

<pre class="c-exec">
<code>{`// C program to find the sum of two matrices of order 2*2

#include &lt;stdio.h&gt;
int main()
{
float a[2][2], b[2][2], result[2][2];

// Taking input using nested for loop
printf("Enter elements of 1st matrix\n");
for (int i = 0; i &lt; 2; ++i)
for (int j = 0; j &lt; 2; ++j)
{
printf("Enter a%d%d: ", i + 1, j + 1);
scanf("%f", &amp;a[i][j]);
}

// Taking input using nested for loop
printf("Enter elements of 2nd matrix\n");
for (int i = 0; i &lt; 2; ++i)
for (int j = 0; j &lt; 2; ++j)
{
printf("Enter b%d%d: ", i + 1, j + 1);
scanf("%f", &amp;b[i][j]);
}

// adding corresponding elements of two arrays
for (int i = 0; i &lt; 2; ++i)
for (int j = 0; j &lt; 2; ++j)
{
result[i][j] = a[i][j] + b[i][j];
}

// Displaying the sum
printf("\nSum Of Matrix:");

for (int i = 0; i &lt; 2; ++i)
for (int j = 0; j &lt; 2; ++j)
{
printf("%.1f\t", result[i][j]);

if (j == 1)
printf("\n");
}
return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter elements of 1st matrix
Enter a11: 2;
Enter a12: 0.5;
Enter a21: -1.1;
Enter a22: 2;
Enter elements of 2nd matrix
Enter b11: 0.2;
Enter b12: 0;
Enter b21: 0.23;
Enter b22: 23;

Sum Of Matrix:
2.2     0.5
-0.9    25.0</samp></pre>

<hr/>
<h3 id="example-3">Example 3: Three-dimensional array</h3>

<pre class="c-exec">
<code>{`// C Program to store and print 12 values entered by the user

#include &lt;stdio.h&gt;
int main()
{
int test[2][3][2];

printf("Enter 12 values: \n");

for (int i = 0; i &lt; 2; ++i)
{
for (int j = 0; j &lt; 3; ++j)
{
for (int k = 0; k &lt; 2; ++k)
{
scanf("%d", &amp;test[i][j][k]);
}
}
}

// Printing values with the proper index.

printf("\nDisplaying values:\n");
for (int i = 0; i &lt; 2; ++i)
{
for (int j = 0; j &lt; 3; ++j)
{
for (int k = 0; k &lt; 2; ++k)
{
printf("test[%d][%d][%d] = %d\n", i, j, k, test[i][j][k]);
}
}
}

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter 12 values: 
1
2
3
4
5
6
7
8
9
10
11
12

Displaying Values:
test[0][0][0] = 1
test[0][0][1] = 2
test[0][1][0] = 3
test[0][1][1] = 4
test[0][2][0] = 5
test[0][2][1] = 6
test[1][0][0] = 7
test[1][0][1] = 8
test[1][1][0] = 9
test[1][1][1] = 10
test[1][2][0] = 11
test[1][2][1] = 12</samp></pre>
      </div>
      <div className={`topic-description ${activeIndex === 21 ? 'active' : ''}`} id="topic-22">
      <h2>Pass arrays to a function in C</h2>
      <p>In C programming, you can pass an entire array to functions. Before we learn that, let''s see how you can pass individual elements of an array to functions.</p>

<hr/>
<h2 id="single-element">Pass Individual Array Elements</h2>

<p>Passing array elements to a function is similar to <a href="/c-programming/c-user-defined-functions" title="C Functions">passing variables to a function</a>.</p>

<hr/>
<h3>Example 1: Pass Individual Array Elements</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
void display(int age1, int age2) {
  printf("%d\n", age1);
  printf("%d\n", age2);
}

int main() {
  int ageArray[] = {2, 8, 4, 12};

  // pass second and third elements to display()
  display(ageArray[1], ageArray[2]); 
  return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
8
4
</pre>

<p>Here, we have passed array parameters to the <code>{`display()`}</code> function in the same way we pass variables to a function.</p>

<pre>
<code>{`// pass second and third elements to display()
display(ageArray[1], ageArray[2]);`}</code></pre>

<p>We can see this in the function definition, where the function parameters are individual variables:</p>

<pre>
<code>{`void display(int age1, int age2) {
  // code
}`}</code></pre>

<hr/>
<h2 id="1d-array">Example 2: Pass Arrays to Functions</h2>

<pre class="c-exec">
<code>{`// Program to calculate the sum of array elements by passing to a function 

#include &lt;stdio.h&gt;
float calculateSum(float num[]);

int main() {
  float result, num[] = {23.4, 55, 22.6, 3, 40.5, 18};

  // num array is passed to calculateSum()
  result = calculateSum(num); 
  printf("Result = %.2f", result);
  return 0;
}

float calculateSum(float num[]) {
  float sum = 0.0;

  for (int i = 0; i &lt; 6; ++i) {
    sum += num[i];
  }

  return sum;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Result = 162.50</samp></pre>

<p>To pass an entire array to a function, only the name of the array is passed as an argument.</p>

<pre>
<code>{`result = calculateSum(num);`}</code></pre>

<p></p><div id="block-inject-1" class="block-inject block-inject-1">
    <div id="div-gpt-ad-Programizcom37046"style={{margin:" 32px 0"}}>
    </div>
    
    <div id="div-gpt-ad-Programizcom36796" style={{margin:" 32px 0",minHeight:"250px"}}>
    </div>
    </div><div class="clearfix"></div><p>However, notice the use of <code>{`[]`}</code> in the function definition.</p>

<pre>
<code>{`float calculateSum(float num[]) {
... ..
}`}</code></pre>

<p>This informs the compiler that you are passing a one-dimensional array to the function.</p>

<hr/>
<h2 id="multidimensional">Pass Multidimensional Arrays to a Function</h2>

<p>To pass multidimensional arrays to a function, only the name of the array is passed to the function (similar to one-dimensional arrays).</p>

<h3>Example 3: Pass two-dimensional arrays</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
void displayNumbers(int num[2][2]);

int main() {
  int num[2][2];
  printf("Enter 4 numbers:\n");
  for (int i = 0; i &lt; 2; ++i) {
    for (int j = 0; j &lt; 2; ++j) {
      scanf("%d", &amp;num[i][j]);
    }
  }

  // pass multi-dimensional array to a function
  displayNumbers(num);

  return 0;
}

void displayNumbers(int num[2][2]) {
  printf("Displaying:\n");
  for (int i = 0; i &lt; 2; ++i) {
    for (int j = 0; j &lt; 2; ++j) {
      printf("%d\n", num[i][j]);
    }
  }
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter 4 numbers:
2
3
4
5
Displaying:
2
3
4
5</samp>
</pre>

<p>Notice the parameter <code>{`int num[2][2]`}</code> in the function prototype and function definition:</p>

<pre>
<code>{`// function prototype
void displayNumbers(int num[2][2]);`}</code></pre>

<p>This signifies that the function takes a two-dimensional array as an argument. We can also pass arrays with more than 2 dimensions as a function argument.</p>

<p>When passing two-dimensional arrays, it is not mandatory to specify the number of rows in the array. However, the number of columns should always be specified.</p>

<p>For example,</p>

<pre>
<code>{`void displayNumbers(int num[][2]) {
  // code
}`}</code></pre>
<hr/>
<p><strong>Recommended Reading:</strong> <a href="https://www.programiz.com/c-programming/c-pointer-functions" title="Call By Reference">Call by Reference in C</a></p>
      </div>
      <div className={`topic-description ${activeIndex === 22 ? 'active' : ''}`} id="topic-23">
          <h2>C Pointers</h2>
<p id="introduction">Pointers are powerful features of C and C++ programming. Before we learn pointers, let''s learn about addresses in C programming.</p>

<hr/>
<h2 id="address">Address in C</h2>

<p>If you have a variable <var>var</var> in your program, <code>{`&amp;var`}</code> will give you its address in the memory.</p>

<p>We have used address numerous times while using the <code>{`scanf()`}</code> function.</p>

<pre>
<code>{`scanf("%d", &amp;var);`}</code></pre>

<p>Here, the value entered by the user is stored in the address of <var>var</var> variable. Let''s take a working example.</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
int var = 5;
printf("var: %d\n", var);

// Notice the use of &amp; before var
printf("address of var: %p", &amp;var);  
return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>var: 5 
address of var: 2686778</samp></pre>

<p class="note-tip"><strong>Note:</strong> You will probably get a different address when you run the above code.</p>

<hr/>
<h2 id="pointer">C Pointers</h2>

<p>Pointers (pointer variables) are special variables that are used to store addresses rather than values.</p>

<h3>Pointer Syntax</h3>

<p>Here is how we can declare pointers.</p>

<pre>
<code>{`int* p;`}</code></pre>

<p>Here, we have declared a pointer <var>p</var> of <code>{`int`}</code> type.</p>

<p>You can also declare pointers in these ways.</p>

<pre>
<code>{`int *p1;
int * p2;
`}</code></pre>

<hr/>
<p>Let''s take another example of declaring pointers.</p>

<pre>
<code>{`int* p1, p2;`}</code></pre>

<p>Here, we have declared a pointer <var>p1</var> and a normal variable <var>p2</var>.</p>

<hr/>
<h3 id="assign-values">Assigning addresses to Pointers</h3>

<p>Let''s take an example.</p>

<pre>
<code>{`int* pc, c;
c = 5;
pc = &amp;c;
`}</code></pre>

<p>Here, 5 is assigned to the <var>c</var> variable. And, the address of <var>c</var> is assigned to the <var>pc</var> pointer.</p>

<hr/>
<h3>Get Value of Thing Pointed by Pointers</h3>

<p>To get the value of the thing pointed by the pointers, we use the <code>{`*`}</code> operator. For example:</p>

<pre>
<code>{`int* pc, c;
c = 5;
pc = &amp;c;
printf("%d", *pc);   // Output: 5`}</code></pre>

<p>Here, the address of <code>{`c`}</code> is assigned to the <var>pc</var> pointer. To get the value stored in that address, we used <var>*pc</var>.</p>

<div class="note-tip">
<p><strong>Note: </strong>In the above example, <var>pc</var> is a pointer, not <code>{`*pc`}</code>. You cannot and should not do something like <code>{`*pc = &amp;c`}</code>;</p>

<p>By the way, <code>{`*`}</code> is called the dereference operator (when working with pointers). It operates on a pointer and gives the value stored in that pointer.</p>
</div>
<hr/>
<h3 id="changing-values">Changing Value Pointed by Pointers</h3>

<p>Let''s take an example.</p>

<pre>
<code>{`int* pc, c;
c = 5;
pc = &amp;c;
c = 1;
printf("%d", c);    // Output: 1
printf("%d", *pc);  // Ouptut: 1`}</code></pre>

<p>We have assigned the address of <var>c</var> to the <var>pc</var> pointer.</p>

<p>Then, we changed the value of <var>c</var> to 1. Since <var>pc</var> and the address of <var>c</var> is the same, <code>{`*pc`}</code> gives us 1.</p>

<p>Let''s take another example.</p>

<pre>
<code>{`int* pc, c;
c = 5;
pc = &amp;c;
*pc = 1;
printf("%d", *pc);  // Ouptut: 1
printf("%d", c);    // Output: 1`}</code>
</pre>

/+<div class="clearfix"></div><p>We have assigned the address of <var>c</var> to the <var>pc</var> pointer.</p>

<p>Then, we changed <code>{`*pc`}</code> to 1 using <code>{`*pc = 1;`}</code>. Since <var>pc</var> and the address of <var>c</var> is the same, <var>c</var> will be equal to 1.</p>

<p>Let''s take one more example.</p>

<pre>
<code>{`int* pc, c, d;
c = 5;
d = -15;

pc = &amp;c; printf("%d", *pc); // Output: 5
pc = &amp;d; printf("%d", *pc); // Ouptut: -15`}</code></pre>

<p>Initially, the address of <var>c</var> is assigned to the <var>pc</var> pointer using <code>{`pc = &amp;c;`}</code>. Since <var>c</var> is 5, <code>{`*pc`}</code> gives us 5.</p>

<p>Then, the address of <var>d</var> is assigned to the <var>pc</var> pointer using <code>{`pc = &amp;d;`}</code>. Since <var>d</var> is -15, <code>{`*pc`}</code> gives us -15.</p>

<hr/>
<h3 id="example">Example: Working of Pointers</h3>

<p>Let''s take a working example.</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
int* pc, c;

c = 22;
printf("Address of c: %p\n", &amp;c);
printf("Value of c: %d\n\n", c);  // 22

pc = &amp;c;
printf("Address of pointer pc: %p\n", pc);
printf("Content of pointer pc: %d\n\n", *pc); // 22

c = 11;
printf("Address of pointer pc: %p\n", pc);
printf("Content of pointer pc: %d\n\n", *pc); // 11

*pc = 2;
printf("Address of c: %p\n", &amp;c);
printf("Value of c: %d\n\n", c); // 2
return 0;
}`}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<samp>Address of c: 2686784
Value of c: 22

Address of pointer pc: 2686784
Content of pointer pc: 22

Address of pointer pc: 2686784
Content of pointer pc: 11

Address of c: 2686784
Value of c: 2</samp>
</pre>

<hr/>
<p><strong>Explanation of the program</strong></p>

<ol>
<li><code>{`int* pc, c;`}</code><br/>
<img alt="A pointer variable and a normal variable is created." height="103" src="//cdn.programiz.com/sites/tutorial2program/files/pointer-1.jpg" width="120"></img><br/>
Here, a pointer <var>pc</var> and a normal variable <var>c</var>, both of type <code>{`int`}</code>, is created.<br/>
Since <var>pc</var> and <var>c</var> are not initialized at initially, pointer <var>pc</var> points to either no address or a random address. And, variable <var>c</var> has an address but contains random garbage value.<br/>
</li>
<li><code>{`c = 22;`}</code><br/>
<img alt="22 is assigned to variable c." height="97" src="//cdn.programiz.com/sites/tutorial2program/files/pointer-2.jpg" width="120"></img><br/>
This assigns 22 to the variable <var>c</var>. That is, 22 is stored in the memory location of variable <var>c</var>.<br/>
</li>
<li><code>{`pc = &amp;c;`}</code><br/>
<img alt="Address of variable c is assigned to pointer pc." height="97" src="//cdn.programiz.com/sites/tutorial2program/files/pointer-3.jpg" width="120"></img><br/>
This assigns the address of variable <var>c</var> to the pointer <var>pc</var>.<br/>
</li>
<li><code>{`c = 11;`}</code><br/>
<img alt="11 is assigned to variable c." height="102" src="//cdn.programiz.com/sites/tutorial2program/files/pointer-4.jpg" width="121"></img><br/>
This assigns 11 to variable <var>c</var>.<br/>
</li>
<li><code>{`*pc = 2;`}</code><br/>
<img alt="5 is assigned to pointer variable's address." height="100" src="//cdn.programiz.com/sites/tutorial2program/files/pointer-5.jpg" width="119"></img><br/>
This change the value at the memory location pointed by the pointer <var>pc</var> to 2.</li>
</ol>

<hr/>
<h3 id="common-mistakes">Common mistakes when working with pointers</h3>

<p>Suppose, you want pointer <var>pc</var> to point to the address of <var>c</var>. Then,</p>

<pre>
<code>{`int c, *pc;

// pc is address but c is not
pc = c;  // Error

// &amp;c is address but *pc is not
*pc = &amp;c;  // Error

// both &amp;c and pc are addresses
pc = &amp;c;  // Not an error

// both c and *pc are values 
*pc = c;  // Not an error`}</code></pre>

<p>Here''s an example of pointer syntax beginners often find confusing.</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main() {
int c = 5;
int *p = &amp;c;

printf("%d", *p);  // 5
return 0; 
}`}</code></pre>

<p><strong>Why didn''t we get an error when using <code>{`int *p = &amp;c;`}</code>?</strong></p>

<p>It''s because</p>

<pre>
<code>{`int *p = &amp;c;`}</code></pre>

<p>is equivalent to</p>

<pre>
<code>{`int *p:
p = &amp;c;`}</code></pre>

<p>In both cases, we are creating a pointer <code>{`p`}</code> (not <code>{`*p`}</code>) and assigning <code>{`&amp;c`}</code> to it.</p>

<p>To avoid this confusion, we can use the statement like this:</p>

<pre>
<code>{`int* p = &amp;c;`}</code></pre>

<hr/>
<p>Now you know what pointers are, you will learn how pointers are related to arrays in the next tutorial.</p>
      </div>
      <div className={`topic-description ${activeIndex === 23 ? 'active' : ''}`} id="topic-24">
          <h2>Relationship Between Arrays and Pointers</h2>
<p>Before you learn about the relationship between arrays and pointers, be sure to check these two topics:</p>

<ul>
<li><a href="/c-programming/c-arrays" title="C arrays">C Arrays</a></li>
<li><a href="/c-programming/c-pointers" title="C pointers">C Pointers</a></li>
</ul>

<hr/>
<h2 id="relationship">Relationship Between Arrays and Pointers</h2>

<p>An array is a block of sequential data. Let''s write a program to print addresses of array elements.</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main() {
int x[4];
int i;

for(i = 0; i &lt; 4; ++i) {
printf("&amp;x[%d] = %p\n", i, &amp;x[i]);
}

printf("Address of array x: %p", x);

return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>&amp;x[0] = 1450734448
&amp;x[1] = 1450734452
&amp;x[2] = 1450734456
&amp;x[3] = 1450734460
Address of array x: 1450734448</samp>
</pre>

<p>There is a difference of 4 bytes between two consecutive elements of array <var>x</var>. It is because the size of <code>{`int`}</code> is 4 bytes (on our compiler).</p>

<p>Notice that, the address of <var>&amp;x[0]</var> and <var>x</var> is the same. It's because the variable name <var>x</var> points to the first element of the array.</p>

<figure><img alt="Relation between arrays and pointers" height="73" src="//cdn.programiz.com/sites/tutorial2program/files/array-pointers.jpg" title="Arrays as Pointers" width="263"></img>
<figcaption>Relation between Arrays and Pointers</figcaption>
</figure>

<p>From the above example, it is clear that <code>{`&amp;x[0]`}</code> is equivalent to <var>x</var>. And, <code>{`x[0]`}</code> is equivalent to <code>{`*x`}</code>.</p>

<p>Similarly,</p>

<ul>
<li><code>{`&amp;x[1]`}</code> is equivalent to <code>{`x+1`}</code> and <code>{`x[1]`}</code> is equivalent to <code>{`*(x+1)`}</code>.</li>
<li><code>{`&amp;x[2]`}</code> is equivalent to <code>{`x+2`}</code> and <code>{`x[2]`}</code> is equivalent to <code>{`*(x+2)`}</code>.</li>
<li>...</li>
<li>Basically, <code>{`&amp;x[i]`}</code> is equivalent to <code>{`x+i`}</code> and <code>{`x[i]`}</code> is equivalent to <code>{`*(x+i)`}</code>.</li>
</ul>

<hr/>
<h3 id="example-1">Example 1: Pointers and Arrays</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main() {

in i, x[6], sum = 0;

printf("Enter 6 numbers: ");

for(i = 0; i &lt; 6; ++i) {
// Equivalent to scanf("%d", &amp;x[i]);
scanf("%d", x+i);

// Equivalent to sum += x[i]
sum += *(x+i);
}

printf("Sum = %d", sum);

return 0;
}
`}</code></pre>

<p>When you run the program, the output will be:</p>

<pre>
<samp>Enter 6 numbers: 2
3
4
4
12
4
Sum = 29 </samp></pre>

/+<div class="clearfix"></div><p>Here, we have declared an array <var>x</var> of 6 elements. To access elements of the array, we have used pointers.</p>

<hr/>
<p>In most contexts, array names decay to pointers. In simple words, array names are converted to pointers. That's the reason why you can use pointers to access elements of arrays. However, you should remember that <strong>pointers and arrays are not the same</strong>.</p>

<p>There are a few cases where array names don't decay to pointers. To learn more, visit: <a href="https://stackoverflow.com/questions/17752978/exceptions-to-array-decaying-into-a-pointer">When does array name doesn't decay into a pointer?</a></p>

<hr/>
<h3 id="example-2">Example 2: Arrays and Pointers</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main() {

int x[5] = {1, 2, 3, 4, 5};
int* ptr;

// ptr is assigned the address of the third element
ptr = &amp;x[2]; 

printf("*ptr = %d \n", *ptr);   // 3
printf("*(ptr+1) = %d \n", *(ptr+1)); // 4
printf("*(ptr-1) = %d", *(ptr-1));  // 2

return 0;
}`}</code></pre>

<p>When you run the program, the output will be:</p>

<pre>
<samp>*ptr = 3 
*(ptr+1) = 4 
*(ptr-1) = 2</samp></pre>

<p>In this example, <code>{`&amp;x[2]`}</code>, the address of the third element, is assigned to the <var>ptr</var> pointer. Hence, <code>{`3`}</code> was displayed when we printed <code>{`*ptr`}</code>.</p>

<p>And, printing <code>{`*(ptr+1)`}</code> gives us the fourth element. Similarly, printing <code>{`*(ptr-1)`}</code> gives us the second element.</p>
      </div>
      <div className={`topic-description ${activeIndex === 24 ? 'active' : ''}`} id="topic-25">
          <h2>C Pass Addresses and Pointers</h2>
<p>In C programming, it is also possible to pass addresses as arguments to functions.</p>

<p>To accept these addresses in the function definition, we can use pointers. It's because pointers are used to store addresses. Let's take an example:</p>

<hr/>
<h2 id="example-1">Example: Pass Addresses to Functions</h2>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
void swap(int *n1, int *n2);

int main()
{
int num1 = 5, num2 = 10;

// address of num1 and num2 is passed
swap( &amp;num1, &amp;num2);

prntf("num1 = %d\n", num1);
printf("num2 = %d", num2);
return 0;
}

void swap(int* n1, int* n2)
{
int temp;
temp = *n1;
*n1 = *n2;
*n2 = temp;
}`}</code></pre>

<p>When you run the program, the output will be:</p>

<pre>
<samp>num1 = 10
num2 = 5</samp></pre>

<p>The address of <var>num1</var> and <var>num2</var> are passed to the <code>{`swap()`}</code> function using <code>{`swap(&amp;num1, &amp;num2);`}</code>.</p>

<p>Pointers <var>n1</var> and <var>n2</var> accept these arguments in the function definition.</p>

<pre>
<code>{`void swap(int* n1, int* n2) {
... ..
}`}</code>
</pre>

/+<div class="clearfix"></div><p>When <var>*n1</var> and <var>*n2</var> are changed inside the <code>{`swap()`}</code> function, <var>num1</var> and <var>num2</var> inside the <var>main()</var> function are also changed.</p>

<p>Inside the <code>{`swap()`}</code> function, <code>{`*n1`}</code> and <code>{`*n2`}</code> swapped. Hence, <var>num1</var> and <var>num2</var> are also swapped.</p>

<p>Notice that <code>{`swap()`}</code> is not returning anything; its return type is <code>{`void`}</code>.</p>

<hr/>
<h2 id="example-2">Example 2: Passing Pointers to Functions</h2>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;

void addOne(int* ptr) {
(*ptr)++; // adding 1 to *ptr
}

int main()
{
int* p, i = 10;
p = &amp;i;
addOne(p);

printf("%d", *p); // 11
return 0;
}`}</code></pre>

<p>Here, the value stored at <var>p</var>, <code>{`*p`}</code>, is 10 initially.</p>

<p>We then passed the pointer <var>p</var> to the <code>{`addOne()`}</code> function. The <var>ptr</var> pointer gets this address in the <code>{`addOne()`}</code> function.</p>

<p>Inside the function, we increased the value stored at <var>ptr</var> by 1 using <code>{`(*ptr)++;`}</code>. Since <var>ptr</var> and <var>p</var> pointers both have the same address, <code>{`*p`}</code> inside <code>{`main()`}</code> is also 11.</p>
      </div>
      <div className={`topic-description ${activeIndex === 25 ? 'active' : ''}`} id="topic-26">
          <h2>C Dynamic Memory Allocation</h2>
<p id="why">As you know, an array is a collection of a fixed number of values. Once the size of an array is declared, you cannot change it.</p>

<p>Sometimes the size of the array you declared may be insufficient. To solve this issue, you can allocate memory manually during run-time. This is known as dynamic memory allocation in C programming.</p>

<p>To allocate memory dynamically, library functions are <code>{`malloc()`}</code>, <code>{`calloc()`}</code>, <code>{`realloc()`}</code> and <code>{`free()`}</code> are used. These functions are defined in the <code>{`&lt;stdlib.h&gt;`}</code> header file.</p>

<hr/>
<h2 id="malloc">C malloc()</h2>

<p>The name "malloc" stands for memory allocation.</p>

<p>The <code>{`malloc()`}</code> function reserves a block of memory of the specified number of bytes. And, it returns a <a href="/c-programming/c-pointers" title="C Pointers">pointer</a> of <code>{`void`}</code> which can be casted into pointers of any form.</p>

<hr/>
<h3>Syntax of malloc()</h3>

<pre>
<code>{`ptr = (castType*) malloc(size);`}</code></pre>

/+<div class="clearfix"></div><p><strong>Example</strong></p>

<pre>
<code>{`ptr = (float*) malloc(100 * sizeof(float));`}</code></pre>

<p>The above statement allocates 400 bytes of memory. It's because the size of <code>{`float`}</code> is 4 bytes. And, the pointer <var>ptr</var> holds the address of the first byte in the allocated memory.</p>

<p>The expression results in a <code>{`NULL`}</code> pointer if the memory cannot be allocated.</p>

<hr/>
<h2 id="calloc">C calloc()</h2>

<p>The name "calloc" stands for contiguous allocation.</p>

<p>The <code>{`malloc()`}</code> function allocates memory and leaves the memory uninitialized, whereas the <code>{`calloc()`}</code> function allocates memory and initializes all bits to zero.</p>

<hr/>
<h3>Syntax of calloc()</h3>

<pre>
<code>{`ptr = (castType*)calloc(n, size);`}</code></pre>

<p><strong>Example:</strong></p>

<pre>
<code>{`ptr = (float*) calloc(25, sizeof(float));`}</code></pre>

<p>The above statement allocates contiguous space in memory for 25 elements of type <code>{`float`}</code>.</p>

<hr/>
<h2 id="free">C free()</h2>

<p>Dynamically allocated memory created with either <code>{`calloc()`}</code> or <code>{`malloc()`}</code> doesn't get freed on their own. You must explicitly use <code>{`free()`}</code> to release the space.</p>

<hr/>
<h3>Syntax of free()</h3>

<pre>
<code>{`free(ptr);`}</code></pre>

<p>This statement frees the space allocated in the memory pointed by <code>{`ptr`}</code>.</p>

<hr/>
<h3 id="example-1">Example 1: malloc() and free()</h3>

<pre class="c-exec">
<code>{`// Program to calculate the sum of n numbers entered by the user

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
int n, i, *ptr, sum = 0;

printf("Enter number of elements: ");
scanf("%d", &amp;n);

ptr = (int*) malloc(n * sizeof(int));

// if memory cannot be allocated
if(ptr == NULL) {
printf("Error! memory not allocated.");
exit(0);
}

printf("Enter elements: ");
for(i = 0; i &lt; n; ++i) {
scanf("%d", ptr + i);
sum += *(ptr + i);
}

printf("Sum = %d", sum);

// deallocating the memory
free(ptr);

return 0;
}`}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<code>{`Enter number of elements: 3
Enter elements: 100
20
36
Sum = 156`}</code></pre>

<p>Here, we have dynamically allocated the memory for <var>n</var> number of <code>{`int`}</code>.</p>

<hr/>
<h3 id="example-2">Example 2: calloc() and free()</h3>

<pre class="c-exec">
<code>{`// Program to calculate the sum of n numbers entered by the user

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
int n, i, *ptr, sum = 0;
printf("Enter number of elements: ");
scanf("%d", &amp;n);

ptr = (int*) calloc(n, sizeof(int));
if(ptr == NULL) {
printf("Error! memory not allocated.");
exit(0);
}

printf("Enter elements: ");
for(i = 0; i &lt; n; ++i) {
scanf("%d", ptr + i);
sum += *(ptr + i);
}

printf("Sum = %d", sum);
free(ptr);
return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<code>{`Enter number of elements: 3
Enter elements: 100
20
36
Sum = 156`}</code></pre>

<hr/>
<h2 id="realloc">C realloc()</h2>

<p>If the dynamically allocated memory is insufficient or more than required, you can change the size of previously allocated memory using the <code>{`realloc()`}</code> function.</p>

<hr/>
<h3>Syntax of realloc()</h3>

<pre>
<code>{`ptr = realloc(ptr, x);`}</code></pre>

<p>Here, <var>ptr</var> is reallocated with a new size <var>x</var>.</p>

<hr/>
<h3 id="example-3">Example 3: realloc()</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
int *ptr, i , n1, n2;
printf("Enter size: ");
scanf("%d", &amp;n1);

ptr = (int*) malloc(n1 * sizeof(int));

printf("Addresses of previously allocated memory:\n");
for(i = 0; i &lt; n1; ++i)
printf("%pc\n",ptr + i);

printf("\nEnter the new size: ");
scanf("%d", &amp;n2);

// rellocating the memory
ptr = realloc(ptr, n2 * sizeof(int));

printf("Addresses of newly allocated memory:\n");
for(i = 0; i &lt; n2; ++i)
printf("%pc\n", ptr + i);

free(ptr);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter size: 2
Addresses of previously allocated memory:
26855472
26855476

Enter the new size: 4
Addresses of newly allocated memory:
26855472
26855476
26855480
26855484</samp></pre>
      </div>
      <div className={`topic-description ${activeIndex === 26 ? 'active' : ''}`} id="topic-27">
          <h2>C Array and Pointer Examples</h2>
<p>To understand all programs in this article, you should have the knowledge of the following topics:</p>

<ol>
<li><a href="/c-programming/c-arrays" title="C programming Arrays">Arrays</a></li>
<li><a href="/c-programming/c-multi-dimensional-arrays" title="Multidimensional Arrays in C Programming">Multi-dimensional Arrays</a></li>
<li><a href="/c-programming/c-pointers" title="C Programming Pointers">Pointers</a></li>
<li><a href="/c-programming/c-pointers-arrays" title="Relation Between Arrays and Pointer">Array and Pointer Relation</a></li>
<li><a href="/c-programming/c-pointer-functions" title="Call by Reference in C programming">Call by Reference</a></li>
<li><a href="/c-programming/c-dynamic-memory-allocation" title="Dynamic Memory Allocation in C programming">Dynamic Memory Allocation</a></li>
</ol>

<hr/>
<h2>Array and Pointer Examples</h2>

<table summary="Source code and examples in C programming Language">
<tbody>
<tr>
<td><a href="/c-programming/examples/average-arrays">Calculate the average of array elements</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/array-largest-element">Find the largest element of an array</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/standard-deviation">Calculate standard deviation</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/add-matrix">Add two matrices</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/matrix-multiplication">Multiply two matrices</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/matrix-transpose">Find transpose of a matrix</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/matrix-multiplication-function">Multiply two matrices</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/access-array-pointer">Access elements of an array using pointers</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/swapping-cyclic-order">Swap numbers in the cyclic order using call by reference</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/dynamic-memory-allocation-largest">Find the largest number (Dynamic memory allocation is used)</a></td>
</tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 27 ? 'active' : ''}`} id="topic-28"> 
          <h2>C Programming Strings</h2>
<div id="node-157" class="node node-c-tutorial clearfix" about="/c-programming/c-strings" typeof="sioc:Item foaf:Document">


<span property="dc:title" content="C Programming Strings" class="rdf-meta element-hidden"></span>


<p id="introduction">In C programming, a string is a sequence of characters terminated with a null character <code>{`\0`}</code>. For example:</p>

<pre>
<code>{`char c[] = "c string";`}</code>
</pre>

<p>When the compiler encounters a sequence of characters enclosed in the double quotation marks, it appends a null character <code>{`\0`}</code> at the end by default.</p>

<figure><img alt="Memory diagram of strings in C programming" height="61" src="//cdn.programiz.com/sites/tutorial2program/files/c-string.jpg" title="Strings in memory diagram" width="430"></img>
<figcaption>Memory Diagram</figcaption>
</figure>

<hr/>
<h2 id="declare">How to declare a string?</h2>
<div class="clearfix"></div>
<p>Here''s how you can declare strings:</p>

<pre>
<code>{`char s[5];`}</code>
</pre>

<figure><img alt="string declaration in C programming" class="figure" height="64" src="//cdn.programiz.com/sites/tutorial2program/files/c-string-declaration_0.jpg" title="String declaration" width="235"></img>
<figcaption>String Declaration in C</figcaption>
</figure>

<p>Here, we have declared a string of 5 characters.</p>

<hr/>
<h2 id="initialize">How to initialize strings?</h2>

<p>You can initialize strings in a number of ways.</p>

<pre>
<code>{`char c[] = "abcd";

char c[50] = "abcd";

char c[] = {'a', 'b', 'c', 'd', '\0'};

char c[5] = {'a', 'b', 'c', 'd', '\0'};`}</code>
</pre>

<figure><img alt="Initialization of strings in C programming" class="figure" height="71" src="//cdn.programiz.com/sites/tutorial2program/files/c-string-initialization.jpg" title="String Initialization" width="240"></img>
<figcaption>String Initialization in C</figcaption>
</figure>

<p>Let's take another example:</p>

<pre>
<code>{`char c[5] = "abcde";`}</code></pre>

<p>Here, we are trying to assign 6 characters (the last character is <code>{`'\0'`}</code>) to a <code>{`char`}</code> array having 5 characters. This is bad and you should never do this.</p>

<hr/>
<h2>Assigning Values to Strings</h2>

<p>Arrays and strings are second-class citizens in C; they do not support the assignment operator once it is declared. For example,</p>

<pre>
<code>{`char c[100];
c = "C programming";  // Error! array type is not assignable.`}</code></pre>

<p class="note-tip"><strong>Note: </strong>Use the <a href="/c-programming/library-function/string.h/strcpy" title="C strcpy">strcpy() function</a> to copy the string instead.</p>

<hr/>
<h2 id="read">Read String from the user</h2>

<p>You can use the <code>{`scanf()`}</code> function to read a string.</p>

<p>The <code>{`scanf()`}</code> function reads the sequence of characters until it encounters <a href="https://stackoverflow.com/questions/30033582/what-is-the-symbol-for-whitespace-in-c">whitespace</a> (space, newline, tab, etc.).</p>

<hr/>
<h3>Example 1: scanf() to read a string</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
char name[20];
printf("Enter name: ");
scanf("%s", name);
printf("Your name is %s.", name);
return 0;
}
`}</code></pre>

<p><b>Output</b></p>

<pre>
<samp>Enter name: Dennis Ritchie
Your name is Dennis.</samp></pre>

<p>Even though <var>Dennis Ritchie</var> was entered in the above program, only <var>"Dennis"</var> was stored in the <var>name</var> string. It's because there was a space after <var>Dennis</var>.</p>

<p>Also notice that we have used the code <var>name</var> instead of <code>{`&amp;name`}</code> with <code>{`scanf()`}</code>.</p>

<pre>
<code>{`scanf("%s", name);`}</code></pre>

<p>This is because <var>name</var> is a <code>{`char`}</code> array, and we know that array names decay to pointers in C.</p>

<p>Thus, the <var>name</var> in <code>{`scanf()`}</code> already points to the address of the first element in the string, which is why we don't need to use <code>{`&amp;`}</code>.</p>

<hr/>
<h3>How to read a line of text?</h3>

<p>You can use the <code>{`fgets()`}</code> function to read a line of string. And, you can use <code>{`puts()`}</code> to display the string.</p>

<hr/>
<h3>Example 2: fgets() and puts()</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
char name[30];
printf("Enter name: ");
fgets(name, sizeof(name), stdin);  // read string
printf("Name: ");
puts(name);    // display string
return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter name: Tom Hanks
Name: Tom Hanks</samp>
</pre>

<p>Here, we have used <code>{`fgets()`}</code> function to read a string from the user.</p>

<p><code>{`fgets(name, sizeof(name), stdlin); // read string`}</code></p>

<p>The <code>{`sizeof(name)`}</code> results to 30. Hence, we can take a maximum of 30 characters as input which is the size of the <var>name</var> string.</p>

<p>To print the string, we have used <code>{`puts(name);`}</code>.</p>

<p class="note-tip"><strong>Note:</strong> The <code>{`gets()`}</code> function can also be to take input from the user. However, it is removed from the C standard.

It's because <code>{`gets()`}</code> allows you to input any length of characters. Hence, there might be a buffer overflow.</p>

<hr/>
<h2 id="pass-function">Passing Strings to Functions</h2>

<p>Strings can be passed to a function in a similar way as arrays. Learn more about <a class="Passing Array to Function" href="/c-programming/c-arrays-functions">passing arrays to a function</a>.</p>

<hr/>
<h3>Example 3: Passing string to a Function</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
void displayString(char str[]);

int main()
{
char str[50];
printf("Enter string: ");
fgets(str, sizeof(str), stdin);             
displayString(str);     // Passing string to a function.    
return 0;
}
void displayString(char str[])
{
printf("String Output: ");
puts(str);
}`}</code>
</pre>

<hr/>
<h2 id="pointers">Strings and Pointers</h2>

<p>Similar like arrays, string names are "decayed" to pointers. Hence, you can use pointers to manipulate elements of the string. We recommended you to check <a href="/c-programming/c-pointers-arrays" title="C Arrays and Pointers">C Arrays and Pointers</a> before you check this example.</p>

<hr/>
<h3>Example 4: Strings and Pointers</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;

int main(void) {
char name[] = "Harry Potter";

printf("%c", *name);     // Output: H
printf("%c", *(name+1));   // Output: a
printf("%c", *(name+7));   // Output: o

char *namePtr;

namePtr = name;
printf("%c", *namePtr);     // Output: H
printf("%c", *(namePtr+1));   // Output: a
printf("%c", *(namePtr+7));   // Output: o
}`}</code></pre>

<hr/>
<h3 id="common-functions">Commonly Used String Functions</h3>

<ul>
<li><a href="/c-programming/library-function/string.h/strlen"><strong>strlen()</strong> - calculates the length of a string</a></li>
<li><a href="/c-programming/library-function/string.h/strcpy"><strong>strcpy()</strong> - copies a string to another</a></li>
<li><a href="/c-programming/library-function/string.h/strcmp"><strong>strcmp()</strong> - compares two strings</a></li>
<li><a href="/c-programming/library-function/string.h/strcat"><strong>strcat()</strong> - concatenates two strings</a></li>
</ul>
</div>
      </div>
      <div className={`topic-description ${activeIndex === 28 ? 'active' : ''}`} id="topic-29">
          <h2>String Manipulations In C Programming Using Library Functions</h2>
<p>You need to often manipulate <a href="/c-programming/c-strings" title="C strings">strings</a> according to the need of a problem. Most, if not all, of the time string manipulation can be done manually but, this makes programming complex and large.</p>

<p>To solve this, C supports a large number of string handling functions in the <a href="/c-programming/library-function" title="C standard library functions">standard library</a> <code>{`"string.h"`}</code>.</p>

<p>Few commonly used string handling functions are discussed below:</p>

<table summary='Function under "string.h" header file in C programming'>
<thead>
<tr>
<th>Function</th>
<th>Work of Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/c-programming/library-function/strlen" title="Strlen()">strlen()</a></td>
<td>computes string''s length</td>
</tr>
<tr class="cprotable">
<td><a href="/c-programming/library-function/strcpy" title="Strcpy()">strcpy()</a></td>
<td>copies a string to another</td>
</tr>
<tr>
<td><a href="/c-programming/library-function/strcat" title="Strcat()">strcat()</a></td>
<td>concatenates(joins) two strings</td>
</tr>
<tr class="cprotable">
<td><a href="/c-programming/library-function/strcmp" title="Strcmp()">strcmp()</a></td>
<td>compares two strings</td>
</tr>
<tr>
<td>strlwr()</td>
<td>converts string to lowercase</td>
</tr>
<tr class="cprotable">
<td>strupr()</td>
<td>converts string to uppercase</td>
</tr>
</tbody>
</table>

<p>Strings handling functions are defined under <code>{`"string.h"`}</code> header file.</p>

<pre>
#include &lt;string.h&gt;</pre>

<p><strong>Note:</strong> You have to include the code below to run string handling functions.</p>

<h3>gets() and puts()</h3>

/+<div class="clearfix"></div><p>Functions gets() and puts() are two string functions to take string input from the user and display it respectively as mentioned in the <a href="/c-programming/c-strings" title="C strings">previous chapter</a>.</p>

<pre>
<code>{`#include&lt;stdio.h&gt;

int main()
{
char name[30];
printf("Enter name: ");
gets(name);     //Function to read string from user.
printf("Name: ");
puts(name);    //Function to display string.
return 0;
}`}</code></pre>

<p><strong>Note: </strong>Though, <code>{`gets()`}</code> and <code>{`puts()`}</code> function handle strings, both these functions are defined in <code>{`"stdio.h"`}</code> header file.</p>
      </div>
      <div className={`topic-description ${activeIndex === 29 ? 'active' : ''}`} id="topic-30">
          <h2>String Examples in C Programming</h2>
<p>A string is an array of characters that ends with a null character <code>{`\0`}</code>.</p>

<p>All examples mentioned in the page are related to strings in C programming. To understand all examples on this page, you should have the knowledge of:</p>

<ul>
<li><a href="/c-programming/c-strings">Strings in C</a></li>
<li>How to Pass String to a function</li>
<li><a href="/c-programming/string-handling-functions" title="Standard library functions to work with strings">Commonly used library functions to work with strings</a></li>
</ul>

<h2>String Examples</h2>

<table summary="Example and Source code of Strings in C Programming">
<tbody>
<tr>
<td><a href="/c-programming/examples/frequency-character">Find the frequency of a character in a string</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/vowel-consonant-frequency-string">Find the number of vowels, consonants, digits and white spaces</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/reverse-sentence-recursion">Reverse a string using recursion</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/string-length">Find the length of a string</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/concatenate-string">Concatenate two strings</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/string-copy">C Program to Copy a String</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/remove-characters-string">Remove all characters in a string except alphabets</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/lexicographical-order">Sort elements in the lexicographical order (dictionary order)</a></td>
</tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 30 ? 'active' : ''}`} id="topic-31">
          <h2>C struct</h2>
<p id="introduction">In C programming, a struct (or structure) is a collection of variables (can be of different types) under a single name.</p>

<hr/>
<h2 id="define">Define Structures</h2>

<p>Before you can create structure variables, you need to define its data type. To define a struct, the <code>{`struct`}</code> keyword is used.</p>

<h3>Syntax of struct</h3>

<pre>
<code>{`struct structureName {
dataType member1;
dataType member2;
...
};`}</code></pre>

<p>For example,</p>

<pre>
<code>{`struct Person {
char name[50];
int citNo;
float salary;
};`}</code></pre>

<p>Here, a derived type <code>{`struct Person`}</code> is defined. Now, you can create variables of this type.</p>

<hr/>
<h2 id="create">Create struct Variables</h2>

<p>When a <code>{`struct`}</code> type is declared, no storage or memory is allocated. To allocate memory of a given structure type and work with it, we need to create variables.</p>

<p>Here''s how we create structure variables:</p>

<pre>
<code>{`struct Person {
// code
};

int main() {
struct Person person1, person2, p[20];
return 0;
}`}</code></pre>

<p>Another way of creating a <code>{`struct`}</code> variable is:</p>

<pre>
<code>{`struct Person {
// code
} person1, person2, p[20];`}</code></pre>

<p>In both cases,</p>

<ul>
<li><var>person1</var> and <var>person2</var> are <code>{`struct Person`}</code> variables</li>
<li><var>p[]</var> is a <code>{`struct Person`}</code> array of size 20.</li>
</ul>

<hr/>
<h2 id="access-members">Access Members of a Structure</h2>

<p>There are two types of operators used for accessing members of a structure.</p>

<ol>
<li><code>{`.`}</code> - Member operator</li>
<li><code>{`-&gt;`}</code> - Structure pointer operator (will be discussed in the next tutorial)</li>
</ol>

<p>Suppose, you want to access the <var>salary</var> of <var>person2</var>. Here's how you can do it.</p>

<pre>
<code>{`person2.salary`}</code></pre>

<hr/>
<h2 id="example1">Example 1: C structs</h2>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

// create struct with person1 variable
struct Person {
char name[50];
int citNo;
float salary;
} person1;

int main() {

// assign value to name of person1
strcpy(person1.name, "George Orwell");

// assign values to other person1 variables
person1.citNo = 1984;
person1. salary = 2500;

// print struct variables
printf("Name: %s\n", person1.name);
printf("Citizenship No.: %d\n", person1.citNo);
printf("Salary: %.2f", person1.salary);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Name: George Orwell
Citizenship No.: 1984
Salary: 2500.00</samp></pre>

<p>In this program, we have created a <code>{`struct`}</code> named <code>{`Person`}</code>. We have also created a variable of <code>{`Person`}</code> named <var>person1</var>.</p>
<div class="clearfix"></div><p>In <code>{`main()`}</code>, we have assigned values to the variables defined in <code>{`Person`}</code> for the <var>person1</var> object.</p>

<pre>
<code>{`strcpy(person1.name, "George Orwell");
person1.citNo = 1984;
person1. salary = 2500;`}</code></pre>

<p>Notice that we have used <code>{`strcpy()`}</code> function to assign the value to <var>person1.name</var>.</p>

<p>This is because <var>name</var> is a <code>{`char`}</code> array (<a href="/c-programming/c-strings">C-string</a>) and we cannot use the assignment operator <code>{`=`}</code> with it after we have declared the string.</p>

<p>Finally, we printed the data of <var>person1</var>.</p>

<hr/>
<h2 id="typedef">Keyword typedef</h2>

<p>We use the <code>{`typedef`}</code> keyword to create an alias name for data types. It is commonly used with structures to simplify the syntax of declaring variables.</p>

<p>For example, let us look at the following code:</p>

<pre>
<code>{`struct Distance{
int feet;
float inch;
};

int main() {
struct Distance d1, d2;
}`}</code></pre>

<p>We can use <code>{`typedef`}</code> to write an equivalent code with a simplified syntax:</p>

<pre>
<code>{`typedef struct Distance {
int feet;
float inch;
} distances;

int main() {
distances d1, d2;
}`}</code></pre>

<hr/>
<h3>Example 2: C typedef</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

// struct with typedef person
typedef struct Person {
char name[50];
int citNo;
float salary;
} person;

int main() {

// create  Person variable
person p1;

// assign value to name of p1
strcpy(p1.name, "George Orwell");

// assign values to other p1 variables
p1.citNo = 1984;
p1. salary = 2500;

// print struct variables
printf("Name: %s\n", p1.name);
printf("Citizenship No.: %d\n", p1.citNo);
printf("Salary: %.2f", p1.salary);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Name: George Orwell
Citizenship No.: 1984
Salary: 2500.00</samp></pre>

<p>Here, we have used <code>{`typedef`}</code> with the <code>{`Person`}</code> structure to create an alias <code>{`person`}</code>.</p>

<pre>
<code>{`// struct with typedef person
typedef struct Person {
// code
} person;`}</code></pre>

<p>Now, we can simply declare a <code>{`Person`}</code> variable using the <code>{`person`}</code> alias:</p>

<pre>
<code>{`// equivalent to struct Person p1
person p1;`}</code></pre>

<hr/>
<h2 id="nested-structures">Nested Structures</h2>

<p>You can create structures within a structure in C programming. For example,</p>

<pre>
<code>{`struct complex {
int imag;
float real;
};

struct number {
struct complex comp;
int integers;
} num1, num2;`}</code></pre>

<p>Suppose, you want to set <var>imag</var> of <var>num2</var> variable to <strong>11</strong>. Here's how you can do it:</p>

<pre>
<code>{`num2.comp.imag = 11;`}</code></pre>

<hr/>
<h3>Example 3: C Nested Structures</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;

struct complex {
int imag;
float real;
};

struct number {
struct complex comp;
int integer;
} num1;

int main() {

// initialize complex variables
num1.comp.imag = 11;
num1.comp.real = 5.25;

// initialize number variable
num1.integer = 6;

// print struct variables
printf("Imaginary Part: %d\n", num1.comp.imag);
printf("Real Part: %.2f\n", num1.comp.real);
printf("Integer: %d", num1.integer);

return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Imaginary Part: 11
Real Part: 5.25
Integer: 6</samp></pre>

<hr/>
<h2>Why structs in C?</h2>

<p>Suppose you want to store information about a person: his/her name, citizenship number, and salary. You can create different variables <var>name</var>, <var>citNo</var> and <var>salary</var> to store this information.</p>

<p>What if you need to store information of more than one person? Now, you need to create different variables for each information per person: <var>name1</var>, <var>citNo1</var>, <var>salary1</var>, <var>name2</var>, <var>citNo2</var>, <var>salary2</var>, etc.</p>

<p>A better approach would be to have a collection of all related information under a single name <code>{`Person`}</code> structure and use it for every person.</p>

<hr/>
<h2>More on struct</h2>

<ul>
<li><a href="/c-programming/c-structures-pointers">Structures and pointers</a></li>
<li><a href="/c-programming/c-structure-function">Passing structures to a function</a></li>
</ul> 
      </div>
      <div className={`topic-description ${activeIndex === 31 ? 'active' : ''}`} id="topic-32">
          <h2>C structs and Pointers</h2>
<p id="introduction">Before you learn about how pointers can be used with structs, be sure to check these tutorials:</p>

<ul>
<li><a href="/c-programming/c-pointers" title="C Pointers">C Pointers</a></li>
<li><a href="/c-programming/c-structures" title="C structs">C struct</a></li>
</ul>

<hr/>
<h2 id="pointers-struct">C Pointers to struct</h2>

<p>Here's how you can create pointers to structs.</p>

<pre>
<code>{`struct name {
member1;
member2;
.
.
};

int main()
{
struct name *ptr, Harry;
}`}</code></pre>

<p>Here, <var>ptr</var> is a pointer to <code>{`struct`}</code>.</p>

<hr/>
<h2 id="example-1">Example: Access members using Pointer</h2>

<p>To access members of a structure using pointers, we use the <code>{`-&gt;`}</code> operator.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
struct person
{
int age;
float weight;
};

int main()
{
struct person *personPtr, person1;
personPtr = &amp;person1;   

printf("Enter age: ");
scanf("%d", &amp;personPtr-&gt;age);

printf("Enter weight: ");
scanf("%f", &amp;personPtr-&gt;weight);

printf("Displaying:\n");
printf("Age: %d\n", personPtr-&gt;age);
printf("weight: %f", personPtr-&gt;weight);

return 0;
}`}</code></pre>

<p>In this example, the address of <var>person1</var> is stored in the <var>personPtr</var> pointer using <code>{`personPtr = &amp;person1;`}</code>.</p>

<p>Now, you can access the members of <var>person1</var> using the <code>{`personPtr`}</code> pointer.</p>
<div class="clearfix"></div><p>By the way,</p>

<ul>
<li><code>{`personPtr-&gt;age`}</code> is equivalent to <code>{`(*personPtr).age`}</code></li>
<li><code>{`personPtr-&gt;weight`}</code> is equivalent to <code>{`(*personPtr).weight`}</code></li>
</ul>

<hr/>
<h2 id="dma">Dynamic memory allocation of structs</h2>

<p>Before you proceed this section, we recommend you to check <a href="https://www.programiz.com/c-programming/c-dynamic-memory-allocation">C dynamic memory allocation</a>.</p>

<p>Sometimes, the number of struct variables you declared may be insufficient. You may need to allocate memory during run-time. Here's how you can achieve this in C programming.</p>

<h3>Example: Dynamic memory allocation of structs</h3>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
struct person {
int age;
float weight;
char name[30];
};

int main()
{
struct person *ptr;
int i, n;

printf("Enter the number of persons: ");
scanf("%d", &amp;n);

// allocating memory for n numbers of struct person
ptr = (struct person*) malloc(n * sizeof(struct person));

for(i = 0; i &lt; n; ++i)
{
printf("Enter first name and age respectively: ");

// To access members of 1st struct person,
// ptr-&gt;name and ptr-&gt;age is used

// To access members of 2nd struct person,
// (ptr+1)-&gt;name and (ptr+1)-&gt;age is used
scanf("%s %d", (ptr+i)-&gt;name, &amp;(ptr+i)-&gt;age);
}

printf("Displaying Information:\n");
for(i = 0; i &lt; n; ++i)
printf("Name: %s\tAge: %d\n", (ptr+i)-&gt;name, (ptr+i)-&gt;age);

return 0;
}
`}</code></pre>

<p>When you run the program, the output will be:</p>

<pre>
<samp>Enter the number of persons:  2
Enter first name and age respectively:  Harry 24
Enter first name and age respectively:  Gary 32
Displaying Information:
Name: Harry	Age: 24
Name: Gary	Age: 32</samp></pre>

<p>In the above example, <var>n</var> number of struct variables are created where <var>n</var> is entered by the user.</p>

<p>To allocate the memory for <var>n</var> number of <var>struct person</var>, we used,</p>

<pre>
<code>{`ptr = (struct person*) malloc(n * sizeof(struct person));`}</code></pre>

<p>Then, we used the <var>ptr</var> pointer to access elements of <var>person</var>.</p>
      </div>
      <div className={`topic-description ${activeIndex === 32 ? 'active' : ''}`} id="topic-33">
          <h2>C Structure and Function</h2>
<p>Similar to variables of built-in types, you can also pass structure variables to a function.</p>

<hr/>
<h2 id="pass-structure">Passing structs to functions</h2>

<p>We recommended you to learn these tutorials before you learn how to pass structs to functions.</p>

<ul>
<li><a href="/c-programming/c-structures">C structures</a></li>
<li><a href="/c-programming/c-functions">C functions</a></li>
<li><a href="/c-programming/c-user-defined-functions">User-defined Function</a></li>
</ul>

<p>Here's how you can pass structures to a function</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
struct student {
char name[50];
int age;
};

// function prototype
void display(struct student s);

int main() {
struct student s1;

printf("Enter name: ");

// read string input from the user until \n is entered
// \n is discarded
scanf("%[^\n]%*c", s1.name);

printf("Enter age: ");
scanf("%d", &amp;s1.age);

display(s1); // passing struct as an argument

return 0;
}

void display(struct student s) {
printf("\nDisplaying information\n");
printf("Name: %s", s.name);
printf("\nAge: %d", s.age);
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter name: Bond
Enter age: 13

Displaying information
Name: Bond
Age: 13  
</samp></pre>

<p>Here, a struct variable <var>s1</var> of type <code>{`struct student`}</code> is created. The variable is passed to the <code>{`display()`}</code> function using <code>{`display(s1);`}</code> statement.</p>

<hr/>
<h2 id="return-structure">Return struct from a function</h2>
<div class="clearfix"></div><p>Here's how you can return structure from a function:</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
struct student
{
char name[50];
int age;
};

// function prototype
struct student getInformation();

int main()
{
struct student s;

s = getInformation();

printf("\nDisplaying information\n");
printf("Name: %s", s.name);
printf("\nRoll: %d", s.age);

return 0;
}
struct student getInformation() 
{
struct student s1;

printf("Enter name: ");
scanf ("%[^\n]%*c", s1.name);

printf("Enter age: ");
scanf("%d", &amp;s1.age);

return s1;
}	
`}</code></pre>

<p>Here, the <code>{`getInformation()`}</code> function is called using <code>{`s = getInformation();`}</code> statement. The function returns a structure of type <code>{`struct student`}</code>. The returned structure is displayed from the <code>{`main()`}</code> function.</p>

<p>Notice that, the return type of <code>{`getInformation()`}</code> is also <code>{`struct student`}</code>.</p>

<hr/>
<h2 id="pass-reference">Passing struct by reference</h2>

<p>You can also pass structs by reference (in a similar way like you pass variables of built-in type by reference). We suggest you to read <a href="/c-programming/c-pointer-functions">pass by reference</a> tutorial before you proceed.</p>

<p>During pass by reference, the memory addresses of struct variables are passed to the function.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
typedef struct Complex
{
float real;
float imag;
} complex;

void addNumbers(complex c1, complex c2, complex *result); 

int main()
{
complex c1, c2, result;

printf("For first number,\n");
printf("Enter real part: ");
scanf("%f", &amp;c1.real);
printf("Enter imaginary part: ");
scanf("%f", &amp;c1.imag);

printf("For second number, \n");
printf("Enter real part: ");
scanf("%f", &amp;c2.real);
printf("Enter imaginary part: ");
scanf("%f", &amp;c2.imag);

addNumbers(c1, c2, &amp;result); 
printf("\nresult.real = %.1f\n", result.real);
printf("result.imag = %.1f", result.imag);

return 0;
}
void addNumbers(complex c1, complex c2, complex *result) 
{
result-&gt;real = c1.real + c2.real;
result-&gt;imag = c1.imag + c2.imag; 
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>For first number,
Enter real part:  1.1
Enter imaginary part:  -2.4
For second number, 
Enter real part:  3.4
Enter imaginary part:  -3.2

result.real = 4.5
result.imag = -5.6  
</samp></pre>

<p>In the above program, three structure variables <var>c1</var>, <var>c2</var> and the address of <var>result</var> is passed to the <code>{`addNumbers()`}</code> function. Here, <var>result</var> is passed by reference.</p>

<p>When the <var>result</var> variable inside the <code>{`addNumbers()`}</code> is altered, the <var>result</var> variable inside the <code>{`main()`}</code> function is also altered accordingly.</p>
      </div>
      <div className={`topic-description ${activeIndex === 33 ? 'active' : ''}`} id="topic-34">
          <h2>C Unions</h2>                   
<p id="introduction">A union is a user-defined type similar to <a href="/c-programming/c-structures">structs in C</a> except for one key difference.</p>

<p>Structures allocate enough space to store all their members, whereas <strong>unions can only hold one member value at a time</strong>.</p>

<hr/>
<h2 id="define">How to define a union?</h2>

<p>We use the <code>{`union`}</code> keyword to define unions. Here's an example:</p>

<pre>
<code>{`union car
{
char name[50];
int price;
};`}</code>
</pre>

<p>The above code defines a derived type <code>{`union car`}</code>.</p>

<hr/>
<h2 id="create-variables">Create union variables</h2>

<p>When a union is defined, it creates a user-defined type. However, no memory is allocated. To allocate memory for a given union type and work with it, we need to create variables.</p>

<p>Here's how we create union variables.</p>

<pre>
<code>{`union car
{
chr name[50];
int price;
};

int main()
{
union car car1, car2, *car3;
return 0;
}`}</code>
</pre>

<p>Another way of creating union variables is:</p>

<pre>
<code>{`union car
{
char name[50];
int price;
} car1, car2, *car3;`}</code>

</pre>

<p>In both cases, union variables <var>car1</var>, <var>car2</var>, and a union pointer <var>car3</var> of <code>{`union car`}</code> type are created.</p>

<hr/>
<h3 id="access">Access members of a union</h3>

<p>We use the <code>{`.`}</code> operator to access members of a union. And to access pointer variables, we use the <code>{`-&gt;`}</code> operator.</p>

/+<div class="clearfix"></div><p>In the above example,</p>

<ul>
<li>To access <var>price</var> for <code>{`car1`}</code>, <code>{`car1.price`}</code> is used.</li>
<li>To access <var>price</var> using <code>{`car3`}</code>, either <code>{`(*car3).price`}</code> or <code>{`car3-&gt;price`}</code> can be used.</li>
</ul>

<hr/>
<h2 id="vs-structures">Difference between unions and structures</h2>

<p>Let's take an example to demonstrate the difference between unions and structures:</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
union unionJob
{
//defining a union
char name[32];
float salary;
int workerNo;
} uJob;

struct structJob
{
char name[32];
float salary;
int workerNo;
} sJob;

int main()
{
printf("size of union = %d bytes", sizeof(uJob));
printf("\nsize of structure = %d bytes", sizeof(sJob));
return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>size of union = 32
size of structure = 40</samp>
</pre>

<p><strong>Why this difference in the size of union and structure variables?</strong></p>

<p>Here, the size of <var>sJob</var> is 40 bytes because</p>

<ul>
<li>the size of <code>{`name[32]`}</code> is 32 bytes</li>
<li>the size of <code>{`salary`}</code> is 4 bytes</li>
<li>the size of <code>{`workerNo`}</code> is 4 bytes</li>
</ul>

<p>However, the size of <var>uJob</var> is 32 bytes. It's because the size of a union variable will always be the size of its largest element. In the above example, the size of its largest element, (<code>{`name[32]`}</code>), is 32 bytes.</p>

<p>With a union, all members share <strong>the same memory</strong>.</p>

<hr/>
<h3 id="member-access">Example: Accessing Union Members</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
union Job {
float salary;
int workerNo;
} j;

int main() {
j.salary = 12.3;

// when j.workerNo is assigned a value,
// j.salary will no longer hold 12.3
j.workerNo = 100;

printf("Salary = %.1f\n", j.salary);
printf("Number of workers = %d", j.workerNo);
return 0;
}`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>Salary = 0.0
Number of workers = 100</samp>
</pre>

<hr/>
<p>To learn where unions are used, visit <a href="https://stackoverflow.com/questions/252552/why-do-we-need-c-unions">Why do we need C Unions?</a></p>
      </div>
      <div className={`topic-description ${activeIndex === 34 ? 'active' : ''}`} id="topic-35">
          <h2>C Struct Examples</h2>
<p>A structure is a collection of variables of different data types.</p>

<p>You will find examples related to structures in this article. To understand examples in this page, you should have the knowledge of the following topics.</p>

<ol>
<li><a href="/c-programming/c-structures" title="C Programming Structures">C struct</a></li>
<li><a href="/c-programming/c-structures-pointers">C structs and pointers</a></li>
<li><a href="/c-programming/c-structure-function">C structs and functions</a></li>
</ol>

<hr/>
<h2>C struct Examples</h2>

<table summary="Source code and examples of Structures in C programming">
<tbody>
<tr>
<td><a href="/c-programming/examples/structure-store-information">Store information of a student using structure</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/inch-feet-structure">Add two distances (in inch-feet)</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/complex-number-add">Add two complex numbers by passing structures to a function</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/time-structure">Calculate the difference between two time periods</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/information-structure-array">Store information of 10 students using structures</a></td>
</tr>
<tr>
<td><a href="/c-programming/examples/structure-dynamic-memory-allocation">Store information of n students using structures</a></td>
</tr>
</tbody>
</table>
      </div>
      <div className={`topic-description ${activeIndex === 35 ? 'active' : ''}`} id="topic-36">
          <h2>C File Handling</h2>


<div id="node-148" class="node node-c-tutorial clearfix" about="/c-programming/c-file-input-output" typeof="sioc:Item foaf:Document">


<span property="dc:title" content="C File Handling" class="rdf-meta element-hidden"></span>


<p>A file is a container in computer storage devices used for storing data.</p>

<hr/>
<h2 id="why-files">Why files are needed?</h2>

<ul>
<li>When a program is terminated, the entire data is lost. Storing in a file will preserve your data even if the program terminates.</li>
<li>If you have to enter a large number of data, it will take a lot of time to enter them all.<br/>
However, if you have a file containing all the data, you can easily access the contents of the file using a few commands in C.</li>
<li>You can easily move your data from one computer to another without any changes.</li>
</ul>

<hr/>
<h2 id="types">Types of Files</h2>

<p>When dealing with files, there are two types of files you should know about:</p>

<ol>
<li>Text files</li>
<li>Binary files</li>
</ol>

<h3>1. Text files</h3>

<p>Text files are the normal <strong>.txt</strong> files. You can easily create text files using any simple text editors such as Notepad.</p>

<p>When you open those files, you''ll see all the contents within the file as plain text. You can easily edit or delete the contents.</p>

<p>They take minimum effort to maintain, are easily readable, and provide the least security and takes bigger storage space.</p>

<h3>2. Binary files</h3>

<p>Binary files are mostly the <strong>.bin</strong> files in your computer.</p>

<p>Instead of storing data in plain text, they store it in the binary form (0's and 1's).</p>

<p>They can hold a higher amount of data, are not readable easily, and provides better security than text files.</p>

<hr/>
<h2 id="operations">File Operations</h2>

<p>In C, you can perform four major operations on files, either text or binary:</p>

<ol>
<li>Creating a new file</li>
<li>Opening an existing file</li>
<li>Closing a file</li>
<li>Reading from and writing information to a file</li>
</ol>

<hr/>
<h2>Working with files</h2>

<p>When working with files, you need to declare a pointer of type file. This declaration is needed for communication between the file and the program.</p>

<pre>
<code>{`FILE *fptr;`}</code></pre>

<hr/>
<h2 id="opening">Opening a file - for creation and edit</h2>

<p>Opening a file is performed using the <code>{`fopen()`}</code> function defined in the <code>{`stdio.h`}</code> header file.</p>

<p>The syntax for opening a file in standard I/O is:</p>

<pre>
<code>{`ptr = fopen("fileopen","mode");`}</code>
</pre>

<p>For example,</p>

<pre>
<code>{`fopen("E:\\cprogram\\newprogram.txt","w");

fopen("E:\\cprogram\\oldprogram.bin","rb");`}</code></pre>

<ul>
<li>Let's suppose the file <code>{`newprogram.txt`}</code> doesn't exist in the location <code>{`E:\cprogram`}</code>. The first function creates a new file named <code>{`newprogram.txt`}</code> and opens it for writing as per the mode <strong>'w'</strong>.<br/>
The writing mode allows you to create and edit (overwrite) the contents of the file.</li>
<li>Now let's suppose the second binary file <code>{`oldprogram.bin`}</code> exists in the location <code>{`E:\cprogram`}</code>. The second function opens the existing file for reading in binary mode <strong>'rb'</strong>.<br/>
The reading mode only allows you to read the file, you cannot write into the file.</li>
</ul>

<table summary="Different opening modes for standard input/output in C programming.">
<caption>Opening Modes in Standard I/O</caption>
<thead>
<tr>
<th>Mode</th>
<th>Meaning of Mode</th>
<th>During Inexistence of file</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>{`r`}</code></td>
<td>Open for reading.</td>
<td>If the file does not exist, <code>{`fopen()`}</code> returns NULL.</td>
</tr>
<tr>
<td><code>{`rb`}</code></td>
<td>Open for reading in binary mode.</td>
<td>If the file does not exist, <code>{`fopen()`}</code> returns NULL.</td>
</tr>
<tr>
<td><code>{`w`}</code></td>
<td>Open for writing.</td>
<td>If the file exists, its contents are overwritten.<br/>
If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`wb`}</code></td>
<td>Open for writing in binary mode.</td>
<td>If the file exists, its contents are overwritten.<br/>
If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`a`}</code></td>
<td>Open for append.<br/>
Data is added to the end of the file.</td>
<td>If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`ab`}</code></td>
<td>Open for append in binary mode.<br/>
Data is added to the end of the file.</td>
<td>If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`r+`}</code></td>
<td>Open for both reading and writing.</td>
<td>If the file does not exist, <code>{`fopen()`}</code> returns NULL.</td>
</tr>
<tr>
<td><code>{`rb+`}</code></td>
<td>Open for both reading and writing in binary mode.</td>
<td>If the file does not exist, <code>{`fopen()`}</code> returns NULL.</td>
</tr>
<tr>
<td><code>{`w+`}</code></td>
<td>Open for both reading and writing.</td>
<td>If the file exists, its contents are overwritten.<br/>
If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`wb+`}</code></td>
<td>Open for both reading and writing in binary mode.</td>
<td>If the file exists, its contents are overwritten.<br/>
If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`a+`}</code></td>
<td>Open for both reading and appending.</td>
<td>If the file does not exist, it will be created.</td>
</tr>
<tr>
<td><code>{`ab+`}</code></td>
<td>Open for both reading and appending in binary mode.</td>
<td>If the file does not exist, it will be created.</td>
</tr>
</tbody>
</table>

<hr/>
<h2 id="closing">Closing a File</h2>

<p>The file (both text and binary) should be closed after reading/writing.</p>

/+<div class="clearfix"></div><p>Closing a file is performed using the <code>{`fclose()`}</code> function.</p>

<pre>
<code>{`fclose(fptr);`}</code></pre>

<p>Here, <code>{`fptr`}</code> is a file pointer associated with the file to be closed.</p>

<hr/>
<h2>Reading and writing to a text file</h2>

<p>For reading and writing to a text file, we use the functions <code>{`fprintf()`}</code> and <code>{`fscanf().`}</code></p>

<p>They are just the file versions of <code>{`printf()`}</code> and <code>{`scanf()`}</code>. The only difference is that <code>{`fprintf()`}</code> and <code>{`fscanf()`}</code> expects a pointer to the structure FILE.</p>

<hr/>
<h3 id="example-write">Example 1: Write to a text file</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
int num;
FILE *fptr;

// use appropriate location if you are using MacOS or Linux
fptr = fopen("C:\\program.txt","w");

if(fptr == NULL)
{
printf("Error!");   
exit(1);             
}

printf("Enter num: ");
scanf("%d",&amp;num);

fprintf(fptr,"%d",num);
fclose(fptr);

return 0;
}`}</code>
</pre>

<p>This program takes a number from the user and stores in the file <code>{`program.txt`}</code>.</p>

<p>After you compile and run this program, you can see a text file <code>{`program.txt`}</code> created in C drive of your computer. When you open the file, you can see the integer you entered.</p>

<hr/>
<h3 id="example-read">Example 2: Read from a text file</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
int num;
FILE *fptr;

if ((fptr = fopen("C:\\program.txt","r")) == NULL){
printf("Error! opening file");

// Program exits if the file pointer returns NULL.
exit(1);
}

fscanf(fptr,"%d", &amp;num);

printf("Value of n=%d", num);
fclose(fptr); 

return 0;
}
`}</code></pre>

<p>This program reads the integer present in the <code>{`program.txt`}</code> file and prints it onto the screen.</p>

<p>If you successfully created the file from <strong>Example 1</strong>, running this program will get you the integer you entered.</p>

<p>Other functions like <code>{`fgetchar()`}</code>, <code>{`fputc()`}</code> etc. can be used in a similar way.</p>

<hr/>
<h2 id="read-write-binary">Reading and writing to a binary file</h2>

<p>Functions <code>{`fread()`}</code> and <code>{`fwrite()`}</code> are used for reading from and writing to a file on the disk respectively in case of binary files.</p>

<hr/>
<h3>Writing to a binary file</h3>

<p>To write into a binary file, you need to use the <code>{`fwrite()`}</code> function. The functions take four arguments:</p>

<ol>
<li>address of data to be written in the disk</li>
<li>size of data to be written in the disk</li>
<li>number of such type of data</li>
<li>pointer to the file where you want to write.</li>
</ol>

<pre>
<code>{`fwrite(addressData, sizeData, numbersData, pointerToFile);`}</code></pre>

<hr/>
<h3>Example 3: Write to a binary file using fwrite()</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct threeNum
{
int n1, n2, n3;
};

int main()
{
int n;
struct threeNum num;
FILE *fptr;

if ((fptr = fopen("C:\\program.bin","wb")) == NULL){
printf("Error! opening file");

// Program exits if the file pointer returns NULL.
exit(1);
}

for(n = 1; n &lt; 5; ++n)
{
num.n1 = n;
num.n2 = 5*n;
num.n3 = 5*n + 1;
fwrite(&amp;num, sizeof(struct threeNum), 1, fptr); 
}
fclose(fptr); 

return 0;
}
`}</code></pre>

<p>In this program, we create a new file <code>{`program.bin`}</code> in the C drive.</p>

<p>We declare a structure <code>{`threeNum`}</code> with three numbers - <var>n1, n2 and n3</var>, and define it in the main function as num.</p>

<p>Now, inside the for loop, we store the value into the file using <code>{`fwrite()`}</code>.</p>

<p>The first parameter takes the address of <var>num</var> and the second parameter takes the size of the structure <code>{`threeNum`}</code>.</p>

<p>Since we're only inserting one instance of <var>num</var>, the third parameter is <code>{`1`}</code>. And, the last parameter <code>{`*fptr`}</code> points to the file we're storing the data.</p>

<p>Finally, we close the file.</p>

<hr/>
<h3 id="read-binary">Reading from a binary file</h3>

<p>Function <code>{`fread()`}</code> also take 4 arguments similar to the <code>{`fwrite()`}</code> function as above.</p>

<pre>
<code>{`fread(addressData, sizeData, numbersData, pointerToFile);`}</code></pre>

<hr/>
<h3>Example 4: Read from a binary file using fread()</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct threeNum
{
int n1, n2, n3;
};

int main()
{
int n;
struct threeNum num;
FILE *fptr;

if ((fptr = fopen("C:\\program.bin","rb")) == NULL){
printf("Error! opening file");

// Program exits if the file pointer returns NULL.
exit(1);
}

for(n = 1; n &lt; 5; ++n)
{
fread(&amp;num, sizeof(struct threeNum), 1, fptr); 
printf("n1: %d\tn2: %d\tn3: %d\n", num.n1, num.n2, num.n3);
}
fclose(fptr); 

return 0;
}
`}</code></pre>

<p>In this program, you read the same file <code>{`program.bin`}</code> and loop through the records one by one.</p>

<p>In simple terms, you read one <code>{`threeNum`}</code> record of <code>{`threeNum`}</code> size from the file pointed by <var>*fptr</var> into the structure <var>num</var>.</p>

<p>You'll get the same records you inserted in <strong>Example 3</strong>.</p>

<hr/>
<h2 id="get-fseek">Getting data using fseek()</h2>

<p>If you have many records inside a file and need to access a record at a specific position, you need to loop through all the records before it to get the record.</p>

<p>This will waste a lot of memory and operation time. An easier way to get to the required data can be achieved using <code>{`fseek()`}</code>.</p>

<p>As the name suggests, <code>{`fseek()`}</code> seeks the cursor to the given record in the file.</p>

<hr/>
<h3>Syntax of fseek()</h3>

<pre>
<code>{`fseek(FILE * stream, long int offset, int whence);`}</code></pre>

<p>The first parameter stream is the pointer to the file. The second parameter is the position of the record to be found, and the third parameter specifies the location where the offset starts.</p>

<table summary="Different Whence in fseek.">
<caption>Different whence in fseek()</caption>
<thead>
<tr>
<th>Whence</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>{`SEEK_SET`}</code></td>
<td>Starts the offset from the beginning of the file.</td>
</tr>
<tr>
<td><code>{`SEEK_END`}</code></td>
<td>Starts the offset from the end of the file.</td>
</tr>
<tr>
<td><code>{`SEEK_CUR`}</code></td>
<td>Starts the offset from the current location of the cursor in the file.</td>
</tr>
</tbody>
</table>

<hr/>
<h3>Example 5: fseek()</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct threeNum
{
int n1, n2, n3;
};

int main()
{
int n;
struct threeNum num;
FILE *fptr;

if ((fptr = fopen("C:\\program.bin","rb")) == NULL){
printf("Error! opening file");

// Program exits if the file pointer returns NULL.
exit(1);
}

// Moves the cursor to the end of the file
fseek(fptr, -sizeof(struct threeNum), SEEK_END);

for(n = 1; n &lt; 5; ++n)
{
fread(&amp;num, sizeof(struct threeNum), 1, fptr); 
printf("n1: %d\tn2: %d\tn3: %d\n", num.n1, num.n2, num.n3);
fseek(fptr, -2*sizeof(struct threeNum), SEEK_CUR);
}
fclose(fptr); 

return 0;
}
`}</code></pre>

<p>This program will start reading the records from the file <code>{`program.bin`}</code> in the reverse order (last to first) and prints it.</p>
</div>



      </div>
      <div className={`topic-description ${activeIndex === 36 ? 'active' : ''}`} id="topic-37">
          <h2>C Files Examples</h2>
<div id="node-167" class="node node-c-tutorial clearfix" about="/c-programming/c-file-examples" typeof="sioc:Item foaf:Document">


<span property="dc:title" content="C Files Examples" class="rdf-meta element-hidden"></span>


<p>To understand all programs on this page, you should have the knowledge of the following topics.</p>

<ul>
<li><a href="/c-programming/c-arrays" title="C programming Arrays">C Arrays</a></li>
<li><a href="/c-programming/c-pointers" title="C Programming Pointers">C Pointers</a></li>
<li><a href="/c-programming/c-pointers-arrays" title="Relation Between Arrays and Pointer">Array and Pointer Relation</a></li>
<li><a href="/c-programming/c-file-input-output" title="C File Input Output">File I/O</a></li>
</ul>

<hr/>
<h2>C File Examples</h2>

<p><strong id="read">1. C program to read name and marks of n number of students and store them in a file.</strong></p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
char name[50];
int marks, i, num;

printf("Enter number of students: ");
scanf("%d", &amp;num);

FILE *fptr;
fptr = (fopen("C:\\student.txt", "w"));
if(fptr == NULL)
{
printf("Error!");
exit(1);
}

for(i = 0; i &lt; num; ++i)
{
printf("For student%d\nEnter name: ", i+1);
scanf("%s", name);

printf("Enter marks: ");
scanf("%d", &amp;marks);

fprintf(fptr,"\nName: %s \nMarks=%d \n", name, marks);
}

fclose(fptr);
return 0;
}
`}</code></pre>

<p><strong id="append">2. C program to read name and marks of n number of students from and store them in a file. If the file previously exits, add the information to the file.</strong></p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
char name[50];
in marks, i, num;

printf("Enter number of students: ");
scanf("%d", &amp;num);

FILE *fptr;
fptr = (fopen("C:\\student.txt", "a"));
if(fptr == NULL)
{
printf("Error!");
exit(1);
}

for(i = 0; i &lt; num; ++i)
{
printf("For student%d\nEnter name: ", i+1);
scanf("%s", name);

printf("Enter marks: ");
scanf("%d", &amp;marks);

fprintf(fptr,"\nName: %s \nMarks=%d \n", name, marks);
}

fclose(fptr);
return 0;
}
`}</code></pre>

/+<div class="clearfix"></div><p><strong id="fwrite">3. C program to write all the members of an array of structures to a file using fwrite(). Read the array from the file and display on the screen.</strong></p>

<pre>
<code>{`#include &lt;stdio.h&gt;
struct student
{
char name[50];
int height;
};
int main(){
struct student stud1[5], stud2[5];   
FILE *fptr;
int i;

fptr = fopen("file.txt","wb");
for(i = 0; i &lt; 5; ++i)
{
fflush(stdin);
printf("Enter name: ");
gets(stud1[i].name);

printf("Enter height: "); 
scanf("%d", &amp;stud1[i].height); 
}

fwrite(stud1, sizeof(stud1), 1, fptr);
fclose(fptr);

fptr = fopen("file.txt", "rb");
fread(stud2, sizeof(stud2), 1, fptr);
for(i = 0; i &lt; 5; ++i)
{
printf("Name: %s\nHeight: %d", stud2[i].name, stud2[i].height);
}
fclose(fptr);
}`}</code></pre>
</div>



      </div>
      <div className={`topic-description ${activeIndex === 37 ? 'active' : ''}`} id="topic-38">
          <h2>C enums</h2>

<div id="node-132" class="node node-c-tutorial clearfix" about="/c-programming/c-enumeration" typeof="sioc:Item foaf:Document">


<span property="dc:title" content="C enums" class="rdf-meta element-hidden"></span>


<p id="introduction">In C programming, an enumeration type (also called enum) is a data type that consists of integral constants. To define enums, the <code>{`enum`}</code> keyword is used.</p>

<pre>
{`enum flag {const1, const2, ..., constN};`}
</pre>

<p>By default, <var>const1</var> is 0, <var>const2</var> is 1 and so on. You can change default values of enum elements during declaration (if necessary).</p>

<pre>
    {`
// Changing default values of enum constants
enum suit {
club = 0,
diamonds = 10,
hearts = 20,
spades = 3,
};`}</pre>

<hr/>
<h2>Enumerated Type Declaration</h2>

/+<div class="clearfix"></div><p>When you define an enum type, the blueprint for the variable is created. Here''s how you can create variables of enum types.</p>

<pre>
enum boolean {`{false, true}`};
enum boolean check; // declaring an enum variable</pre>

<p>Here, a variable <var>check</var> of the type <code>{`enum boolean`}</code> is created.</p>

<p>You can also declare enum variables like this.</p>

<pre>
enum boolean {`{false, true}`} check;
</pre>

<p>Here, the value of <code>{`false`}</code> is equal to 0 and the value of <code>{`true`}</code> is equal to 1.</p>

<hr/>
<h3 id="example">Example: Enumeration Type</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;

enum week {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};

int main()
{
// creating today variable of enum week type
enum week today;
today = Wednesday;
printf("Day %d",today+1);
return 0;
}`}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
Day 4</pre>

<hr/>
<h2 id="why-enums">Why enums are used?</h2>

<p>An enum variable can take only one value. Here is an example to demonstrate it,</p>

<pre>
<code>{`#include &lt;stdio.h&gt;

enum suit {
club = 0,
diamonds = 10,
hearts = 20,
spades = 3
} card;

int main() 
{
card = club;
printf("Size of enum variable = %d bytes", sizeof(card));	
return 0;
}`}</code>
</pre>

<p><b>Output</b></p>

<pre>
<samp>Size of enum variable = 4 bytes</samp></pre>

<p>Here, we are getting <samp>4</samp> because the size of <code>{`int`}</code> is 4 bytes.</p>

<p>This makes enum a good choice to work with flags.</p>

<hr/>
<h3 id="flags">How to use enums for flags?</h3>

<p>Let us take an example,</p>

<pre>
<code>{`enum designFlags {
ITALICS = 1,
BOLD = 2,
UNDERLINE = 4
} button;
`}</code></pre>

<p>Suppose you are designing a button for Windows application. You can set flags <var>ITALICS</var>, <var>BOLD</var> and <var>UNDERLINE</var> to work with text.</p>

<p>There is a reason why all the integral constants are a power of 2 in the above pseudocode.</p>

<pre>
// In binary

ITALICS = 00000001
BOLD = 00000010
UNDERLINE = 00000100 
</pre>

<p>Since the integral constants are a power of 2, you can combine two or more flags at once without overlapping using <a href="/c-programming/bitwise-operators#or" title="Bitwise OR operator in C programming">bitwise OR | operator</a>. This allows you to choose two or more flags at once. For example,</p>

<pre>
<code>{`#include &lt;stdio.h&gt;

enum designFlags {
BOLD = 1,
ITALICS = 2,
UNDERLINE = 4
};

int main() {
int myDesign = BOLD | UNDERLINE; 

//    00000001
//  | 00000100
//  ___________
//    00000101

printf("%d", myDesign);

return 0;
}
`}</code></pre>

<p><strong>Output</strong></p>

<pre>
<samp>5</samp></pre>

<p>When the output is 5, you always know that bold and underline is used.</p>

<p>Also, you can add flags according to your requirements.</p>

<pre>
if (myDesign &amp; ITALICS) {
// code for italics
}</pre>

<p>Here, we have added italics to our design. Note, only code for italics is written inside the <code>{`if`}</code> statement.</p>

<p>You can accomplish almost anything in C programming without using enumerations. However, they can be pretty handy in certain situations.</p>
</div>
      </div>
      <div className={`topic-description ${activeIndex === 38 ? 'active' : ''}`} id="topic-39">
          <h2>C Preprocessor and Macros</h2>
          <figcaption>Working of C Preprocessor</figcaption>


<p id="introduction">The C preprocessor is a macro preprocessor (allows you to define macros) that transforms your program before it is compiled. These transformations can be the inclusion of header files, macro expansions, etc.</p>

<p>All preprocessing directives begin with a <code>{`#`}</code> symbol. For example,</p>

<pre>
<code>{`#define PI 3.14`}</code></pre>

<p>Some of the common uses of C preprocessors are:</p>


<h2 id="header-files">Including Header Files: #include</h2>

<p>The <code>{`#include`}</code> preprocessor is used to include header files to C programs. For example,</p>

<pre>
<code>{`#include &lt;stdio.h&gt;`}</code></pre>

<p>Here, <code>{`stdio.h`}</code> is a header file. The <code>{`#include`}</code> preprocessor directive replaces the above line with the contents of <code>{`stdio.h`}</code> header file.</p>

<p>That's the reason why you need to use <code>{`#include &lt;stdio.h&gt;`}</code> before you can use functions like <code>{`scanf()`}</code> and <code>{`printf()`}</code>.</p>

<p>You can also create your own header file containing function declaration and include it in your program using this preprocessor directive.</p>

<pre>
<code>{`#include "my_header.h"`}</code></pre>

<p>Visit this page to learn more about <a href="https://gcc.gnu.org/onlinedocs/cpp/Header-Files.html#Header-Files" title="Include preprocessor">using header files</a>.</p>

<hr/>
<h2 id="macros">Macros using #define</h2>

<p>A macro is a fragment of code that is given a name. You can define a macro in C using the <code>{`#define`}</code> preprocessor directive.</p>

<p>Here's an example.</p>

<pre>
<code>{`#define c 299792458  // speed of light`}</code></pre>

/+<div class="clearfix"></div><p>Here, when we use <var>c</var> in our program, it is replaced with <code>{`299792458`}</code>.</p>

<hr/>
<h3 id="example-define">Example 1: #define preprocessor</h3>

<pre title="Source code to use #define.">
<code>{`#include &lt;stdio.h&gt;
#define PI 3.1415

int main()
{
float radius, area;
printf("Enter the radius: ");
scanf("%f", &amp;radius);

// Notice, the use of PI
area = PI*radius*radius;

printf("Area=%.2f",area);
return 0;
}`}</code></pre>

<hr/>
<h2>Function like Macros</h2>

<p>You can also define macros that work in a similar way as a function call. This is known as function-like macros. For example,</p>

<pre>
<code>{`#define circleArea(r) (3.1415*(r)*(r))`}</code></pre>

<p>Every time the program encounters <code>{`circleArea(argument)`}</code>, it is replaced by <code>{`(3.1415*(argument)*(argument))`}</code>.</p>

<p>Suppose, we passed 5 as an argument then, it expands as below:</p>

<pre>
<code>{`circleArea(5) expands to (3.1415*5*5)`}</code></pre>

<hr/>
<h3 id="example2-define">Example 2: Using #define preprocessor</h3>

<pre>
<code>{`#include &lt;stdio.h&gt;
#define PI 3.1415
#define circleArea(r) (PI*r*r)

int main() {
float radius, area;

printf("Enter the radius: ");
scanf("%f", &amp;radius);
area = circleArea(radius);
printf("Area = %.2f", area);

return 0;
}`}</code></pre>

<p>Visit this page to learn more about <a href="https://gcc.gnu.org/onlinedocs/cpp/Macros.html#Macros" title="C Macros">macros and #define preprocessor</a>.</p>

<hr/>
<h2 id="conditional">Conditional Compilation</h2>

<p>In C programming, you can instruct the preprocessor whether to include a block of code or not. To do so, conditional directives can be used.</p>

<p>It's similar to a <code>{`if`}</code> statement with one major difference.</p>

<p>The <code>{`if`}</code> statement is tested during the execution time to check whether a block of code should be executed or not whereas, the conditionals are used to include (or skip) a block of code in your program before execution.</p>

<hr/>
<h3>Uses of Conditional</h3>

<ul>
<li>use different code depending on the machine, operating system</li>
<li>compile the same source file in two different programs</li>
<li>to exclude certain code from the program but to keep it as a reference for future purposes</li>
</ul>

<hr/>
<h3>How to use conditional?</h3>

<p>To use conditional, <code>{`#ifdef`}</code>, <code>{`#if`}</code>, <code>{`#defined`}</code>, <code>{`#else`}</code> and <code>{`#elif`}</code> directives are used.</p>

<hr/>
<h3>#ifdef Directive</h3>

<pre>
<code>{`#ifdef MACRO     
// conditional codes
#endif`}</code>
</pre>

<p>Here, the conditional codes are included in the program only if <var>MACRO</var> is defined.</p>

<hr/>
<h3>#if, #elif and #else Directive</h3>

<pre>
<code>{`#if expression
// conditional codes
#endif`}</code>
</pre>

<p>Here, <var>expression</var> is an expression of integer type (can be integers, characters, arithmetic expression, macros, and so on).</p>

<p>The conditional codes are included in the program only if the <var>expression</var> is evaluated to a non-zero value.</p>

<p>The optional <code>{`#else`}</code> directive can be used with <code>{`#if`}</code> directive.</p>

<pre>
<code>{`#if expression
conditional codes if expression is non-zero
#else
conditional if expression is 0
#endif`}</code>
</pre>

<p>You can also add nested conditional to your <code>{`#if...#else`}</code> using <code>{`#elif`}</code></p>

<pre>
<code>{`#if expression
// conditional codes if expression is non-zero
#elif expression1
// conditional codes if expression is non-zero
#elif expression2
// conditional codes if expression is non-zero
#else
// conditional if all expressions are 0
#endif`}</code>
</pre>

<hr/>
<h3>#defined</h3>

<p>The special operator <var>#defined</var> is used to test whether a certain macro is defined or not. It's often used with <var>#if</var> directive.</p>

<pre>
<code>{`#if defined BUFFER_SIZE &amp;&amp; BUFFER_SIZE &gt;= 2048
// codes`}</code>
</pre>

<hr/>
<h2 id="predefined-macros">Predefined Macros</h2>

<p>Here are some predefined macros in C programming.</p>

<table border="1" cellpadding="1" cellspacing="1" summary="Predefined macros in C">
<thead>
<tr>
<th scope="col">Macro</th>
<th scope="col">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>{`__DATE__`}</code></td>
<td>A string containing the current date.</td>
</tr>
<tr class="cprotable">
<td><code>{`__FILE__`}</code></td>
<td>A string containing the file name.</td>
</tr>
<tr>
<td><code>{`__LINE__`}</code></td>
<td>An integer representing the current line number.</td>
</tr>
<tr class="cprotable">
<td><code>{`__STDC__`}</code></td>
<td>If follows ANSI standard C, then the value is a nonzero integer.</td>
</tr>
<tr>
<td><code>{`__TIME__`}</code></td>
<td>A string containing the current time.</td>
</tr>
</tbody>
</table>

<hr/>
<h3 id="example-current time">Example 3: Get current time using __TIME__</h3>

<p>The following program outputs the current time using <code>{`__TIME__`}</code> macro.</p>

<pre>
<code>{`#include &lt;stdio.h&gt;
int main()
{
printf("Current time: %s",__TIME__);   
}`}</code></pre>

<p><b>Output</b></p>

<pre>
<samp>Current time: 19:54:39</samp></pre>

<hr/>
<h3>Recommended Readings</h3>

<ul>
<li><a href="https://gcc.gnu.org/onlinedocs/cpp/Line-Control.html#Line-Control">Line control</a></li>
<li><a href="https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html#Pragmas">Pragmas</a></li>
<li><a href="https://gcc.gnu.org/onlinedocs/cpp/Preprocessor-Output.html#Preprocessor-Output">Preprocessor Output</a></li>
<li><a href="https://gcc.gnu.org/onlinedocs/cpp/Other-Directives.html#Other-Directives">Other directives</a></li>
</ul>
      </div>
      <div className={`topic-description ${activeIndex === 39 ? 'active' : ''}`} id="topic-40">
          <h2>C Standard Library Functions</h2>
<p id="introducton">C Standard library functions or simply C Library functions are inbuilt functions in C programming.</p>

<p>The prototype and data definitions of these functions are present in their respective header files. To use these functions we need to include the header file in our program. For example,</p>

<p>If you want to use the <code>{`printf()`}</code> function, the header file <code>{`&lt;stdio.h&gt;`}</code> should be included.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
int main()
{<stdio.h>
printf("Catch me if you can."); 
}
</stdio.h>`}</code></pre>

<p>If you try to use <code>{`printf()`}</code> without including the <code>{`stdio.h`}</code> header file, you will get an error.</p>

<hr/>
<h2 id="advantages">Advantages of Using C library functions</h2>

<p><strong>1. They work</strong></p>

<p>One of the most important reasons you should use library functions is simply because they work. These functions have gone through multiple rigorous testing and are easy to use.</p>

/+<div class="clearfix"></div><p><strong>2. The functions are optimized for performance</strong></p>

<p>Since, the functions are "standard library" functions, a dedicated group of developers constantly make them better. In the process, they are able to create the most efficient code optimized for maximum performance.</p>

<p><strong>3. It saves considerable development time</strong></p>

<p>Since the general functions like printing to a screen, calculating the square root, and many more are already written. You shouldn''t worry about creating them once again.</p>

<p><strong>4. The functions are portable</strong></p>

<p>With ever-changing real-world needs, your application is expected to work every time, everywhere. And, these library functions help you in that they do the same thing on every computer.</p>

<hr/>
<h2 id="sqrt">Example: Square root using sqrt() function</h2>

<p>Suppose, you want to find the square root of a number.</p>

<p>To compute the square root of a number, you can use the sqrt() library function. The function is defined in the <code>{`math.h`}</code> header file.</p>

<pre class="c-exec">
<code>{`#include &lt;stdio.h&gt;
#include &lt;math.h&gt;
int main()
{
float num, root;
printf("Enter a number: ");
scanf("%f", &amp;num);

// Computes the square root of num and stores in root.
root = sqrt(num);

printf("Square root of %.2f = %.2f", num, root);
return 0;
}`}</code></pre>

<p>When you run the program, the output will be:</p>

<pre>
<samp>Enter a number: 12
Square root of 12.00 = 3.46</samp></pre>

<hr/>
<h2 id="list">Library Functions in Different Header Files</h2>

<table summary="List of header files which contains different library functions in C programming.">
<thead>
<tr>
<th>C Header Files</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;assert.h&gt;</td>
<td>Program assertion functions</td>
</tr>
<tr>
<td><a href="/c-programming/library-function/ctype.h" title="&lt;ctype.h&gt; header file">&lt;ctype.h&gt;</a></td>
<td>Character type functions</td>
</tr>
<tr>
<td>&lt;locale.h&gt;</td>
<td>Localization functions</td>
</tr>
<tr>
<td><a href="/c-programming/library-function/math.h" title="&lt;math.h&gt; header file">&lt;math.h&gt;</a></td>
<td>Mathematics functions</td>
</tr>
<tr>
<td>&lt;setjmp.h&gt;</td>
<td>Jump functions</td>
</tr>
<tr>
<td>&lt;signal.h&gt;</td>
<td>Signal handling functions</td>
</tr>
<tr>
<td>&lt;stdarg.h&gt;</td>
<td>Variable arguments handling functions</td>
</tr>
<tr>
<td>&lt;stdio.h&gt;</td>
<td>Standard Input/Output functions</td>
</tr>
<tr>
<td>&lt;stdlib.h&gt;</td>
<td>Standard Utility functions</td>
</tr>
<tr>
<td><a href="/c-programming/library-function/string.h" title="C &lt;string.h&gt; header">&lt;string.h&gt;</a></td>
<td>String handling functions</td>
</tr>
<tr>
<td>&lt;time.h&gt;</td>
<td>Date time functions</td>
</tr>
</tbody>
</table>
      </div>
      <br/>
      </div>
      </div>
    );
};

export default CLanguagePage;