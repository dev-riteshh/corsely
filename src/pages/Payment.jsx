import React,{useState} from 'react'

const Payment = () => {

  const [formData, setFormData] = useState({
    businessName: "",
    contactPersonName: "",
    businessEmail: "",
    businessAddress: "",
    phoneNumber: "",
    paypalEmail: "",
    paymentCurrency: "",
    bankAccountInfo: "",
    taxInfo: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - validate and store the form data
    console.log(formData);
  };


  return (
    <div className='h-[80vh] overflow-hidden overflow-y-scroll rounded-lg '>
      <h1 className='text-2xl font-semibold py-5'>Payment Gateway</h1>



      <div className='flex gap-2 h-screen p-8 rounded-lg bg-white flex-col'>
        <form className='grid grid-cols-2 gap-5 justify-start' onSubmit={handleSubmit}>
          <label className='flex flex-col'>
            Business Name:
            <input
              className='p-2 outline-none rounded-md w-96 bg-slate-200'
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </label>
          {/* Add other form fields */}
          <label className='flex flex-col'>
            PayPal Email:
            <input
              className='p-2 outline-none rounded-md w-96 bg-slate-200'
              type="email"
              name="paypalEmail"
              value={formData.paypalEmail}
              onChange={handleChange}
              required
            />
          </label>
          <label className='flex flex-col'>
            Payment Currency:
            <input
              type="text"
              className='p-2 outline-none rounded-md w-96 bg-slate-200'
              name="paymentCurrency"
              value={formData.paymentCurrency}
              onChange={handleChange}
              required
            />
          </label>
          <label className='flex flex-col'>
            Bank Account Information:
            <textarea
              name="bankAccountInfo"
              className='p-2 outline-none rounded-md w-96 bg-slate-200'
              value={formData.bankAccountInfo}
              onChange={handleChange}
            />
          </label>
          <label className='flex flex-col'>
            Tax Information:
            <input
              type="text"
              name="taxInfo"
              className='p-2 outline-none rounded-md w-96 bg-slate-200'
              value={formData.taxInfo}
              onChange={handleChange}
            />
          </label>
          <label className='flex items-center gap-5'>
            <input
              className='h-5 w-5'
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              required
            />
            I agree to the terms and conditions.
          </label>
          <button className='p-2 bg-blue-600 text-white w-60 rounded-md' type="submit">Submit</button>
        </form>

        
      </div>
    </div>
  )
}

export default Payment