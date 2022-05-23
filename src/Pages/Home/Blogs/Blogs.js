import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs px-12 gap-5 grid text-white my-12">
      <div className="p-3 shadow-2xl rounded">
        <h1 className="text-3xl">
          1. How will you improve the performance of a React Application?
        </h1>
        <p className="text-md mt-5">
          Internally, React uses several clever techniques to minimize the
          number of costly DOM operations required to update the UI. For many
          applications, using React will lead to a fast user interface without
          doing much work to specifically optimize for performance.
          Nevertheless, there are several ways you can speed up your React
          application. such as:
          <li className="mt-2">
            Keeping component state local where necessary
          </li>
          <li className="mt-2">
            Memoizing React components to prevent unnecessary re-renders
          </li>
          <li className="mt-2">
            Code-splitting in React using dynamic import()
          </li>
          <li className="mt-2">Windowing or list virtualization in React</li>
          <li className="mt-2">Lazy loading images in React</li>
        </p>
      </div>
      <div className="p-3 shadow-2xl rounded">
        <h1 className="text-3xl">
          2. What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="text-md mt-5">
          The Four Kinds of React State to Manage When we talk about state in
          our applications, it’s important to be clear about what types of state
          actually matter. There are four main types of state you need to
          properly manage in your React apps:
          <li className="mt-2">1. Local state</li>
          <li className="mt-2">2. Global state</li>
          <li className="mt-2">3. Server state</li>
          <li className="mt-2">4. Server state</li>
        </p>
      </div>
      <div className="p-3 shadow-2xl rounded">
        <h1 className="text-3xl">3. How does prototypical inheritance work?</h1>
        <p className="text-md mt-5">
          Prototype-based programming is a style of object-oriented programming
          in which behaviour reuse (known as inheritance) is performed via a
          process of reusing existing objects that serve as prototypes. This
          model can also be known as prototypal, prototype-oriented, classless,
          or instance-based programming. JavaScript objects are dynamic "bags"
          of properties (referred to as own properties). JavaScript objects have
          a link to a prototype object. When trying to access a property of an
          object, the property will not only be sought on the object but on the
          prototype of the object, the prototype of the prototype, and so on
          until either a property with a matching name is found or the end of
          the prototype chain is reached.
        </p>
      </div>
      <div className="p-3 shadow-xl rounded">
        <h1 className="text-3xl">
          4. Why you do not set the state directly in React. For example, if you
          have const [produc2ts, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h1>
        <p className="text-md mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, unde
          maiores. Exercitationem id ab explicabo dolorem aut? Soluta, aliquid
          aperiam.
        </p>
      </div>
      <div className="p-3 shadow-xl rounded">
        <h1 className="text-3xl">
          5. You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p className="text-md mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, unde
          maiores. Exercitationem id ab explicabo dolorem aut? Soluta, aliquid
          aperiam.
        </p>
      </div>
      <div className="p-3 shadow-2xl rounded">
        <h1 className="text-3xl">
          6. What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-md mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, unde
          maiores. Exercitationem id ab explicabo dolorem aut? Soluta, aliquid
          aperiam.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
