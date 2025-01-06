import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/BuyTicket.module.scss";
import Link from "next/link";

const BuyTickets = () => {
  const [groupTickets, setGroupTickets] = useState(1);

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_live_JCuO9eUag5dosL",
      amount: 6000 * 100, // Amount in paise
      currency: "INR",
      name: "Summit Tickets",
      description: "Individual Pass",
      handler: function (response: { razorpay_payment_id: string }) {
        setPaymentSuccess(true);
        setPaymentId(response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  const closePopup = () => {
    setPaymentSuccess(false);
    setPaymentId(null);
  };

  const calculateGroupPrice = () => {
    if (groupTickets >= 3 && groupTickets <= 5) {
      return 6000 * groupTickets * 0.9; // 10% discount
    } else if (groupTickets >= 6 && groupTickets <= 8) {
      return 6000 * groupTickets * 0.85; // 15% discount
    }
    return 6000 * groupTickets;
  };

  const handleGroupPayment = () => {
    const amount = calculateGroupPrice();

    const options = {
      key: "rzp_live_JCuO9eUag5dosL",
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Summit Tickets",
      description: `Group Pass - ${groupTickets} tickets`,
      handler: function (response: any) {
        alert(
          `Payment successful. Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "Event venue",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Buy Ticket(s)</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>
      <p className={styles.preRegisterContent}>
        For Pre Registration, fill the following details :
        <Link href="/pre-register" style={{ textDecoration: "none" }}>
          <button className={styles.PreRegistrationBtn}>Register</button>
        </Link>
      </p>
      <br />
      <br />
      <p className={styles.preRegisterContent}>
        For final Registration, kindly purchase the tickets
      </p>
      <br />
      <br />
      <div className={styles.earlyBirdHeader}>
        <div className={styles.earlyBirdHeader2}>
          <h2>Registration Fee</h2>
          <span>Open till 8th January 2025</span>
        </div>
        <div>
          <button className={styles.PreRegistrationBtn2}>New Year Offer</button>
        </div>
      </div>

      <div className={styles.ticketsContainer}>
        {/* Individual Pass */}
        <div className={styles.ticketSection}>
          <div className={styles.ticketImage}>
            <Image
              src="/individual-ticket.png"
              alt="Individual Pass Ticket"
              width={600}
              height={300}
              className={styles.ticketImg}
            />
          </div>
          <div className={styles.ticketDetails}>
            <div className={styles.passInfo}>
              <h3>Individual Pass</h3>
              {/* <p>All access, 3 days<br />
                Food access on all 3 days</p> */}
            </div>
            <div className={styles.passInfo}>
              <div className={styles.price}>Rs. 6,000 onwards</div>
              <button className={styles.buyButton} onClick={handlePayment}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* Group Pass */}
        <div className={styles.ticketSection}>
          <div className={styles.ticketImage}>
            <Image
              src="/group-ticket.png"
              alt="Group Pass Ticket"
              width={600}
              height={300}
              className={styles.ticketImg}
            />
          </div>
          <div className={styles.ticketDetails}>
            <div className={styles.passInfo}>
              <h3>Group Pass</h3>
              <p>
                10% on 3-5 Tickets bought
                <br />
                15% on 6-8 Tickets bought
              </p>
            </div>
            <div className={styles.passInfo}>
              <div className={styles.price}></div>
              <div className={styles.ticketQuantitySelector}>
                <button
                  onClick={() => setGroupTickets(Math.max(1, groupTickets - 1))}
                >
                  -
                </button>
                <input type="number" value={groupTickets} readOnly />
                <button
                  onClick={() => setGroupTickets(Math.min(8, groupTickets + 1))}
                >
                  +
                </button>
              </div>

              <button className={styles.buyButton} onClick={handleGroupPayment}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*} <div className={styles.divider}></div> */}

      {/*  <div className={styles.priceAlert}>
        <h2>Hurry! Prices will go up soon.</h2>
      </div>

      <section className={styles.otherPasses}>
         <div className={styles.passType}>
          <div className={styles.passInfo}>
            <h3>
              Regular Passes <span>1 Jan 2025 to 5 Jan 2025</span>
            </h3>
            <p>Group discounts reduce</p>
          </div>
          <div className={styles.price}>Rs. 7,000</div>
        </div> */}

      {/* <div className={styles.verticalDivider}></div> 

        <div className={styles.passType}>
          <div className={styles.passInfo}>
            <h3>
              Late Passes <span>Available from 5th Jan 2025</span>
            </h3>
            <p>No group discounts</p>
          </div>
          <div className={styles.price}>Rs. 8,000</div>
        </div>
      </section>*/}
      {paymentSuccess && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Payment Successful!</h2>
            <p>
              Thank you for registering for the Gen AI Summit 2025. We will be
              sending you your payment confirmation and registration ID shortly.
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyTickets;
