
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';
import customers from '../../../utils/customers';
  

const customersArr = customers;

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customersArr.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
