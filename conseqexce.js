   function UncontrolledForm() {
     // Create a ref using useRef
     const textareaRef = useRef(null);

     // Handler for form submission
     const handleSubmit = (event) => {
       event.preventDefault();
       // Access the current value of the textarea using the ref
       const textValue = textareaRef.current.value;
       console.log('Textarea value:', textValue);
     };

     return (
       <form onSubmit={handleSubmit}>
         <label>
           Enter your text:
           {/* Assign the ref to the textarea */}
           <textarea ref={textareaRef} />
         </label>
         <button type="submit">Submit</button>
       </form>
     );
   }

   export default UncontrolledForm;
   