import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const PaymentData = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    checkInputs();
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    checkInputs();
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    checkInputs();
  };

  const checkInputs = () => {
    if (firstName && phoneNumber && address) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const finishPayment = () => {
    clearCart();
    navigate("/paymentdone");
  };

  return (
    <form className="container mx-auto flex flex-col items-center justify-center gap-5 my-16">
      <h2 className="text-pri">Location</h2>
      <div className="w-5/12">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-lg text-pri font-bold"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={handleFirstNameChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
      </div>

      <div className="w-5/12">
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-lg text-pri font-bold"
          >
            Phone number
          </label>
          <input
            type="number"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
      </div>

      <div className="w-5/12">
        <div>
          <div>
            <label
              htmlFor="Adress"
              className="block mb-2 text-lg text-pri font-bold"
            >
              Address
            </label>
            <textarea
              id="Address"
              rows={4}
              value={address}
              onChange={handleAddressChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 resize-none"
              placeholder="Address"
              required
            />
          </div>
        </div>
      </div>
      <button
        className={`cursor-pointer [border:none] p-[11px] px-10 bg-darkorange flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-chocolate ${
          isButtonDisabled && "opacity-50 cursor-not-allowed"
        }`}
        onClick={finishPayment}
        disabled={isButtonDisabled}
      >
        <div className="relative text-9xl font-medium font-lato text-white">
          Confirm Payment
        </div>
      </button>
    </form>
  );
};

export default PaymentData;
