import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailNext = () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    setStep(2);
  };

  return (
    <div className="subscribe-page">
      <div className="subscribe-box">

        {step === 1 && (
          <>
           <h2>Enter Your Email</h2>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button id="continue" onClick={handleEmailNext}>
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
           <h2>Select a Plan</h2>

            <div className="plans">
              <button onClick={() => setStep(3)}>Monthly - ₹99</button>
              <button onClick={() => setStep(3)}>Yearly - ₹999</button>
            </div>

            
          </>
        )}

        {step === 3 && (
          <>
           <h2>You're Almost There</h2>
            <p>Welcome, {email}</p>

            <button onClick={() => setStep(4)}>
              Complete Subscription
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>🎉 Thank You!</h2>
            <p>You have successfully subscribed.</p>
            <p>Enjoy unlimited access to premium news.</p>

            <button onClick={() => navigate("/")}>
              Go to Home
            </button>
          </>
        )}

       

      </div>
    </div>
  );
}