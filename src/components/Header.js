import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import "./../App.css";

export default function Header() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  const handleShow = (toggle) => {
    setShow(toggle);
  };

  return (
    <div>
      <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}
      >
        <Confetti
          recycle={show}
          numberOfPieces={1000}
          width="1080"
          height="732"
          class="flex justify-center items-center"
        />
      </div>
    </div>
  );
}
