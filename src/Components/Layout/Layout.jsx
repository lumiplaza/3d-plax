import NavBar from "../NavBar";

export const Layout = ({ children }) => {
    return (
      <main>
        <NavBar />
            <section>
                {children}
            </section>
    </main>
  );
};