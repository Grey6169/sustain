import './faq.css';
 
function FAQ() {
  return (
    <div className='faq'>
        <h1> Frequently Asked Questions</h1>

        <div className='question'>
            How do we ensure safety?
        </div>

        <div className='answer'>
            First, check to make sure that the place you're going to is 
            a real restaurant, grocery store, or other food provider. This will
            ensure that the food is kept to a high quality standard. 
        </div>

        <div className='question'>
            How can I help?
        </div>

        <div className='answer'>
            If you're a food supplier such as a restaurant or grocery store,
            you can list when you will have any food available and what you will have.
            If that doesn't work, please donate any money, food, or time to local 
            homeless shelters or pantries. 
        </div>

        <div className='question'>
            What causes food insecurity?
        </div>

        <div className='answer'>
            There are a lot of reasons that someone might end up being food insecure,
            from low paying jobs, to high bills, to medical debt, and more.
        </div>
    </div>
  );
}

export default FAQ;
