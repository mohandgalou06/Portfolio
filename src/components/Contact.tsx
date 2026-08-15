


const Contact = () => {
  return (
    <div className="w-full max-w-xl p-6" id='Contact'>
      <form
        action="https://formspree.io/f/mojggyya"
        method="POST"
        className="flex flex-col gap-4"
      >
        <label htmlFor="name">Nom</label>
        <input
          className="input input-bordered w-full"
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          className="input input-bordered w-full"
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="question">Questions et remarques</label>
        <textarea
          className="textarea textarea-bordered w-full"
          name="question"
          id="question"
          required
        />

        <button type="submit" className="btn btn-accent">
          SOUMETTRE
        </button>
      </form>
    </div>
  );
};

export default Contact; 

