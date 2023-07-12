import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [head, setHead] = useState("Tally Counter");

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const setValue = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = parseInt(form.number.value);
    setCount(value);
    form.reset();
  };
  const setName = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.name.value;
    setHead(value);
    form.reset();
  };

  return (
    <section>
      <h1>Free Online Tally Counter</h1>
      <div className="count-bg">
        <img
          src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-addcounter.png"
          alt=""
          className="btn"
        />
      </div>

      <div className="counter-bg">
        <div className="count-btn">
          <div className="count-top">
            <p></p>
            <p className="count-text">{head}</p>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-closebtn.png"
                alt=""
                className="cross btn"
              />
            </div>
          </div>
          <div className="count-value">
            <p className="counting">{count}</p>
          </div>

          <div className="count-control">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smallsubtract.png"
                alt=""
                className="btn"
                onClick={decrease}
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smalladd.png"
                alt=""
                className="btn"
                onClick={increase}
              />
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smallreset.png"
                alt=""
                className="btn"
                onClick={reset}
              />
            </div>
            <div className="">
              <img
                src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smallstart.png"
                alt=""
                className="btn"
              />
              <form onSubmit={setValue} className="set-value">
                <input
                  type="number"
                  defaultValue={0}
                  name="number"
                  id=""
                  className="set-input"
                />
                <button>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smallsetbtn.png"
                    alt=""
                    className="set-btn btn"
                    type="submit"
                  />
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smallcountername.png"
                alt=""
                className="btn"
              />
              <form onSubmit={setName} className="set-value">
                <input type="text" name="name" id="" className="set-input" />
                <button>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0755/9852/8791/files/tcs-freecount-smallsetbtn.png"
                    alt=""
                    className="set-btn btn"
                    type="submit"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
