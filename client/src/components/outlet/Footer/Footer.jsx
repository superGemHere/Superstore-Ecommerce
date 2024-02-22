import "./footer.scss"

export default function Footer() {
  const copyright = String.fromCodePoint(0x00a9);

  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
            praesentium saepe impedit doloribus nemo rem beatae tempore incidunt
            placeat asperiores totam quod sapiente optio repudiandae corporis,
            natus eos magni.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
            praesentium saepe impedit doloribus nemo rem beatae tempore incidunt
            placeat asperiores totam quod sapiente optio repudiandae corporis,
            natus eos magni.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Superstore</span>
          <span className="copyright">
            {copyright} Copyright 2024. All rights reserved
          </span>
        </div>
        <div className="right" >
            <img src="../../../public/img/payment-methods.png" alt="payment pic" />
        </div>
      </div>
    </div>
  );
}
