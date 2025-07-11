export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Contato</h3>
        <p className="text-gray-700 mb-6">
          Entre em contato pelo email:{" "}
          <a
            href="mailto:seuemail@gmail.com"
            className="text-blue-500 hover:underline"
          >
            seuemail@gmail.com
          </a>
        </p>
        <a
          href="https://linkedin.com/in/seulinkedin"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
