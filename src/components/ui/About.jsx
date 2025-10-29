function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About NeWorld</h1>
      <p className="about-paragraph">
        NeWorld helps you explore countries around the world with quick search,
        region filters, and detailed views including languages, currencies, and more.
      </p>
      <p className="about-paragraph">
        This project is built with React and the REST Countries API. It focuses
        on clean UI, performance (by requesting only the fields we need), and a
        smooth UX.
      </p>
      <p className="about-paragraph">
        Future improvements: better animations, map visualizations, and
        bookmarking your favorite countries.
      </p>
    </section>
  );
}

export { About };
